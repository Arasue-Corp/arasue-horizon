"use client"
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'

const projects = [
  {
    title: "Global Payment Dashboard",
    category: "Fintech Platform",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-2",
    aspect: "aspect-[2/1]"
  },
  {
    title: "Premium Retail Experience",
    category: "E-Commerce App",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop",
    colSpan: "col-span-1",
    aspect: "aspect-square"
  },
  {
    title: "Logistics Engine",
    category: "Enterprise Software",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    colSpan: "col-span-1",
    aspect: "aspect-square"
  },
  {
    title: "AI Healthcare Diagnostics",
    category: "Machine Learning UI",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-2",
    aspect: "aspect-[2/1]"
  }
]

function ProjectCard({ project }: { project: any }) {
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
        alt={project.title}
        className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover"
      />
      
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

      <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex items-end justify-between">
        <div className="text-white">
          <div className="text-xs font-mono uppercase tracking-widest text-white/70 mb-3">
            {project.category}
          </div>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
            {project.title}
          </h3>
        </div>
        
        <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-xl">
          <ArrowUpRight className="w-6 h-6" />
        </div>
      </div>
    </motion.div>
  )
}

export default function ForgePortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-24">
      
      {/* Hero Section */}
      <div className="container mx-auto px-6 max-w-7xl mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-foreground/10 bg-foreground/5 text-xs font-bold uppercase tracking-widest mb-6">
            Case Studies
          </div>
          <h1 className="text-6xl md:text-[7rem] font-black tracking-tighter leading-[0.9] mb-8">
            Selected Work.
          </h1>
          <p className="text-2xl text-foreground/60 font-inter max-w-2xl">
            We build scalable architectures and beautiful interfaces that drive real business metrics for global leaders.
          </p>
        </motion.div>
      </div>

      {/* Bento Grid */}
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-6 max-w-7xl mt-32">
        <div className="bg-secondary/50 rounded-[3rem] p-12 md:p-24 text-center border border-border relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl -z-10" />
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Next project? Yours.</h2>
          <p className="text-xl text-foreground/60 mb-12 max-w-xl mx-auto">
            Stop compromising on engineering quality. Partner with us and scale your digital products today.
          </p>
          <Link href="/en/forge/contact" className="inline-flex items-center justify-center px-12 py-5 rounded-full bg-foreground text-background font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
            Book a Discovery Call
          </Link>
        </div>
      </div>

    </div>
  )
}
