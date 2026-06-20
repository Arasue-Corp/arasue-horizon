"use client"
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function HorizonPhilosophy({ dict }: { dict: any }) {
  const t = dict.horizon.philosophy
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Transform scale and opacity as the user scrolls through the section
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])

  return (
    <div ref={containerRef} className="py-48 px-6 bg-[#0B0F19] flex items-center justify-center overflow-hidden border-y border-[#162D59]/30">
      <motion.div 
        style={{ scale, opacity }}
        className="max-w-5xl mx-auto text-center space-y-8"
      >
        <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-[15px] text-xs font-semibold tracking-widest uppercase text-[#F2D3AC] mb-8">
          <span className="w-2 h-2 rounded-full bg-[#F2D3AC] animate-pulse" />
          <span>{t.label}</span>
        </div>
        
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-playfair tracking-tight text-[#F2F2F2] leading-tight">
          <span className="block mb-2">{t.statement_1}</span>
          <span className="block text-[#A65E44] italic mb-6">{t.statement_2}</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-[#F2F2F2]/60 font-inter max-w-3xl mx-auto font-light tracking-wide">
          {t.statement_3}
        </p>
      </motion.div>
    </div>
  )
}
