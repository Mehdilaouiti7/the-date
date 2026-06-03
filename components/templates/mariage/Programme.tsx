'use client'
import { useLang } from '@/lib/lang-context'
import FloralDivider from '@/components/shared/FloralDivider'

interface ProgrammeItem {
  time: string
  title: string
  titleAr: string
  desc: string
  descAr: string
  icon: string
}

interface ProgrammeProps {
  items: ProgrammeItem[]
}

export default function Programme({ items }: ProgrammeProps) {
  const { t, isRTL } = useLang()

  return (
    <section className="section-py bg-ivory">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase mb-4">✦</p>
          <h2 className={`font-serif text-4xl font-light text-savoia-text ${isRTL ? 'font-arabic' : ''}`}>
            {t('template.programme')}
          </h2>
          <FloralDivider className="mt-6 max-w-xs mx-auto" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold-light -translate-x-1/2 hidden md:block" />

          <div className="space-y-8">
            {items.map((item, idx) => {
              const isLeft = idx % 2 === 0
              return (
                <div key={idx} className={`relative flex items-center gap-6 md:gap-0 ${
                  isRTL
                    ? isLeft ? 'md:flex-row-reverse' : 'md:flex-row'
                    : isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Content */}
                  <div className={`flex-1 ${
                    isRTL
                      ? isLeft ? 'md:pr-0 md:pl-10 text-right' : 'md:pl-0 md:pr-10 text-left'
                      : isLeft ? 'md:pr-10 text-right' : 'md:pl-10 text-left'
                  }`}>
                    <div className={`bg-white rounded-xl border border-gold-light p-5 shadow-sm hover:shadow-md inline-block w-full`}>
                      <p className="font-sans text-xs tracking-widest text-gold uppercase mb-2">{item.time}</p>
                      <h3 className={`font-serif text-xl text-savoia-text mb-1 ${isRTL ? 'font-arabic' : ''}`}>
                        {isRTL ? item.titleAr : item.title}
                      </h3>
                      <p className={`font-sans text-sm text-savoia-muted ${isRTL ? 'font-arabic' : ''}`}>
                        {isRTL ? item.descAr : item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-ivory border-2 border-gold items-center justify-center text-xl z-10 shadow-sm">
                    {item.icon}
                  </div>

                  {/* Mobile icon */}
                  <div className="md:hidden flex-shrink-0 w-10 h-10 rounded-full bg-ivory border border-gold flex items-center justify-center text-xl">
                    {item.icon}
                  </div>

                  {/* Spacer for desktop */}
                  <div className="hidden md:block flex-1" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
