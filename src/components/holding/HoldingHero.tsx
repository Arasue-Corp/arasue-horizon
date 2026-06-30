'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'

const kowalskiSpring = { type: "spring", stiffness: 300, damping: 30 } as const

// Crisp, majestic lighthouse and ocean horizon
const bgImageUrl = "https://images.unsplash.com/photo-1527668752968-14ce7063f910?q=80&w=2070&auto=format&fit=crop"

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
      {/* 1. The Natural Background Image (Let it breathe, no giant blue blocks) */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ y: yBg }}
      >
        <motion.div 
          initial={{ scale: 1.05, filter: 'brightness(0.3) contrast(1.1)' }}
          animate={{ scale: 1, filter: 'brightness(0.7) contrast(1.1)' }}
          transition={{ duration: 5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImageUrl})` }}
        />
        {/* Subtle gradient just for text readability at the bottom, NOT a giant block */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/30 to-transparent" />
      </motion.div>

      {/* 2. The Horizon Line & Sunrise Effect (Architectural UI Horizon) */}
      <div className="absolute inset-0 z-0 pointer-events-none flex flex-col">
        {/* Sky / Upper Half Container (Overflow hidden so sun can rise from the bottom edge) */}
        <div className="relative w-full h-[65%] overflow-hidden">
          {/* The Rising Sun */}
          <motion.div 
            initial={{ opacity: 0, y: "100%", scale: 0.8 }}
            animate={{ opacity: 0.7, y: "15%", scale: 1 }}
            transition={{ duration: 5, ease: "easeOut", delay: 0.2 }}
            className="absolute -bottom-[30%] left-1/2 -translate-x-1/2 w-[120vw] h-[120vw] md:w-[60vw] md:h-[60vw] rounded-full bg-gradient-to-t from-[#F2D3AC] to-transparent mix-blend-screen blur-[90px]"
          />
        </div>

        {/* The Exact Horizon Line (A razor-sharp glowing beam) */}
        <motion.div 
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.4 }}
          transition={{ duration: 4, ease: "easeInOut" }}
          className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#F2D3AC] to-transparent shadow-[0_0_30px_5px_rgba(242,211,172,0.5)]"
        />

        {/* Ocean / Lower Half Container (Reflection of the sunrise) */}
        <div className="relative w-full h-[35%] overflow-hidden">
           <motion.div 
            initial={{ opacity: 0, y: "-100%", scaleY: 0.5 }}
            animate={{ opacity: 0.4, y: "-50%", scaleY: 1 }}
            transition={{ duration: 5, ease: "easeOut", delay: 0.2 }}
            className="absolute -top-[50%] left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full bg-[#F2D3AC] mix-blend-overlay blur-[120px]"
          />
        </div>
      </div>

      {/* 3. The Content */}
      <motion.div 
        className="container mx-auto px-6 relative z-10 pt-10"
        style={{ opacity: opacityText, y: yText }}
      >
        <div className="max-w-5xl space-y-8">
          {/* Tactical Minimalism Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...kowalskiSpring, delay: 0.1 }}
            className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-[15px] text-xs font-semibold tracking-widest uppercase text-[#F2D3AC]"
          >
            <span className="w-2 h-2 rounded-full bg-[#F2D3AC] animate-pulse" />
            <span>Arasue Horizon Group</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...kowalskiSpring, delay: 0.3 }}
            className="text-6xl md:text-8xl font-playfair tracking-tight leading-tight text-[#F2F2F2]"
          >
            {dict.horizon.hero.title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...kowalskiSpring, delay: 0.4 }}
            className="text-xl md:text-3xl text-[#F2F2F2]/90 max-w-2xl font-medium font-inter drop-shadow-md"
          >
            {dict.horizon.hero.subtitle}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...kowalskiSpring, delay: 0.5 }}
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
              className="relative group overflow-hidden px-8 py-4 rounded-full border border-white/20 bg-black/30 backdrop-blur-[10px] text-[#F2F2F2] font-bold text-lg hover:border-white/40 hover:bg-white/10 active:scale-[0.97] transition-all w-full sm:w-auto text-center"
            >
              <span className="relative z-10">{dict.horizon.hero.explore_portfolio}</span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
