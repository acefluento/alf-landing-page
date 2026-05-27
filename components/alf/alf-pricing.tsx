import { Check } from 'lucide-react'
import { CALENDLY_URL } from '@/data/site-content'
import { Reveal } from '@/components/reveal'

const plans = [
  {
    name: 'Starter',
    price: '$299',
    period: '/month',
    description: 'Perfect for single-location assisted living facilities.',
    features: [
      'Up to 10,000 mentions/month',
      '3 review platforms (Google, Yelp, Facebook)',
      'Basic sentiment analysis',
      'Email alerts',
      'Weekly reports',
      '1 user seat',
    ],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$799',
    period: '/month',
    description: 'For multi-location operators with serious reputation needs.',
    features: [
      'Up to 100,000 mentions/month',
      'Unlimited platforms',
      'Advanced AI analysis',
      'Real-time alerts',
      'Custom dashboards',
      '5 user seats',
      'API access',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Custom',
    price: 'Custom',
    period: '',
    description: 'For large care networks with complex requirements.',
    features: [
      'Unlimited mentions',
      'White-label options',
      'Custom AI models',
      'Dedicated account manager',
      'SLA guarantees',
      'Unlimited users',
      'On-premise deployment',
      '24/7 phone support',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

export function AlfPricing() {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <p className="section-label mono mb-3">
              <span className="dot" /> Pricing
            </p>
            <h2 className="display text-3xl sm:text-4xl lg:text-5xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Choose the plan that fits your needs. All plans include a 14-day free trial.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <Reveal key={plan.name} className="fade-up">
              <div
                className={`relative rounded-2xl p-8 md:p-10 h-full flex flex-col ${
                  plan.highlighted
                    ? 'bg-foreground text-background border-2 border-brand-red'
                    : 'feature-card'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-8 bg-brand-red px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white">
                    Most Popular
                  </div>
                )}
                <h3
                  className={`text-lg font-bold tracking-tight ${
                    plan.highlighted ? 'text-background' : 'text-foreground'
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`mt-2 text-sm ${
                    plan.highlighted ? 'text-background/60' : 'text-muted-foreground'
                  }`}
                >
                  {plan.description}
                </p>
                <div className="mt-6">
                  <span
                    className={`display text-4xl ${
                      plan.highlighted ? 'text-background' : 'text-foreground'
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={
                      plan.highlighted ? 'text-background/60' : 'text-muted-foreground'
                    }
                  >
                    {plan.period}
                  </span>
                </div>
                <ul className="mt-8 space-y-4 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 shrink-0 text-brand-red" />
                      <span
                        className={`text-sm ${
                          plan.highlighted ? 'text-background/80' : 'text-muted-foreground'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 text-center font-semibold py-3.5 rounded-full transition-all text-sm ${
                    plan.highlighted
                      ? 'btn-primary'
                      : 'bg-foreground text-background hover:bg-foreground/90'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
