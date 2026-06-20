'use client'

import { motion, useInView, animate } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function AnimatedCounter({ from, to, prefix = "", suffix = "" }: { from: number, to: number, prefix?: string, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const [display, setDisplay] = useState(prefix + from.toString() + suffix)

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          setDisplay(prefix + Math.round(value).toLocaleString() + suffix)
        }
      })
      return () => controls.stop()
    }
  }, [inView, from, to, prefix, suffix])

  return <span ref={ref}>{display}</span>
}

export function TacticalStatsGrid({ dict, prefs }: { dict: any, prefs: { currency: string, system: string, country: string } }) {
  const isMX = prefs.currency === 'MXN'
  
  // Calculate based on preference
  const valuationPrefix = isMX ? "$" : "$"
  const valuationSuffix = isMX ? "M MXN" : "M USD"
  const valuationValue = isMX ? 200 : 10 // e.g. 10M USD = 200M MXN (approx)
  
  const stats = [
    { from: 0, to: 3, label: dict.horizon.stats.companies },
    { from: 0, to: 150, suffix: "+", label: dict.horizon.stats.projects },
    { from: 0, to: valuationValue, prefix: valuationPrefix, suffix: valuationSuffix, label: dict.horizon.stats.valuation },
    { from: 0, to: 4, label: dict.horizon.stats.offices }
  ];

  return (
    <section className="py-24 border-y border-[#162D59]/10 bg-[#F2F2F2]">
      <div className="container mx-auto px-6">
        {/* Localization debug badge */}
        <div className="mb-8 text-xs font-mono text-[#162D59]/50 uppercase">
          [Telemetry] Location: {prefs.country} | Currency: {prefs.currency} | System: {prefs.system}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 300, damping: 30, delay: i * 0.1 }}
              className="flex flex-col space-y-4 border-l-[1px] border-[#162D59]/20 pl-6 relative group cursor-default"
            >
              {/* Micro-interaction: Copper bar grows on hover */}
              <motion.div 
                className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-[#A65E44] origin-top"
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
              <div className="text-5xl md:text-7xl font-playfair font-black tracking-tighter text-[#162D59]">
                <AnimatedCounter from={stat.from} to={stat.to} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#162D59]/60 font-semibold font-inter">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
