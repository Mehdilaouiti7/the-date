'use client'
import { useLang } from '@/lib/lang-context'
import FloralDivider from '@/components/shared/FloralDivider'

interface WteyaProgrammeItem {
  time: string
  title: string
  titleAr: string
  icon: string
}

interface WteyaProgrammeProps {
  items: WteyaProgrammeItem[]
}

export default function WteyaProgramme({ items }: WteyaProgrammeProps) {
  const { t, isRTL } = useLang()

  return (
    <section className="section-py" style={{ background: 'linear-gradient(160deg, #0a1208 0%, #12200f 100%)' }}>
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-[0.3em] text-gold/60 uppercase mb-4">✦</p>
          <h2 className={`font-serif text-4xl font-light text-white ${isRTL ? 'font-arabic' : ''}`}>
            {t('template.programme')}
          </h2>
          <FloralDivider dark className="mt-6 max-w-xs mx-auto" />
        </div>

        {/* Simple linear timeline */}
        <div className="relative pl-6 border-l border-gold/20 space-y-8">
          {items.map((item, idx) => (
            <div key={idx} className={`relative ${isRTL ? 'pr-6 pl-0 border-r border-gold/20 border-l-0 mr-0 ml-6 text-right' : ''}`}>
              {/* Dot */}
              <div className={`absolute ${isRTL ? '-right-[25px]' : '-left-[25px]'} top-1 w-6 h-6 rounded-full bg-[#12200f] border border-gold/40 flex items-center justify-center text-sm`}>
                {item.icon}
              </div>

              <div className="rounded-xl border border-gold/10 bg-white/5 backdrop-blur-sm p-5">
                <p className="font-sans text-xs tracking-widest text-gold/60 uppercase mb-1">{item.time}</p>
                <h3 className={`font-serif text-xl text-white ${isRTL ? 'font-arabic text-right' : ''}`}>
                  {isRTL ? item.titleAr : item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
