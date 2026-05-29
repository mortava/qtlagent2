import { useState, useEffect, useRef } from 'react'
import { Menu, PenLine } from 'lucide-react'
import Sidebar from './components/Sidebar'
import WelcomeScreen from './components/WelcomeScreen'
import ChatMessage from './components/ChatMessage'
import ChatInput from './components/ChatInput'
import FinnMark from './components/FinnMark'
import {
  type Conversation,
  loadConversations,
  saveConversations,
  createConversation,
  createMessage,
  generateTitle,
} from './lib/store'
import { streamChat } from './lib/api'

export type Theme = 'light' | 'system' | 'dark'

function getInitialTheme(): Theme {
  const stored = localStorage.getItem('q-theme')
  if (stored === 'light' || stored === 'dark' || stored === 'system') return stored
  return 'system'
}

function applyTheme(theme: Theme) {
  const root = document.documentElement
  if (theme === 'light') root.setAttribute('data-theme', 'light')
  else if (theme === 'dark') root.setAttribute('data-theme', 'dark')
  else root.removeAttribute('data-theme')
}

export default function App() {
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [activeId, setActiveId] = useState<string | null>(null)
  const [input, setInput] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  const abortRef = useRef<AbortController | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const streamContentRef = useRef('')

  const activeConversation = conversations.find((c) => c.id === activeId) || null
  const hasMessages = !!activeConversation && activeConversation.messages.length > 0

  useEffect(() => {
    applyTheme(theme)
    localStorage.setItem('q-theme', theme)
  }, [theme])

  useEffect(() => {
    setConversations(loadConversations())
  }, [])

  useEffect(() => {
    if (conversations.length > 0) saveConversations(conversations)
  }, [conversations])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [activeConversation?.messages])

  // Sidebar defaults: open on desktop, closed on mobile
  useEffect(() => {
    const handleResize = () => setSidebarOpen(window.innerWidth >= 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNewChat = () => {
    const newConvo = createConversation()
    setConversations((prev) => [newConvo, ...prev])
    setActiveId(newConvo.id)
    setInput('')
    if (window.innerWidth < 768) setSidebarOpen(false)
  }

  const handleSend = async (overrideText?: string) => {
    const text = (overrideText || input).trim()
    if (!text || isStreaming) return

    let convoId = activeId
    let currentConversations = conversations

    if (!convoId) {
      const newConvo = createConversation()
      newConvo.title = generateTitle(text)
      currentConversations = [newConvo, ...conversations]
      setConversations(currentConversations)
      convoId = newConvo.id
      setActiveId(convoId)
    }

    const userMsg = createMessage('user', text)
    const assistantMsg = createMessage('assistant', '')

    const targetId = convoId
    setConversations((prev) =>
      prev.map((c) => {
        if (c.id !== targetId) return c
        const updated = {
          ...c,
          messages: [...c.messages, userMsg, assistantMsg],
          updatedAt: Date.now(),
        }
        if (c.messages.length === 0) updated.title = generateTitle(text)
        return updated
      })
    )

    setInput('')
    setIsStreaming(true)
    streamContentRef.current = ''

    const abort = new AbortController()
    abortRef.current = abort

    const convo = currentConversations.find((c) => c.id === targetId)
    const allMessages = [...(convo?.messages || []), userMsg]

    await streamChat(
      allMessages,
      (chunk) => {
        streamContentRef.current += chunk
        const content = streamContentRef.current
        setConversations((prev) =>
          prev.map((c) => {
            if (c.id !== targetId) return c
            const msgs = [...c.messages]
            const lastMsg = msgs[msgs.length - 1]
            if (lastMsg && lastMsg.role === 'assistant') {
              msgs[msgs.length - 1] = { ...lastMsg, content }
            }
            return { ...c, messages: msgs, updatedAt: Date.now() }
          })
        )
      },
      () => {
        setIsStreaming(false)
        abortRef.current = null
      },
      (error) => {
        console.error('Stream error:', error)
        const errorContent =
          streamContentRef.current ||
          'Sorry, I encountered an error. Please try again or contact TQL at (800) 304-1925.'
        setConversations((prev) =>
          prev.map((c) => {
            if (c.id !== targetId) return c
            const msgs = [...c.messages]
            const lastMsg = msgs[msgs.length - 1]
            if (lastMsg && lastMsg.role === 'assistant') {
              msgs[msgs.length - 1] = { ...lastMsg, content: errorContent }
            }
            return { ...c, messages: msgs }
          })
        )
        setIsStreaming(false)
        abortRef.current = null
      },
      abort.signal
    )
  }

  const handleStop = () => {
    abortRef.current?.abort()
    setIsStreaming(false)
    abortRef.current = null
  }

  const handleDeleteConversation = (id: string) => {
    setConversations((prev) => prev.filter((c) => c.id !== id))
    if (activeId === id) setActiveId(null)
  }

  return (
    <div className="app-shell flex" style={{ background: 'var(--canvas)' }}>
      <Sidebar
        conversations={conversations}
        activeId={activeId}
        isOpen={sidebarOpen}
        theme={theme}
        onSetTheme={setTheme}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        onNewChat={handleNewChat}
        onSelectConversation={(id) => {
          setActiveId(id)
          if (window.innerWidth < 768) setSidebarOpen(false)
        }}
        onDeleteConversation={handleDeleteConversation}
      />

      <div className="flex-1 flex flex-col min-w-0" style={{ height: '100%' }}>
        {/* Header */}
        <header
          className="flex items-center shrink-0 mobile-header"
          style={{
            height: '56px',
            padding: '0 16px',
            background: 'var(--glass)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderBottom: '1px solid var(--border)',
            position: 'relative',
            zIndex: 30,
          }}
        >
          {!sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(true)}
              className="flex items-center justify-center cursor-pointer shrink-0"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--ink-2)',
                background: 'transparent',
                border: 'none',
                marginRight: '6px',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--bg-hover)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
              aria-label="Open sidebar"
            >
              <Menu size={19} />
            </button>
          )}

          <div className="flex items-center gap-2 min-w-0 flex-1">
            {!sidebarOpen && <FinnMark size={26} />}
            <span
              className="truncate"
              style={{
                fontSize: '15px',
                fontWeight: 500,
                color: 'var(--ink-2)',
                letterSpacing: '-0.01em',
              }}
            >
              {hasMessages && activeConversation?.title && activeConversation.title !== 'New Chat'
                ? activeConversation.title
                : 'FINN'}
            </span>
          </div>

          {/* New chat — quick access */}
          <button
            onClick={handleNewChat}
            className="flex items-center justify-center cursor-pointer shrink-0"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--ink-2)',
              background: 'transparent',
              border: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--bg-hover)'
              e.currentTarget.style.color = 'var(--accent)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = 'var(--ink-2)'
            }}
            aria-label="New chat"
            title="New chat"
          >
            <PenLine size={18} />
          </button>
        </header>

        {/* Chat area */}
        {!hasMessages ? (
          <WelcomeScreen
            onPromptClick={(p) => handleSend(p)}
            inputValue={input}
            onInputChange={setInput}
            onSend={() => handleSend()}
          />
        ) : (
          <>
            <div
              className="flex-1 overflow-y-auto chat-scroll"
              style={{ background: 'var(--canvas)', scrollBehavior: 'smooth' }}
            >
              <div
                className="mx-auto chat-messages-container"
                style={{ maxWidth: '760px', padding: '36px 28px 28px' }}
              >
                {activeConversation!.messages.map((msg, i) => (
                  <ChatMessage
                    key={msg.id}
                    message={msg}
                    isStreaming={
                      isStreaming &&
                      i === activeConversation!.messages.length - 1 &&
                      msg.role === 'assistant'
                    }
                  />
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>

            <ChatInput
              value={input}
              onChange={setInput}
              onSend={() => handleSend()}
              onStop={handleStop}
              isStreaming={isStreaming}
              disabled={false}
            />
          </>
        )}
      </div>
    </div>
  )
}
