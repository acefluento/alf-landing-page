import { Database, LineChart, Zap } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: Database,
    title: "Connect Your Sources",
    description: "Integrate your social channels, review platforms, news feeds, and custom data sources in minutes with our no-code setup.",
  },
  {
    step: "02",
    icon: Zap,
    title: "ALF Analyzes Everything",
    description: "Our AI engine processes millions of mentions, extracting sentiment, topics, influencers, and potential risks automatically.",
  },
  {
    step: "03",
    icon: LineChart,
    title: "Act on Insights",
    description: "Receive actionable recommendations, automated alerts, and comprehensive reports to make data-driven reputation decisions.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-foreground">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">How it works</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-background md:text-5xl text-balance leading-[1.1]">
            Three steps to total brand clarity
          </h2>
          <p className="mt-4 text-lg font-medium text-background/60 leading-relaxed">
            Get up and running in under 10 minutes. No complex integrations, no lengthy onboarding.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="relative border border-background/10 bg-background/5 p-8 md:p-10">
              <span className="text-6xl font-black text-primary/20 leading-none">{step.step}</span>
              <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <step.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-background tracking-tight">{step.title}</h3>
              <p className="mt-3 text-background/60 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Dashboard preview */}
        <div className="mt-16 border border-background/10 bg-background/5 p-2 md:p-3">
          <div className="bg-background/[0.03] p-6 md:p-10">
            {/* Window chrome */}
            <div className="flex items-center gap-2 mb-6">
              <div className="h-3 w-3 rounded-full bg-primary/40" />
              <div className="h-3 w-3 rounded-full bg-background/20" />
              <div className="h-3 w-3 rounded-full bg-background/20" />
              <div className="ml-4 h-5 w-48 rounded bg-background/10" />
            </div>
            <div className="space-y-6">
              {/* Header row */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="h-6 w-48 rounded bg-background/10" />
                  <div className="mt-2 h-4 w-32 rounded bg-background/5" />
                </div>
                <div className="flex gap-2">
                  <div className="h-10 w-24 rounded bg-primary/20" />
                  <div className="h-10 w-24 rounded bg-background/10" />
                </div>
              </div>
              {/* Chart area */}
              <div className="grid gap-6 md:grid-cols-3">
                <div className="col-span-2 h-48 rounded bg-background/[0.03] flex items-end justify-around p-4">
                  {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map((height, i) => (
                    <div
                      key={i}
                      className="w-4 rounded-t bg-primary/50"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <div className="space-y-4">
                  <div className="rounded bg-background/[0.03] p-4">
                    <div className="text-2xl font-black text-primary">+23%</div>
                    <div className="text-sm font-medium text-background/50">Sentiment Score</div>
                  </div>
                  <div className="rounded bg-background/[0.03] p-4">
                    <div className="text-2xl font-black text-background">1.2M</div>
                    <div className="text-sm font-medium text-background/50">Mentions This Week</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
