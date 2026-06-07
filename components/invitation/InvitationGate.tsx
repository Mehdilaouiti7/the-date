'use client'
import { useState } from 'react'
import type { InvitationTheme } from '@/lib/invitationThemes'

interface InvitationGateProps {
  theme: InvitationTheme
  children: React.ReactNode
}

/* ---------- Decorative SVG centerpieces per opening style ---------- */

function WaxSeal({ color, onPrimary, cracked }: { color: string; onPrimary: string; cracked: boolean }) {
  return (
    <svg viewBox="0 0 160 160" className={`w-28 h-28 md:w-36 md:h-36 transition-all duration-700 ${cracked ? 'scale-[1.7] opacity-0 rotate-[18deg]' : 'scale-100 opacity-100'}`}>
      <circle cx="80" cy="80" r="72" fill={color} />
      <circle cx="80" cy="80" r="72" fill="none" stroke={onPrimary} strokeOpacity="0.25" strokeWidth="2" />
      <text x="80" y="96" textAnchor="middle" fontSize="46" fill={onPrimary} fontFamily="var(--font-great-vibes)">D</text>
      {/* crack lines, appear on click */}
      <g stroke={onPrimary} strokeWidth="1.4" opacity={cracked ? 1 : 0} className="transition-opacity duration-200">
        <path d="M40 50 L80 80 L60 130" fill="none" />
        <path d="M120 45 L80 80 L130 95" fill="none" />
        <path d="M80 80 L45 110" fill="none" />
      </g>
    </svg>
  )
}

function MashrabiyaDoors({ color, accent }: { color: string; accent: string }) {
  return (
    <div className="flex gap-1.5">
      {[0, 1].map((i) => (
        <svg key={i} viewBox="0 0 60 140" className="w-16 h-36 md:w-20 md:h-44">
          <rect x="2" y="2" width="56" height="136" rx="28" fill="none" stroke={color} strokeWidth="3" />
          <path d="M30 2 V138 M2 70 H58" stroke={color} strokeWidth="1.2" opacity="0.5" />
          <circle cx="30" cy="70" r="10" fill="none" stroke={accent} strokeWidth="1.6" />
          <circle cx="30" cy="70" r="3" fill={accent} />
          {[20, 50, 90, 120].map((y) => (
            <circle key={y} cx="30" cy={y} r="2" fill={accent} opacity="0.7" />
          ))}
        </svg>
      ))}
    </div>
  )
}

function BloomFlower({ color, accent }: { color: string; accent: string }) {
  const petals = Array.from({ length: 8 })
  return (
    <svg viewBox="0 0 160 160" className="w-32 h-32 md:w-40 md:h-40">
      {petals.map((_, i) => (
        <ellipse
          key={i}
          cx="80" cy="80" rx="14" ry="40"
          fill={color}
          opacity="0.85"
          transform={`rotate(${(360 / petals.length) * i} 80 80) translate(0 -34)`}
        />
      ))}
      <circle cx="80" cy="80" r="16" fill={accent} />
    </svg>
  )
}

function StarCurtainGlyph({ color, accent }: { color: string; accent: string }) {
  return (
    <svg viewBox="0 0 160 160" className="w-28 h-28 md:w-36 md:h-36">
      <circle cx="80" cy="80" r="50" fill="none" stroke={color} strokeWidth="1.4" opacity="0.6" />
      {[...Array(10)].map((_, i) => {
        const a = (i / 10) * Math.PI * 2
        return <circle key={i} cx={80 + Math.cos(a) * 50} cy={80 + Math.sin(a) * 50} r="2" fill={accent} />
      })}
      <path d="M80 56 84 76 104 80 84 84 80 104 76 84 56 80 76 76 Z" fill={accent} />
    </svg>
  )
}

function EnvelopeGlyph({ color, accent }: { color: string; accent: string; opened: boolean }) {
  return (
    <svg viewBox="0 0 160 110" className="w-36 h-24 md:w-44 md:h-28">
      <rect x="4" y="14" width="152" height="92" rx="6" fill="#fff" stroke={color} strokeWidth="2" />
      <path d="M4 18 L80 70 L156 18" fill="none" stroke={color} strokeWidth="2" />
      <circle cx="80" cy="46" r="9" fill={accent} />
    </svg>
  )
}

function LineMedallion({ color, accent, lifted }: { color: string; accent: string; lifted: boolean }) {
  return (
    <svg viewBox="0 0 160 160" className={`w-32 h-32 md:w-40 md:h-40 transition-all duration-700 ${lifted ? 'scale-90 opacity-0 -translate-y-10' : 'scale-100 opacity-100'}`}>
      <circle cx="80" cy="80" r="62" fill="none" stroke={color} strokeWidth="0.8" opacity="0.5" />
      <path d="M80 46 C 64 64, 64 96, 80 114 C 96 96, 96 64, 80 46 Z" fill="none" stroke={color} strokeWidth="1" opacity="0.7" />
      <path d="M48 80 C 60 68, 72 68, 80 80 C 72 92, 60 92, 48 80 Z" fill="none" stroke={color} strokeWidth="0.8" opacity="0.55" />
      <path d="M112 80 C 100 68, 88 68, 80 80 C 88 92, 100 92, 112 80 Z" fill="none" stroke={color} strokeWidth="0.8" opacity="0.55" />
      <circle cx="80" cy="80" r="2.4" fill={accent} />
    </svg>
  )
}

/* ---------- Main gate ---------- */

export default function InvitationGate({ theme, children }: InvitationGateProps) {
  const [opened, setOpened] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const { colors, opening } = theme

  const handleOpen = () => {
    if (opened) return
    setOpened(true)
    window.setTimeout(() => setRevealed(true), 900)
  }

  const fontDisplay = theme.fonts.display === 'script' ? 'font-script' : 'font-serif italic'

  return (
    <div className="relative">
      {/* Revealed content */}
      <div className={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'}`}>
        {children}
      </div>

      {/* Gate overlay */}
      {!revealed && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden cursor-pointer select-none"
          style={{ background: `linear-gradient(160deg, ${colors.bgDeep} 0%, ${colors.bg} 140%)` }}
          onClick={handleOpen}
          role="button"
          aria-label={opening.hint}
        >
          {/* ambient glow */}
          <div className="absolute inset-0 pointer-events-none opacity-30"
            style={{ background: `radial-gradient(circle at 50% 45%, ${colors.primary}33 0%, transparent 60%)` }} />

          <p className={`relative z-10 mb-8 font-sans text-[10px] md:text-xs tracking-[0.35em] uppercase transition-opacity duration-500 ${opened ? 'opacity-0' : 'opacity-70'}`}
            style={{ color: colors.primary }}>
            {opening.label}
          </p>

          {/* Centerpiece per opening style */}
          <div className="relative z-10 flex items-center justify-center mb-10">
            {opening.style === 'wax-seal' && (
              <div className={`relative transition-all duration-700 ${opened ? 'scale-110' : ''}`}>
                {!opened && (
                  <div className="absolute -inset-6 rounded-full animate-pulse" style={{ boxShadow: `0 0 0 1px ${colors.primary}33` }} />
                )}
                <WaxSeal color={colors.primary} onPrimary={colors.onPrimary} cracked={opened} />
              </div>
            )}
            {opening.style === 'mashrabiya-doors' && (
              <div className="flex">
                <div className={`transition-transform duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] ${opened ? '-translate-x-24 -rotate-6 opacity-0' : ''}`}>
                  <MashrabiyaDoors color={colors.primary} accent={colors.accent} />
                </div>
                <div className={`-ms-1.5 transition-transform duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] ${opened ? 'translate-x-24 rotate-6 opacity-0' : ''}`}>
                  <MashrabiyaDoors color={colors.primary} accent={colors.accent} />
                </div>
              </div>
            )}
            {opening.style === 'bloom' && (
              <div className={`transition-all duration-[900ms] ease-out ${opened ? 'scale-[2.4] opacity-0 rotate-45' : 'scale-100 animate-[pulse_3s_ease-in-out_infinite]'}`}>
                <BloomFlower color={colors.primary} accent={colors.accent} />
              </div>
            )}
            {opening.style === 'curtain' && (
              <>
                <div className={`absolute transition-all duration-700 ${opened ? 'opacity-0 scale-50' : 'opacity-100'}`}>
                  <StarCurtainGlyph color={colors.primary} accent={colors.accent} />
                </div>
                <div className="flex w-[280px] md:w-[360px] h-40 overflow-hidden">
                  <div className={`flex-1 transition-transform duration-[1000ms] ease-[cubic-bezier(.22,1,.36,1)] ${opened ? '-translate-x-full' : ''}`}
                    style={{ background: `linear-gradient(90deg, ${colors.bgDeep}, ${colors.surface}00)`, opacity: 0.9 }} />
                  <div className={`flex-1 transition-transform duration-[1000ms] ease-[cubic-bezier(.22,1,.36,1)] ${opened ? 'translate-x-full' : ''}`}
                    style={{ background: `linear-gradient(270deg, ${colors.bgDeep}, ${colors.surface}00)`, opacity: 0.9 }} />
                </div>
              </>
            )}
            {opening.style === 'envelope' && (
              <div className={`transition-all duration-700 ${opened ? 'translate-y-[-40px] scale-110 opacity-0' : ''}`}>
                <EnvelopeGlyph color={colors.primary} accent={colors.accent} opened={opened} />
              </div>
            )}
            {opening.style === 'line-veil' && (
              <LineMedallion color={colors.primary} accent={colors.accent} lifted={opened} />
            )}
          </div>

          <p className={`relative z-10 ${fontDisplay} text-2xl md:text-3xl mb-3 transition-opacity duration-500 ${opened ? 'opacity-0' : 'opacity-100'}`}
            style={{ color: colors.text }}>
            {theme.name}
          </p>
          <p className={`relative z-10 font-sans text-xs md:text-sm tracking-wide transition-opacity duration-500 max-w-xs text-center px-6 ${opened ? 'opacity-0' : 'opacity-60'}`}
            style={{ color: colors.textMuted }}>
            {opening.hint}
          </p>

          {/* shimmering tap indicator */}
          {!opened && (
            <span className="relative z-10 mt-8 inline-flex h-2.5 w-2.5 rounded-full animate-ping" style={{ background: colors.primary }} />
          )}
        </div>
      )}
    </div>
  )
}
