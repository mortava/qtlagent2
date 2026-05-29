import { useRef } from 'react'
import { ArrowUp, ArrowUpRight } from 'lucide-react'
import FinnMark from './FinnMark'

interface WelcomeScreenProps {
  onPromptClick: (prompt: string) => void
  inputValue: string
  onInputChange: (value: string) => void
  onSend: () => void
}

const starters: { title: string; sub: string; prompt: string }[] = [
  { title: 'DSCR loan requirements', sub: 'Investor cash-flow qualifying & ratios', prompt: 'What are the DSCR loan requirements and minimum ratios?' },
  { title: 'Foreign National LTV limits', sub: 'Max leverage & documentation needed', prompt: 'What are the Foreign National LTV limits and documentation requirements?' },
  { title: 'Bank statement program', sub: '12 vs 24 months, income calc', prompt: 'Explain the bank statement program — months required and how income is calculated.' },
  { title: 'Cash-out refinance', sub: 'Guidelines, seasoning & limits', prompt: 'What are the cash-out refinance guidelines, seasoning, and LTV limits?' },
]

export default function WelcomeScreen({
  onPromptClick,
  inputValue,
  onInputChange,
  onSend,
}: WelcomeScreenProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (inputValue.trim()) onSend()
    }
  }

  const adjustHeight = () => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = '0'
    el.style.height = Math.max(40, Math.min(el.scrollHeight, 160)) + 'px'
  }

  const hasText = inputValue.trim().length > 0

  return (
    <div className="flex-1 overflow-y-auto chat-scroll" style={{ background: 'var(--canvas)' }}>
      <div
        className="mx-auto flex flex-col justify-center"
        style={{
          minHeight: '100%',
          maxWidth: '640px',
          padding: '40px 24px max(40px, env(safe-area-inset-bottom))',
        }}
      >
        {/* Greeting */}
        <div className="fade-up flex flex-col items-center text-center" style={{ marginBottom: '30px' }}>
          <div style={{ marginBottom: '20px' }}>
            <FinnMark size={56} radius={18} />
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 6vw, 38px)',
              fontWeight: 600,
              color: 'var(--ink)',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            How can I help you today?
          </h1>
          <p
            style={{
              marginTop: '12px',
              fontSize: '15px',
              color: 'var(--ink-2)',
              maxWidth: '420px',
              lineHeight: 1.55,
            }}
          >
            Your Total Quality Lending wholesale assistant — ask about guidelines,
            programs, and scenarios.
          </p>
        </div>

        {/* Input */}
        <div className="fade-up" style={{ width: '100%', animationDelay: '0.06s' }}>
          <div className="flex items-end llm-bubble" style={{ gap: '8px' }}>
            <textarea
              ref={textareaRef}
              value={inputValue}
              onChange={(e) => { onInputChange(e.target.value); adjustHeight() }}
              onKeyDown={handleKeyDown}
              placeholder="Ask FINN anything about TQL loan products…"
              className="flex-1 bg-transparent outline-none resize-none"
              style={{
                fontSize: '15.5px', lineHeight: '1.55', color: 'var(--ink)',
                fontFamily: 'var(--font-sans)', height: '40px', maxHeight: '160px', padding: '8px 0',
              }}
            />
            <button
              onClick={onSend}
              disabled={!hasText}
              className={`send-btn ${hasText ? 'is-active' : 'is-idle'}`}
              aria-label="Send message"
            >
              <ArrowUp size={18} strokeWidth={2.2} />
            </button>
          </div>
        </div>

        {/* Starter cards */}
        <div className="fade-up starter-grid" style={{ marginTop: '18px', animationDelay: '0.12s' }}>
          {starters.map((s) => (
            <button key={s.title} className="starter-card" onClick={() => onPromptClick(s.prompt)}>
              <ArrowUpRight size={15} className="starter-card__arrow" />
              <span className="starter-card__title">{s.title}</span>
              <span className="starter-card__sub">{s.sub}</span>
            </button>
          ))}
        </div>

        <p style={{ marginTop: '22px', textAlign: 'center', fontSize: '11.5px', color: 'var(--ink-4)', lineHeight: 1.5 }}>
          FINN is an AI assistant. Verify important guideline details with your TQL Account Executive.
        </p>
      </div>
    </div>
  )
}
