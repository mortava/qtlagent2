import { ArrowUp, Square } from 'lucide-react'
import { useRef, useEffect, type KeyboardEvent } from 'react'

interface ChatInputProps {
  value: string
  onChange: (value: string) => void
  onSend: () => void
  onStop: () => void
  isStreaming: boolean
  disabled: boolean
}

export default function ChatInput({
  value,
  onChange,
  onSend,
  onStop,
  isStreaming,
  disabled,
}: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (!isStreaming && textareaRef.current && window.innerWidth >= 768) {
      textareaRef.current.focus()
    }
  }, [isStreaming])

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (isStreaming) return
      if (value.trim()) onSend()
    }
  }

  const adjustHeight = () => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = '0'
    el.style.height = Math.max(40, Math.min(el.scrollHeight, 180)) + 'px'
  }

  const hasText = value.trim().length > 0

  return (
    <div
      className="shrink-0 relative chat-input-wrapper"
      style={{
        background: 'linear-gradient(to top, var(--canvas) 55%, transparent)',
        padding: '12px 24px 18px',
      }}
    >
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <div className="flex items-end llm-bubble" style={{ gap: '8px' }}>
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => { onChange(e.target.value); adjustHeight() }}
            onKeyDown={handleKeyDown}
            placeholder="Message FINN…"
            disabled={disabled}
            className="flex-1 bg-transparent outline-none resize-none"
            style={{
              fontSize: '15.5px', lineHeight: '1.55', color: 'var(--ink)',
              fontFamily: 'var(--font-sans)', height: '40px', maxHeight: '180px', padding: '8px 0',
            }}
          />
          {isStreaming ? (
            <button onClick={onStop} className="send-btn is-stop" aria-label="Stop generating" title="Stop">
              <Square size={14} fill="currentColor" />
            </button>
          ) : (
            <button
              onClick={onSend}
              disabled={!hasText || disabled}
              className={`send-btn ${hasText ? 'is-active' : 'is-idle'}`}
              aria-label="Send message"
              title="Send"
            >
              <ArrowUp size={18} strokeWidth={2.2} />
            </button>
          )}
        </div>
        <p className="text-center" style={{ marginTop: '9px', fontSize: '11px', color: 'var(--ink-4)' }}>
          FINN can make mistakes. Verify guideline details with your TQL Account Executive.
        </p>
      </div>
    </div>
  )
}
