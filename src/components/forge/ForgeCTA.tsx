"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function ForgeCTA({ dict, lang, contactLabel }: { dict: any, lang: string, contactLabel: string }) {
  return (
    <section className="py-40 px-6 bg-[#0c0c0c] relative overflow-hidden flex items-center justify-center min-h-[80vh]">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-30 pointer-events-none" />
      
      {/* Cybernetic Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#a67d48]/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#bc9665]/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-5xl text-center relative z-10 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-12"
        >
          <span className="w-2 h-2 rounded-full bg-[#bc9665] animate-pulse" />
          <span className="text-white/80 font-mono text-sm uppercase tracking-widest">Sistemas en línea</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-[8rem] font-black tracking-tighter mb-8 leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/30"
        >
          {dict.title}
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-3xl text-white/50 mb-20 font-inter font-medium max-w-3xl"
        >
          {dict.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link href={`/${lang}/forge/contact`} className="group relative inline-flex items-center justify-center px-12 py-6 font-bold text-lg md:text-xl text-white overflow-hidden rounded-full bg-[#262626] border border-white/10 hover:border-[#bc9665]/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(188,150,101,0.3)]">
            <span className="absolute inset-0 bg-gradient-to-r from-[#a67d48] to-[#bc9665] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center gap-4">
              {contactLabel}
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 text-[#bc9665]" />
            </span>
          </Link>
        </motion.div>
        
      </div>
    </section>
  )
}
