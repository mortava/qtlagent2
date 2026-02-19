import { useState } from 'react'
import { Plus, MessageSquare, Trash2, ChevronLeft, ChevronDown, ChevronRight, ExternalLink } from 'lucide-react'
import { useEffect } from 'react'
import type { Conversation } from '../lib/store'

interface SidebarProps {
  conversations: Conversation[]
  activeId: string | null
  isOpen: boolean
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
  { label: 'GET HELP', url: 'https://tqlpartner.totalqualitylending.com' },
]

export default function Sidebar({
  conversations,
  activeId,
  isOpen,
  onToggle,
  onNewChat,
  onSelectConversation,
  onDeleteConversation,
}: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})

  // Close sidebar on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onToggle()
      }
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

  // Default "Today" to expanded, others collapsed
  const isSectionExpanded = (label: string) => {
    if (label in expandedSections) return expandedSections[label]
    return label === 'Today'
  }

  const toggleSection = (label: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [label]: !isSectionExpanded(label),
    }))
  }

  if (!isOpen) return null

  return (
    <>
      {/* Mobile backdrop */}
      <div
        className="fixed inset-0 z-40 md:hidden"
        style={{ background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(4px)' }}
        onClick={onToggle}
      />

      <div
        className="w-[280px] h-full flex flex-col shrink-0 z-50 fixed md:relative"
        style={{
          backgroundColor: 'var(--sidebar-bg)',
          borderRight: '1px solid var(--sidebar-divider)',
          willChange: 'transform',
        }}
      >
        {/* Header — close button */}
        <div
          className="flex items-center justify-between"
          style={{ padding: '8px 16px 0' }}
        >
          <div />
          <button
            onClick={onToggle}
            className="flex items-center justify-center cursor-pointer"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--sidebar-text)',
              background: 'transparent',
              border: 'none',
              transition: 'background 0.15s, color 0.15s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--sidebar-hover)'
              e.currentTarget.style.color = 'var(--foreground)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = 'var(--sidebar-text)'
            }}
            title="Close sidebar"
          >
            <ChevronLeft size={16} />
          </button>
        </div>

        {/* FIT Branding + Tagline — tighter spacing */}
        <div style={{ padding: '2px 16px 8px', textAlign: 'center' }}>
          <span
            style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: '28px',
              fontWeight: 700,
              color: 'var(--foreground)',
              letterSpacing: '0.04em',
              display: 'block',
              lineHeight: 1.1,
            }}
          >
            FIT
          </span>
          <span
            style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: '11px',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              letterSpacing: '0.02em',
              display: 'block',
              marginTop: '2px',
            }}
          >
            Faith. Integrity. Thrive.
          </span>
        </div>

        {/* New Chat Button */}
        <div style={{ padding: '0 12px', marginBottom: '8px' }}>
          <button
            onClick={onNewChat}
            className="w-full flex items-center justify-center cursor-pointer"
            style={{
              height: '38px',
              background: 'transparent',
              border: '1px solid var(--sidebar-divider)',
              borderRadius: 'var(--radius-md)',
              color: 'var(--foreground)',
              fontFamily: 'var(--font-poppins)',
              fontSize: '14px',
              fontWeight: 500,
              gap: '8px',
              transition: 'background 0.15s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--sidebar-hover)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
            }}
          >
            <Plus size={14} />
            Start a Fresh Qual +
          </button>
        </div>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            background: 'var(--sidebar-divider)',
            margin: '0 12px 4px 12px',
          }}
        />

        {/* Chat History — collapsible sections */}
        <div className="flex-1 overflow-y-auto chat-scroll">
          {Object.entries(grouped).map(([dateLabel, convos]) => {
            const expanded = isSectionExpanded(dateLabel)
            return (
              <div key={dateLabel}>
                <button
                  onClick={() => toggleSection(dateLabel)}
                  className="w-full flex items-center cursor-pointer"
                  style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--sidebar-text)',
                    padding: '6px 16px 4px 12px',
                    background: 'transparent',
                    border: 'none',
                    gap: '4px',
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--foreground)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--sidebar-text)'
                  }}
                >
                  {expanded ? (
                    <ChevronDown size={12} style={{ opacity: 0.6 }} />
                  ) : (
                    <ChevronRight size={12} style={{ opacity: 0.6 }} />
                  )}
                  {dateLabel}
                  <span
                    style={{
                      fontSize: '10px',
                      fontWeight: 400,
                      opacity: 0.5,
                      marginLeft: '4px',
                    }}
                  >
                    ({convos.length})
                  </span>
                </button>
                {expanded &&
                  convos.map((c) => {
                    const isActive = c.id === activeId
                    return (
                      <div
                        key={c.id}
                        className="group flex items-center cursor-pointer"
                        style={{
                          padding: '7px 12px',
                          margin: '1px 8px',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: '13px',
                          color: isActive ? 'var(--foreground)' : 'var(--sidebar-text-hover)',
                          background: isActive ? 'var(--sidebar-active)' : 'transparent',
                          fontWeight: isActive ? 500 : 400,
                          transition: 'background 0.15s, color 0.15s',
                        }}
                        onClick={() => onSelectConversation(c.id)}
                        onMouseEnter={(e) => {
                          if (!isActive) {
                            e.currentTarget.style.background = 'var(--sidebar-hover)'
                            e.currentTarget.style.color = 'var(--foreground)'
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive) {
                            e.currentTarget.style.background = 'transparent'
                            e.currentTarget.style.color = 'var(--sidebar-text-hover)'
                          }
                        }}
                      >
                        <MessageSquare
                          size={14}
                          className="shrink-0"
                          style={{ color: 'var(--sidebar-text)', marginRight: '8px' }}
                        />
                        <span className="flex-1 truncate">{c.title}</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            onDeleteConversation(c.id)
                          }}
                          className="opacity-0 group-hover:opacity-100 flex items-center justify-center cursor-pointer"
                          style={{
                            padding: '4px',
                            borderRadius: 'var(--radius-xs)',
                            color: 'var(--sidebar-text)',
                            background: 'transparent',
                            border: 'none',
                            transition: 'opacity 0.15s, color 0.15s',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = '#ef4444'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'var(--sidebar-text)'
                          }}
                          title="Delete conversation"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    )
                  })}
              </div>
            )
          })}
        </div>

        {/* Quick Links */}
        <div className="quick-links-container">
          <div className="quick-links-title">Quick Links</div>
          {quickLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="quick-link"
            >
              <ExternalLink size={14} style={{ opacity: 0.5 }} />
              {link.label}
            </a>
          ))}
        </div>

        {/* Bottom Section */}
        <div
          style={{
            borderTop: '1px solid var(--sidebar-divider)',
            padding: '10px 16px',
          }}
        >
          <div
            style={{
              fontSize: '10px',
              color: 'var(--sidebar-text)',
              opacity: 0.6,
            }}
          >
            NMLS #1933377
          </div>
        </div>
      </div>
    </>
  )
}
