import { BarChart3, Bell, Brain, Globe, Shield, TrendingUp } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Analysis',
    description:
      'Advanced machine learning algorithms analyze sentiment, context, and trends across millions of data points in real-time.',
  },
  {
    icon: Globe,
    title: 'Global Monitoring',
    description:
      'Track your brand mentions across social media, news outlets, review sites, and forums in 50+ languages.',
  },
  {
    icon: Bell,
    title: 'Instant Alerts',
    description:
      'Receive real-time notifications when critical reputation events occur, so you can respond immediately.',
  },
  {
    icon: TrendingUp,
    title: 'Trend Prediction',
    description:
      'Predict potential reputation risks before they escalate with our proprietary forecasting models.',
  },
  {
    icon: Shield,
    title: 'Crisis Management',
    description:
      'Automated response suggestions and escalation workflows to handle reputation threats effectively.',
  },
  {
    icon: BarChart3,
    title: 'Competitive Intelligence',
    description:
      'Benchmark your reputation against competitors and identify opportunities for differentiation.',
  },
]

export function AlfFeatures() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <p className="section-label mono mb-3">
              <span className="dot" /> Capabilities
            </p>
            <h2 className="display text-3xl sm:text-4xl lg:text-5xl">
              Everything you need to protect your reputation
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Comprehensive tools powered by artificial intelligence to monitor, analyze,
              and enhance how the world sees your brand.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3 border border-border">
          {features.map((feature) => (
            <Reveal key={feature.title} className="fade-up">
              <div className="group bg-background p-8 md:p-10 transition-colors hover:bg-secondary/50 h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red/10">
                  <feature.icon className="h-6 w-6 text-brand-red" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-foreground tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
