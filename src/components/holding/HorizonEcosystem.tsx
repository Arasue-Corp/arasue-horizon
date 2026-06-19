"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'

const dict = {
  usa: {
    title: 'The Arasue Ecosystem',
    subtitle: 'Four interconnected divisions driving cultural and commercial momentum.',
    divisions: [
      { id: 'forge', name: 'Arasue Forge', desc: 'Digital products, software, and platforms engineered for scale.', color: 'from-blue-500 to-cyan-400', link: '/forge' },
      { id: 'media', name: 'Arasue Media', desc: 'Cultural influence, content manufacturing, and creator partnerships.', color: 'from-purple-500 to-pink-500', link: '/media' },
      { id: 'labs', name: 'Arasue Labs', desc: 'Physical wellness products, supplements, and bio-optimization.', color: 'from-[#1a2e1a] to-emerald-800', link: '/labs' },
      { id: 'protection', name: 'Arasue Protection', desc: 'Premium life and health insurance coverage designed for complete peace of mind.', color: 'from-slate-800 to-slate-500', link: '/protection' }
    ]
  },
  mex: {
    title: 'El Ecosistema Arasue',
    subtitle: 'Cuatro divisiones interconectadas impulsando el momento cultural y comercial.',
    divisions: [
      { id: 'forge', name: 'Arasue Forge', desc: 'Productos digitales, software y plataformas diseñadas para escalar.', color: 'from-blue-500 to-cyan-400', link: '/es/forge' },
      { id: 'media', name: 'Arasue Media', desc: 'Influencia cultural, fabricación de contenido y asociaciones de creadores.', color: 'from-purple-500 to-pink-500', link: '/es/media' },
      { id: 'labs', name: 'Arasue Labs', desc: 'Productos de bienestar físico, suplementos y bio-optimización.', color: 'from-[#1a2e1a] to-emerald-800', link: '/es/labs' },
      { id: 'protection', name: 'Arasue Protection', desc: 'Cobertura premium de seguros de vida y salud diseñada para tu total tranquilidad.', color: 'from-slate-800 to-slate-500', link: '/es/protection' }
    ]
  }
}

export function HorizonEcosystem({ lang }: { lang: 'en' | 'es' }) {
  const isMexico = lang === 'es'
  const t = dict[isMexico ? 'mex' : 'usa']

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">{t.title}</h2>
        <p className="text-xl text-neutral-500 max-w-2xl mx-auto">{t.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {t.divisions.map((div, i) => (
          <Link href={div.link} key={div.id}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 30, delay: i * 0.1 }}
              className="group relative h-[300px] rounded-[2rem] overflow-hidden bg-white border border-neutral-200 p-10 flex flex-col justify-between hover:shadow-2xl transition-all duration-500"
            >
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${div.color} opacity-5 group-hover:opacity-10 rounded-full blur-[60px] transition-opacity duration-500 -mr-20 -mt-20`} />
              
              <div>
                <h3 className="text-3xl font-bold mb-4">{div.name}</h3>
                <p className="text-neutral-500 text-lg leading-relaxed max-w-md relative z-10">{div.desc}</p>
              </div>

              <div className="flex items-center text-sm font-bold uppercase tracking-widest text-neutral-400 group-hover:text-black transition-colors">
                Explore Division 
                <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  )
}
