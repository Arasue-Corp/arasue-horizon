"use client";
import { motion } from 'framer-motion'
import { CheckCircle2, XCircle } from 'lucide-react'

export function LabsComparison({ dict }: { dict: any }) {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-1 gap-6 relative">
            
            {/* The Bad */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/40 border border-foreground/10 rounded-3xl p-8 backdrop-blur-sm"
            >
              <h3 className="font-playfair text-xl font-bold text-foreground/60 mb-4">
                {dict.bad_title}
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                  <span className="text-foreground/80 text-sm font-medium">{dict.bad_1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                  <span className="text-foreground/80 text-sm font-medium">{dict.bad_2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                  <span className="text-foreground/80 text-sm font-medium">{dict.bad_3}</span>
                </li>
              </ul>
            </motion.div>

            {/* The Good */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border-2 border-primary rounded-3xl p-8 shadow-2xl relative transform lg:translate-x-6"
            >
              <div className="absolute -top-3 -right-3 bg-foreground text-background text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                {dict.good_tag}
              </div>
              <h3 className="font-playfair text-2xl font-bold text-primary mb-6">
                {dict.good_title}
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                  <span className="text-foreground font-bold text-sm md:text-base">{dict.good_1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                  <span className="text-foreground font-bold text-sm md:text-base">{dict.good_2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                  <span className="text-foreground font-bold text-sm md:text-base">{dict.good_3}</span>
                </li>
              </ul>
            </motion.div>

          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-6xl font-black text-foreground mb-8"
          >
            {dict.title.split('.')[0]}.<br/>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-foreground/70 font-sans leading-relaxed"
          >
            {dict.subtitle}
          </motion.p>
        </div>

      </div>
    </section>
  )
}
