'use client'
import { useLang } from '@/lib/lang-context'
import FloralDivider from '@/components/shared/FloralDivider'

interface ContratProps {
  jariya: string
  mouwakhkhar: string
  date: string
  notaire: string
  witnesses: string[]
}

export default function ContratSection({ jariya, mouwakhkhar, date, notaire, witnesses }: ContratProps) {
  const { t, isRTL } = useLang()

  return (
    <section className="section-py bg-ivory">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-arabic text-2xl text-gold mb-1">وتية الصداق</p>
          <h2 className={`font-serif text-3xl font-light text-ink ${isRTL ? 'font-arabic' : ''}`}>
            {t('template.contrat.titleFr')}
          </h2>
          <FloralDivider className="mt-6 max-w-xs mx-auto" />
        </div>

        {/* Contract card */}
        <div className="rounded-2xl border border-gold-light bg-white p-8 md:p-12 shadow-sm">
          {/* Sdak amounts */}
          <div className={`grid grid-cols-2 gap-6 mb-10 ${isRTL ? 'direction-rtl' : ''}`}>
            <div className={`text-center border-r border-gold-light ${isRTL ? 'border-r-0 border-l' : ''}`}>
              <p className={`font-sans text-xs tracking-widest text-gold uppercase mb-2 ${isRTL ? 'font-arabic' : ''}`}>
                {t('template.contrat.jariya')}
              </p>
              <p className="font-serif text-4xl text-ink">{jariya}</p>
              <p className="font-sans text-xs text-ink-muted mt-1">المعجّل</p>
            </div>
            <div className="text-center">
              <p className={`font-sans text-xs tracking-widest text-gold uppercase mb-2 ${isRTL ? 'font-arabic' : ''}`}>
                {t('template.contrat.mouwakhkhar')}
              </p>
              <p className="font-serif text-4xl text-ink">{mouwakhkhar}</p>
              <p className="font-sans text-xs text-ink-muted mt-1">المؤخّر</p>
            </div>
          </div>

          <FloralDivider className="mb-10" />

          {/* Details */}
          <div className="space-y-4">
            <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span className="text-gold mt-0.5">◆</span>
              <div>
                <p className={`font-sans text-xs tracking-widest text-gold uppercase mb-1 ${isRTL ? 'font-arabic' : ''}`}>
                  {t('template.contrat.details')}
                </p>
                <p className={`font-sans text-sm text-ink-muted ${isRTL ? 'font-arabic text-right' : ''}`}>
                  Acte établi le {date} par Maître {notaire}
                </p>
              </div>
            </div>

            <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span className="text-gold mt-0.5">◆</span>
              <div>
                <p className={`font-sans text-xs tracking-widest text-gold uppercase mb-1 ${isRTL ? 'font-arabic' : ''}`}>
                  Témoins
                </p>
                <p className="font-sans text-sm text-ink-muted">
                  {witnesses.join(' · ')}
                </p>
              </div>
            </div>
          </div>

          {/* Arabic calligraphy quote */}
          <div className="mt-10 pt-8 border-t border-gold-light text-center">
            <p className="font-arabic text-xl text-ink-muted leading-loose">
              وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا
            </p>
            <p className="font-sans text-xs text-ink-muted/50 mt-2 tracking-wide">
              — Sourate Ar-Rum, verset 21
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
