"use client";
import { motion } from 'framer-motion'
import Image from 'next/image'

const derivativesImages: Record<string, string> = {
  honey_mesquite: "https://images.unsplash.com/photo-1587049352851-8d4e89134a13?q=80&w=1000&auto=format&fit=crop",
  honey_multiflora: "https://images.unsplash.com/photo-1606775927599-fc9058b29ff5?q=80&w=1000&auto=format&fit=crop",
  pollen: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1000&auto=format&fit=crop",
  royal_jelly: "https://images.unsplash.com/photo-1558231336-1215bbd5c5a0?q=80&w=1000&auto=format&fit=crop",
  propolis: "https://images.unsplash.com/photo-1615486171448-4fd0a790f5c6?q=80&w=1000&auto=format&fit=crop",
  wax: "https://images.unsplash.com/photo-1605007493699-af65834f8a00?q=80&w=1000&auto=format&fit=crop"
}

const cols: Record<string, string> = {
  honey_mesquite: "col-span-1 md:col-span-2 aspect-[2/1] md:aspect-auto",
  honey_multiflora: "col-span-1 aspect-square",
  pollen: "col-span-1 aspect-square",
  royal_jelly: "col-span-1 aspect-square",
  propolis: "col-span-1 aspect-square",
  wax: "col-span-1 md:col-span-2 aspect-[2/1] md:aspect-auto"
}

export function LabsDerivativesClient({ dict }: { dict: any }) {
  const keys = ['honey_mesquite', 'honey_multiflora', 'pollen', 'royal_jelly', 'propolis', 'wax']

  return (
    <section id="collection" className="relative z-10 max-w-7xl mx-auto px-6 py-24">
      <div className="mb-16">
        <h2 className="font-playfair text-5xl md:text-7xl font-black text-foreground mb-4">
          {dict.title}
        </h2>
        <div className="w-24 h-2 bg-primary rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
        {keys.map((key, i) => {
          const item = dict[key]
          if (!item) return null

          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 300, damping: 30 }}
              className={`relative group rounded-[2.5rem] overflow-hidden bg-foreground/5 border border-foreground/10 ${cols[key]}`}
            >
              <Image 
                src={derivativesImages[key]} 
                alt={item.title} 
                fill 
                className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] grayscale-[30%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-background">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-playfair text-3xl font-bold mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-background/80 text-sm md:text-base max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
