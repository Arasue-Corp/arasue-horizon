"use client"
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
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
  const [isMexico, setIsMexico] = useState(false)
  
  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz && (tz.includes('Mexico') || tz.includes('America/Monterrey') || tz.includes('America/Cancun'))) {
        setIsMexico(true);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const services = [
    {
      ...servicesData[0],
      title: dict.services.web_dev.title,
      desc: dict.services.web_dev.desc,
      priceSetup: isMexico ? '10,000' : '500',
      priceMo: isMexico ? '3,000' : '150',
    },
    {
      ...servicesData[1],
      title: dict.services.brand_web.title,
      desc: dict.services.brand_web.desc,
      priceSetup: isMexico ? '10,000' : '500',
      priceMo: isMexico ? '3,000' : '150',
    },
    {
      ...servicesData[2],
      title: dict.services.meta_ads.title,
      desc: dict.services.meta_ads.desc,
      priceOneTime: isMexico ? '6,000' : '300',
      priceRetainer: isMexico ? '5,000' : '250',
    },
    {
      ...servicesData[3],
      title: dict.services.automations.title,
      desc: dict.services.automations.desc,
      priceSetup: isMexico ? '16,000' : '800',
      priceMo: isMexico ? '4,000' : '200',
    }
  ]

  return (
    <section id="services" className="py-32 px-6 relative bg-[#0c0c0c] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#826239]/30 via-[#0c0c0c] to-[#0c0c0c] pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="mb-20 text-center md:text-left">
          <div className="text-[#bc9665] font-mono text-xs uppercase tracking-widest mb-6 flex items-center justify-center md:justify-start gap-3">
            <span className="w-8 h-[1px] bg-[#bc9665]"></span>
            Ecosistema de Soluciones
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-white leading-tight">{dict.pricing.title}</h2>
          <p className="text-xl text-white/50 font-inter max-w-2xl mx-auto md:mx-0 leading-relaxed">{dict.pricing.features}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={service.id}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="group relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#262626] p-8 md:p-12 flex flex-col justify-between min-h-[480px]"
            >
              {/* Background Image with Parallax & Color Reveal */}
              <motion.div 
                variants={{
                  rest: { scale: 1, opacity: 0.15, filter: 'grayscale(100%)' },
                  hover: { scale: 1.05, opacity: 0.4, filter: 'grayscale(0%)' }
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 z-0 origin-center"
              >
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                {/* Gradients to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/80 to-transparent" />
                <div className="absolute inset-0 bg-[#a67d48]/10 mix-blend-overlay" />
              </motion.div>

              {/* Glowing Hover Border */}
              <div className="absolute inset-0 border-2 border-[#bc9665]/0 group-hover:border-[#bc9665]/20 rounded-[2rem] transition-colors duration-500 z-20 pointer-events-none" />

              {/* Content Header */}
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-8 bg-black/50 backdrop-blur-md group-hover:border-[#bc9665] group-hover:shadow-[0_0_20px_rgba(188,150,101,0.4)] transition-all duration-500">
                  <span className="font-mono text-white/50 group-hover:text-[#bc9665] transition-colors text-xs">0{i+1}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight leading-tight">{service.title}</h3>
                <p className="text-white/60 font-inter text-lg leading-relaxed max-w-sm">{service.desc}</p>
              </div>
              
              {/* Pricing Glass Box */}
              <motion.div 
                variants={{
                  rest: { y: 0, backgroundColor: 'rgba(0,0,0,0.3)' },
                  hover: { y: -5, backgroundColor: 'rgba(0,0,0,0.6)' }
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative z-10 mt-12 p-6 rounded-2xl border border-white/10 backdrop-blur-xl flex flex-col gap-4 group-hover:border-[#bc9665]/30"
              >
                {/* Setup / One Time */}
                {((service as any).priceSetup || (service as any).priceOneTime) && (
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-xs font-mono uppercase tracking-widest text-white/40">
                      {(service as any).priceSetup ? dict.pricing.setup : dict.pricing.one_time}
                    </span>
                    <span className="font-bold text-white tracking-tight">
                      {currencySymbol}{(service as any).priceSetup || (service as any).priceOneTime} 
                      <span className="text-[10px] text-[#bc9665] ml-1">{isMexico ? 'MXN' : 'USD'}</span>
                    </span>
                  </div>
                )}
                
                {/* Monthly / Retainer */}
                {((service as any).priceMo || (service as any).priceRetainer) && (
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#bc9665] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#bc9665] animate-pulse" />
                      {(service as any).priceMo ? dict.pricing.mo : dict.pricing.retainer}
                    </span>
                    <span className="font-black text-3xl text-white tracking-tighter">
                      {currencySymbol}{(service as any).priceMo || (service as any).priceRetainer} 
                      <span className="text-xs text-white/40 font-normal ml-1">{isMexico ? 'MXN' : 'USD'}</span>
                    </span>
                  </div>
                )}
              </motion.div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
