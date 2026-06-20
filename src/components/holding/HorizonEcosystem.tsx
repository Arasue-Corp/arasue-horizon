"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'

const kowalskiSpring = { type: "spring", stiffness: 300, damping: 30 }

const dict = {
  usa: {
    title: 'The Arasue Ecosystem',
    subtitle: 'Five interconnected divisions driving cultural and commercial momentum.',
    divisions: [
      { id: 'forge', name: 'Arasue Forge', desc: 'Great ideas mean nothing if they stay in the air. Arasue Forge is the development studio where advanced software and critical tech come to life with precision, power, and flawless performance.', color: 'from-[#0511F2] to-[#05F2DB]', link: '/forge' },
      { id: 'media', name: 'Arasue Media', desc: 'In a sea of constant noise, we create depth. Arasue Media produces, publishes, and distributes high-fidelity content that captures attention and leaves a real mark.', color: 'from-[#F28F6B] to-[#A65E44]', link: '/media' },
      { id: 'labs', name: 'Arasue Labs', desc: 'True excellence accepts no shortcuts. Arasue Labs bridges scientific rigor with nature\'s purity, managing the import and logistics of premium products with absolute traceability.', color: 'from-[#1a2e1a] to-emerald-800', link: '/labs' },
      { id: 'protection', name: 'Arasue Protection', desc: 'Real success is never left to chance. Arasue Protection shields your life, health, and wealth with high-tier insurance solutions and absolute certainty.', color: 'from-[#162D59] to-slate-500', link: '/protection' }
    ]
  },
  mex: {
    title: 'El Ecosistema Arasue',
    subtitle: 'Cinco divisiones interconectadas impulsando el momento cultural y comercial.',
    divisions: [
      { id: 'forge', name: 'Arasue Forge', desc: 'Las grandes ideas no sirven de nada si se quedan en el aire. Arasue Forge es el estudio de desarrollo donde el software avanzado y la tecnología crítica cobran vida con precisión, fuerza y un rendimiento impecable.', color: 'from-[#0511F2] to-[#05F2DB]', link: '/es/forge' },
      { id: 'media', name: 'Arasue Media', desc: 'En un mar de ruido constante, nosotros creamos profundidad. Arasue Media produce, edita y distribuye contenido de alta fidelidad que captura la atención y deja una marca real.', color: 'from-[#F28F6B] to-[#A65E44]', link: '/es/media' },
      { id: 'labs', name: 'Arasue Labs', desc: 'La verdadera excelencia no acepta atajos. Arasue Labs une el rigor de la ciencia con la pureza de la naturaleza, controlando la importación y logística de productos premium con una trazabilidad absoluta.', color: 'from-[#1a2e1a] to-emerald-800', link: '/es/labs' },
      { id: 'protection', name: 'Arasue Protection', desc: 'El éxito real no se deja al azar. Arasue Protection blinda tu vida, tu salud y tu patrimonio con soluciones de aseguramiento de alto nivel y total certeza.', color: 'from-[#162D59] to-slate-500', link: '/es/protection' }
    ]
  }
}

export function HorizonEcosystem({ lang }: { lang: 'en' | 'es' }) {
  const isMexico = lang === 'es'
  const t = dict[isMexico ? 'mex' : 'usa']

  return (
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-playfair tracking-tight mb-6 text-[#162D59]">{t.title}</h2>
        <p className="text-xl text-[#162D59]/60 max-w-2xl mx-auto font-inter">{t.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {t.divisions.map((div, i) => (
          <Link href={div.link} key={div.id}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ...kowalskiSpring, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative h-[320px] rounded-[2rem] overflow-hidden bg-[#162D59]/[0.02] border border-[#162D59]/10 p-10 flex flex-col justify-between hover:border-[#162D59]/20 hover:bg-white/40 backdrop-blur-[15px] transition-all duration-500 shadow-[0_8px_32px_0_rgba(22,45,89,0.05)]"
            >
              {/* Glassmorphism Abstract Glow */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${div.color} opacity-10 group-hover:opacity-20 rounded-full blur-[60px] transition-opacity duration-700 -mr-20 -mt-20`} />
              
              <div className="relative z-10">
                <h3 className="text-3xl font-playfair font-bold mb-4 text-[#162D59]">{div.name}</h3>
                <p className="text-[#162D59]/70 text-lg leading-relaxed max-w-md font-inter">{div.desc}</p>
              </div>

              <div className="flex items-center text-sm font-bold uppercase tracking-widest text-[#162D59]/50 group-hover:text-[#162D59] transition-colors relative z-10">
                Explore Division 
                <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
              </div>
              
              {/* Subtle hover layoutId morph simulation border */}
              <motion.div 
                className="absolute inset-0 border-2 border-transparent group-hover:border-[#A65E44]/20 rounded-[2rem] pointer-events-none transition-colors duration-500"
              />
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  )
}
