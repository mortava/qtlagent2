interface FinnMarkProps {
  size?: number
  radius?: number
}

/**
 * FINN brand mark — a four-point spark on a teal gradient tile.
 * Used as the assistant avatar and in branding contexts.
 */
export default function FinnMark({ size = 28, radius }: FinnMarkProps) {
  const glyph = Math.round(size * 0.56)
  return (
    <span
      className="finn-mark"
      style={{ width: size, height: size, borderRadius: radius ?? Math.round(size * 0.32) }}
      aria-hidden="true"
    >
      <svg width={glyph} height={glyph} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 1.5c.55 4.7 2.1 6.65 6.9 7.5-4.8.85-6.35 2.8-6.9 7.5-.55-4.7-2.1-6.65-6.9-7.5 4.8-.85 6.35-2.8 6.9-7.5Z"
          fill="currentColor"
        />
        <path
          d="M18.6 15.2c.28 2.05 1 2.85 3.15 3.3-2.15.45-2.87 1.25-3.15 3.3-.28-2.05-1-2.85-3.15-3.3 2.15-.45 2.87-1.25 3.15-3.3Z"
          fill="currentColor"
          opacity="0.85"
        />
      </svg>
    </span>
  )
}
