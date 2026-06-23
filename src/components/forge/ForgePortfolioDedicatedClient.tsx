"use client";
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'

const projects = [
  {
    dictKey: 1,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-2",
    aspect: "aspect-[2/1]"
  },
  {
    dictKey: 2,
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop",
    colSpan: "col-span-1",
    aspect: "aspect-square"
  },
  {
    dictKey: 3,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    colSpan: "col-span-1",
    aspect: "aspect-square"
  },
  {
    dictKey: 4,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-2",
    aspect: "aspect-[2/1]"
  },
  {
    dictKey: 5,
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop",
    colSpan: "col-span-1",
    aspect: "aspect-[4/3]"
  },
  {
    dictKey: 6,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    colSpan: "col-span-1",
    aspect: "aspect-[4/3]"
  },
  {
    dictKey: 7,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-2",
    aspect: "aspect-[2/1]"
  },
  {
    dictKey: 8,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop",
    colSpan: "col-span-1",
    aspect: "aspect-square"
  },
  {
    dictKey: 9,
    image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=2070&auto=format&fit=crop",
    colSpan: "col-span-1",
    aspect: "aspect-square"
  },
  {
    dictKey: 10,
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-2",
    aspect: "aspect-[2/1]"
  }
]

function ProjectCard({ project, dictWork }: { project: any, dictWork: any }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  // Parallax effect for the image inside the card
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`relative overflow-hidden rounded-[2.5rem] group ${project.colSpan} ${project.aspect}`}
    >
      <motion.img 
        style={{ y }}
        src={project.image} 
        alt={dictWork[`project${project.dictKey}_title`]}
        className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover"
      />
      
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-90" />

      <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex items-end justify-between">
        <div className="text-white max-w-xl">
          <div className="text-xs font-mono uppercase tracking-widest text-white/70 mb-3">
            {dictWork[`project${project.dictKey}_category`]}
          </div>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            {dictWork[`project${project.dictKey}_title`]}
          </h3>
          <p className="text-white/60 font-inter opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hidden md:block">
            {dictWork[`project${project.dictKey}_desc`]}
          </p>
        </div>
        
        <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-xl shrink-0">
          <ArrowUpRight className="w-6 h-6" />
        </div>
      </div>
    </motion.div>
  )
}

export function ForgePortfolioDedicatedClient({ dictPage, dictWork, lang }: { dictPage: any, dictWork: any, lang: string }) {
  return (
    <div className="container mx-auto px-6 max-w-7xl mb-24">
      {/* Hero Section */}
      <div className="mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-foreground/10 bg-foreground/5 text-xs font-bold uppercase tracking-widest mb-6">
            Case Studies
          </div>
          <h1 className="text-6xl md:text-[7rem] font-black tracking-tighter leading-[0.9] mb-8">
            {dictPage.title}
          </h1>
          <p className="text-2xl text-foreground/60 font-inter max-w-2xl">
            {dictPage.subtitle}
          </p>
        </motion.div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} dictWork={dictWork} />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-32 bg-secondary/50 rounded-[3rem] p-12 md:p-24 text-center border border-border relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl -z-10" />
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Next project? Yours.</h2>
        <p className="text-xl text-foreground/60 mb-12 max-w-xl mx-auto">
          Stop compromising on engineering quality. Partner with us and scale your digital products today.
        </p>
        <Link href={`/${lang}/forge/contact`} className="inline-flex items-center justify-center px-12 py-5 rounded-full bg-foreground text-background font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
          Book a Discovery Call
        </Link>
      </div>
    </div>
  )
}
