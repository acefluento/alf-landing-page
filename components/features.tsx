import { BarChart3, Bell, Brain, Globe, Shield, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced machine learning algorithms analyze sentiment, context, and trends across millions of data points in real-time.",
  },
  {
    icon: Globe,
    title: "Global Monitoring",
    description: "Track your brand mentions across social media, news outlets, review sites, and forums in 50+ languages.",
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    description: "Receive real-time notifications when critical reputation events occur, so you can respond immediately.",
  },
  {
    icon: TrendingUp,
    title: "Trend Prediction",
    description: "Predict potential reputation risks before they escalate with our proprietary forecasting models.",
  },
  {
    icon: Shield,
    title: "Crisis Management",
    description: "Automated response suggestions and escalation workflows to handle reputation threats effectively.",
  },
  {
    icon: BarChart3,
    title: "Competitive Intelligence",
    description: "Benchmark your reputation against competitors and identify opportunities for differentiation.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Capabilities</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-foreground md:text-5xl text-balance leading-[1.1]">
            Everything you need to protect your reputation
          </h2>
          <p className="mt-4 text-lg font-medium text-muted-foreground leading-relaxed">
            Comprehensive tools powered by artificial intelligence to monitor, analyze, and enhance how the world sees your brand.
          </p>
        </div>

        {/* Features grid */}
        <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3 border border-border">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-background p-8 md:p-10 transition-colors hover:bg-secondary/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-6 text-lg font-bold text-foreground tracking-tight">{feature.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
