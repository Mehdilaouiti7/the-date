'use client'
import Link from 'next/link'
import Navbar from '@/components/shared/Navbar'
import HeroWteya from '@/components/templates/wteya/HeroWteya'
import ContratSection from '@/components/templates/wteya/ContratSection'
import WteyaProgramme from '@/components/templates/wteya/Programme'
import GuestbookWteya from '@/components/templates/wteya/Guestbook'
import FloralDivider from '@/components/shared/FloralDivider'

const programmeItems = [
  {
    time: '16h00',
    title: 'Arrivée de la famille',
    titleAr: 'وصول العائلة',
    icon: '🌿',
  },
  {
    time: '17h30',
    title: 'Lecture du contrat',
    titleAr: 'قراءة عقد الزواج',
    icon: '📜',
  },
  {
    time: '18h30',
    title: 'Signature & témoignage',
    titleAr: 'التوقيع والشهادة',
    icon: '✍️',
  },
  {
    time: '19h30',
    title: 'Bénédictions & prière',
    titleAr: 'الدعاء والتبريكات',
    icon: '🤲',
  },
  {
    time: '20h30',
    title: 'Dîner & célébration',
    titleAr: 'العشاء والاحتفال',
    icon: '🎉',
  },
]

const messages = [
  { name: 'Khaled & Amina', msg: 'Mabrouk ! Que Dieu vous bénisse et que votre union soit source de bonheur éternel.' },
  { name: 'Nour S.', msg: 'Félicitations pour cette belle étape. Vous méritez tout le bonheur du monde ✨' },
  { name: 'Oncle Hassan', msg: 'بارك الله لكما وبارك عليكما وجمع بينكما في خير. مبروك مبروك!' },
]

export default function WteyaPage() {
  return (
    <main className="min-h-screen">
      <Navbar dark eventName="Sana & Karim" eventType="وتية الصداق · Wteya Sdek" />

      <HeroWteya
        groom="Karim"
        bride="Sana"
        date="8 Novembre 2026"
        city="Sfax"
        targetDate="2026-11-08T17:30:00"
      />

      <ContratSection
        jariya="3 000 DT"
        mouwakhkhar="2 000 DT"
        date="8 novembre 2026"
        notaire="Maître Ben Salah"
        witnesses={['Mohamed Karim H.', 'Sami B.', 'Youssef A.']}
      />

      <WteyaProgramme items={programmeItems} />

      <GuestbookWteya messages={messages} />

      {/* Footer */}
      <div style={{ background: 'linear-gradient(160deg, #0a1208 0%, #12200f 100%)' }}>
        <div className="py-10 px-6">
          <FloralDivider dark className="max-w-xs mx-auto mb-8" />
          <div className="text-center">
            <p className="font-arabic text-2xl text-gold/80 mb-1">سنة وَ كريم</p>
            <p className="font-script text-3xl text-white mb-3">Sana & Karim</p>
            <p className="font-sans text-xs tracking-widest text-white/30 uppercase">8 Novembre 2026 · Sfax</p>
            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-gold/20 px-5 py-2 font-sans text-xs text-white/40 hover:text-gold hover:border-gold/40"
              >
                ✦ Créer votre propre site — Savoia Events
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
