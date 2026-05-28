import { Database, LineChart, Zap } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const steps = [
  {
    step: '01',
    icon: Database,
    title: 'Connect Your Sources',
    description:
      'Integrate your social channels, review platforms, news feeds, and custom data sources in minutes with our no-code setup.',
  },
  {
    step: '02',
    icon: Zap,
    title: 'ALF Analyzes Everything',
    description:
      'Our AI engine processes millions of mentions, extracting sentiment, topics, influencers, and potential risks automatically.',
  },
  {
    step: '03',
    icon: LineChart,
    title: 'Act on Insights',
    description:
      'Receive actionable recommendations, automated alerts, and comprehensive reports to make data-driven reputation decisions.',
  },
]

export function AlfHowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 md:py-32"
      style={{
        background: 'linear-gradient(135deg, #7A121A 0%, #AF222E 50%, #E11D48 100%)',
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <p className="mono text-white/60 mb-3">How It Works</p>
            <h2 className="display text-3xl sm:text-4xl lg:text-5xl text-white">
              Three steps to total brand clarity
            </h2>
            <p className="mt-4 text-lg text-white/60 leading-relaxed">
              Get up and running in under 10 minutes. No complex integrations, no lengthy
              onboarding.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <Reveal key={step.title} className="fade-up">
              <div className="relative border border-white/10 bg-black/20 backdrop-blur-sm rounded-2xl p-8 md:p-10 h-full">
                <span className="display text-6xl text-white/10 leading-none">
                  {step.step}
                </span>
                <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <step.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-white/60 leading-relaxed">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 border border-white/10 bg-black/20 backdrop-blur-sm rounded-2xl p-2 md:p-3">
            <div className="bg-black/20 rounded-xl p-6 md:p-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-3 w-3 rounded-full bg-brand-red/60" />
                <div className="h-3 w-3 rounded-full bg-white/20" />
                <div className="h-3 w-3 rounded-full bg-white/20" />
                <div className="ml-4 h-5 w-48 rounded bg-white/10" />
              </div>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="h-6 w-48 rounded bg-white/10" />
                    <div className="mt-2 h-4 w-32 rounded bg-white/5" />
                  </div>
                  <div className="flex gap-2">
                    <div className="h-10 w-24 rounded bg-white/10" />
                    <div className="h-10 w-24 rounded bg-white/5" />
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="col-span-2 h-48 rounded bg-black/20 flex items-end justify-around p-4">
                    {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map((height, i) => (
                      <div
                        key={i}
                        className="w-4 rounded-t bg-white/30"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-xl bg-black/20 p-4">
                      <div className="display text-2xl text-teal">+23%</div>
                      <div className="text-sm font-medium text-white/50">Sentiment Score</div>
                    </div>
                    <div className="rounded-xl bg-black/20 p-4">
                      <div className="display text-2xl text-white">1.2M</div>
                      <div className="text-sm font-medium text-white/50">
                        Mentions This Week
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
