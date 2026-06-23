"use client"
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export function ForgeProcess({ dict }: { dict: any }) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Deep tech / Forge style images - Dark, architectural, cybernetic
  const images = [
    "https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=2071&auto=format&fit=crop", // Discovery (Abstract Structure)
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop", // Architecture (Servers)
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop", // Sprints (Code matrix)
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"  // Scale (Global network)
  ]

  const numSteps = dict?.steps?.length || 4;
  const stepSize = 1 / numSteps;

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-[#0c0c0c] selection:bg-[#a67d48] selection:text-white">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Sticky Content Area */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        <div className="container mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 h-full items-center relative z-10">
          
          {/* Left Side: Text and Steps */}
          <div className="space-y-12">
            <div className="mb-12">
              <div className="text-[#bc9665] font-mono text-xs uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#bc9665]"></span>
                Ingeniería de Precisión
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-[1.1]">{dict.title}</h2>
              <p className="text-lg md:text-xl text-white/50 font-inter max-w-md">{dict.subtitle}</p>
            </div>

            <div className="space-y-0 relative">
              {/* Vertical line connecting steps */}
              <div className="absolute left-[15px] top-4 bottom-4 w-[1px] bg-white/5" />

              {dict.steps.map((step: any, i: number) => {
                const stepStart = i * stepSize;
                const stepEnd = (i + 1) * stepSize;
                
                // Crossfade timing
                const crossfade = stepSize * 0.2;
                const inStart = Math.max(0, stepStart - crossfade);
                const inEnd = stepStart + crossfade;
                const outStart = stepEnd - crossfade;
                const outEnd = Math.min(1, stepEnd + crossfade);

                // For the very first and last items, keep them fully visible at the bounds
                const isFirst = i === 0;
                const isLast = i === numSteps - 1;

                const opacity = useTransform(
                  scrollYProgress,
                  [isFirst ? 0 : inStart, inEnd, outStart, isLast ? 1 : outEnd],
                  [isFirst ? 1 : 0.2, 1, 1, isLast ? 1 : 0.2]
                )

                const borderHeight = useTransform(
                  scrollYProgress,
                  [isFirst ? 0 : inStart, inEnd, outStart, isLast ? 1 : outEnd],
                  ["0%", "100%", "100%", "0%"]
                )

                const xTranslate = useTransform(
                  scrollYProgress,
                  [isFirst ? 0 : inStart, inEnd, outStart, isLast ? 1 : outEnd],
                  [0, 10, 10, 0]
                )

                return (
                  <motion.div 
                    key={i}
                    style={{ opacity, x: xTranslate }}
                    className="relative pl-12 py-8 group"
                  >
                    {/* The glowing active border */}
                    <motion.div 
                      style={{ height: borderHeight }}
                      className="absolute left-[14px] top-0 w-[3px] bg-[#bc9665] shadow-[0_0_15px_rgba(188,150,101,0.5)] z-10"
                    />

                    {/* Number Indicator */}
                    <div className="absolute left-0 top-9 w-8 h-8 rounded-full bg-[#262626] border border-white/10 flex items-center justify-center text-xs font-mono text-white/50 group-hover:text-[#bc9665] transition-colors z-20">
                      0{i + 1}
                    </div>

                    <h3 className="text-2xl font-bold tracking-tight text-white mb-3">{step.title}</h3>
                    <p className="text-white/60 font-inter text-base max-w-md leading-relaxed">{step.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Right Side: Sticky Image Crossfade & Instrumentation */}
          <div className="hidden lg:block relative h-[75vh] w-full rounded-2xl overflow-hidden shadow-2xl bg-[#262626] border border-white/10 group">
            
            {/* Cybernetic HUD Overlay */}
            <div className="absolute inset-0 z-20 pointer-events-none p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 border-t border-l border-white/20 group-hover:border-[#bc9665]/50 transition-colors duration-700" />
                <div className="text-white/30 font-mono text-[10px] tracking-widest bg-black/40 px-2 py-1 backdrop-blur-sm rounded-sm">SYS.OP.RUNNING</div>
              </div>
              
              {/* Dynamic scroll percentage tracker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/5 rounded-full flex items-center justify-center">
                <div className="w-32 h-32 border border-white/10 rounded-full border-dashed animate-[spin_60s_linear_infinite]" />
              </div>

              <div className="flex justify-between items-end">
                <div className="text-white/30 font-mono text-[10px] tracking-widest bg-black/40 px-2 py-1 backdrop-blur-sm rounded-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#bc9665] animate-pulse" />
                  LAT: 0.04MS
                </div>
                <div className="w-12 h-12 border-b border-r border-white/20 group-hover:border-[#bc9665]/50 transition-colors duration-700" />
              </div>
            </div>

            {/* Images */}
            {images.map((src, i) => {
              const stepStart = i * stepSize;
              const stepEnd = (i + 1) * stepSize;
              
              const isFirst = i === 0;
              const isLast = i === images.length - 1;
              const crossfadeDur = stepSize * 0.2;

              const inStart = isFirst ? 0 : stepStart - crossfadeDur;
              const inEnd = isFirst ? 0 : stepStart + crossfadeDur;
              const outStart = isLast ? 1 : stepEnd - crossfadeDur;
              const outEnd = isLast ? 1 : stepEnd + crossfadeDur;
              
              const opacity = useTransform(
                scrollYProgress,
                [inStart, inEnd, outStart, outEnd],
                [isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0]
              )

              const scale = useTransform(
                scrollYProgress,
                [inStart, outEnd],
                [1.1, 1]
              )

              return (
                <motion.div 
                  key={i}
                  style={{ opacity }}
                  className="absolute inset-0"
                >
                  <motion.div style={{ scale }} className="w-full h-full relative">
                    <Image 
                      src={src}
                      alt={`Step ${i+1}`}
                      fill
                      className="object-cover opacity-60"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={isFirst}
                    />
                    {/* Inner shadow/gradient for blending */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-[#0c0c0c]/50 opacity-80" />
                    <div className="absolute inset-0 bg-[#a67d48]/10 mix-blend-overlay" />
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

        </div>
      </div>
    </div>
  )
}
