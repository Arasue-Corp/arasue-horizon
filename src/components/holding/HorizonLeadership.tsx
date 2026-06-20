"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'

export function HorizonLeadership({ dict }: { dict: any }) {
  const t = dict.horizon.leadership

  const leaders = [
    { name: 'Josue', role: t.josue_role, desc: t.josue_desc, img: '1560250097027-c1d30f71ad39' },
    { name: 'Elena M.', role: t.elena_role, desc: t.elena_desc, img: '1573496359142-b8d87734a5a2' },
    { name: 'Marcus T.', role: t.marcus_role, desc: t.marcus_desc, img: '1507003211169-0a1dd7228f2d' }
  ]

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">{t.title}</h2>
        <p className="text-xl text-neutral-500 max-w-2xl mx-auto">{t.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {leaders.map((leader, i: number) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 30, delay: i * 0.1 }}
            className="group"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 bg-neutral-100 relative">
              <Image 
                src={`https://images.unsplash.com/photo-${leader.img}?q=80&w=600&auto=format&fit=crop`} 
                alt={leader.name} 
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">{leader.name}</h3>
            <div className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-4">{leader.role}</div>
            <p className="text-neutral-500 leading-relaxed">{leader.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
