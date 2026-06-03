'use client'
import { useLang } from '@/lib/lang-context'
import Countdown from '@/components/shared/Countdown'
import FloralDivider from '@/components/shared/FloralDivider'

interface HeroWteyaProps {
  groom: string
  bride: string
  date: string
  city: string
  targetDate: string
}

export default function HeroWteya({ groom, bride, date, city, targetDate }: HeroWteyaProps) {
  const { t, isRTL } = useLang()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0a1208 0%, #12200f 50%, #0a1208 100%)' }}>

      {/* Arabesque texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0 L100 50 L50 100 L0 50 Z' fill='none' stroke='%23C5A059' stroke-width='0.5'/%3E%3Cpath d='M50 10 L90 50 L50 90 L10 50 Z' fill='none' stroke='%23C5A059' stroke-width='0.5'/%3E%3Ccircle cx='50' cy='50' r='5' fill='%23C5A059'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Green-gold radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(45,106,79,0.15) 0%, transparent 70%)' }}
      />

      {/* Corner ornaments */}
      <div className="absolute top-8 left-8 text-gold/15 text-5xl pointer-events-none select-none">◆</div>
      <div className="absolute top-8 right-8 text-gold/15 text-5xl pointer-events-none select-none">◆</div>
      <div className="absolute bottom-8 left-8 text-gold/15 text-5xl pointer-events-none select-none">◆</div>
      <div className="absolute bottom-8 right-8 text-gold/15 text-5xl pointer-events-none select-none">◆</div>

      <div className="relative z-10 text-center px-6 pt-24 pb-16 max-w-3xl mx-auto">
        {/* Arabic title */}
        <p className="font-arabic text-3xl text-gold/80 mb-2">وتية الصداق</p>
        <p className="font-sans text-xs tracking-[0.4em] text-white/30 uppercase mb-10">Wteya Sdek · عقد الزواج</p>

        {/* Names */}
        <div className={`flex items-center justify-center gap-4 md:gap-6 mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <span className="font-script text-6xl md:text-8xl text-white leading-none">{groom}</span>
          <div className="flex flex-col items-center gap-1">
            <span className="text-gold text-2xl">✦</span>
            <span className="font-serif text-xl text-gold/50 font-light">&amp;</span>
            <span className="text-gold text-2xl">✦</span>
          </div>
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
