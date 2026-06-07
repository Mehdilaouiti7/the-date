'use client'
import { useState } from 'react'
import { useLang } from '@/lib/lang-context'
import FloralDivider from '@/components/shared/FloralDivider'

const GALLERY_ITEMS = [
  { gradient: 'linear-gradient(135deg, #E8D9B8 0%, #C5A059 100%)', label: 'La cérémonie', aspect: 'tall' },
  { gradient: 'linear-gradient(135deg, #F5F0E8 0%, #E8D9B8 100%)', label: 'Les mariés', aspect: 'wide' },
  { gradient: 'linear-gradient(135deg, #2d1f0e 0%, #C5A059 100%)', label: 'La salle', aspect: 'square' },
  { gradient: 'linear-gradient(135deg, #9A7A3A 0%, #E8D9B8 100%)', label: 'Les fleurs', aspect: 'wide' },
  { gradient: 'linear-gradient(135deg, #1a1209 0%, #9A7A3A 100%)', label: 'Le dîner', aspect: 'square' },
  { gradient: 'linear-gradient(135deg, #E8D9B8 0%, #9A7A3A 50%, #C5A059 100%)', label: 'Les invités', aspect: 'tall' },
]

export default function Gallery() {
  const { t, isRTL } = useLang()
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className="section-py bg-ivory-dark">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase mb-4">✦</p>
          <h2 className={`font-serif text-4xl font-light text-ink ${isRTL ? 'font-arabic' : ''}`}>
            {t('template.gallery')}
          </h2>
          <FloralDivider className="mt-6 max-w-xs mx-auto" />
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-3 gap-3 md:gap-4">
          {GALLERY_ITEMS.map((item, idx) => {
            const rowSpan = item.aspect === 'tall' ? 'row-span-2' : item.aspect === 'wide' ? '' : ''
            const colSpan = item.aspect === 'wide' ? 'col-span-2' : ''
            const height = item.aspect === 'tall' ? 'h-64 md:h-80' : 'h-36 md:h-48'

            return (
              <div
                key={idx}
                className={`${rowSpan} ${colSpan} ${height} rounded-lg overflow-hidden cursor-pointer gallery-item`}
                style={{ background: item.gradient }}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className={`w-full h-full flex items-end p-3 transition-all duration-300 ${
                  hovered === idx ? 'bg-black/20' : 'bg-black/0'
                }`}>
                  <p className={`font-sans text-xs text-white/0 transition-all duration-300 ${
                    hovered === idx ? 'text-white/80' : ''
                  }`}>
                    {item.label}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Upload CTA (static for demo) */}
        <div className="mt-8 text-center">
          <button className="inline-flex items-center gap-2 rounded-full border border-gold px-6 py-2.5 font-sans text-sm text-gold hover:bg-ivory-deep">
            <span>📷</span>
            Ajouter vos photos
          </button>
        </div>
      </div>
    </section>
  )
}
