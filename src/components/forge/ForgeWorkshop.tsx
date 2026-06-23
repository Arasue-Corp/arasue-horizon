"use client"
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { ArrowUpRight, Blocks, Code2, Database } from 'lucide-react'

const demos = [
  {
    id: "ecommerce",
    title: "E-Commerce Headless",
    category: "Retail / CPG",
    tech: ["Next.js", "Shopify API", "Tailwind"],
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "dashboard-facturas",
    title: "Fintech Dashboard",
    category: "SaaS / B2B",
    tech: ["React", "PostgreSQL", "Recharts"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "construction",
    title: "Enterprise Landing",
    category: "Construction / Real Estate",
    tech: ["Framer Motion", "Next.js"],
    image: "https://images.unsplash.com/photo-1541888087525-2bf54dea2fa7?q=80&w=2070&auto=format&fit=crop"
  }
]

export function ForgeWorkshop({ dict, lang }: { dict: any, lang: string }) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={containerRef} className="py-32 px-6 bg-background relative overflow-hidden border-b border-border">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-primary)_0%,transparent_20%)] opacity-5 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--color-secondary)_0%,transparent_40%)] opacity-50 pointer-events-none" />
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 border-b border-border/50 pb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold font-mono tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_var(--color-primary)]"></span>
              Live Lab
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-foreground leading-tight"
            >
              {dict?.title || "Workshop & Demos"}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-foreground/60 font-inter"
            >
              {dict?.subtitle || "Explore interactive prototypes and reference architectures ready for deployment."}
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <Link 
              href={`/${lang}/workshop`}
              className="px-6 py-3 rounded-lg border border-border bg-secondary hover:bg-secondary/80 text-foreground text-sm font-bold transition-colors flex items-center gap-2 group"
            >
              Explore Full Workshop 
              <ArrowUpRight className="w-4 h-4 text-foreground/50 group-hover:text-primary transition-colors" />
            </Link>
          </motion.div>
        </div>

        {/* Demos Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {demos.map((demo, i) => (
            <motion.div
              key={demo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-secondary/30 border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
            >
              {/* Image Area */}
              <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-border">
                <Image 
                  src={demo.image}
                  alt={demo.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 bg-black/50 backdrop-blur-md text-[10px] uppercase font-bold tracking-wider text-white rounded border border-white/10">
                    {demo.category}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors">
                  {demo.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {demo.tech.map((t, idx) => (
                    <span key={idx} className="text-xs font-mono text-foreground/50 border border-border px-2 py-1 rounded bg-background/50">
                      {t}
                    </span>
                  ))}
                </div>

                <Link 
                  href={`/${lang}/workshop/demo/${demo.id === 'construction' ? 'construction-company' : demo.id}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors"
                >
                  {dict?.view_demo || "View Demo"} <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
