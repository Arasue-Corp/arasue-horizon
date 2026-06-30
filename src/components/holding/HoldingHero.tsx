'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'

const kowalskiSpring = { type: "spring", stiffness: 300, damping: 30 } as const

// High-quality lighthouse / coastal mountain image from Unsplash
const bgImageUrl = "https://images.unsplash.com/photo-1510414842594-a618698c0a2e?q=80&w=2070&auto=format&fit=crop"

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
        {/* Dark overlays to maintain contrast for text - Navy blue tinted */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#162D59]/80 to-[#162D59]/50" />
        <div className="absolute inset-0 bg-[#0B0F19]/20 backdrop-blur-sm" />
      </motion.div>

      {/* Lighthouse Beam & Mist Effects (Organic light, NO GRIDS) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Navy Mist */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="absolute -top-[20%] -right-[10%] w-[80%] h-[80%] rounded-full bg-[#162D59] mix-blend-multiply blur-[140px]"
        />
        {/* Golden Lighthouse Beam Glow */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.25, scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 0.5 }}
          className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-[#F2D3AC] mix-blend-screen blur-[180px]"
        />
        {/* Dynamic sweeping beam effect */}
        <motion.div 
          initial={{ opacity: 0, rotate: -15 }}
          animate={{ opacity: 0.15, rotate: 15 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse', ease: "easeInOut" }}
          className="absolute top-0 right-1/4 w-[200%] h-[100%] origin-top-right bg-gradient-to-b from-[#F2D3AC] to-transparent blur-[100px] mix-blend-screen pointer-events-none"
        />
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
            className="text-xl md:text-3xl text-[#F2F2F2]/80 max-w-2xl font-medium font-inter"
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
              className="relative group overflow-hidden px-8 py-4 rounded-full bg-[#F2D3AC] text-[#162D59] font-bold text-lg active:scale-[0.97] transition-all w-full sm:w-auto text-center shadow-[0_0_40px_-10px_#F2D3AC]"
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
              className="relative group overflow-hidden px-8 py-4 rounded-full border border-white/10 bg-black/20 backdrop-blur-[10px] text-[#F2F2F2] font-bold text-lg hover:border-white/30 hover:bg-white/5 active:scale-[0.97] transition-all w-full sm:w-auto text-center"
            >
              <span className="relative z-10">{dict.horizon.hero.explore_portfolio}</span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
