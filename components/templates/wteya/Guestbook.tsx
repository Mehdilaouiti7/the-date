'use client'
import { useState } from 'react'
import { useLang } from '@/lib/lang-context'
import FloralDivider from '@/components/shared/FloralDivider'

interface GuestbookWteyaProps {
  messages: { name: string; msg: string }[]
}

export default function GuestbookWteya({ messages }: GuestbookWteyaProps) {
  const { t, isRTL } = useLang()
  const [name, setName] = useState('')
  const [msg, setMsg] = useState('')
  const [sent, setSent] = useState(false)

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && msg) setSent(true)
  }

  return (
    <section className="section-py bg-ivory-dark">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-arabic text-2xl text-gold mb-1">دفتر الذكريات</p>
          <h2 className={`font-serif text-3xl font-light text-savoia-text ${isRTL ? 'font-arabic' : ''}`}>
            {t('template.guestbook.title')}
          </h2>
          <FloralDivider className="mt-6 max-w-xs mx-auto" />
        </div>

        {/* Messages */}
        <div className="space-y-4 mb-12">
          {messages.map((m, idx) => (
            <div key={idx} className={`bg-white rounded-xl border border-gold-light p-6 shadow-sm ${isRTL ? 'text-right' : ''}`}>
              <div className={`flex items-center gap-3 mb-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-9 h-9 rounded-full bg-ivory-deep border border-gold-light flex items-center justify-center font-serif text-gold font-light">
                  {m.name.charAt(0)}
                </div>
                <span className={`font-sans text-sm font-medium text-savoia-text ${isRTL ? 'font-arabic' : ''}`}>
                  {m.name}
                </span>
              </div>
              <p className={`font-sans text-savoia-muted leading-relaxed ${isRTL ? 'font-arabic text-right' : ''}`}>
                {m.msg}
              </p>
            </div>
          ))}
        </div>

        <FloralDivider className="mb-10" />

        {/* Form */}
        {sent ? (
          <div className="text-center py-8">
            <div className="text-3xl mb-3">✉️</div>
            <p className={`font-serif text-xl text-savoia-text ${isRTL ? 'font-arabic' : ''}`}>
              Mabrouk !
            </p>
          </div>
        ) : (
          <form onSubmit={handleSend} className="space-y-4">
            <h3 className={`font-serif text-xl text-savoia-text mb-6 ${isRTL ? 'font-arabic text-right' : ''}`}>
              {t('template.guestbook.leave')}
            </h3>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder={t('template.guestbook.name')}
              className={`w-full rounded-lg border border-gold-light bg-white px-4 py-3 font-sans text-sm text-savoia-text placeholder:text-savoia-muted/50 focus:border-gold focus:outline-none ${isRTL ? 'text-right font-arabic' : ''}`}
            />
            <textarea
              value={msg}
              onChange={e => setMsg(e.target.value)}
              placeholder={t('template.guestbook.msg')}
              rows={4}
              className={`w-full rounded-lg border border-gold-light bg-white px-4 py-3 font-sans text-sm text-savoia-text placeholder:text-savoia-muted/50 focus:border-gold focus:outline-none resize-none ${isRTL ? 'text-right font-arabic' : ''}`}
            />
            <button
              type="submit"
              className="rounded-full bg-gold px-8 py-3 font-sans text-sm text-white hover:bg-gold-dark shadow-sm"
            >
              {t('template.guestbook.send')}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
