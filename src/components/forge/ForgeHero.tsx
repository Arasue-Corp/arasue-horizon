"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'

export function ForgeHero({ dict }: { dict: any }) {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-24 pb-16 px-6 bg-background overflow-hidden border-b border-border">
      
      {/* Absolute clean backdrop with extreme subtle gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/10 via-background to-background pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="container mx-auto max-w-6xl relative z-10 flex flex-col items-start border-x border-border/50 px-8 lg:px-16 py-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border shadow-sm text-xs font-mono tracking-widest uppercase mb-12 text-foreground/80">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          {dict.badge}
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-foreground mb-8 max-w-4xl">
          {dict.title.split(' ').map((word: string, i: number) => (
            <span key={i} className={i % 2 !== 0 ? "text-foreground/30" : ""}>
              {word}{' '}
            </span>
          ))}
        </h1>
        
        <p className="text-lg md:text-2xl text-foreground/60 max-w-2xl mt-4 font-medium tracking-tight font-inter">
          {dict.subtitle}
        </p>
        
        <div className="pt-12 flex flex-col sm:flex-row gap-4 font-inter items-start justify-start w-full">
          <Link href="#services" className="group relative px-8 py-4 rounded-full bg-foreground text-background font-bold text-base hover:scale-105 active:scale-95 transition-all shadow-xl shadow-foreground/10">
            <span className="relative z-10">{dict.cta}</span>
          </Link>
          <Link href="#work" className="px-8 py-4 rounded-full font-bold text-base border border-border hover:bg-white/5 active:scale-95 transition-all text-foreground">
            {dict.secondary_cta}
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
