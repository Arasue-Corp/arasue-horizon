"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'

const kowalskiSpring = { type: "spring", stiffness: 300, damping: 30 } as const

const dict = {
  usa: {
    title: 'The Arasue Ecosystem',
    subtitle: 'Four interconnected divisions driving cultural and commercial momentum.',
    divisions: [
      { 
        id: 'forge', 
        name: 'Arasue Forge', 
        desc: 'Great ideas mean nothing if they stay in the air. Arasue Forge is the development studio where advanced software and critical tech come to life with precision, power, and flawless performance.', 
        image: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=1200&auto=format&fit=crop', // Sharp majestic mountain
        link: '/forge' 
      },
      { 
        id: 'media', 
        name: 'Arasue Studios', 
        desc: 'In a sea of constant noise, we create depth. Arasue Studios produces, publishes, and distributes high-fidelity content that captures attention and leaves a real mark.', 
        image: 'https://images.unsplash.com/photo-1490682143684-14369e18dce8?q=80&w=1200&auto=format&fit=crop', // Golden hour coast / lighthouse
        link: '/studios' 
      },
      { 
        id: 'labs', 
        name: 'Arasue Labs', 
        desc: 'True excellence accepts no shortcuts. Arasue Labs bridges scientific rigor with nature\'s purity, managing the import and logistics of premium products with absolute traceability.', 
        image: 'https://images.unsplash.com/photo-1473215933618-1c49618fce9b?q=80&w=1200&auto=format&fit=crop', // Coastal mist
        link: '/labs' 
      },
      { 
        id: 'protection', 
        name: 'Arasue Protection', 
        desc: 'Real success is never left to chance. Arasue Protection shields your life, health, and wealth with high-tier insurance solutions and absolute certainty.', 
        image: 'https://images.unsplash.com/photo-1495954484750-af469f2f9be5?q=80&w=1200&auto=format&fit=crop', // Immovable rocky cliff
        link: '/protection' 
      }
    ]
  },
  mex: {
    title: 'El Ecosistema Arasue',
    subtitle: 'Cuatro divisiones interconectadas impulsando el momento cultural y comercial.',
    divisions: [
      { 
        id: 'forge', 
        name: 'Arasue Forge', 
        desc: 'Las grandes ideas no sirven de nada si se quedan en el aire. Arasue Forge es el estudio de desarrollo donde el software avanzado y la tecnología crítica cobran vida con precisión, fuerza y un rendimiento impecable.', 
        image: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=1200&auto=format&fit=crop',
        link: '/es/forge' 
      },
      { 
        id: 'media', 
        name: 'Arasue Studios', 
        desc: 'En un mar de ruido constante, nosotros creamos profundidad. Arasue Studios produce, edita y distribuye contenido de alta fidelidad que captura la atención y deja una marca real.', 
        image: 'https://images.unsplash.com/photo-1490682143684-14369e18dce8?q=80&w=1200&auto=format&fit=crop',
        link: '/es/studios' 
      },
      { 
        id: 'labs', 
        name: 'Arasue Labs', 
        desc: 'La verdadera excelencia no acepta atajos. Arasue Labs une el rigor de la ciencia con la pureza de la naturaleza, controlando la importación y logística de productos premium con una trazabilidad absoluta.', 
        image: 'https://images.unsplash.com/photo-1473215933618-1c49618fce9b?q=80&w=1200&auto=format&fit=crop',
        link: '/es/labs' 
      },
      { 
        id: 'protection', 
        name: 'Arasue Protection', 
        desc: 'El éxito real no se deja al azar. Arasue Protection blinda tu vida, tu salud y tu patrimonio con soluciones de aseguramiento de alto nivel y total certeza.', 
        image: 'https://images.unsplash.com/photo-1495954484750-af469f2f9be5?q=80&w=1200&auto=format&fit=crop',
        link: '/es/protection' 
      }
    ]
  }
}

export function HorizonEcosystem({ lang }: { lang: 'en' | 'es' }) {
  const isMexico = lang === 'es'
  const t = dict[isMexico ? 'mex' : 'usa']

  return (
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-7xl font-playfair tracking-tight mb-6 text-[#162D59]">{t.title}</h2>
        <p className="text-xl text-[#162D59]/70 max-w-2xl mx-auto font-inter">{t.subtitle}</p>
      </div>

      <div className="flex flex-col gap-12">
        {t.divisions.map((div, i) => (
          <Link href={div.link} key={div.id} className="block group">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ...kowalskiSpring, delay: i * 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Natural Image Container - Replacing the rigid boxes */}
              <div className="w-full md:w-1/2 h-[400px] rounded-3xl overflow-hidden relative shadow-2xl">
                <div 
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                  style={{ backgroundImage: `url(${div.image})` }}
                />
                <div className="absolute inset-0 bg-[#162D59]/10 group-hover:bg-transparent transition-colors duration-700" />
              </div>
              
              <div className="w-full md:w-1/2 space-y-6">
                <div className="w-12 h-1 bg-[#F2D3AC] rounded-full" />
                <h3 className="text-4xl md:text-5xl font-playfair font-bold text-[#162D59] group-hover:text-[#A65E44] transition-colors duration-300">
                  {div.name}
                </h3>
                <p className="text-[#162D59]/70 text-xl leading-relaxed font-inter">
                  {div.desc}
                </p>
                <div className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-[#162D59] group-hover:text-[#A65E44] transition-colors mt-4">
                  Explore Division 
                  <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  )
}
