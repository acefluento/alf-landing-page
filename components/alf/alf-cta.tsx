import { ArrowRight } from 'lucide-react'
import { CALENDLY_URL } from '@/data/site-content'
import { Reveal } from '@/components/reveal'

export function AlfCta() {
  return (
    <section className="py-20 md:py-32 bg-brand-red">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <h2 className="display max-w-3xl text-3xl sm:text-4xl lg:text-5xl text-white">
              Ready to take control of your reputation?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70 leading-relaxed">
              Join hundreds of leading brands using ALF to monitor and enhance their
              reputation. Start your free trial today.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-black text-white font-semibold rounded-full text-base transition-all hover:bg-black/80"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-white/30 text-white font-semibold rounded-full text-base transition-all hover:bg-white/10"
              >
                Schedule a Demo
              </a>
            </div>
            <p className="mt-6 text-sm text-white/50">
              No credit card required &middot; 14-day free trial &middot; Cancel anytime
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
