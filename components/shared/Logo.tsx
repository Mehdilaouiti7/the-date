interface LogoProps {
  dark?: boolean
  className?: string
  /** 'mark' = compact wordmark for navbars, 'lockup' = full emblem with arabesque ornament */
  variant?: 'mark' | 'lockup'
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const sizes = {
  sm: 'text-2xl',
  md: 'text-3xl',
  lg: 'text-5xl md:text-6xl',
  xl: 'text-6xl md:text-8xl',
}

/** Symmetrical arabesque flourish, echoing the Sidi Bou Said mashrabiya motif */
function Arabesque({ color, className = '' }: { color: string; className?: string }) {
  return (
    <svg viewBox="0 0 240 36" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g stroke={color} strokeWidth="1" opacity="0.85">
        <path d="M120 4 C 110 14, 96 14, 90 8 C 84 14, 70 14, 64 6 M120 4 C 130 14, 144 14, 150 8 C 156 14, 170 14, 176 6" />
        <path d="M64 6 C 48 6, 36 16, 20 14 M176 6 C 192 6, 204 16, 220 14" />
        <path d="M120 4 L120 32" strokeWidth="0.75" opacity="0.6" />
        <circle cx="120" cy="18" r="6" />
        <path d="M120 12 L122.5 16 L120 24 L117.5 16 Z" />
        <circle cx="20" cy="14" r="2.2" />
        <circle cx="220" cy="14" r="2.2" />
      </g>
    </svg>
  )
}

export default function Logo({ dark = false, className = '', variant = 'mark', size = 'md' }: LogoProps) {
  const gold = dark ? '#E8D9B8' : '#C5A059'
  const textClass = dark ? 'text-white' : 'text-ink'

  if (variant === 'lockup') {
    return (
      <div className={`flex flex-col items-center gap-2 ${className}`}>
        <Arabesque color={gold} className="w-40 md:w-56" />
        <span className={`font-script ${sizes[size]} ${textClass} leading-none`} style={{ color: gold }}>
          The Date
        </span>
        <Arabesque color={gold} className="w-40 md:w-56 rotate-180" />
      </div>
    )
  }

  return (
    <span className={`inline-flex items-baseline gap-1.5 font-script ${sizes[size]} ${className}`} style={{ color: gold }}>
      The Date
    </span>
  )
}
