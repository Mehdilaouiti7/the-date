'use client'
import Link from 'next/link'
import { useLang } from '@/lib/lang-context'
import FloralDivider from '@/components/shared/FloralDivider'

export default function Hero() {
  const { t, isRTL } = useLang()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ivory pt-20">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C5A059' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #E8D9B8 0%, transparent 70%)' }}
        />
      </div>

      <div className={`relative z-10 max-w-4xl mx-auto px-6 text-center ${isRTL ? 'font-arabic' : ''}`}>
        {/* Badge */}
        <p className="font-sans text-xs tracking-[0.4em] text-gold uppercase mb-10 animate-fade-in">
          {t('hero.badge')}
        </p>

        <FloralDivider className="mb-10 max-w-xs mx-auto" />

        {/* Headline */}
        <h1 className="font-serif font-light leading-tight mb-6 animate-slide-up">
          <span className="block text-5xl md:text-7xl lg:text-8xl text-savoia-text">
            {t('hero.headline1')}
          </span>
          <span className="block text-5xl md:text-7xl lg:text-8xl italic text-gold mt-2">
            {t('hero.headline2')}
          </span>
        </h1>

        <FloralDivider className="my-10 max-w-xs mx-auto" />

        {/* Subtitle */}
        <p className={`font-sans font-light text-lg md:text-xl text-savoia-muted max-w-2xl mx-auto mb-12 leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
          {t('hero.sub')}
        </p>

        {/* CTAs */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
          <Link
            href="/create"
            className="rounded-full bg-gold px-8 py-4 font-sans text-sm tracking-wide text-white shadow-lg hover:bg-gold-dark hover:shadow-xl"
          >
            {t('hero.cta')}
          </Link>
          <Link
            href="/#exemples"
            className="rounded-full border border-gold px-8 py-4 font-sans text-sm tracking-wide text-gold hover:bg-ivory-dark"
          >
            {t('hero.ctaDemo')}
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex flex-col items-center gap-2 text-gold/50">
          <div className="w-px h-12 bg-gradient-to-b from-gold/20 to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold/30" />
        </div>
      </div>
    </section>
  )
}
