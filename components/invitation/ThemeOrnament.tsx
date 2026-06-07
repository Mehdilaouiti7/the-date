import type { InvitationTheme } from '@/lib/invitationThemes'

interface ThemeOrnamentProps {
  ornament: InvitationTheme['ornament']
  color: string
  accent: string
}

/** Full-bleed decorative SVG backdrop, one pattern per theme family */
export default function ThemeOrnament({ ornament, color, accent }: ThemeOrnamentProps) {
  const id = `orn-${ornament}`

  switch (ornament) {
    case 'arabesque':
      return (
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 400 400">
          <defs>
            <pattern id={id} width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50 10 C 35 30, 35 70, 50 90 C 65 70, 65 30, 50 10 Z" fill="none" stroke={color} strokeWidth="0.8" opacity="0.5" />
              <circle cx="50" cy="50" r="3" fill={accent} opacity="0.5" />
            </pattern>
          </defs>
          <rect width="400" height="400" fill={`url(#${id})`} />
        </svg>
      )
    case 'mashrabiya':
      return (
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 400 400">
          <defs>
            <pattern id={id} width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke={color} strokeWidth="0.7" opacity="0.45" />
              <circle cx="30" cy="30" r="2" fill={accent} opacity="0.55" />
            </pattern>
          </defs>
          <rect width="400" height="400" fill={`url(#${id})`} />
        </svg>
      )
    case 'florals':
    case 'botanical':
      return (
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 400 400">
          <defs>
            <pattern id={id} width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M60 30 C 50 50, 50 70, 60 90 C 70 70, 70 50, 60 30 Z" fill="none" stroke={color} strokeWidth="0.8" opacity="0.4" />
              <path d="M30 60 C 50 50, 70 50, 90 60" fill="none" stroke={color} strokeWidth="0.6" opacity="0.3" />
              <circle cx="60" cy="60" r="2.4" fill={accent} opacity="0.55" />
            </pattern>
          </defs>
          <rect width="400" height="400" fill={`url(#${id})`} />
        </svg>
      )
    case 'stars':
      return (
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 400 400">
          {Array.from({ length: 60 }).map((_, i) => {
            const x = (i * 53) % 400
            const y = (i * 97) % 400
            const r = (i % 3) * 0.6 + 0.6
            return <circle key={i} cx={x} cy={y} r={r} fill={i % 5 === 0 ? accent : color} opacity={0.25 + (i % 4) * 0.15} />
          })}
        </svg>
      )
    case 'geometric':
      return (
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 400 400">
          <defs>
            <pattern id={id} width="80" height="80" patternUnits="userSpaceOnUse">
              <rect x="10" y="10" width="60" height="60" fill="none" stroke={color} strokeWidth="0.6" opacity="0.3" />
              <line x1="10" y1="10" x2="70" y2="70" stroke={accent} strokeWidth="0.5" opacity="0.25" />
            </pattern>
          </defs>
          <rect width="400" height="400" fill={`url(#${id})`} />
        </svg>
      )
    case 'laurel':
      return (
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 400 400">
          <defs>
            <pattern id={id} width="140" height="70" patternUnits="userSpaceOnUse">
              <path d="M10 35 C 40 15, 70 15, 100 35 C 70 55, 40 55, 10 35 Z" fill="none" stroke={color} strokeWidth="0.7" opacity="0.35" />
              <circle cx="120" cy="35" r="2" fill={accent} opacity="0.5" />
            </pattern>
          </defs>
          <rect width="400" height="400" fill={`url(#${id})`} />
        </svg>
      )
    case 'clouds':
      return (
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 400 400">
          {Array.from({ length: 14 }).map((_, i) => {
            const x = (i * 67) % 420 - 30
            const y = (i * 53) % 420 - 30
            const s = 0.7 + (i % 4) * 0.25
            const fill = i % 2 === 0 ? color : accent
            return (
              <g key={i} transform={`translate(${x} ${y}) scale(${s})`} opacity="0.25">
                <ellipse cx="0" cy="10" rx="22" ry="12" fill={fill} />
                <ellipse cx="14" cy="4" rx="14" ry="10" fill={fill} />
                <ellipse cx="-14" cy="6" rx="13" ry="9" fill={fill} />
              </g>
            )
          })}
        </svg>
      )
    default:
      return null
  }
}
