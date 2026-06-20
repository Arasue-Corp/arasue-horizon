"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

export function HorizonGlobal({ dict }: { dict: any }) {
  const t = dict.horizon.global_impact

  const stats = [
    { val: t.stat_1_val, lbl: t.stat_1_lbl },
    { val: t.stat_2_val, lbl: t.stat_2_lbl },
    { val: t.stat_3_val, lbl: t.stat_3_lbl }
  ]

  return (
    <section className="relative py-32 overflow-hidden bg-[#0B0F19]">
      {/* Background World Map / Network */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <Image 
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop" 
          alt="Global Network" 
          fill
          className="object-cover mix-blend-screen" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/80 to-[#0B0F19]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="text-4xl md:text-6xl font-playfair tracking-tight text-[#F2F2F2] mb-6"
          >
            {t.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.1 }}
            className="text-xl text-[#F2F2F2]/60 font-inter"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Tactical Nodes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 30, delay: i * 0.1 }}
              className="relative p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-md overflow-hidden group"
            >
              {/* Highlight effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0511F2]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="text-5xl md:text-7xl font-playfair font-bold text-[#F2D3AC]">
                  {stat.val}
                </div>
                <div className="text-sm font-bold uppercase tracking-widest text-[#F2F2F2]/80">
                  {stat.lbl}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
