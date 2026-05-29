import { useState, useEffect } from 'react'
import {
  Plus, MessageSquare, Trash2, PanelLeftClose,
  ChevronDown, ChevronRight, ArrowUpRight, Sun, Monitor, Moon,
} from 'lucide-react'
import type { Conversation } from '../lib/store'
import type { Theme } from '../App'
import FinnMark from './FinnMark'

interface SidebarProps {
  conversations: Conversation[]
  activeId: string | null
  isOpen: boolean
  theme: Theme
  onSetTheme: (t: Theme) => void
  onToggle: () => void
  onNewChat: () => void
  onSelectConversation: (id: string) => void
  onDeleteConversation: (id: string) => void
}

const quickLinks = [
  { label: 'AI Bank Statement Review', url: 'https://veriqualv1.qualr.com/auth' },
  { label: 'Price a Loan', url: 'https://ob-pricing-app-1094393703267.us-central1.run.app/' },
  { label: 'Submit Loan Now', url: 'https://broker-frontend-1094393703267.us-central1.run.app/' },
  { label: 'Order Appraisal', url: 'https://tqlpartner.totalqualitylending.com/' },
  { label: 'Get Approved Today', url: 'https://tqlpartner.totalqualitylending.com/forms#broker-application' },
  { label: 'Get Help', url: 'https://tqlpartner.totalqualitylending.com' },
]

const themeOptions: { value: Theme; icon: typeof Sun; label: string }[] = [
  { value: 'light', icon: Sun, label: 'Light' },
  { value: 'system', icon: Monitor, label: 'System' },
  { value: 'dark', icon: Moon, label: 'Dark' },
]

export default function Sidebar({
  conversations,
  activeId,
  isOpen,
  theme,
  onSetTheme,
  onToggle,
  onNewChat,
  onSelectConversation,
  onDeleteConversation,
}: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && window.innerWidth < 768) onToggle()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onToggle])

  const formatDate = (ts: number) => {
    const d = new Date(ts)
    const now = new Date()
    if (d.toDateString() === now.toDateString()) return 'Today'
    const yesterday = new Date(now)
    yesterday.setDate(yesterday.getDate() - 1)
    if (d.toDateString() === yesterday.toDateString()) return 'Yesterday'
    const weekAgo = new Date(now)
    weekAgo.setDate(weekAgo.getDate() - 7)
    if (d >= weekAgo) return 'Previous 7 Days'
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  const grouped: Record<string, Conversation[]> = {}
  const sorted = [...conversations].sort((a, b) => b.updatedAt - a.updatedAt)
  for (const c of sorted) {
    const label = formatDate(c.updatedAt)
    if (!grouped[label]) grouped[label] = []
    grouped[label].push(c)
  }

  const isSectionExpanded = (label: string) =>
    label in expandedSections ? expandedSections[label] : label === 'Today'

  const toggleSection = (label: string) =>
    setExpandedSections((prev) => ({ ...prev, [label]: !isSectionExpanded(label) }))

  if (!isOpen) return null

  return (
    <>
      {/* Mobile backdrop */}
      <div
        className="fixed inset-0 z-40 md:hidden"
        style={{ background: 'rgba(20,18,12,0.4)', backdropFilter: 'blur(3px)' }}
        onClick={onToggle}
      />

      <aside
        className="w-[284px] h-full flex flex-col shrink-0 z-50 fixed md:relative"
        style={{
          backgroundColor: 'var(--surface)',
          borderRight: '1px solid var(--border)',
        }}
      >
        {/* Brand row */}
        <div className="flex items-center justify-between" style={{ padding: '14px 14px 10px' }}>
          <div className="flex items-center gap-2.5">
            <FinnMark size={30} />
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '24px',
                fontWeight: 600,
                color: 'var(--ink)',
                letterSpacing: '-0.01em',
                lineHeight: 1,
              }}
            >
              FINN
            </span>
          </div>
          <button
            onClick={onToggle}
            className="flex items-center justify-center cursor-pointer"
            style={{
              width: '32px', height: '32px', borderRadius: 'var(--radius-sm)',
              color: 'var(--ink-3)', background: 'transparent', border: 'none',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--sidebar-hover)'; e.currentTarget.style.color = 'var(--ink)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink-3)' }}
            aria-label="Close sidebar"
          >
            <PanelLeftClose size={17} />
          </button>
        </div>

        {/* New chat */}
        <div style={{ padding: '0 12px 8px' }}>
          <button
            onClick={onNewChat}
            className="w-full flex items-center cursor-pointer"
            style={{
              height: '42px', padding: '0 14px',
              background: 'var(--accent)', border: 'none',
              borderRadius: 'var(--radius-md)', color: '#fff',
              fontSize: '14px', fontWeight: 550, gap: '9px',
              boxShadow: 'var(--shadow-sm)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-hover)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--accent)' }}
          >
            <Plus size={16} strokeWidth={2.4} />
            New chat
          </button>
        </div>

        {/* History */}
        <div className="flex-1 overflow-y-auto chat-scroll" style={{ padding: '4px 0' }}>
          {sorted.length === 0 && (
            <p style={{ fontSize: '12.5px', color: 'var(--ink-3)', padding: '10px 18px', lineHeight: 1.5 }}>
              Your conversations will appear here.
            </p>
          )}
          {Object.entries(grouped).map(([dateLabel, convos]) => {
            const expanded = isSectionExpanded(dateLabel)
            return (
              <div key={dateLabel} style={{ marginBottom: '2px' }}>
                <button
                  onClick={() => toggleSection(dateLabel)}
                  className="w-full flex items-center cursor-pointer"
                  style={{
                    fontSize: '11px', fontWeight: 600, textTransform: 'uppercase',
                    letterSpacing: '0.06em', color: 'var(--ink-3)',
                    padding: '8px 16px 5px 14px', background: 'transparent',
                    border: 'none', gap: '5px',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--ink)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-3)' }}
                >
                  {expanded ? <ChevronDown size={12} style={{ opacity: 0.7 }} /> : <ChevronRight size={12} style={{ opacity: 0.7 }} />}
                  {dateLabel}
                  <span style={{ fontSize: '10px', fontWeight: 400, opacity: 0.6, marginLeft: '2px' }}>
                    {convos.length}
                  </span>
                </button>
                {expanded && convos.map((c) => {
                  const isActive = c.id === activeId
                  return (
                    <div
                      key={c.id}
                      className="group flex items-center cursor-pointer"
                      style={{
                        padding: '8px 10px', margin: '1px 8px',
                        borderRadius: 'var(--radius-sm)', fontSize: '13.5px',
                        color: isActive ? 'var(--ink)' : 'var(--ink-2)',
                        background: isActive ? 'var(--sidebar-active)' : 'transparent',
                        fontWeight: isActive ? 500 : 450,
                      }}
                      onClick={() => onSelectConversation(c.id)}
                      onMouseEnter={(e) => { if (!isActive) { e.currentTarget.style.background = 'var(--sidebar-hover)'; e.currentTarget.style.color = 'var(--ink)' } }}
                      onMouseLeave={(e) => { if (!isActive) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink-2)' } }}
                    >
                      <MessageSquare size={14} className="shrink-0" style={{ color: isActive ? 'var(--accent)' : 'var(--ink-4)', marginRight: '9px' }} />
                      <span className="flex-1 truncate">{c.title}</span>
                      <button
                        onClick={(e) => { e.stopPropagation(); onDeleteConversation(c.id) }}
                        className="opacity-0 group-hover:opacity-100 flex items-center justify-center cursor-pointer"
                        style={{ padding: '4px', borderRadius: 'var(--radius-xs)', color: 'var(--ink-3)', background: 'transparent', border: 'none' }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = '#d9534f' }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-3)' }}
                        aria-label="Delete conversation"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>

        {/* Quick links */}
        <div className="quick-links-container">
          <div className="quick-links-title">Broker Tools</div>
          {quickLinks.map((link) => (
            <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="quick-link">
              <ArrowUpRight size={15} />
              {link.label}
            </a>
          ))}
        </div>

        {/* Footer: theme + attribution */}
        <div style={{ borderTop: '1px solid var(--border)', padding: '10px 12px 12px' }}>
          <div className="flex items-center justify-between" style={{ marginBottom: '10px' }}>
            <span style={{ fontSize: '10.5px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--ink-3)' }}>
              Theme
            </span>
            <div className="theme-seg" role="group" aria-label="Theme">
              {themeOptions.map(({ value, icon: Icon, label }) => (
                <button
                  key={value}
                  className={theme === value ? 'active' : ''}
                  onClick={() => onSetTheme(value)}
                  title={label}
                  aria-label={label}
                  aria-pressed={theme === value}
                >
                  <Icon size={14} />
                </button>
              ))}
            </div>
          </div>
          <div style={{ fontSize: '10.5px', color: 'var(--ink-3)', lineHeight: 1.5 }}>
            Total Quality Lending · NMLS #1933377
          </div>
        </div>
      </aside>
    </>
  )
}
