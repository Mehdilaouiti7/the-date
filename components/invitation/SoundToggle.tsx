'use client'
import { useEffect, useRef, useState } from 'react'

interface SoundToggleProps {
  src: string
  label?: string
  /** Start playing as soon as this becomes true (e.g. once the invitation is opened) */
  active: boolean
  className?: string
  accentColor?: string
}

/**
 * Discreet floating control for the theme's instrumental track.
 * Stays silent (no console errors, no broken UI) if the mp3 file isn't present yet —
 * see /public/sounds/README.md for the expected file names.
 */
export default function SoundToggle({ src, label = 'Ambiance sonore', active, className = '', accentColor = '#C5A059' }: SoundToggleProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [muted, setMuted] = useState(false)
  const [available, setAvailable] = useState(true)

  useEffect(() => {
    const audio = new Audio(src)
    audio.loop = true
    audio.volume = 0.35
    audio.addEventListener('error', () => setAvailable(false))
    audioRef.current = audio
    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [src])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !available) return
    if (active && !muted) {
      audio.play().catch(() => { /* autoplay can be blocked until user interaction — toggle will retry */ })
    } else {
      audio.pause()
    }
  }, [active, muted, available])

  if (!available) return null

  return (
    <button
      type="button"
      onClick={() => setMuted((m) => !m)}
      aria-label={muted ? `Activer : ${label}` : `Couper : ${label}`}
      title={label}
      className={`group inline-flex items-center justify-center w-11 h-11 rounded-full backdrop-blur-md border transition-all hover:scale-105 ${className}`}
      style={{ borderColor: `${accentColor}55`, background: `${accentColor}1a`, color: accentColor }}
    >
      {muted ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M11 5 6 9H2v6h4l5 4V5Z" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M11 5 6 9H2v6h4l5 4V5Z" />
          <path className="origin-center" d="M15.5 8.5a5 5 0 0 1 0 7" />
          <path d="M18.5 6a9 9 0 0 1 0 12" opacity="0.6" />
        </svg>
      )}
    </button>
  )
}
