interface FloralDividerProps {
  dark?: boolean
  className?: string
}

export default function FloralDivider({ dark = false, className = '' }: FloralDividerProps) {
  const lineColor = dark ? 'rgba(197,160,89,0.3)' : '#E8D9B8'
  const textColor = dark ? '#C5A059' : '#C5A059'

  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, transparent, ${lineColor})` }} />
      <span className="text-lg tracking-widest" style={{ color: textColor }}>✦</span>
      <span className="text-xs tracking-widest" style={{ color: textColor }}>◆</span>
      <span className="text-lg tracking-widest" style={{ color: textColor }}>✦</span>
      <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${lineColor}, transparent)` }} />
    </div>
  )
}
