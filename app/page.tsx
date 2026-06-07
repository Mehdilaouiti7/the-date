'use client'
import Navbar from '@/components/shared/Navbar'
import Hero from '@/components/landing/Hero'
import ShowcaseSection from '@/components/landing/ShowcaseSection'
import EventTypes from '@/components/landing/EventTypes'
import Process from '@/components/landing/Process'
import Pricing from '@/components/landing/Pricing'
import Footer from '@/components/landing/Footer'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <EventTypes />
      <Process />
      <Pricing />
      <Footer />
    </main>
  )
}
