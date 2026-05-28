import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { EtsLaunchBanner } from '@/components/ets-launch-banner'
import { ServicesSection } from '@/components/services-section'
import { ProblemStrip } from '@/components/problem-strip'
import { ProductsSection } from '@/components/products-section'
import { FaqSection } from '@/components/faq-section'
import { CtaSection } from '@/components/cta-section'
import { CalendlySection } from '@/components/calendly-section'
import { SiteFooter } from '@/components/site-footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <EtsLaunchBanner />
        <ServicesSection />
        <ProblemStrip />
        <ProductsSection />
        <FaqSection />
        <CtaSection />
        <CalendlySection />
      </main>
      <SiteFooter />
    </>
  )
}
