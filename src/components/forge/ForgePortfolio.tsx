"use client"
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const projects = [
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tags: ["Next.js", "PostgreSQL", "Stripe API"]
  },
  {
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop",
    tags: ["React Native", "GraphQL", "Shopify"]
  }
]

function PortfolioItem({ dict, project, index }: { dict: any, project: any, index: number }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <div ref={ref} className="relative aspect-square md:aspect-auto md:h-[50vh] w-full flex flex-col items-center justify-center overflow-hidden border-b border-border last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 group">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[140%] -top-[20%]">
        <Image 
          src={project.image} 
          alt="Portfolio Item" 
          fill 
          className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
        />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-700" />
      </motion.div>

      {/* Content Overlay */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center text-white p-6 max-w-sm flex flex-col items-center"
      >
        <div className="text-white/70 font-mono text-xs uppercase tracking-widest mb-2">
          {index === 0 ? dict.project1_category : dict.project2_category}
        </div>
        <h3 className="text-2xl md:text-3xl font-black mb-3 tracking-tight leading-tight">
          {index === 0 ? dict.project1_title : dict.project2_title}
        </h3>
        <p className="text-xs text-white/80 font-medium mb-6 font-inter leading-relaxed">
          {index === 0 ? dict.project1_desc : dict.project2_desc}
        </p>
        
        <div className="flex flex-wrap gap-2 justify-center font-mono">
          {project.tags.map((tag: string, i: number) => (
            <span key={i} className="px-3 py-1.5 border border-white/20 bg-black/30 backdrop-blur-md text-[10px] uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export function ForgePortfolio({ dict }: { dict: any }) {
  return (
    <section id="work" className="py-16 px-6 bg-background border-b border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-foreground"
          >
            {dict.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base text-foreground/60 max-w-2xl mx-auto font-inter"
          >
            {dict.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border border-border bg-background">
          {projects.map((project, i) => (
            <PortfolioItem key={i} dict={dict} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
