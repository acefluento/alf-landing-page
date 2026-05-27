import { serviceCards } from '@/data/site-content'
import { Reveal } from './reveal'
import { ArrowRight } from 'lucide-react'

export function ServicesSection() {
  return (
    <section id="services" className="band py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="mb-14">
            <p className="section-label mono mb-4">
              <span className="dot" /> Who We Work With
            </p>
            <h2 className="display text-3xl sm:text-4xl lg:text-5xl max-w-2xl">
              Built for brands where{' '}
              <span className="text-brand-red">trust drives revenue.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {serviceCards.map((card, i) => (
            <Reveal key={card.title} className={i % 2 === 0 ? 'fade-left' : 'fade-right'}>
              <div className="feature-card h-full flex flex-col">
                <h3 className="text-lg font-bold text-foreground mb-3">{card.title}</h3>
                <p className="text-sm text-foreground/50 leading-relaxed flex-1">
                  {card.description}
                </p>
                <div className="mt-5 flex items-center gap-2 text-brand-red text-sm font-semibold">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
