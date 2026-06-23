"use client";
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function LabsRitualClient({ dict }: { dict: any }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const yCoffee = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])
  const ySpoon = useTransform(scrollYProgress, [0, 1], ["-50%", "10%"])

  return (
    <section ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 py-32 overflow-hidden">
      <div className="bg-white rounded-[3rem] border border-primary/10 shadow-2xl overflow-hidden p-12 md:p-20 relative">
        
        <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full translate-x-1/2 translate-y-1/2"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          
          <div className="order-2 md:order-1">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-xs font-bold uppercase tracking-widest mb-6 text-primary"
            >
              {dict.tag}
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-playfair text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight drop-shadow-sm"
            >
              {dict.title}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-foreground/80 mb-10 max-w-xl font-sans leading-relaxed"
            >
              {dict.subtitle}
            </motion.p>
            
            <motion.a 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              href="#shop" 
              className="inline-flex items-center gap-3 bg-foreground text-background text-sm font-bold uppercase tracking-wider px-10 py-5 rounded-full hover:bg-primary transition-colors shadow-xl"
            >
              <span>{dict.cta}</span>
              <span>🍯</span>
            </motion.a>
          </div>

          <div className="order-1 md:order-2 relative h-[500px] flex justify-center items-center">
            {/* The Isometric Abstract Art */}
            <motion.div 
              style={{ y: yCoffee }}
              className="absolute bottom-10 w-64 h-48 bg-foreground rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.3)] flex flex-col justify-end overflow-hidden border-4 border-white"
            >
              {/* Coffee inside */}
              <div className="w-full h-3/4 bg-[#1F100A] relative">
                <div className="absolute inset-x-0 top-0 h-4 bg-[#3A1F13] rounded-full blur-sm opacity-50"></div>
              </div>
            </motion.div>

            {/* The Spoon and Honey Drop */}
            <motion.div 
              style={{ y: ySpoon }}
              className="absolute top-10 flex flex-col items-center z-20"
            >
              {/* Spoon Handle */}
              <div className="w-3 h-48 bg-gradient-to-b from-gray-200 to-gray-400 rounded-t-full shadow-lg"></div>
              {/* Spoon Head */}
              <div className="w-12 h-16 bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-full shadow-xl relative -mt-2">
                {/* Honey on spoon */}
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-10 rounded-b-full bg-gradient-to-b from-secondary to-primary shadow-inner"></div>
              </div>
              
              {/* Animated Drip */}
              <motion.div 
                animate={{ 
                  scaleY: [0, 1.5, 0],
                  y: [0, 100, 150],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-2 h-12 rounded-full bg-gradient-to-b from-secondary to-primary mt-2 origin-top"
              ></motion.div>
            </motion.div>
            
          </div>

        </div>
      </div>
    </section>
  )
}
