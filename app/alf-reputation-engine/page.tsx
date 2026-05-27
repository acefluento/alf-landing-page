import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { AlfHero } from '@/components/alf/alf-hero'
import { AlfFeatures } from '@/components/alf/alf-features'
import { AlfHowItWorks } from '@/components/alf/alf-how-it-works'
import { AlfPricing } from '@/components/alf/alf-pricing'
import { AlfCta } from '@/components/alf/alf-cta'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'ALF Reputation Engine',
  description:
    'AI-powered reputation management for assisted living facilities. Monitor reviews, get instant alerts, and respond with AI-drafted replies.',
  openGraph: {
    title: 'ALF Reputation Engine | Acefluento',
    description:
      'Automated reputation management built specifically for assisted living facilities.',
  },
}

export default function AlfReputationEnginePage() {
  return (
    <>
      <Navbar />
      <main>
        <AlfHero />
        <AlfFeatures />
        <AlfHowItWorks />
        <AlfPricing />
        <AlfCta />
      </main>
      <SiteFooter />
    </>
  )
}
