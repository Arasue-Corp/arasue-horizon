'use client'

import { motion } from 'framer-motion'

export function LabsOriginClient({ dict }: { dict: any }) {
  return (
    <section className="relative min-h-screen py-24 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542838686-37ed7a93ccbc?q=80&w=2000&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-black text-primary mb-6 leading-tight"
          >
            {dict.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-foreground/80 font-light leading-relaxed"
          >
            {dict.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { t: dict.use1_title, d: dict.use1_desc },
            { t: dict.use2_title, d: dict.use2_desc },
            { t: dict.use3_title, d: dict.use3_desc }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (idx * 0.1) }}
              className="bg-background/50 border border-primary/20 backdrop-blur-md p-8 rounded-2xl text-center"
            >
              <h4 className="text-xl font-bold font-serif text-primary mb-3">{item.t}</h4>
              <p className="text-foreground/70 text-sm leading-relaxed">{item.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
