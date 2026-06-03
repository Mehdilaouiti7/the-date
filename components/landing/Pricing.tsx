'use client'
import { useLang } from '@/lib/lang-context'
import FloralDivider from '@/components/shared/FloralDivider'

interface PlanCardProps {
  name: string
  price: string
  currency: string
  desc: string
  features: string[]
  highlighted?: boolean
  popular?: string
  cta: string
}

function PlanCard({ name, price, currency, desc, features, highlighted, popular, cta }: PlanCardProps) {
  if (highlighted) {
    return (
      <div className="relative rounded-2xl p-8 text-white shadow-xl z-10 scale-[1.03]"
        style={{ background: 'linear-gradient(160deg, #2d1f0e 0%, #1a1209 100%)' }}>
        {popular && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white text-xs font-sans tracking-widest uppercase px-4 py-1 rounded-full">
            {popular}
          </div>
        )}
        <div className="border-b border-white/10 pb-6 mb-6">
          <h3 className="font-serif text-2xl font-light mb-1">{name}</h3>
          <p className="font-sans text-sm text-white/50 mb-4">{desc}</p>
          <div className="flex items-baseline gap-1">
            <span className="font-serif text-5xl font-light gold-gradient-text">{price}</span>
            <span className="font-sans text-lg text-white/60">{currency}</span>
          </div>
        </div>
        <ul className="space-y-3 mb-8">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-3 font-sans text-sm text-white/80">
              <span className="text-gold text-base">✓</span>
              {f}
            </li>
          ))}
        </ul>
        <button className="w-full rounded-full bg-gold py-3 font-sans text-sm text-white hover:bg-gold-dark">
          {cta}
        </button>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-gold-light bg-white p-8 shadow-sm hover:shadow-md">
      <div className="border-b border-gold-light pb-6 mb-6">
        <h3 className="font-serif text-2xl font-light text-savoia-text mb-1">{name}</h3>
        <p className="font-sans text-sm text-savoia-muted mb-4">{desc}</p>
        <div className="flex items-baseline gap-1">
          <span className="font-serif text-5xl font-light text-savoia-text">{price}</span>
          <span className="font-sans text-lg text-savoia-muted">{currency}</span>
        </div>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-3 font-sans text-sm text-savoia-muted">
            <span className="text-gold text-base">✓</span>
            {f}
          </li>
        ))}
      </ul>
      <button className="w-full rounded-full border border-gold py-3 font-sans text-sm text-gold hover:bg-ivory-dark">
        {cta}
      </button>
    </div>
  )
}

export default function Pricing() {
  const { t, isRTL } = useLang()

  const plans = [
    {
      key: 'free',
      name: t('pricing.free.name'),
      price: t('pricing.free.price'),
      currency: t('pricing.free.currency'),
      desc: t('pricing.free.desc'),
      features: [
        t('pricing.free.features.0'),
        t('pricing.free.features.1'),
        t('pricing.free.features.2'),
        t('pricing.free.features.3'),
        t('pricing.free.features.4'),
      ],
    },
    {
      key: 'basic',
      name: t('pricing.basic.name'),
      price: t('pricing.basic.price'),
      currency: t('pricing.basic.currency'),
      desc: t('pricing.basic.desc'),
      features: [
        t('pricing.basic.features.0'),
        t('pricing.basic.features.1'),
        t('pricing.basic.features.2'),
        t('pricing.basic.features.3'),
        t('pricing.basic.features.4'),
      ],
      highlighted: true,
    },
    {
      key: 'premium',
      name: t('pricing.premium.name'),
      price: t('pricing.premium.price'),
      currency: t('pricing.premium.currency'),
      desc: t('pricing.premium.desc'),
      features: [
        t('pricing.premium.features.0'),
        t('pricing.premium.features.1'),
        t('pricing.premium.features.2'),
        t('pricing.premium.features.3'),
        t('pricing.premium.features.4'),
      ],
    },
  ]

  return (
    <section className="section-py bg-ivory-dark">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase mb-4">
            ✦ Savoia Events ✦
          </p>
          <h2 className={`font-serif text-4xl md:text-5xl font-light text-savoia-text ${isRTL ? 'font-arabic' : ''}`}>
            {t('pricing.title')}
          </h2>
          <p className={`mt-4 font-sans text-savoia-muted ${isRTL ? 'font-arabic' : ''}`}>
            {t('pricing.sub')}
          </p>
          <FloralDivider className="mt-8 max-w-xs mx-auto" />
        </div>

        {/* Plans */}
        <div className={`grid md:grid-cols-3 gap-6 items-center ${isRTL ? 'direction-rtl' : ''}`}>
          {plans.map(({ key, ...plan }) => (
            <PlanCard
              key={key}
              {...plan}
              popular={plan.highlighted ? t('pricing.popular') : undefined}
              cta={t('pricing.cta')}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
