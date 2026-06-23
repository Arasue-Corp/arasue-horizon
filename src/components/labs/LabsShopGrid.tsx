'use client'

import { motion } from 'framer-motion'

export function LabsShopGrid({ dict }: { dict: any }) {
  return (
    <section id="boutique-shop" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-black text-primary mb-4"
          >
            {dict.title}
          </motion.h2>
          <p className="text-foreground/70 font-medium tracking-wide uppercase text-sm">
            {dict.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Product 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col bg-white border border-foreground/5 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="h-64 bg-primary/5 relative overflow-hidden flex items-center justify-center p-8">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/images/labs/honey_jar_tasting.png')" }}
              />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{dict.product1_title}</h3>
              <p className="text-foreground/60 text-sm mb-6">{dict.product1_desc}</p>
              
              <div className="mt-auto flex items-center justify-between">
                <span className="text-2xl font-black text-primary">{dict.product1_price}</span>
                <button className="bg-primary/10 text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-full text-sm font-bold tracking-wider uppercase transition-colors">
                  {dict.product1_cta}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Product 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col bg-primary text-white rounded-3xl overflow-hidden shadow-2xl relative group"
          >
            <div className="absolute top-4 right-4 bg-white text-primary text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full z-10 shadow-lg">
              {dict.product2_tag}
            </div>
            <div className="h-64 bg-primary-dark relative overflow-hidden flex items-center justify-center p-8">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80 mix-blend-overlay"
                style={{ backgroundImage: "url('/images/labs/honey_jars_reserve.png')" }}
              />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h3 className="font-serif text-2xl font-bold mb-2">{dict.product2_title}</h3>
              <p className="text-white/70 text-sm mb-6 flex items-center gap-2">
                {dict.product2_desc}
              </p>
              
              <div className="mt-auto">
                <div className="flex items-end gap-3 mb-4">
                  <span className="text-3xl font-black">{dict.product2_price}</span>
                  <span className="text-white/50 line-through mb-1">{dict.product2_old_price}</span>
                </div>
                <button className="w-full bg-white text-primary hover:bg-white/90 px-6 py-4 rounded-xl text-sm font-bold tracking-wider uppercase transition-colors shadow-lg">
                  {dict.product2_cta}
                </button>
                <div className="text-center mt-3 text-xs font-bold tracking-widest uppercase opacity-70">
                  {dict.product2_shipping}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="max-w-2xl mx-auto mt-16 text-center border-t border-foreground/10 pt-12">
          <p className="text-sm text-foreground/60 font-medium leading-relaxed">
            {dict.promise}
          </p>
        </div>
      </div>
    </section>
  )
}
