'use client'
import { useLang } from '@/lib/lang-context'
import FloralDivider from '@/components/shared/FloralDivider'

export default function Process() {
  const { t, isRTL } = useLang()
  const steps = [0, 1, 2].map((i) => ({
    n: t(`process.steps.${i}.n`),
    title: t(`process.steps.${i}.title`),
    desc: t(`process.steps.${i}.desc`),
  }))

  return (
    <section id="comment-ca-marche" className="section-py bg-ivory">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase mb-4">
            {t('process.badge')}
          </p>
          <h2 className={`font-serif text-4xl md:text-5xl font-light text-ink ${isRTL ? 'font-arabic' : ''}`}>
            {t('process.title')}
          </h2>
          <p className={`mt-4 font-sans text-ink-muted max-w-2xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
            {t('process.sub')}
          </p>
          <FloralDivider className="mt-8 max-w-xs mx-auto" />
        </div>

        <div className={`grid md:grid-cols-3 gap-8 md:gap-6 relative ${isRTL ? 'direction-rtl' : ''}`}>
          {/* connecting line */}
          <div className="hidden md:block absolute top-8 left-[16.5%] right-[16.5%] h-px bg-gradient-to-r from-transparent via-gold-light to-transparent" />

          {steps.map((s, i) => (
            <div key={i} className="relative text-center px-4">
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-white border border-gold-light shadow-sm mb-6">
                <span className="font-serif text-xl text-gold">{s.n}</span>
              </div>
              <h3 className={`font-serif text-xl md:text-2xl text-ink mb-3 ${isRTL ? 'font-arabic' : ''}`}>
                {s.title}
              </h3>
              <p className={`font-sans text-sm text-ink-muted leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
