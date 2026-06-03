'use client'
import { useLang } from '@/lib/lang-context'
import Countdown from '@/components/shared/Countdown'
import FloralDivider from '@/components/shared/FloralDivider'

interface HeroMariageProps {
  groom: string
  bride: string
  date: string
  city: string
  targetDate: string
}

export default function HeroMariage({ groom, bride, date, city, targetDate }: HeroMariageProps) {
  const { t, isRTL } = useLang()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #100c07 0%, #221608 40%, #1a1007 70%, #100c07 100%)' }}>

      {/* Texture overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C5A059' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(197,160,89,0.08) 0%, transparent 70%)' }}
      />

      {/* Corner ornaments */}
      <div className="absolute top-8 left-8 text-gold/20 text-4xl pointer-events-none">✦</div>
      <div className="absolute top-8 right-8 text-gold/20 text-4xl pointer-events-none">✦</div>
      <div className="absolute bottom-8 left-8 text-gold/20 text-4xl pointer-events-none">✦</div>
      <div className="absolute bottom-8 right-8 text-gold/20 text-4xl pointer-events-none">✦</div>

      <div className="relative z-10 text-center px-6 pt-24 pb-16 max-w-3xl mx-auto">
        {/* Event type */}
        <p className="font-sans text-xs tracking-[0.4em] text-gold/60 uppercase mb-8">
          ✦ &nbsp; عرس &nbsp; · &nbsp; Mariage &nbsp; ✦
        </p>

        {/* Names */}
        <div className={`flex items-center justify-center gap-4 md:gap-6 mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <span className="font-script text-6xl md:text-8xl text-white leading-none">{groom}</span>
          <span className="font-serif text-3xl md:text-4xl text-gold font-light">&amp;</span>
          <span className="font-script text-6xl md:text-8xl text-white leading-none">{bride}</span>
        </div>

        <FloralDivider dark className="my-8 max-w-sm mx-auto" />

        {/* Date & city */}
        <p className="font-sans text-sm tracking-[0.3em] text-white/50 uppercase mb-12">
          {date} &nbsp;·&nbsp; {city}
        </p>

        {/* Countdown */}
        <div className={`flex justify-center mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <Countdown targetDate={targetDate} dark />
        </div>
        <p className={`font-sans text-xs tracking-widest text-white/30 uppercase ${isRTL ? 'font-arabic' : ''}`}>
          {t('template.countdown.title')}
        </p>

        {/* Scroll arrow */}
        <div className="mt-16 flex flex-col items-center gap-2 text-gold/30">
          <div className="w-px h-12 bg-gradient-to-b from-gold/20 to-transparent" />
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
            <path d="M1 1L8 9L15 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  )
}
