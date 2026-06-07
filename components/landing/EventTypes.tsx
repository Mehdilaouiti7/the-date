'use client'
import { useLang } from '@/lib/lang-context'
import { eventTypes } from '@/lib/themes'
import FloralDivider from '@/components/shared/FloralDivider'

export default function EventTypes() {
  const { t, isRTL } = useLang()

  return (
    <section className="section-py bg-ivory">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase mb-4">
            ✦ The Date ✦
          </p>
          <h2 className={`font-serif text-4xl md:text-5xl font-light text-ink ${isRTL ? 'font-arabic' : ''}`}>
            {t('types.title')}
          </h2>
          <p className={`mt-4 font-sans text-ink-muted ${isRTL ? 'font-arabic' : ''}`}>
            {t('types.sub')}
          </p>
          <FloralDivider className="mt-8 max-w-xs mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {eventTypes.map(({ key, icon, color, border }) => (
            <div
              key={key}
              className={`group relative rounded-xl border ${border} bg-gradient-to-br ${color} p-6 md:p-8 text-center cursor-pointer hover:shadow-md overflow-hidden`}
            >
              {/* Decorative corner */}
              <div className="absolute top-3 right-3 text-xs text-gold/30">✦</div>
              <div className="absolute bottom-3 left-3 text-xs text-gold/30">✦</div>

              <div className="text-3xl md:text-4xl mb-4">{icon}</div>

              {/* Arabic name large */}
              <p className={`font-arabic text-xl md:text-2xl text-ink mb-1 leading-tight`}>
                {t(`types.list.${key}`)}
              </p>

              {/* French name small */}
              {!isRTL && (
                <p className="font-sans text-xs text-ink-muted tracking-wide">
                  {key === 'mariage' ? 'Mariage' :
                   key === 'wteya' ? 'Wteya Sdek' :
                   key === 'hamam' ? 'Hamam Thour' :
                   key === 'henna' ? 'Nuit du Henné' :
                   key === 'fiancailles' ? 'Fiançailles' : 'Anniversaire'}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
