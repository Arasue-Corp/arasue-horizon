"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'

export function ForgeHero({ dict }: { dict: any }) {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 px-6 bg-background overflow-hidden">
      
      {/* Absolute clean backdrop with extreme subtle gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white via-background to-background pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="container mx-auto max-w-7xl relative z-10 text-center flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-border shadow-sm text-sm font-medium mb-12 text-foreground/80">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          {dict.badge}
        </div>
        
        <h1 className="text-7xl md:text-[8rem] lg:text-[10rem] font-bold tracking-tighter leading-[0.85] text-foreground mb-8">
          {dict.title.split(' ').map((word: string, i: number) => (
            <span key={i} className={i % 2 !== 0 ? "text-foreground/30" : ""}>
              {word}{' '}
            </span>
          ))}
        </h1>
        
        <p className="text-2xl md:text-4xl text-foreground/60 max-w-3xl mt-8 font-medium tracking-tight font-inter">
          {dict.subtitle}
        </p>
        
        <div className="pt-16 flex flex-col sm:flex-row gap-6 font-inter items-center justify-center w-full">
          <Link href="#services" className="group relative px-12 py-6 rounded-full bg-foreground text-background font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-foreground/10">
            <span className="relative z-10">{dict.cta}</span>
          </Link>
          <Link href="#work" className="px-12 py-6 rounded-full font-bold text-lg hover:bg-black/5 active:scale-95 transition-all text-foreground">
            {dict.secondary_cta}
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
