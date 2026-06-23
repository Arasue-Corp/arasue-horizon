"use client";
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export function LabsCorporateHeroClient({ dict }: { dict: any }) {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-background pt-24">
      {/* Abstract Corporate Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-secondary/40 rounded-full blur-[120px] mix-blend-multiply opacity-70"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] mix-blend-multiply opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-foreground/20 bg-foreground/5 text-xs font-bold uppercase tracking-[0.2em] mb-8 text-foreground/80">
            {dict.tag}
          </span>
          
          <h1 className="font-playfair text-6xl md:text-[7rem] font-black tracking-tighter leading-[0.95] mb-8 text-foreground drop-shadow-sm">
            {dict.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 font-sans max-w-3xl mx-auto leading-relaxed mb-16">
            {dict.subtitle}
          </p>
          
          <motion.a 
            href="#flagship"
            className="group flex flex-col items-center gap-4 cursor-pointer"
            whileHover={{ y: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              {dict.scroll}
            </span>
            <div className="w-10 h-10 rounded-full border border-primary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <ArrowDown className="w-4 h-4" />
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
