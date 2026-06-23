"use client"
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

const servicesData = [
  {
    id: 'web_dev',
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
  },
  {
    id: 'brand_web',
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 'meta_ads',
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  {
    id: 'automations',
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
  }
]

export function ForgeServices({ dict, currencySymbol }: { dict: any, currencySymbol: string }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const services = [
    {
      ...servicesData[0],
      title: dict.services.web_dev.title,
      desc: dict.services.web_dev.desc,
      priceSetup: '500',
      priceMo: '150',
    },
    {
      ...servicesData[1],
      title: dict.services.brand_web.title,
      desc: dict.services.brand_web.desc,
      priceSetup: '500',
      priceMo: '150',
    },
    {
      ...servicesData[2],
      title: dict.services.meta_ads.title,
      desc: dict.services.meta_ads.desc,
      priceOneTime: '300',
      priceRetainer: '250',
    },
    {
      ...servicesData[3],
      title: dict.services.automations.title,
      desc: dict.services.automations.desc,
      priceSetup: '800',
      priceMo: '200',
    }
  ]

  return (
    <section id="services" className="py-32 px-6 relative bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-24 flex flex-col md:flex-row md:justify-between md:items-end gap-8">
          <div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-foreground">{dict.pricing.title}</h2>
            <p className="text-2xl text-foreground/50 font-inter max-w-2xl">{dict.pricing.features}</p>
          </div>
        </div>

        <div className="relative border-t border-border">
          {/* Background Image Reveal (Dynamic Island style) */}
          <div className="absolute right-0 top-0 w-1/3 h-full hidden lg:block pointer-events-none z-0">
            <AnimatePresence>
              {hoveredIndex !== null && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-y-8 right-8 left-8 rounded-3xl overflow-hidden shadow-2xl"
                >
                  <Image 
                    src={services[hoveredIndex].image} 
                    alt={services[hoveredIndex].title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Interactive List */}
          <div className="relative z-10 lg:w-2/3">
            {services.map((service, i) => (
              <div 
                key={service.id}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group border-b border-border py-12 cursor-pointer transition-colors hover:bg-white/5 px-8 -mx-8 rounded-3xl"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-4xl md:text-5xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-xl text-foreground/60 font-inter max-w-lg leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  
                  <div className="flex flex-row md:flex-col gap-8 md:gap-2 text-left md:text-right">
                    {(service as any).priceSetup && (
                      <div>
                        <span className="block text-xs font-mono uppercase tracking-widest text-foreground/40 mb-1">{dict.pricing.setup}</span>
                        <span className="text-2xl font-bold">{currencySymbol}{(service as any).priceSetup}</span>
                      </div>
                    )}
                    {(service as any).priceMo && (
                      <div>
                        <span className="block text-xs font-mono uppercase tracking-widest text-accent mb-1">{dict.pricing.mo}</span>
                        <span className="text-2xl font-bold">{currencySymbol}{(service as any).priceMo}</span>
                      </div>
                    )}
                    {(service as any).priceOneTime && (
                      <div>
                        <span className="block text-xs font-mono uppercase tracking-widest text-foreground/40 mb-1">{dict.pricing.one_time}</span>
                        <span className="text-2xl font-bold">{currencySymbol}{(service as any).priceOneTime}</span>
                      </div>
                    )}
                    {(service as any).priceRetainer && (
                      <div>
                        <span className="block text-xs font-mono uppercase tracking-widest text-accent mb-1">{dict.pricing.retainer}</span>
                        <span className="text-2xl font-bold">{currencySymbol}{(service as any).priceRetainer}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
