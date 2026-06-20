"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export function ForgeFAQ({ dict }: { dict: any }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  // Hardcode dict format specifically for FAQ since dict mapping isn't fully defined in en.json yet, 
  // but wait, dict.faq is passed!
  // In en.json, forge.faq has q1, a1, q2, a2, q3, a3.
  const items = [
    { q: dict.q1, a: dict.a1 },
    { q: dict.q2, a: dict.a2 },
    { q: dict.q3, a: dict.a3 },
  ].filter(i => i.q && i.a)

  return (
    <div className="max-w-3xl mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-16 text-center text-foreground">{dict.title}</h2>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="border border-border rounded-2xl bg-secondary/50 overflow-hidden">
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-black/5 transition-colors"
            >
              <span className="font-bold text-lg text-foreground pr-8 tracking-tight">{item.q}</span>
              <ChevronDown className={`w-5 h-5 text-foreground/50 flex-shrink-0 transform transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-foreground/60 text-base leading-relaxed font-inter">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}
