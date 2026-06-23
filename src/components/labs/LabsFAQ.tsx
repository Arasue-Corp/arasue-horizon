'use client'

import { motion } from 'framer-motion'

export function LabsFAQ({ dict }: { dict: any }) {
  const faqs = [
    { q: dict.q1, a: dict.a1 },
    { q: dict.q2, a: dict.a2 },
    { q: dict.q3, a: dict.a3 }
  ]

  return (
    <section className="py-24 bg-primary text-white border-t border-white/10">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-black mb-4"
          >
            {dict.title}
          </motion.h2>
        </div>

        <div className="space-y-8">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border-b border-white/20 pb-8"
            >
              <h3 className="text-xl font-bold font-serif mb-3">
                {faq.q}
              </h3>
              <p className="text-white/70 leading-relaxed text-sm md:text-base">
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
