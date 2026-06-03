import type { Metadata } from "next"
import { Cormorant_Garamond, Inter, Amiri, Great_Vibes } from "next/font/google"
import "./globals.css"
import { LangProvider } from "@/lib/lang-context"

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-amiri',
  display: 'swap',
})

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-great-vibes',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Savoia Events — Sites événementiels d'exception",
  description: "Créez un site élégant pour votre mariage, wteya sdek ou fiançailles. Bilingue arabe et français.",
  openGraph: {
    title: "Savoia Events",
    description: "Sites événementiels d'exception pour la Tunisie",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${cormorant.variable} ${inter.variable} ${amiri.variable} ${greatVibes.variable} font-sans bg-ivory text-savoia-text antialiased`}>
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  )
}
