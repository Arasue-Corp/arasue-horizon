'use client'

import { motion } from 'framer-motion'

const images = [
  {
    url: 'https://images.unsplash.com/photo-1587049352847-81a56d773c1c?q=80&w=1600&auto=format&fit=crop',
    title: 'Pure Amber',
    desc: 'Unfiltered, unheated, raw perfection.'
  },
  {
    url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop',
    title: 'The Origin',
    desc: 'Deep within the Sonoran Desert.'
  },
  {
    url: 'https://images.unsplash.com/photo-1559564022-777fc9a5e840?q=80&w=1600&auto=format&fit=crop',
    title: 'The Ritual',
    desc: 'Elevate your daily culinary experience.'
  }
]

export function LabsGallery({ dict }: { dict?: any }) {
  return (
    <section className="py-24 bg-background overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-black text-primary mb-4">
            {dict?.title || "Visualizing the Standard"}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <p className="text-foreground/70 font-medium tracking-widest uppercase text-xs md:text-sm">
            {dict?.subtitle || "A Glimpse into the Arasue Labs Aesthetic"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 h-[800px]">
          {/* Main Large Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8 relative rounded-3xl overflow-hidden group h-full"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              style={{ backgroundImage: `url('${images[0].url}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="font-serif text-3xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{images[0].title}</h3>
              <p className="text-white/70 tracking-widest text-sm uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{images[0].desc}</p>
            </div>
          </motion.div>

          {/* Side Stack */}
          <div className="md:col-span-4 flex flex-col gap-6 md:gap-8 h-full">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 relative rounded-3xl overflow-hidden group"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url('${images[1].url}')` }}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-serif text-xl font-bold mb-1">{images[1].title}</h3>
                <p className="text-white/70 text-xs tracking-widest uppercase">{images[1].desc}</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex-1 relative rounded-3xl overflow-hidden group"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url('${images[2].url}')` }}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-serif text-xl font-bold mb-1">{images[2].title}</h3>
                <p className="text-white/70 text-xs tracking-widest uppercase">{images[2].desc}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
