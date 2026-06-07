'use client'
import { useState } from 'react'
import Link from 'next/link'
import type { InvitationTheme } from '@/lib/invitationThemes'
import InvitationGate from './InvitationGate'
import SoundToggle from './SoundToggle'
import ThemeOrnament from './ThemeOrnament'

export interface DemoHighlight {
  time: string
  title: string
  desc: string
}

export interface InvitationDemoContent {
  /** e.g. "Yasmine & Karim" or "Conférence Awal Tech" */
  heading: string
  /** e.g. "Vous êtes cordialement invités" */
  kicker: string
  subheading: string
  dateLabel: string
  locationLabel: string
  message: string
  highlights: DemoHighlight[]
  closing: string
  rsvpLabel: string
}

export default function InvitationDemo({ theme, content }: { theme: InvitationTheme; content: InvitationDemoContent }) {
  const [opened, setOpened] = useState(false)
  const { colors } = theme
  const fontDisplay = theme.fonts.display === 'script' ? 'font-script' : 'font-serif italic'
  const isDark = theme.slug === 'nuit-etoilee'

  return (
    <InvitationGate theme={theme}>
      <div onClickCapture={() => setOpened(true)} className="min-h-screen" style={{ background: colors.bg, color: colors.text }}>
        {/* top bar */}
        <div className="fixed top-5 inset-x-0 z-40 flex items-center justify-between px-5 md:px-10">
          <Link href="/#exemples"
            className="font-sans text-xs tracking-[0.25em] uppercase backdrop-blur-md rounded-full px-4 py-2 border transition-colors"
            style={{ color: colors.textMuted, borderColor: `${colors.primary}33`, background: `${colors.surface}99` }}>
            ← The Date
          </Link>
          <SoundToggle src={theme.sound.src} active={opened} accentColor={colors.primary} label={theme.sound.label} />
        </div>

        {/* Hero */}
        <section className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-6 pt-28 pb-16 overflow-hidden"
          style={isDark ? { background: `radial-gradient(ellipse at 50% 30%, ${colors.surface} 0%, ${colors.bgDeep} 75%)` } : undefined}>
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <ThemeOrnament ornament={theme.ornament} color={colors.primary} accent={colors.accent} />
          </div>

          <p className="relative font-sans text-[11px] md:text-xs tracking-[0.4em] uppercase mb-6" style={{ color: colors.primary }}>
            {content.kicker}
          </p>
          <h1 className={`relative ${fontDisplay} text-5xl md:text-7xl mb-4 leading-tight`} style={{ color: colors.text }}>
            {content.heading}
          </h1>
          <p className="relative font-sans text-sm md:text-base tracking-wide mb-8 max-w-md" style={{ color: colors.textMuted }}>
            {content.subheading}
          </p>

          <div className="relative flex flex-wrap items-center justify-center gap-4 mb-10">
            <span className="rounded-full px-5 py-2 font-sans text-xs md:text-sm tracking-wide border"
              style={{ borderColor: `${colors.primary}55`, color: colors.text, background: `${colors.primary}14` }}>
              {content.dateLabel}
            </span>
            <span className="rounded-full px-5 py-2 font-sans text-xs md:text-sm tracking-wide border"
              style={{ borderColor: `${colors.primary}55`, color: colors.text, background: `${colors.primary}14` }}>
              {content.locationLabel}
            </span>
          </div>

          <div className="relative h-px w-32" style={{ background: `linear-gradient(90deg, transparent, ${colors.primary}, transparent)` }} />
        </section>

        {/* Message */}
        <section className="px-6 py-20" style={{ background: colors.surface }}>
          <div className="max-w-xl mx-auto text-center">
            <p className={`${fontDisplay} text-2xl md:text-3xl mb-6`} style={{ color: colors.primary }}>
              {theme.name}
            </p>
            <p className="font-serif text-lg md:text-xl leading-relaxed" style={{ color: colors.text }}>
              {content.message}
            </p>
          </div>
        </section>

        {/* Highlights / Programme */}
        <section className="px-6 py-20" style={{ background: colors.bg }}>
          <div className="max-w-3xl mx-auto">
            <h2 className={`${fontDisplay} text-3xl md:text-4xl text-center mb-14`} style={{ color: colors.text }}>
              Programme
            </h2>
            <div className="space-y-8">
              {content.highlights.map((h, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="shrink-0 w-20 text-right">
                    <span className="font-serif text-lg" style={{ color: colors.primary }}>{h.time}</span>
                  </div>
                  <div className="shrink-0 w-px self-stretch" style={{ background: `${colors.primary}40` }} />
                  <div>
                    <h3 className="font-serif text-xl mb-1" style={{ color: colors.text }}>{h.title}</h3>
                    <p className="font-sans text-sm leading-relaxed" style={{ color: colors.textMuted }}>{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing / CTA */}
        <section className="px-6 py-24 text-center" style={{ background: `linear-gradient(160deg, ${colors.bgDeep} 0%, ${colors.primaryDark} 130%)` }}>
          <p className={`${fontDisplay} text-3xl md:text-4xl mb-4`} style={{ color: colors.onPrimary }}>
            {content.closing}
          </p>
          <p className="font-sans text-sm mb-10 max-w-md mx-auto" style={{ color: `${colors.onPrimary}aa` }}>
            {content.rsvpLabel}
          </p>
          <Link href="/contact"
            className="inline-flex rounded-full px-8 py-4 font-sans text-sm tracking-wide shadow-lg transition-transform hover:scale-105"
            style={{ background: colors.primary, color: colors.onPrimary }}>
            Je veux ce thème pour mon événement
          </Link>
        </section>
      </div>
    </InvitationGate>
  )
}
