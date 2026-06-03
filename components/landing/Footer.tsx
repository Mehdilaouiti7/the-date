'use client'
import Link from 'next/link'
import { useLang } from '@/lib/lang-context'
import FloralDivider from '@/components/shared/FloralDivider'

export default function Footer() {
  const { t, isRTL } = useLang()

  return (
    <footer style={{ background: 'linear-gradient(160deg, #1a1209 0%, #2d1f0e 100%)' }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          {/* Logo */}
          <p className="font-serif text-3xl font-light tracking-widest text-white mb-2">
            <span className="text-gold">S</span>avoia <span className="text-gold">E</span>vents
          </p>
          <p className={`font-sans text-sm text-white/40 ${isRTL ? 'font-arabic' : ''}`}>
            {t('footer.tagline')}
          </p>
        </div>

        <FloralDivider dark className="mb-10" />

        {/* Links */}
        <div className={`flex flex-wrap items-center justify-center gap-8 mb-10 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {[
            { label: t('footer.home'), href: '/' },
            { label: t('footer.examples'), href: '/#exemples' },
            { label: t('footer.pricing'), href: '/#tarifs' },
            { label: t('footer.contact'), href: '/contact' },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`font-sans text-sm text-white/50 hover:text-gold transition-colors ${isRTL ? 'font-arabic' : ''}`}
            >
              {label}
            </Link>
          ))}
        </div>

        <FloralDivider dark className="mb-10" />

        {/* Rights */}
        <p className={`text-center font-sans text-xs text-white/30 ${isRTL ? 'font-arabic' : ''}`}>
          {t('footer.rights')}
        </p>
      </div>
    </footer>
  )
}
