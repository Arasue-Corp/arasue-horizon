"use client"
import { motion } from 'framer-motion'

const dict = {
  usa: {
    title: 'Leadership',
    subtitle: 'Guided by operators with a track record of asymmetric returns.',
    leaders: [
      { name: 'Josue', role: 'Chief Executive Officer', desc: 'Architect of the Arasue ecosystem. Focuses on capital allocation and long-term vision.', img: '1560250097027-c1d30f71ad39' },
      { name: 'Elena M.', role: 'Head of Forge', desc: 'Former staff engineer at major tech firms. Leads product engineering and platform scale.', img: '1573496359142-b8d87734a5a2' },
      { name: 'Marcus T.', role: 'Head of Media', desc: 'Cultural strategist who has manufactured multiple global viral moments.', img: '1507003211169-0a1dd7228f2d' }
    ]
  },
  mex: {
    title: 'Liderazgo',
    subtitle: 'Guiados por operadores con un historial de retornos asimétricos.',
    leaders: [
      { name: 'Josue', role: 'Director Ejecutivo', desc: 'Arquitecto del ecosistema Arasue. Se enfoca en la asignación de capital y la visión a largo plazo.', img: '1560250097027-c1d30f71ad39' },
      { name: 'Elena M.', role: 'Directora de Forge', desc: 'Ex ingeniera principal en importantes firmas tecnológicas. Lidera la ingeniería de productos y la escala de la plataforma.', img: '1573496359142-b8d87734a5a2' },
      { name: 'Marcus T.', role: 'Director de Media', desc: 'Estratega cultural que ha fabricado múltiples momentos virales globales.', img: '1507003211169-0a1dd7228f2d' }
    ]
  }
}

export function HorizonLeadership({ lang }: { lang: 'en' | 'es' }) {
  const isMexico = lang === 'es'
  const t = dict[isMexico ? 'mex' : 'usa']

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">{t.title}</h2>
        <p className="text-xl text-neutral-500 max-w-2xl mx-auto">{t.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {t.leaders.map((leader, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 bg-neutral-100 relative">
              <img src={`https://images.unsplash.com/photo-${leader.img}?q=80&w=600&auto=format&fit=crop`} alt={leader.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
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
