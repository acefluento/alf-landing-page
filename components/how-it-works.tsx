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
    <section id="how-it-works" className="py-20 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            How ALF Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Get up and running in under 10 minutes. No complex integrations, no lengthy onboarding.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-20 grid gap-12 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute top-16 left-full hidden w-full h-px bg-border md:block" style={{ width: "calc(100% - 4rem)" }} />
              )}
              
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {step.step.slice(-1)}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dashboard preview */}
        <div className="mt-20 rounded-2xl border border-border bg-card p-2 md:p-4">
          <div className="rounded-xl bg-secondary/50 p-8 md:p-12">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-3 w-3 rounded-full bg-destructive/60" />
              <div className="h-3 w-3 rounded-full bg-chart-4/60" />
              <div className="h-3 w-3 rounded-full bg-chart-2/60" />
            </div>
            <div className="space-y-6">
              {/* Header row */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="h-6 w-48 rounded bg-muted/50" />
                  <div className="mt-2 h-4 w-32 rounded bg-muted/30" />
                </div>
                <div className="flex gap-2">
                  <div className="h-10 w-24 rounded-lg bg-primary/20" />
                  <div className="h-10 w-24 rounded-lg bg-muted/30" />
                </div>
              </div>
              {/* Chart area */}
              <div className="grid gap-6 md:grid-cols-3">
                <div className="col-span-2 h-48 rounded-xl bg-muted/20 flex items-end justify-around p-4">
                  {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map((height, i) => (
                    <div
                      key={i}
                      className="w-4 rounded-t bg-primary/60"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <div className="space-y-4">
                  <div className="rounded-xl bg-muted/20 p-4">
                    <div className="text-2xl font-bold text-primary">+23%</div>
                    <div className="text-sm text-muted-foreground">Sentiment Score</div>
                  </div>
                  <div className="rounded-xl bg-muted/20 p-4">
                    <div className="text-2xl font-bold text-foreground">1.2M</div>
                    <div className="text-sm text-muted-foreground">Mentions This Week</div>
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
