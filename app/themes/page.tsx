'use client'
import Link from 'next/link'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/landing/Footer'
import FloralDivider from '@/components/shared/FloralDivider'
import ThemeOrnament from '@/components/invitation/ThemeOrnament'
import { invitationThemes } from '@/lib/invitationThemes'
import { useLang } from '@/lib/lang-context'

export default function ThemesPage() {
  const { isRTL } = useLang()

  return (
    <main>
      <Navbar />
      <section className="relative pt-36 pb-24 bg-ivory overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center mb-16">
          <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase mb-4">✦ Univers ✦</p>
          <h1 className={`font-serif text-4xl md:text-5xl font-light text-ink ${isRTL ? 'font-arabic' : ''}`}>
            Neuf mondes, une invitation à chacun
          </h1>
          <p className={`mt-4 font-sans text-ink-muted leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
            Chaque thème est une expérience complète : palette, calligraphie, animations d&apos;ouverture
            et bande sonore instrumentale assortie. Cliquez pour entrer dans l&apos;univers et vivre l&apos;ouverture.
          </p>
          <FloralDivider className="mt-8 max-w-xs mx-auto" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {invitationThemes.map((theme) => (
            <Link
              key={theme.slug}
              href={`/themes/${theme.slug}`}
              className="group relative rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
              style={{ borderColor: `${theme.colors.primary}40` }}
            >
              <div className="relative h-48 overflow-hidden flex items-center justify-center"
                style={{ background: `linear-gradient(160deg, ${theme.colors.bgDeep} 0%, ${theme.colors.primaryDark} 130%)` }}>
                <div className="absolute inset-0 opacity-50">
                  <ThemeOrnament ornament={theme.ornament} color={theme.colors.onPrimary} accent={theme.colors.accent} />
                </div>
                <p className={`relative z-10 text-3xl md:text-4xl ${theme.fonts.display === 'script' ? 'font-script' : 'font-serif italic'}`}
                  style={{ color: theme.colors.onPrimary === '#0E1530' ? theme.colors.primary : theme.colors.onPrimary }}>
                  {theme.name}
                </p>
                <span className="absolute bottom-3 inset-x-0 text-center font-arabic text-sm" style={{ color: `${theme.colors.onPrimary}99` }}>
                  {theme.nameAr}
                </span>
              </div>
              <div className="p-6" style={{ background: theme.colors.surface }}>
                <p className="font-serif text-base italic mb-3" style={{ color: theme.colors.text }}>
                  {theme.tagline}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {theme.bestFor.map((b) => (
                    <span key={b} className="text-[11px] font-sans px-2.5 py-1 rounded-full border"
                      style={{ borderColor: `${theme.colors.primary}40`, color: theme.colors.textMuted }}>
                      {b}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 font-sans text-sm tracking-wide transition-colors"
                  style={{ color: theme.colors.primary }}>
                  Découvrir l&apos;ouverture — {theme.opening.label}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
