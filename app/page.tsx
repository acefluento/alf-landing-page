const featureCards = [
  {
    title: 'Brand-first landing experience',
    description:
      'Keep the Alf hero, visual identity, and conversion messaging while introducing a clear product journey.',
  },
  {
    title: 'ChatGPT-Next-Web as the app shell',
    description:
      'Use the proven chat UI, model settings, prompt library, and account flows from ChatGPT-Next-Web.',
  },
  {
    title: 'Shared analytics + launch controls',
    description:
      'Track marketing and product events together so each campaign can be tied to retention and paid conversion.',
  },
]

const mergePlan = [
  'Deploy this Alf landing page on your root domain (e.g. alf.ai).',
  'Run ChatGPT-Next-Web from /app with your own OpenAI-compatible API settings.',
  'Keep auth/session state shared across both surfaces (same provider + cookie domain).',
  'Forward primary CTA buttons from landing sections into /app/new for instant onboarding.',
]

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-neutral-950 to-black px-6 py-14 text-neutral-200">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
        <header className="space-y-6">
          <p className="inline-flex rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-1 text-xs uppercase tracking-[0.2em] text-neutral-400">
            Alf × ChatGPT-Next-Web
          </p>
          <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight text-white md:text-5xl">
            Combine the Alf landing page with ChatGPT-Next-Web into one production-ready customer journey.
          </h1>
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-neutral-400 md:text-lg">
            Visitors discover Alf on a branded marketing site, then move into a polished chat product powered by the ChatGPT-Next-Web interface.
            You get faster launch speed without sacrificing brand control.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/ChatGPTNextWeb/NextChat"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-white px-5 py-2 text-sm font-medium text-black transition hover:bg-neutral-200"
            >
              Open ChatGPT-Next-Web repo
            </a>
            <a
              href="#integration-plan"
              className="rounded-lg border border-neutral-700 px-5 py-2 text-sm font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
            >
              View integration plan
            </a>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          {featureCards.map((feature) => (
            <article key={feature.title} className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
              <h2 className="mb-2 text-lg font-semibold text-white">{feature.title}</h2>
              <p className="text-sm leading-relaxed text-neutral-400">{feature.description}</p>
            </article>
          ))}
        </section>

        <section id="integration-plan" className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white">Suggested merge plan</h2>
          <ol className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-300 md:text-base">
            {mergePlan.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-xs font-semibold text-neutral-200">
                  {mergePlan.indexOf(item) + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  )
}
