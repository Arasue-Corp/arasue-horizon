"use client";
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export function LabsFlagshipClient({ dict }: { dict: any }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <section id="flagship" className="relative z-10 w-full min-h-[95vh] flex flex-col justify-center items-center py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-playfair italic text-primary text-xl md:text-2xl mb-6"
        >
          {dict.origin}
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-playfair text-5xl md:text-[6rem] font-black text-foreground leading-[1.05] mb-8"
        >
          {dict.title.split('from the Desert.')[0]} <br/>
          <span className="text-primary">from the Desert.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-2xl text-foreground/80 mb-12 max-w-3xl font-sans leading-relaxed"
        >
          {dict.subtitle}
        </motion.p>
        
        <motion.a 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          href="#collection" 
          className="w-full sm:w-auto bg-foreground text-background text-lg font-bold px-12 py-5 rounded-full shadow-2xl hover:scale-105 transition-transform"
        >
          {dict.cta}
        </motion.a>
        
      </div>

      {/* Floating Hero Image element */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 20 }}
        className="mt-24 relative w-full max-w-2xl mx-auto h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/50"
      >
        <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
          <Image 
            src="https://images.unsplash.com/photo-1587049352847-81a56d773c1c?q=80&w=2000&auto=format&fit=crop" 
            alt="Sonoran Honey Collection" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}
