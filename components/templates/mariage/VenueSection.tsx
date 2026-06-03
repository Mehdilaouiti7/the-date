'use client'
import { useLang } from '@/lib/lang-context'
import FloralDivider from '@/components/shared/FloralDivider'

interface VenueSectionProps {
  name: string
  address: string
  city: string
  mapUrl?: string
}

export default function VenueSection({ name, address, city }: VenueSectionProps) {
  const { t, isRTL } = useLang()

  return (
    <section className="section-py" style={{ background: 'linear-gradient(160deg, #100c07 0%, #221608 100%)' }}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-[0.3em] text-gold/60 uppercase mb-4">✦</p>
          <h2 className={`font-serif text-4xl font-light text-white ${isRTL ? 'font-arabic' : ''}`}>
            {t('template.venue')}
          </h2>
          <FloralDivider dark className="mt-6 max-w-xs mx-auto" />
        </div>

        {/* Venue card */}
        <div className="rounded-2xl border border-gold/20 bg-white/5 backdrop-blur-sm p-8 md:p-12 text-center">
          {/* Ornament */}
          <div className="text-gold text-3xl mb-6">🕌</div>

          <h3 className="font-script text-4xl md:text-5xl text-white mb-3">{name}</h3>

          <FloralDivider dark className="my-6 max-w-xs mx-auto" />

          <p className="font-sans text-white/60 text-sm tracking-wide mb-1">{address}</p>
          <p className="font-sans text-gold/70 text-sm tracking-widest uppercase">{city}</p>

          {/* Map placeholder */}
          <div className="mt-8 rounded-xl overflow-hidden border border-gold/10"
            style={{ height: '200px', background: 'linear-gradient(160deg, #1a1209 0%, #2d1f0e 100%)' }}>
            <div className="h-full flex items-center justify-center text-white/20">
              <div className="text-center">
                <div className="text-3xl mb-2">📍</div>
                <p className="font-sans text-xs tracking-widest uppercase">Carte interactive</p>
              </div>
            </div>
          </div>

          {/* Google Maps link placeholder */}
          <button className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/30 px-6 py-2.5 font-sans text-sm text-gold hover:bg-gold/10">
            <span>📍</span>
            Ouvrir dans Google Maps
          </button>
        </div>
      </div>
    </section>
  )
}
