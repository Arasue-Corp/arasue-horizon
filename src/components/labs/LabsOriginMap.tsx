"use client";
import { motion, useScroll, useTransform } from 'framer-motion'
import { MapPin, Navigation } from 'lucide-react'
import { useRef } from 'react'

export function LabsOriginMap({ dict }: { dict: any }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"])

  return (
    <section ref={ref} className="relative z-10 bg-foreground text-background py-32 overflow-hidden border-y-[8px] border-primary">
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        <motion.div 
          style={{ y, backgroundImage: "url('https://images.unsplash.com/photo-1542838686-37ed7a93ccbc?q=80&w=2000&auto=format&fit=crop')" }}
          className="absolute inset-0 w-full h-[130%] -top-[15%] bg-cover bg-center grayscale"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <div className="w-full md:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center animate-pulse">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary font-bold">
                {dict.tag}
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-playfair text-5xl md:text-6xl font-black mb-8 leading-tight"
            >
              {dict.title}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-background/70 font-sans leading-relaxed"
            >
              {dict.subtitle}
            </motion.p>
          </div>

          <div className="w-full md:w-1/2 relative h-[400px]">
            {/* Abstract Radar/Node UI */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-[300px] h-[300px] rounded-full border border-primary/30 relative flex items-center justify-center">
                <div className="w-[200px] h-[200px] rounded-full border border-primary/50 relative flex items-center justify-center">
                  <div className="w-[100px] h-[100px] rounded-full bg-primary/20 backdrop-blur-md relative flex items-center justify-center">
                    <Navigation className="w-8 h-8 text-primary" />
                  </div>
                  {/* Radar sweep */}
                  <div className="absolute inset-0 rounded-full border-r-2 border-primary animate-spin" style={{ animationDuration: '4s' }}></div>
                </div>
              </div>
              
              {/* Data points */}
              <div className="absolute top-10 right-10 bg-background/10 backdrop-blur-md border border-background/20 p-4 rounded-xl text-xs font-mono">
                <span className="text-primary block mb-1">LAT / LONG</span>
                30.3421° N<br/>
                112.0150° W
              </div>
              
              <div className="absolute bottom-10 left-10 bg-background/10 backdrop-blur-md border border-background/20 p-4 rounded-xl text-xs font-mono">
                <span className="text-primary block mb-1">FLORA_DENSITY</span>
                Mesquite_94%<br/>
                Status_Optimal
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
