import { Copy, Check } from 'lucide-react'
import { useState } from 'react'
import type { Message } from '../lib/store'
import MarkdownRenderer from './MarkdownRenderer'
import FinnMark from './FinnMark'

interface ChatMessageProps {
  message: Message
  isStreaming?: boolean
}

export default function ChatMessage({ message, isStreaming }: ChatMessageProps) {
  const [copied, setCopied] = useState(false)
  const [hovered, setHovered] = useState(false)
  const isUser = message.role === 'user'

  const handleCopy = async () => {
    await navigator.clipboard.writeText(message.content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (isUser) {
    return (
      <div className="flex justify-end message-enter" style={{ marginBottom: '22px' }}>
        <div
          style={{
            maxWidth: '80%',
            background: 'var(--chat-user-bg)',
            color: 'var(--chat-user-text)',
            borderRadius: '20px 20px 6px 20px',
            padding: '11px 16px',
            fontSize: '15.5px',
            lineHeight: '1.55',
            letterSpacing: '-0.003em',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
          }}
        >
          {message.content}
        </div>
      </div>
    )
  }

  // Thinking / loading state
  if (isStreaming && !message.content) {
    return (
      <div className="flex items-start message-enter" style={{ gap: '12px', marginBottom: '26px' }}>
        <FinnMark size={30} />
        <div className="flex items-center" style={{ gap: '5px', height: '30px', paddingLeft: '2px' }}>
          <div className="typing-dot" />
          <div className="typing-dot" />
          <div className="typing-dot" />
        </div>
      </div>
    )
  }

  return (
    <div
      className="flex items-start message-enter"
      style={{ gap: '12px', marginBottom: '26px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <FinnMark size={30} />

      <div className="flex-1 min-w-0" style={{ maxWidth: 'calc(100% - 42px)' }}>
        <div
          style={{
            fontSize: '12px', fontWeight: 600, color: 'var(--ink-3)',
            letterSpacing: '0.01em', marginBottom: '5px', marginTop: '6px',
          }}
        >
          FINN
        </div>
        <MarkdownRenderer content={message.content} isStreaming={isStreaming} />

        {!isStreaming && message.content && (
          <div
            style={{
              marginTop: '8px',
              opacity: hovered ? 1 : 0,
              transition: 'opacity 0.2s ease',
            }}
          >
            <button
              onClick={handleCopy}
              className="flex items-center justify-center cursor-pointer"
              style={{
                gap: '5px', height: '28px', padding: '0 9px',
                borderRadius: 'var(--radius-sm)',
                background: 'transparent', border: '1px solid var(--border)',
                color: copied ? 'var(--accent)' : 'var(--ink-3)',
                fontSize: '12px', fontWeight: 500,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--bg-hover)'; if (!copied) e.currentTarget.style.color = 'var(--ink)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; if (!copied) e.currentTarget.style.color = 'var(--ink-3)' }}
              title="Copy message"
            >
              {copied ? <Check size={13} /> : <Copy size={13} />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
