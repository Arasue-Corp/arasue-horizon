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

  const images = [
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop", // Discovery
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop", // Design
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop", // Sprints
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"  // Scale
  ]

  const numSteps = dict?.steps?.length || 4;
  const stepSize = 1 / numSteps;

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-secondary">
      {/* Sticky Content Area */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        <div className="container mx-auto max-w-6xl px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center">
          
          {/* Left Side: Text and Steps */}
          <div className="space-y-8">
            <div className="border-b border-border/50 pb-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-2">{dict.title}</h2>
              <p className="text-sm text-foreground/60 font-inter max-w-md">{dict.subtitle}</p>
            </div>

            <div className="space-y-6">
              {dict.steps.map((step: any, i: number) => {
                const stepStart = i * stepSize;
                const stepEnd = (i + 1) * stepSize;
                
                // Text animation offsets (strictly within bounds)
                const inStart = stepStart;
                const inEnd = stepStart + (stepSize * 0.2);
                const outStart = stepEnd - (stepSize * 0.2);
                const outEnd = stepEnd;

                // Opacity peaks when this step is active
                const opacity = useTransform(
                  scrollYProgress,
                  [inStart, inEnd, outStart, outEnd],
                  [0.3, 1, 1, 0.3]
                )

                // Scale up slightly when active
                const scale = useTransform(
                  scrollYProgress,
                  [inStart, inEnd, outStart, outEnd],
                  [0.98, 1, 1, 0.98]
                )

                return (
                  <motion.div 
                    key={i}
                    style={{ opacity, scale }}
                    className="flex gap-4 p-4 border border-border/50 rounded-lg bg-background/50 backdrop-blur-sm"
                  >
                    <div className="text-xl font-mono text-accent font-bold mt-1">
                      0{i + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 tracking-tight">{step.title}</h3>
                      <p className="text-foreground/60 font-inter text-sm max-w-md leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Right Side: Sticky Image Crossfade */}
          <div className="hidden lg:block relative h-[60vh] rounded-2xl overflow-hidden shadow-2xl bg-secondary border border-border/50">
            {images.map((src, i) => {
              const stepStart = i * stepSize;
              const stepEnd = (i + 1) * stepSize;
              
              const isFirst = i === 0;
              const isLast = i === images.length - 1;
              const crossfadeDur = stepSize * 0.2;

              // Ensure images crossfade cleanly without exceeding [0, 1] bounds
              const inStart = isFirst ? 0 : stepStart - crossfadeDur;
              const inEnd = isFirst ? 0 : stepStart + crossfadeDur;
              const outStart = isLast ? 1 : stepEnd - crossfadeDur;
              const outEnd = isLast ? 1 : stepEnd + crossfadeDur;
              
              const opacity = useTransform(
                scrollYProgress,
                [inStart, inEnd, outStart, outEnd],
                [isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0]
              )

              return (
                <motion.div 
                  key={i}
                  style={{ opacity }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={src}
                    alt={`Step ${i+1}`}
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 bg-white/5" />
                </motion.div>
              )
            })}
          </div>

        </div>
      </div>
    </div>
  )
}
