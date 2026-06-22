"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export function HorizonLeadership({ dict }: { dict: any }) {
  const t = dict.horizon.leadership

  const leaders = [
    { 
      name: 'Josue', 
      role: t.josue_role, 
      desc: t.josue_desc, 
      img: '/leadership/josue-profile.jpg',
      link: '/josue',
      cv: '/leadership/Resume_Josue_Lopez_TPM_InsurTech_2026.docx'
    },
    { name: 'Elena M.', role: t.elena_role, desc: t.elena_desc, img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop' },
    { name: 'Marcus T.', role: t.marcus_role, desc: t.marcus_desc, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop' }
  ]

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-[#162D59]">{t.title}</h2>
        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">{t.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {leaders.map((leader, i: number) => {
          const CardContent = (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 30, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 bg-[#162D59]/10 relative">
                <Image 
                  src={leader.img} 
                  alt={leader.name} 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                />
                {leader.link && (
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <span className="bg-white text-[#162D59] font-bold px-6 py-3 rounded-full text-sm">View Profile</span>
                  </div>
                )}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[#162D59] flex items-center gap-2">
                {leader.name}
                {leader.link && <span className="text-xs bg-[#ffcc00] px-2 py-1 rounded-md">CEO</span>}
              </h3>
              <div className="text-sm font-bold uppercase tracking-widest text-[#A65E44] mb-4">{leader.role}</div>
              <p className="text-neutral-600 leading-relaxed">{leader.desc}</p>
            </motion.div>
          )

          return leader.link ? (
            <Link key={i} href={leader.link} className="block">
              {CardContent}
            </Link>
          ) : (
            <div key={i}>{CardContent}</div>
          )
        })}
      </div>
    </div>
  )
}
