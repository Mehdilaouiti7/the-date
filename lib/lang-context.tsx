'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import fr from './i18n/fr.json'
import ar from './i18n/ar.json'

type Lang = 'fr' | 'ar'

interface LangContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: string) => string
  isRTL: boolean
}

const LangContext = createContext<LangContextType | null>(null)

const translations: Record<Lang, Record<string, unknown>> = { fr, ar }

function getNestedValue(obj: Record<string, unknown>, key: string): string {
  const keys = key.split('.')
  let current: unknown = obj
  for (const k of keys) {
    if (typeof current !== 'object' || current === null) return key
    current = (current as Record<string, unknown>)[k]
  }
  return typeof current === 'string' ? current : key
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('fr')

  useEffect(() => {
    const stored = localStorage.getItem('savoia-lang') as Lang
    if (stored === 'fr' || stored === 'ar') setLangState(stored)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    localStorage.setItem('savoia-lang', lang)
  }, [lang])

  const setLang = (l: Lang) => setLangState(l)
  const t = (key: string): string => getNestedValue(translations[lang], key)

  return (
    <LangContext.Provider value={{ lang, setLang, t, isRTL: lang === 'ar' }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
