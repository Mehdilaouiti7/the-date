'use client'
import Link from 'next/link'
import Navbar from '@/components/shared/Navbar'
import HeroMariage from '@/components/templates/mariage/HeroMariage'
import Programme from '@/components/templates/mariage/Programme'
import VenueSection from '@/components/templates/mariage/VenueSection'
import Gallery from '@/components/templates/mariage/Gallery'
import Guestbook from '@/components/templates/mariage/Guestbook'
import RsvpForm from '@/components/templates/mariage/RsvpForm'
import FloralDivider from '@/components/shared/FloralDivider'

const programmeItems = [
  {
    time: '17h00',
    title: 'Arrivée des invités',
    titleAr: 'استقبال الضيوف',
    desc: 'Accueil et cocktail de bienvenue',
    descAr: 'الاستقبال وكوكتيل الترحيب',
    icon: '🌹',
  },
  {
    time: '18h30',
    title: 'Cérémonie',
    titleAr: 'مراسم الزفاف',
    desc: 'La célébration du mariage',
    descAr: 'الاحتفال بالزواج المقدس',
    icon: '💍',
  },
  {
    time: '20h00',
    title: 'Dîner de gala',
    titleAr: 'حفل العشاء',
    desc: 'Gastronomie tunisienne raffinée',
    descAr: 'أشهى المأكولات التونسية الفاخرة',
    icon: '🍽️',
  },
  {
    time: '22h30',
    title: 'Soirée dansante',
    titleAr: 'الحفل الراقص',
    desc: 'Musique et danse jusqu\'au lever du soleil',
    descAr: 'موسيقى ورقص حتى الفجر',
    icon: '🎶',
  },
]

const guestbookMessages = [
  { name: 'Salma B.', msg: 'Félicitations ! Vous formez un couple magnifique. Que votre bonheur soit éternel ✨' },
  { name: 'Rami & Nesrine', msg: 'Quelle belle soirée en perspective ! On est tellement heureux pour vous deux 💕' },
  { name: 'Tante Fatma', msg: 'Mabrouk mabrouk ! Que Dieu vous bénisse et comble votre foyer de bonheur.' },
]

export default function MariagePage() {
  return (
    <main className="min-h-screen">
      <Navbar dark eventName="Youssef & Dorra" eventType="Mariage — عرس" />

      <HeroMariage
        groom="Youssef"
        bride="Dorra"
        date="15 Septembre 2026"
        city="Tunis"
        targetDate="2026-09-15T18:30:00"
      />

      <Programme items={programmeItems} />

      <VenueSection
        name="Dar El Jeld"
        address="5-10 Rue Dar El Jeld, Médina de Tunis"
        city="Tunis, Tunisie"
      />

      <Gallery />

      <Guestbook messages={guestbookMessages} />

      <RsvpForm />

      {/* Footer */}
      <div className="bg-ivory-dark py-8 border-t border-gold-light">
        <FloralDivider className="max-w-xs mx-auto mb-6" />
        <div className="text-center">
          <p className="font-script text-3xl text-ink mb-3">Youssef & Dorra</p>
          <p className="font-sans text-xs tracking-widest text-ink-muted uppercase">15 Septembre 2026 · Tunis</p>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-gold-light px-5 py-2 font-sans text-xs text-ink-muted hover:text-gold hover:border-gold"
            >
              ✦ Créer votre propre site — The Date
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
