'use client'
import { useState } from 'react'
import { useLang } from '@/lib/lang-context'
import FloralDivider from '@/components/shared/FloralDivider'

export default function RsvpForm() {
  const { t, isRTL } = useLang()
  const [attending, setAttending] = useState<boolean | null>(null)
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="section-py" style={{ background: 'linear-gradient(160deg, #100c07 0%, #221608 100%)' }}>
      <div className="max-w-xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-[0.3em] text-gold/60 uppercase mb-4">✦</p>
          <h2 className={`font-serif text-4xl font-light text-white ${isRTL ? 'font-arabic' : ''}`}>
            {t('template.rsvp.title')}
          </h2>
          <p className={`mt-3 font-sans text-sm text-white/40 ${isRTL ? 'font-arabic' : ''}`}>
            {t('template.rsvp.sub')}
          </p>
          <FloralDivider dark className="mt-8 max-w-xs mx-auto" />
        </div>

        {sent ? (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">✉️</div>
            <p className={`font-serif text-2xl text-white ${isRTL ? 'font-arabic' : ''}`}>
              {t('template.rsvp.thanks')}
            </p>
            <p className="mt-2 font-sans text-sm text-white/40">
              {attending ? '🎉 À très bientôt !' : '💙 Merci de nous avoir informés.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <input
              type="text"
              placeholder={t('template.rsvp.name')}
              className={`w-full rounded-lg border border-gold/20 bg-white/5 backdrop-blur-sm px-4 py-3 font-sans text-sm text-white placeholder:text-white/30 focus:border-gold/50 focus:outline-none ${isRTL ? 'text-right font-arabic' : ''}`}
            />

            {/* Phone */}
            <input
              type="tel"
              placeholder={t('template.rsvp.phone')}
              className={`w-full rounded-lg border border-gold/20 bg-white/5 backdrop-blur-sm px-4 py-3 font-sans text-sm text-white placeholder:text-white/30 focus:border-gold/50 focus:outline-none ${isRTL ? 'text-right font-arabic' : ''}`}
            />

            {/* Attending */}
            <div>
              <p className={`font-sans text-sm text-white/60 mb-3 ${isRTL ? 'font-arabic text-right' : ''}`}>
                {t('template.rsvp.attending')}
              </p>
              <div className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <button
                  type="button"
                  onClick={() => setAttending(true)}
                  className={`flex-1 rounded-lg border py-3 font-sans text-sm transition-all ${
                    attending === true
                      ? 'border-gold bg-gold text-white'
                      : 'border-gold/20 text-white/60 hover:border-gold/40'
                  } ${isRTL ? 'font-arabic' : ''}`}
                >
                  {t('template.rsvp.yes')}
                </button>
                <button
                  type="button"
                  onClick={() => setAttending(false)}
                  className={`flex-1 rounded-lg border py-3 font-sans text-sm transition-all ${
                    attending === false
                      ? 'border-white/40 bg-white/10 text-white'
                      : 'border-gold/20 text-white/60 hover:border-white/30'
                  } ${isRTL ? 'font-arabic' : ''}`}
                >
                  {t('template.rsvp.no')}
                </button>
              </div>
            </div>

            {/* Guests count */}
            {attending && (
              <div>
                <p className={`font-sans text-sm text-white/60 mb-3 ${isRTL ? 'font-arabic text-right' : ''}`}>
                  {t('template.rsvp.guests')}
                </p>
                <select className="w-full rounded-lg border border-gold/20 bg-white/5 px-4 py-3 font-sans text-sm text-white focus:border-gold/50 focus:outline-none">
                  {[1, 2, 3, 4].map(n => (
                    <option key={n} value={n} className="bg-[#221608] text-white">{n}</option>
                  ))}
                </select>
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded-full bg-gold py-4 font-sans text-sm text-white hover:bg-gold-dark shadow-lg mt-2"
            >
              {t('template.rsvp.send')}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
