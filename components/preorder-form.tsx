'use client'

import { useState, useTransition } from 'react'
import { submitPreorder } from '@/app/actions/preorder'
import { ArrowRight, Check, Loader2 } from 'lucide-react'

type Variant = 'banner' | 'card'

export function PreorderForm({ variant = 'card' }: { variant?: Variant }) {
  const [pending, startTransition] = useTransition()
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    startTransition(async () => {
      const result = await submitPreorder(formData)
      if (result.ok) {
        setStatus('success')
        setErrorMsg('')
      } else {
        setStatus('error')
        setErrorMsg(result.error)
      }
    })
  }

  if (status === 'success') {
    return (
      <div
        className={`inline-flex items-center gap-2 rounded-full px-5 py-3 ${
          variant === 'banner'
            ? 'bg-teal/15 border border-teal/30 text-teal'
            : 'bg-teal/10 border border-teal/30 text-teal'
        }`}
      >
        <Check className="w-4 h-4" />
        <span className="text-sm font-semibold">
          You&apos;re on the list. Check your email.
        </span>
      </div>
    )
  }

  const isBanner = variant === 'banner'

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md">
      <div
        className={`flex items-center gap-2 p-1.5 rounded-full border-2 transition-colors ${
          isBanner
            ? 'bg-white/5 border-white/20 focus-within:border-brand-red backdrop-blur-sm'
            : 'bg-card border-border focus-within:border-brand-red'
        }`}
      >
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="your@email.com"
          disabled={pending}
          aria-label="Email address"
          className={`flex-1 bg-transparent border-0 outline-none px-4 py-2 text-sm placeholder:text-muted-foreground/60 disabled:opacity-50 ${
            isBanner ? 'text-white placeholder:text-white/40' : 'text-foreground'
          }`}
        />
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-brand-red hover:bg-brand-red-dark disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-full transition-colors whitespace-nowrap"
        >
          {pending ? (
            <>
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              Sending
            </>
          ) : (
            <>
              Pre-Order
              <ArrowRight className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </div>
      {status === 'error' && (
        <p
          className={`text-xs mt-2 px-2 ${
            isBanner ? 'text-red-200' : 'text-brand-red'
          }`}
          role="alert"
        >
          {errorMsg}
        </p>
      )}
      <p
        className={`text-[11px] mt-2 px-2 ${
          isBanner ? 'text-white/40' : 'text-muted-foreground/60'
        }`}
      >
        No spam. We&apos;ll only email you when the guide drops.
      </p>
    </form>
  )
}
