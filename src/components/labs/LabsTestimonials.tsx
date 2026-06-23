'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export function LabsTestimonials({ dict }: { dict: any }) {
  const testimonials = [
    { text: dict.t1_text, author: dict.t1_author },
    { text: dict.t2_text, author: dict.t2_author },
    { text: dict.t3_text, author: dict.t3_author }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-black text-foreground mb-4"
          >
            {dict.title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/50 border border-foreground/5 rounded-3xl p-8 shadow-sm flex flex-col items-center text-center"
            >
              <div className="flex gap-1 text-amber-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-foreground/80 font-serif italic text-lg leading-relaxed mb-8 flex-1">
                {t.text}
              </p>
              <div className="text-sm font-bold tracking-widest uppercase text-primary">
                — {t.author}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
