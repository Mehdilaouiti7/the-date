'use client'
import Link from 'next/link'
import { useLang } from '@/lib/lang-context'
import FloralDivider from '@/components/shared/FloralDivider'

function MariagePreview() {
  return (
    <div className="relative h-64 md:h-80 rounded-t-2xl overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #1a1209 0%, #2d1f0e 60%, #1a1209 100%)' }}>
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C5A059' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <p className="text-gold/70 text-xs tracking-[0.3em] uppercase mb-3">Mariage • عرس</p>
        <p className="font-script text-5xl md:text-6xl text-white mb-2">Youssef & Dorra</p>
        <p className="text-white/50 font-sans text-xs tracking-widest uppercase">15 Septembre 2026 — Tunis</p>
        <div className="mt-6 flex gap-3">
          {['189', '12', '45', '22'].map((n, i) => (
            <div key={i} className="bg-white/10 border border-gold/20 rounded px-3 py-2 text-center">
              <div className="text-white font-serif text-xl">{n}</div>
              <div className="text-white/40 text-[10px] font-sans uppercase">
                {['J', 'H', 'M', 'S'][i]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function WteyaPreview() {
  return (
    <div className="relative h-64 md:h-80 rounded-t-2xl overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0f1a0f 0%, #1a2e1a 60%, #0f1a0f 100%)' }}>
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='96' viewBox='0 0 60 96' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 0l30 17.3v34.6L10 69V0zm40 0l10 5.8v34.6L10 69V34.5L50 0z' fill='%23C5A059' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <p className="text-gold/70 text-xs tracking-[0.3em] uppercase mb-3">وتية الصداق • Wteya Sdek</p>
        <p className="font-script text-5xl md:text-6xl text-white mb-2">Sana & Karim</p>
        <p className="text-white/50 font-sans text-xs tracking-widest uppercase">8 Novembre 2026 — Sfax</p>
        <div className="mt-6 border border-gold/30 rounded-lg px-6 py-3 text-center">
          <div className="text-gold/70 font-arabic text-xs mb-1">الصداق</div>
          <div className="text-white font-serif text-2xl">5 000 DT</div>
          <div className="text-white/40 font-sans text-xs mt-1">Contrat signé le 8 novembre 2026</div>
        </div>
      </div>
    </div>
  )
}

export default function ShowcaseSection() {
  const { t, isRTL } = useLang()

  return (
    <section id="exemples" className="section-py bg-ivory-dark">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase mb-4">
            ✦ {t('showcase.title')} ✦
          </p>
          <h2 className={`font-serif text-4xl md:text-5xl font-light text-ink ${isRTL ? 'font-arabic' : ''}`}>
            {t('showcase.sub')}
          </h2>
          <FloralDivider className="mt-8 max-w-xs mx-auto" />
        </div>

        {/* Cards */}
        <div className={`grid md:grid-cols-2 gap-8 ${isRTL ? 'direction-rtl' : ''}`}>
          {/* Mariage card */}
          <div className="group rounded-2xl border border-gold-light bg-white shadow-sm hover:shadow-lg overflow-hidden">
            <MariagePreview />
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-sans text-xs tracking-[0.25em] text-gold uppercase mb-1">
                    {t('showcase.mariageLabel')}
                  </p>
                  <h3 className={`font-serif text-2xl text-ink ${isRTL ? 'font-arabic' : ''}`}>
                    {t('showcase.mariageSub')}
                  </h3>
                </div>
                <span className="text-xs font-sans text-ink-muted bg-ivory-dark px-2 py-1 rounded-full border border-gold-light">
                  عرس
                </span>
              </div>
              <FloralDivider className="my-4" />
              <Link
                href="/exemple/mariage-youssef-dorra"
                className="inline-flex items-center font-sans text-sm text-gold hover:text-gold-dark tracking-wide"
              >
                {t('showcase.view')}
              </Link>
            </div>
          </div>

          {/* Wteya card */}
          <div className="group rounded-2xl border border-gold-light bg-white shadow-sm hover:shadow-lg overflow-hidden">
            <WteyaPreview />
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-sans text-xs tracking-[0.25em] text-gold uppercase mb-1">
                    {t('showcase.wteyaLabel')}
                  </p>
                  <h3 className={`font-serif text-2xl text-ink ${isRTL ? 'font-arabic' : ''}`}>
                    {t('showcase.wteyaSub')}
                  </h3>
                </div>
                <span className="text-xs font-sans text-ink-muted bg-ivory-dark px-2 py-1 rounded-full border border-gold-light">
                  وتية
                </span>
              </div>
              <FloralDivider className="my-4" />
              <Link
                href="/exemple/wteya-sana-karim"
                className="inline-flex items-center font-sans text-sm text-gold hover:text-gold-dark tracking-wide"
              >
                {t('showcase.view')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
