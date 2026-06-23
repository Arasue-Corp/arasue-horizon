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
  },
  {
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    tags: ["Webhooks", "REST APIs", "GraphQL"],
    dictKey: 6
  },
  {
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    tags: ["OpenAI", "LangChain", "Vector DB"],
    dictKey: 7
  },
  {
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop",
    tags: ["Autogen", "Python", "Docker"],
    dictKey: 8
  },
  {
    image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=2070&auto=format&fit=crop",
    tags: ["n8n", "Zapier", "Node.js"],
    dictKey: 9
  },
  {
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop",
    tags: ["Agile", "Jira", "Sprint"],
    dictKey: 10
  }
]

function PortfolioItem({ dict, project, index }: { dict: any, project: any, index: number }) {
  // We'll use a local hover state for the image scale, but keep it mostly CSS driven
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="group relative w-[85vw] md:w-[60vw] lg:w-[45vw] h-[60vh] md:h-[70vh] flex-shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-[#131926] shadow-2xl"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image 
          src={project.image} 
          alt={dict[`project${project.dictKey}_title`]} 
          fill 
          className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)]"
        />
        {/* Deep Slate Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-10">
        <div className="overflow-hidden mb-4">
          <div className="text-[#05F2DB] font-mono text-xs md:text-sm uppercase tracking-widest flex items-center gap-3 translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
            <span className="w-8 h-[1px] bg-[#05F2DB]"></span>
            {dict[`project${project.dictKey}_category`]}
          </div>
        </div>
        
        <div className="overflow-hidden mb-4">
          <h3 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight text-white translate-y-0 group-hover:-translate-y-2 transition-transform duration-500 delay-75">
            {dict[`project${project.dictKey}_title`]}
          </h3>
        </div>

        <div className="overflow-hidden mb-8">
          <p className="text-sm md:text-base text-white/70 font-inter leading-relaxed max-w-lg translate-y-0 group-hover:-translate-y-2 transition-transform duration-500 delay-100">
            {dict[`project${project.dictKey}_desc`]}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 font-mono translate-y-0 group-hover:-translate-y-2 transition-transform duration-500 delay-150">
          {project.tags.map((tag: string, i: number) => (
            <span key={i} className="px-3 py-1.5 border border-white/10 bg-white/5 backdrop-blur-md text-[10px] md:text-xs uppercase tracking-wider text-white/90">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function ForgePortfolio({ dict }: { dict: any }) {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // We have 10 items now. We need more scroll space.
  // -90% translates the long track almost to the end.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"])

  return (
    <section ref={targetRef} id="work" className="relative h-[600vh] bg-[#0B0F19]">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex flex-col items-start justify-center overflow-hidden border-y border-white/5">
        
        {/* Background ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-[#0511F2]/10 blur-[150px] rounded-full pointer-events-none" />

        {/* Section Header */}
        <div className="container mx-auto px-6 md:px-12 w-full flex-shrink-0 mb-12 relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0511F2]/20 border border-[#0511F2]/30 text-[#05F2DB] text-xs font-bold font-mono tracking-widest uppercase mb-6"
          >
            Showcase
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black tracking-tighter text-white leading-[1.1] mb-4"
          >
            {dict.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/50 font-inter max-w-2xl"
          >
            {dict.subtitle}
          </motion.p>
        </div>

        {/* Horizontal Scrolling Track */}
        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-12 w-[850vw] md:w-[620vw] lg:w-[480vw] relative z-20 items-center">
          {projects.map((project, i) => (
            <PortfolioItem key={i} dict={dict} project={project} index={i} />
          ))}
        </motion.div>

      </div>
    </section>
  )
}
