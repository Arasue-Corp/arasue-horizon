"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

export function ForgeFAQ({ dict }: { dict: any }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const items = dict.questions || []

  return (
    <section className="py-32 px-6 relative bg-[#0B0F19] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#162D59]/20 via-[#0B0F19] to-[#0B0F19] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="text-[#05F2DB] font-mono text-xs uppercase tracking-widest mb-4 flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-[#05F2DB]"></span>
            Intelligence
            <span className="w-8 h-[1px] bg-[#05F2DB]"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">{dict.title}</h2>
        </div>
        
        <div className="space-y-4">
          {items.map((item: any, i: number) => {
            const isOpen = openIndex === i
            
            return (
              <motion.div 
                key={i} 
                initial={false}
                animate={{
                  backgroundColor: isOpen ? 'rgba(19, 25, 38, 1)' : 'rgba(19, 25, 38, 0.4)',
                  borderColor: isOpen ? 'rgba(5, 242, 219, 0.3)' : 'rgba(255, 255, 255, 0.1)'
                }}
                className="border rounded-2xl overflow-hidden backdrop-blur-sm transition-colors duration-500"
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
                >
                  <span className={`font-bold text-lg md:text-xl pr-8 tracking-tight transition-colors duration-300 ${isOpen ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
                    {item.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-500 ${isOpen ? 'border-[#05F2DB] bg-[#05F2DB]/10' : 'border-white/20 group-hover:border-white/40'}`}>
                    <Plus className={`w-4 h-4 transition-transform duration-500 ${isOpen ? 'rotate-45 text-[#05F2DB]' : 'text-white/60'}`} />
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 md:p-8 pt-0 text-white/60 text-lg leading-relaxed font-inter">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
