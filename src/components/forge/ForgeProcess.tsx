"use client"
import { motion } from 'framer-motion'

const dict = {
  usa: {
    title: 'How We Build',
    subtitle: 'An uncompromising approach to engineering.',
    steps: [
      { num: '01', title: 'Architecture Discovery', desc: 'We map out the precise technical requirements, data models, and infrastructure needs.' },
      { num: '02', title: 'System Design', desc: 'Creating scalable database schemas and high-fidelity wireframes that convert.' },
      { num: '03', title: 'Engineering Sprints', desc: 'Rapid, agile development using Next.js and robust cloud architectures.' },
      { num: '04', title: 'Deployment & Scale', desc: 'Zero-downtime deployment, QA, and continuous performance optimization.' }
    ]
  },
  mex: {
    title: 'Cómo Construimos',
    subtitle: 'Un enfoque inflexible hacia la ingeniería.',
    steps: [
      { num: '01', title: 'Descubrimiento de Arquitectura', desc: 'Mapeamos los requisitos técnicos precisos, modelos de datos y necesidades de infraestructura.' },
      { num: '02', title: 'Diseño de Sistemas', desc: 'Creación de esquemas de bases de datos escalables y wireframes de alta fidelidad que convierten.' },
      { num: '03', title: 'Sprints de Ingeniería', desc: 'Desarrollo rápido y ágil utilizando Next.js y arquitecturas sólidas en la nube.' },
      { num: '04', title: 'Despliegue y Escala', desc: 'Despliegue sin tiempo de inactividad, QA y optimización continua de rendimiento.' }
    ]
  }
}

export function ForgeProcess({ lang }: { lang: 'en' | 'es' }) {
  const isMexico = lang === 'es'
  const t = dict[isMexico ? 'mex' : 'usa']

  return (
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">{t.title}</h2>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">{t.subtitle}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
        <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 -z-10" />
        
        {t.steps.map((step, i) => {
          const colors = ['border-blue-500', 'border-purple-500', 'border-pink-500', 'border-white']
          const icons = ['🗺️', '🎨', '⚙️', '🚀']
          return (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 30, delay: i * 0.1 }}
              className="space-y-6 relative group"
            >
              <div className={`w-24 h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl group-hover:${colors[i]} transition-colors mx-auto md:mx-0`}>
                {icons[i]}
              </div>
              <h3 className="text-2xl font-bold">{step.title}</h3>
              <p className="text-white/60">{step.desc}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
