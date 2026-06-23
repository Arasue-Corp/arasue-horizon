"use client"
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const projects = [
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tags: ["Next.js", "PostgreSQL", "Stripe API"],
    dictKey: 1
  },
  {
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop",
    tags: ["React Native", "GraphQL", "Shopify"],
    dictKey: 2
  },
  {
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop",
    tags: ["Next.js", "Tailwind CSS"],
    dictKey: 3
  },
  {
    image: "https://images.unsplash.com/photo-1503375894024-5db6050b4d45?q=80&w=2070&auto=format&fit=crop",
    tags: ["Next.js", "Framer Motion"],
    dictKey: 4
  },
  {
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop",
    tags: ["Next.js", "Tailwind CSS", "React"],
    dictKey: 5
  }
]

function PortfolioItem({ dict, project, index }: { dict: any, project: any, index: number }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])
  
  // Make the first item large and prominent
  const isLarge = index === 0

  return (
    <div 
      ref={ref} 
      className={`relative w-full flex flex-col items-center justify-center overflow-hidden border-border group ${
        isLarge 
          ? 'aspect-square md:aspect-auto md:h-[70vh] md:col-span-2 border-b' 
          : 'aspect-square md:aspect-auto md:h-[50vh] border-b last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 md:[&:nth-child(even)]:border-b'
      }`}
    >
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
        <Image 
          src={project.image} 
          alt={dict[`project${project.dictKey}_title`]} 
          fill 
          className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/60 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />
      </motion.div>

      {/* Content Overlay */}
      <div className={`relative z-10 w-full p-8 md:p-12 flex flex-col justify-end h-full`}>
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-mono text-xs md:text-sm uppercase tracking-widest mb-4 flex items-center gap-3"
          >
            <span className="w-8 h-[1px] bg-primary"></span>
            {dict[`project${project.dictKey}_category`]}
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`${isLarge ? 'text-4xl md:text-6xl' : 'text-3xl md:text-4xl'} font-black mb-4 tracking-tighter leading-tight text-white group-hover:text-primary-foreground transition-colors`}
          >
            {dict[`project${project.dictKey}_title`]}
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`${isLarge ? 'text-base md:text-lg' : 'text-sm'} text-white/70 font-medium mb-8 font-inter leading-relaxed max-w-xl`}
          >
            {dict[`project${project.dictKey}_desc`]}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-2 font-mono"
          >
            {project.tags.map((tag: string, i: number) => (
              <span key={i} className="px-3 py-1.5 border border-white/10 bg-white/5 backdrop-blur-md text-[10px] md:text-xs uppercase tracking-wider text-white/90">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export function ForgePortfolio({ dict }: { dict: any }) {
  return (
    <section id="work" className="py-32 px-6 bg-[#0B0F19] border-y border-border relative overflow-hidden">
      {/* Premium ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="mb-24 md:mb-32 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold font-mono tracking-widest uppercase mb-8"
          >
            Case Studies
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black tracking-tighter mb-6 text-white leading-[1.1]"
          >
            {dict.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 font-inter leading-relaxed"
          >
            {dict.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border border-white/10 bg-[#0B0F19] rounded-2xl overflow-hidden shadow-2xl">
          {projects.map((project, i) => (
            <PortfolioItem key={i} dict={dict} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
