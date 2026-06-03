'use client'
import Link from 'next/link'
import { useLang } from '@/lib/lang-context'
import LanguageSwitcher from './LanguageSwitcher'

interface NavbarProps {
  dark?: boolean
  eventName?: string
  eventType?: string
}

export default function Navbar({ dark = false, eventName, eventType }: NavbarProps) {
  const { t } = useLang()

  if (eventName) {
    return (
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 ${
        dark ? 'bg-black/20 backdrop-blur-md' : 'bg-white/80 backdrop-blur-md border-b border-gold-light'
      }`}>
        <div className={`text-sm font-serif tracking-wide ${dark ? 'text-white/70' : 'text-savoia-muted'}`}>
          {eventType}
        </div>
        <div className={`font-script text-xl ${dark ? 'text-white' : 'text-savoia-text'}`}>
          {eventName}
        </div>
        <LanguageSwitcher dark={dark} />
      </nav>
    )
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 ${
      dark
        ? 'bg-black/20 backdrop-blur-md'
        : 'bg-ivory/90 backdrop-blur-md border-b border-gold-light/50'
    }`}>
      <Link href="/" className={`font-serif text-xl font-light tracking-widest ${dark ? 'text-white' : 'text-savoia-text'}`}>
        <span className="text-gold">S</span>avoia <span className="text-gold">E</span>vents
      </Link>

      <div className="flex items-center gap-6">
        <Link
          href="/#exemples"
          className={`hidden md:block font-sans text-sm tracking-wide transition-colors ${
            dark ? 'text-white/70 hover:text-white' : 'text-savoia-muted hover:text-savoia-text'
          }`}
        >
          {t('nav.examples')}
        </Link>
        <LanguageSwitcher dark={dark} />
        <Link
          href="/create"
          className="rounded-full bg-gold px-5 py-2 font-sans text-sm text-white shadow-sm hover:bg-gold-dark"
        >
          {t('nav.create')}
        </Link>
      </div>
    </nav>
  )
}
