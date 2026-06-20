"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'

export function ForgeTechMarquee({ text }: { text: string }) {
  return (
    <section className="py-16 border-y border-foreground/5 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <p className="text-sm font-mono text-foreground/40 mb-8 uppercase tracking-widest">{text}</p>
        
        <div className="flex justify-center overflow-hidden">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex gap-16 md:gap-32 items-center min-w-max pr-16 md:pr-32"
          >
            {/* Duplicated for infinite scroll illusion */}
            {[1, 2].map((group) => (
              <div key={group} className="flex gap-16 md:gap-32 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" width={50} height={50} className="h-10 w-auto" />
                <Image src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" alt="Next.js" width={50} height={50} className="h-10 w-auto invert" />
                <Image src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind" width={50} height={50} className="h-10 w-auto" />
                <Image src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="PostgreSQL" width={50} height={50} className="h-10 w-auto" />
                <Image src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" width={50} height={50} className="h-10 w-auto invert" />
                <Image src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg" alt="GraphQL" width={50} height={50} className="h-10 w-auto" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-secondary/30 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-secondary/30 to-transparent z-20 pointer-events-none" />
    </section>
  )
}
