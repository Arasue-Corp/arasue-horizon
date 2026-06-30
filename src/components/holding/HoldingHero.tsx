'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'

const kowalskiSpring = { type: "spring", stiffness: 300, damping: 30 } as const

// High-quality architecture image from Unsplash
const bgImageUrl = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2070&auto=format&fit=crop"

export function HoldingHero({ dict, lang }: { dict: any, lang: string }) {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Parallax effects
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0B0F19]">
      {/* Parallax Background Image */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ y: yBg }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImageUrl})` }}
        />
        {/* Dark overlays to maintain contrast for text */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/80 to-[#162D59]/50" />
        <div className="absolute inset-0 bg-[#0B0F19]/40 backdrop-blur-[2px]" />
      </motion.div>

      {/* Abstract Elements (Glassmorphism + Gradients) over the image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-[#0511F2] mix-blend-screen blur-[140px]"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 0.2 }}
          className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#A65E44] mix-blend-screen blur-[160px]"
        />
        {/* Strict Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(242,242,242,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(242,242,242,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <motion.div 
        className="container mx-auto px-6 relative z-10 pt-20"
        style={{ opacity: opacityText, y: yText }}
      >
        <div className="max-w-5xl space-y-8">
          {/* Tactical Minimalism Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...kowalskiSpring, delay: 0.1 }}
            className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-[15px] text-xs font-semibold tracking-widest uppercase text-[#F2D3AC]"
          >
            <span className="w-2 h-2 rounded-full bg-[#F2D3AC] animate-pulse" />
            <span>Arasue Horizon Group</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...kowalskiSpring, delay: 0.2 }}
            className="text-6xl md:text-8xl font-playfair tracking-tight leading-tight text-[#F2F2F2]"
          >
            {dict.horizon.hero.title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...kowalskiSpring, delay: 0.3 }}
            className="text-xl md:text-3xl text-[#F2F2F2]/70 max-w-2xl font-medium font-inter"
          >
            {dict.horizon.hero.subtitle}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...kowalskiSpring, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-6 pt-12"
          >
            <Link 
              href={`/${lang}/forge`} 
              className="relative group overflow-hidden px-8 py-4 rounded-full bg-[#F2D3AC] text-[#162D59] font-bold text-lg active:scale-[0.97] transition-all w-full sm:w-auto text-center"
            >
              <span className="relative z-10">{dict.horizon.hero.cta}</span>
              <motion.div 
                className="absolute inset-0 bg-white"
                initial={false}
                whileHover={{ scale: 1.5, opacity: 0.2 }}
                transition={kowalskiSpring}
              />
            </Link>
            
            <Link 
              href="#portfolio" 
              className="relative group overflow-hidden px-8 py-4 rounded-full border border-white/10 bg-black/20 backdrop-blur-[10px] text-[#F2F2F2] font-bold text-lg hover:border-white/30 active:scale-[0.97] transition-all w-full sm:w-auto text-center"
            >
              <span className="relative z-10">{dict.horizon.hero.explore_portfolio}</span>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
