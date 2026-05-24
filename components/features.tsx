import { Activity, BarChart3, Bell, Brain, Globe, Shield, TrendingUp, Users } from "lucide-react"

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

const stats = [
  { value: "500M+", label: "Data points analyzed daily" },
  { value: "98.7%", label: "Sentiment accuracy" },
  { value: "<2s", label: "Alert response time" },
  { value: "50+", label: "Languages supported" },
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Everything you need to protect your reputation
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Comprehensive tools powered by artificial intelligence to monitor, analyze, and enhance how the world sees your brand.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-primary md:text-4xl">{stat.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:bg-card/80"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
