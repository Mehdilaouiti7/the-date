'use client'
import { useLang } from '@/lib/lang-context'

export default function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
  const { lang, setLang } = useLang()

  return (
    <div className={`flex items-center gap-1 rounded-full border px-1 py-0.5 text-sm ${
      dark
        ? 'border-white/20 bg-white/5'
        : 'border-gold-light bg-ivory-dark'
    }`}>
      <button
        onClick={() => setLang('fr')}
        className={`rounded-full px-2.5 py-1 font-sans text-xs font-medium transition-all ${
          lang === 'fr'
            ? 'bg-gold text-white shadow-sm'
            : dark
              ? 'text-white/60 hover:text-white'
              : 'text-ink-muted hover:text-ink'
        }`}
      >
        FR
      </button>
      <button
        onClick={() => setLang('ar')}
        className={`rounded-full px-2.5 py-1 font-arabic text-xs font-medium transition-all ${
          lang === 'ar'
            ? 'bg-gold text-white shadow-sm'
            : dark
              ? 'text-white/60 hover:text-white'
              : 'text-ink-muted hover:text-ink'
        }`}
      >
        عر
      </button>
    </div>
  )
}
