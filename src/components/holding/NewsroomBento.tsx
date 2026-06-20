'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import Image from 'next/image'

const kowalskiSpring = { type: "spring", stiffness: 300, damping: 30 } as const

function TiltCard({ children, href, className }: { children: React.ReactNode, href: string, className: string }) {
  const ref = useRef<HTMLAnchorElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      style={{ perspective: 1000 }}
      className={className}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-full h-full relative"
      >
        <Link 
          ref={ref}
          href={href} 
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="group block w-full h-full relative rounded-[2rem] overflow-hidden bg-[#162D59]/5 shadow-xl"
        >
          {children}
        </Link>
      </motion.div>
    </motion.div>
  )
}

export function NewsroomBento({ dict, lang }: { dict: any, lang: string }) {
  const articles = [
    { id: 1, img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop" },
    { id: 2, img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" },
    { id: 3, img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" }
  ]

  return (
    <section className="py-32 px-6 container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={kowalskiSpring}
        >
          <h2 className="text-4xl md:text-6xl font-playfair tracking-tight text-[#162D59]">
            {dict.horizon.news.title}
          </h2>
        </motion.div>
        <Link 
          href={`/${lang}/newsroom`} 
          className="font-bold text-[#A65E44] hover:text-[#F28F6B] transition-colors inline-flex items-center gap-2"
        >
          {dict.horizon.news.link} <span>→</span>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Featured Article (Bento Large) */}
        <TiltCard href={`/${lang}/newsroom`} className="md:col-span-8 min-h-[400px]">
          <motion.div 
            initial={{ scale: 1.1 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image 
              src={articles[0].img} 
              alt="Featured News" 
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0" 
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#162D59] via-[#162D59]/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-10 text-[#F2F2F2] pointer-events-none" style={{ transform: "translateZ(30px)" }}>
            <div className="text-sm font-semibold text-[#F2D3AC] mb-3">Q1 2026 • {dict.horizon.news.tag}</div>
            <h3 className="text-3xl md:text-5xl font-playfair font-bold mb-4">{dict.horizon.news.article_title}</h3>
            <p className="text-[#F2F2F2]/70 max-w-xl font-inter line-clamp-2">{dict.horizon.news.article_desc}</p>
          </div>
        </TiltCard>

        {/* Small Articles (Bento Small) */}
        <div className="md:col-span-4 flex flex-col gap-8">
          {[1, 2].map((i) => (
            <TiltCard href={`/${lang}/newsroom`} key={i} className="flex-1 min-h-[250px]">
              <motion.div 
                initial={{ scale: 1.1 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image 
                  src={articles[i].img} 
                  alt={`News ${i}`} 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 opacity-80" 
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#162D59]/90 to-transparent" />
              
              <div className="relative z-10 p-8 h-full flex flex-col justify-end text-[#F2F2F2] pointer-events-none" style={{ transform: "translateZ(20px)" }}>
                <div className="text-xs font-semibold text-[#A65E44] mb-2">Q{i+1} 2026</div>
                <h3 className="text-xl font-bold font-playfair line-clamp-2">{dict.horizon.news.article_title}</h3>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
