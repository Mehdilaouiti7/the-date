'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import type { InvitationTheme } from '@/lib/invitationThemes'
import InvitationGate from './InvitationGate'
import SoundToggle from './SoundToggle'
import ThemeOrnament from './ThemeOrnament'

export interface MinimalScheduleItem {
  time: string
  title: string
  desc: string
}

export interface MinimalDemoContent {
  heading: string
  kicker: string
  subheading: string
  /** ISO datetime used to drive the live countdown, e.g. "2026-09-12T17:00:00" */
  eventDateISO: string
  dateLabel: string
  locationLabel: string
  locationAddress: string
  message: string
  schedule: MinimalScheduleItem[]
  giftsNote: string
  rsvpDeadline: string
}

function useCountdown(targetISO: string) {
  const [left, setLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const target = new Date(targetISO).getTime()
    const tick = () => {
      const diff = Math.max(0, target - Date.now())
      setLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [targetISO])

  return left
}

export default function MinimalDemo({ theme, content }: { theme: InvitationTheme; content: MinimalDemoContent }) {
  const [opened, setOpened] = useState(false)
  const { colors } = theme
  const countdown = useCountdown(content.eventDateISO)
  const fontDisplay = theme.fonts.display === 'script' ? 'font-script' : 'font-serif italic'

  const cardClass = 'rounded-2xl border bg-white px-5 py-4 text-center min-w-[72px]'
  const inputClass = 'w-full rounded-lg border bg-white px-4 py-3 font-sans text-sm placeholder:opacity-50 focus:outline-none focus:ring-2 transition-colors'

  return (
    <InvitationGate theme={theme}>
      <div onClickCapture={() => setOpened(true)} className="min-h-screen" style={{ background: colors.bg, color: colors.text }}>
        <div className="fixed top-5 inset-x-0 z-40 flex items-center justify-between px-5 md:px-10">
          <Link href="/#exemples"
            className="font-sans text-xs tracking-[0.25em] uppercase backdrop-blur-md rounded-full px-4 py-2 border transition-colors"
            style={{ color: colors.textMuted, borderColor: `${colors.primary}33`, background: `${colors.surface}99` }}>
            ← The Date
          </Link>
          <SoundToggle src={theme.sound.src} active={opened} accentColor={colors.primary} label={theme.sound.label} />
        </div>

        {/* Hero */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-28 pb-16 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-50">
            <ThemeOrnament ornament={theme.ornament} color={colors.primary} accent={colors.accent} />
          </div>
          <p className="relative font-sans text-[11px] md:text-xs tracking-[0.4em] uppercase mb-6" style={{ color: colors.primary }}>
            {content.kicker}
          </p>
          <h1 className={`relative ${fontDisplay} text-5xl md:text-7xl mb-4 leading-tight`} style={{ color: colors.text }}>
            {content.heading}
          </h1>
          <p className="relative font-sans text-sm md:text-base tracking-wide mb-2 max-w-md" style={{ color: colors.textMuted }}>
            {content.subheading}
          </p>
          <p className="relative font-serif italic text-base mt-4" style={{ color: colors.primary }}>
            {content.dateLabel} · {content.locationLabel}
          </p>
        </section>

        {/* Countdown */}
        <section className="px-6 py-16" style={{ background: colors.surface }}>
          <p className={`${fontDisplay} text-2xl md:text-3xl text-center mb-10`} style={{ color: colors.primary }}>
            Compte à rebours
          </p>
          <div className="flex items-center justify-center gap-3 md:gap-5 flex-wrap">
            {[
              { n: countdown.days, label: 'Jours' },
              { n: countdown.hours, label: 'Heures' },
              { n: countdown.minutes, label: 'Minutes' },
              { n: countdown.seconds, label: 'Secondes' },
            ].map((c) => (
              <div key={c.label} className={cardClass} style={{ borderColor: `${colors.primary}33` }}>
                <div className="font-serif text-2xl md:text-3xl" style={{ color: colors.text }}>{String(c.n).padStart(2, '0')}</div>
                <div className="font-sans text-[10px] tracking-[0.2em] uppercase mt-1" style={{ color: colors.textMuted }}>{c.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Message */}
        <section className="px-6 py-20 text-center" style={{ background: colors.bg }}>
          <div className="max-w-xl mx-auto">
            <p className="font-serif text-lg md:text-xl leading-relaxed" style={{ color: colors.text }}>
              {content.message}
            </p>
          </div>
        </section>

        {/* Schedule / Programme */}
        <section className="px-6 py-20" style={{ background: colors.surface }}>
          <div className="max-w-2xl mx-auto">
            <h2 className={`${fontDisplay} text-3xl md:text-4xl text-center mb-14`} style={{ color: colors.text }}>
              Programme du jour
            </h2>
            <div className="space-y-7">
              {content.schedule.map((s, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="shrink-0 rounded-full border w-12 h-12 flex items-center justify-center font-sans text-[11px] tracking-wide"
                    style={{ borderColor: `${colors.primary}55`, color: colors.primary }}>
                    {s.time}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg mb-0.5" style={{ color: colors.text }}>{s.title}</h3>
                    <p className="font-sans text-sm leading-relaxed" style={{ color: colors.textMuted }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="px-6 py-20 text-center" style={{ background: colors.bg }}>
          <p className={`${fontDisplay} text-2xl md:text-3xl mb-3`} style={{ color: colors.primary }}>
            Lieu de la célébration
          </p>
          <p className="font-serif text-lg" style={{ color: colors.text }}>{content.locationLabel}</p>
          <p className="font-sans text-sm mt-1" style={{ color: colors.textMuted }}>{content.locationAddress}</p>
          <div className="max-w-md mx-auto mt-8 rounded-2xl overflow-hidden border h-44 flex items-center justify-center"
            style={{ borderColor: `${colors.primary}33`, background: `${colors.primary}0d` }}>
            <ThemeOrnament ornament={theme.ornament} color={colors.primary} accent={colors.accent} />
          </div>
        </section>

        {/* Gifts */}
        <section className="px-6 py-16 text-center" style={{ background: colors.surface }}>
          <p className={`${fontDisplay} text-2xl md:text-3xl mb-3`} style={{ color: colors.primary }}>
            Cadeaux
          </p>
          <p className="font-sans text-sm max-w-md mx-auto leading-relaxed" style={{ color: colors.textMuted }}>
            {content.giftsNote}
          </p>
        </section>

        {/* RSVP */}
        <section className="px-6 py-20" style={{ background: colors.bg }}>
          <div className="max-w-lg mx-auto text-center mb-10">
            <p className={`${fontDisplay} text-2xl md:text-3xl mb-3`} style={{ color: colors.primary }}>
              Confirmez votre présence
            </p>
            <p className="font-sans text-sm" style={{ color: colors.textMuted }}>{content.rsvpDeadline}</p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="max-w-lg mx-auto space-y-4 rounded-2xl border p-6 md:p-8"
            style={{ borderColor: `${colors.primary}33`, background: colors.surface }}
          >
            <input
              type="text"
              placeholder="Votre nom complet"
              className={inputClass}
              style={{ borderColor: `${colors.primary}40`, color: colors.text }}
            />
            <select
              className={inputClass}
              style={{ borderColor: `${colors.primary}40`, color: colors.text }}
              defaultValue=""
            >
              <option value="" disabled>Serez-vous présent(e) ?</option>
              <option value="yes">Oui, avec joie</option>
              <option value="no">Je ne pourrai pas venir</option>
            </select>
            <input
              type="number"
              min={0}
              placeholder="Nombre d'invités (vous inclus)"
              className={inputClass}
              style={{ borderColor: `${colors.primary}40`, color: colors.text }}
            />
            <textarea
              rows={3}
              placeholder="Un message pour les mariés (optionnel)"
              className={`${inputClass} resize-none`}
              style={{ borderColor: `${colors.primary}40`, color: colors.text }}
            />
            <button
              type="button"
              onClick={() => window.location.assign('/contact')}
              className="w-full rounded-full px-8 py-4 font-sans text-sm tracking-wide shadow-md transition-transform hover:scale-[1.02]"
              style={{ background: colors.primary, color: colors.onPrimary }}
            >
              Envoyer ma confirmation
            </button>
            <p className="font-sans text-[11px] text-center leading-relaxed" style={{ color: colors.textMuted }}>
              Ceci est un exemple — sur votre invitation réelle, ce formulaire transmettra directement vos
              réponses au studio The Date.
            </p>
          </form>
        </section>

        {/* Closing */}
        <section className="px-6 py-20 text-center" style={{ background: `linear-gradient(160deg, ${colors.bgDeep} 0%, ${colors.primaryDark} 130%)` }}>
          <p className={`${fontDisplay} text-3xl md:text-4xl mb-4`} style={{ color: colors.onPrimary }}>
            Avec toute notre affection
          </p>
          <Link href="/contact"
            className="inline-flex rounded-full px-8 py-4 font-sans text-sm tracking-wide shadow-lg transition-transform hover:scale-105"
            style={{ background: colors.onPrimary, color: colors.primaryDark }}>
            Je veux ce style pour mon événement
          </Link>
        </section>
      </div>
    </InvitationGate>
  )
}
