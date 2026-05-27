export function AceMonolith({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="crimson-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C8102E" />
          <stop offset="100%" stopColor="#9F0C24" />
        </linearGradient>
      </defs>
      <path d="M50 12 L80 88 H20 Z" fill="url(#crimson-grad)" />
      <path d="M50 35 L62 70 H54 L50 60 L46 70 H38 Z" fill="currentColor" />
    </svg>
  )
}

export function AceShield({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shield-red-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C8102E" />
          <stop offset="100%" stopColor="#9F0C24" />
        </linearGradient>
      </defs>
      <path d="M50 15 L80 30 V55 C80 72 67 84 50 88 C33 84 20 72 20 55 V30 L50 15 Z" fill="url(#shield-red-grad)" />
      <path d="M50 28 L70 65 H30 Z" fill="#FFFFFF" />
      <circle cx="50" cy="52" r="5" fill="#C8102E" />
    </svg>
  )
}

export function AceBrandLockup({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <AceMonolith className="w-8 h-auto text-background" />
      <div className="flex flex-col">
        <span className="text-lg font-black tracking-[-0.03em] text-foreground leading-none">
          ACE
        </span>
        <span className="text-[9px] font-medium tracking-[0.35em] text-muted-foreground uppercase leading-none mt-0.5">
          Strategic Growth Partners
        </span>
      </div>
    </div>
  )
}
