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
    <section id="services" className="py-16 px-6 relative bg-background border-b border-border">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col md:flex-row md:justify-between md:items-end gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-foreground">{dict.pricing.title}</h2>
            <p className="text-lg text-foreground/50 font-inter max-w-2xl">{dict.pricing.features}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-border">
          {services.map((service, i) => (
            <div 
              key={service.id}
              className="group border-r border-b border-border p-8 relative overflow-hidden bg-background hover:bg-secondary/20 transition-colors flex flex-col"
            >
              {/* Image Reveal Background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-0 pointer-events-none">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative z-10 flex-1">
                <h3 className="text-2xl font-bold mb-3 text-foreground tracking-tight group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-foreground/60 font-inter leading-relaxed mb-8">
                  {service.desc}
                </p>
              </div>
              
              <div className="relative z-10 pt-6 border-t border-border/50 flex flex-col gap-3">
                {(service as any).priceSetup && (
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono uppercase tracking-widest text-foreground/40">{dict.pricing.setup}</span>
                    <span className="font-bold">{currencySymbol}{(service as any).priceSetup}</span>
                  </div>
                )}
                {(service as any).priceMo && (
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono uppercase tracking-widest text-accent">{dict.pricing.mo}</span>
                    <span className="font-bold text-lg">{currencySymbol}{(service as any).priceMo}</span>
                  </div>
                )}
                {(service as any).priceOneTime && (
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono uppercase tracking-widest text-foreground/40">{dict.pricing.one_time}</span>
                    <span className="font-bold">{currencySymbol}{(service as any).priceOneTime}</span>
                  </div>
                )}
                {(service as any).priceRetainer && (
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono uppercase tracking-widest text-accent">{dict.pricing.retainer}</span>
                    <span className="font-bold text-lg">{currencySymbol}{(service as any).priceRetainer}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
