'use client'
import { useState } from 'react'
import { useLang } from '@/lib/lang-context'
import { eventTypes } from '@/lib/themes'

const WHATSAPP_NUMBER = '21626363451'

function buildWhatsAppMessage(values: Record<string, string>, eventLabel: string) {
  const lines = [
    `✦ Nouvelle demande — The Date ✦`,
    ``,
    `Nom : ${values.name}`,
    `Téléphone : ${values.phone}`,
    `Type d'événement : ${eventLabel || '—'}`,
    values.theme ? `Thème souhaité : ${values.theme}` : null,
    values.date ? `Date approximative : ${values.date}` : null,
    ``,
    `Message :`,
    values.message || '—',
  ].filter(Boolean)
  return lines.join('\n')
}

export default function ContactForm() {
  const { t, isRTL } = useLang()
  const [values, setValues] = useState({
    name: '',
    phone: '',
    eventType: '',
    theme: '',
    date: '',
    message: '',
  })

  const update = (key: keyof typeof values) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setValues((v) => ({ ...v, [key]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const eventLabel = values.eventType ? t(`types.fr.${values.eventType}`) : ''
    const text = buildWhatsAppMessage(values, eventLabel)
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const inputClass =
    'w-full rounded-lg border border-gold-light bg-white px-4 py-3 font-sans text-sm text-ink placeholder:text-ink-muted/60 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors'
  const labelClass = `block font-sans text-xs tracking-wide uppercase text-ink-muted mb-2 ${isRTL ? 'font-arabic normal-case' : ''}`

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${isRTL ? 'text-right' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>{t('contact.name')}</label>
          <input
            required
            type="text"
            value={values.name}
            onChange={update('name')}
            placeholder={t('contact.namePh')}
            className={`${inputClass} ${isRTL ? 'font-arabic text-right' : ''}`}
          />
        </div>
        <div>
          <label className={labelClass}>{t('contact.phone')}</label>
          <input
            required
            type="tel"
            value={values.phone}
            onChange={update('phone')}
            placeholder={t('contact.phonePh')}
            className={inputClass}
            dir="ltr"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>{t('contact.eventType')}</label>
          <select
            required
            value={values.eventType}
            onChange={update('eventType')}
            className={`${inputClass} ${isRTL ? 'font-arabic text-right' : ''}`}
          >
            <option value="" disabled>{t('contact.eventTypePh')}</option>
            {eventTypes.map(({ key }) => (
              <option key={key} value={key}>
                {isRTL ? t(`types.list.${key}`) : t(`types.fr.${key}`)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>{t('contact.date')}</label>
          <input
            type="text"
            value={values.date}
            onChange={update('date')}
            placeholder="JJ / MM / AAAA"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>{t('contact.theme')}</label>
        <input
          type="text"
          value={values.theme}
          onChange={update('theme')}
          placeholder={t('contact.themePh')}
          className={`${inputClass} ${isRTL ? 'font-arabic text-right' : ''}`}
        />
      </div>

      <div>
        <label className={labelClass}>{t('contact.message')}</label>
        <textarea
          rows={5}
          value={values.message}
          onChange={update('message')}
          placeholder={t('contact.messagePh')}
          className={`${inputClass} resize-none ${isRTL ? 'font-arabic text-right' : ''}`}
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="group inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 font-sans text-sm tracking-wide text-white shadow-lg transition-all hover:bg-gold-dark hover:shadow-xl"
        >
          <svg className="w-5 h-5 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12.04 22c-1.726 0-3.4-.43-4.886-1.246l-5.418 1.42 1.452-5.31a9.86 9.86 0 0 1-1.34-4.972C1.847 6.298 6.45 1.7 12.04 1.7c2.652 0 5.142 1.034 7.014 2.91a9.83 9.83 0 0 1 2.913 7.022c-.003 5.59-4.61 10.368-9.927 10.368zm0-18.74c-4.589 0-8.32 3.733-8.323 8.32a8.27 8.27 0 0 0 1.297 4.426l-.852 3.111 3.187-.836a8.31 8.31 0 0 0 4.69 1.421c4.588 0 8.32-3.733 8.323-8.322a8.27 8.27 0 0 0-2.443-5.886A8.27 8.27 0 0 0 12.04 3.26z"/>
          </svg>
          {t('contact.submit')}
        </button>
        <p className={`mt-4 font-sans text-xs text-ink-muted max-w-md ${isRTL ? 'font-arabic' : ''}`}>
          {t('contact.note')}
        </p>
      </div>
    </form>
  )
}
