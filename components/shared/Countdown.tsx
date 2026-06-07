'use client'
import { useState, useEffect } from 'react'
import { useLang } from '@/lib/lang-context'

interface CountdownProps {
  targetDate: string
  dark?: boolean
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calcTimeLeft(targetDate: string): TimeLeft {
  const diff = new Date(targetDate).getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export default function Countdown({ targetDate, dark = true }: CountdownProps) {
  const { t } = useLang()
  const [time, setTime] = useState<TimeLeft>(calcTimeLeft(targetDate))

  useEffect(() => {
    const timer = setInterval(() => setTime(calcTimeLeft(targetDate)), 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  const units = [
    { label: t('template.countdown.days'), value: time.days },
    { label: t('template.countdown.hours'), value: time.hours },
    { label: t('template.countdown.minutes'), value: time.minutes },
    { label: t('template.countdown.seconds'), value: time.seconds },
  ]

  const boxClass = dark
    ? 'bg-white/10 border border-gold/30 backdrop-blur-sm'
    : 'bg-ivory-dark border border-gold-light'

  const numClass = dark
    ? 'text-white font-serif text-4xl md:text-5xl font-light'
    : 'text-gold font-serif text-4xl md:text-5xl font-light'

  const labelClass = dark
    ? 'text-white/60 font-sans text-xs tracking-widest uppercase mt-1'
    : 'text-ink-muted font-sans text-xs tracking-widest uppercase mt-1'

  return (
    <div className="flex gap-3 md:gap-4">
      {units.map(({ label, value }) => (
        <div key={label} className={`${boxClass} rounded-lg px-4 py-3 text-center min-w-[72px]`}>
          <div className={numClass}>{String(value).padStart(2, '0')}</div>
          <div className={labelClass}>{label}</div>
        </div>
      ))}
    </div>
  )
}
