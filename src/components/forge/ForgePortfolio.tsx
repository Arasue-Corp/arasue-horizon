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
    <div ref={ref} className="relative aspect-square md:aspect-[4/5] w-full flex flex-col items-center justify-center overflow-hidden rounded-3xl group">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[140%] -top-[20%]">
        <Image 
          src={project.image} 
          alt="Portfolio Item" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-700" />
      </motion.div>

      {/* Content Overlay */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center text-white p-6 max-w-sm flex flex-col items-center"
      >
        <div className="text-white/70 font-mono text-xs uppercase tracking-widest mb-3">
          {index === 0 ? dict.project1_category : dict.project2_category}
        </div>
        <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight leading-tight">
          {index === 0 ? dict.project1_title : dict.project2_title}
        </h3>
        <p className="text-sm text-white/80 font-medium mb-6 font-inter leading-relaxed">
          {index === 0 ? dict.project1_desc : dict.project2_desc}
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center font-mono">
          {project.tags.map((tag: string, i: number) => (
            <span key={i} className="px-6 py-3 rounded-full border border-white/20 bg-black/30 backdrop-blur-md text-sm">
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
    <section id="work" className="py-32 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-32 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-[8rem] font-bold tracking-tighter mb-6 text-foreground"
          >
            {dict.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl text-foreground/60 max-w-3xl mx-auto font-inter"
          >
            {dict.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <PortfolioItem key={i} dict={dict} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
