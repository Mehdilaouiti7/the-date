'use client'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/landing/Footer'
import FloralDivider from '@/components/shared/FloralDivider'
import ContactForm from '@/components/landing/ContactForm'
import { useLang } from '@/lib/lang-context'

const WHATSAPP_NUMBER = '21626363451'
const WHATSAPP_DIRECT_TEXT = encodeURIComponent('Bonjour The Date ✦ Je souhaiterais en savoir plus sur vos invitations.')

export default function ContactPage() {
  const { t, isRTL } = useLang()

  return (
    <main>
      <Navbar />
      <section className="relative pt-36 pb-24 bg-ivory overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, #E8D9B8 0%, transparent 70%)' }}
          />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center mb-16">
          <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase mb-4">
            {t('contact.badge')}
          </p>
          <h1 className={`font-serif text-4xl md:text-5xl font-light text-ink ${isRTL ? 'font-arabic' : ''}`}>
            {t('contact.title')}
          </h1>
          <p className={`mt-4 font-sans text-ink-muted leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
            {t('contact.sub')}
          </p>
          <FloralDivider className="mt-8 max-w-xs mx-auto" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <div className="rounded-2xl border border-gold-light bg-white shadow-sm p-6 md:p-10">
            <ContactForm />
          </div>

          <div className="mt-10 text-center">
            <p className={`font-sans text-sm text-ink-muted mb-3 ${isRTL ? 'font-arabic' : ''}`}>
              {t('contact.directTitle')}
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_DIRECT_TEXT}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold px-6 py-3 font-sans text-sm text-gold hover:bg-ivory-dark transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12.04 22c-1.726 0-3.4-.43-4.886-1.246l-5.418 1.42 1.452-5.31a9.86 9.86 0 0 1-1.34-4.972C1.847 6.298 6.45 1.7 12.04 1.7c2.652 0 5.142 1.034 7.014 2.91a9.83 9.83 0 0 1 2.913 7.022c-.003 5.59-4.61 10.368-9.927 10.368zm0-18.74c-4.589 0-8.32 3.733-8.323 8.32a8.27 8.27 0 0 0 1.297 4.426l-.852 3.111 3.187-.836a8.31 8.31 0 0 0 4.69 1.421c4.588 0 8.32-3.733 8.323-8.322a8.27 8.27 0 0 0-2.443-5.886A8.27 8.27 0 0 0 12.04 3.26z"/>
              </svg>
              {t('contact.directCta')}
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
