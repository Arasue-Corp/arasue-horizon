"use client";
import { motion } from 'framer-motion'
import { HeartPulse, ShieldCheck, Activity, Stethoscope } from 'lucide-react'

export function ProtectionCoverage({ lang }: { lang: 'en' | 'es' }) {
  const isEn = lang === 'en'
  const dict = {
    title: isEn ? 'Comprehensive Coverage' : 'Cobertura Integral',
    life: {
      title: isEn ? 'Life Insurance' : 'Seguro de Vida',
      desc: isEn ? 'Protect your family\'s financial future with customizable term and whole life policies.' : 'Protege el futuro financiero de tu familia con pólizas de vida entera y a término personalizables.',
      features: isEn ? ['Estate Planning', 'Income Replacement', 'Tax-Advantaged Growth'] : ['Planificación Patrimonial', 'Reemplazo de Ingresos', 'Crecimiento con Ventajas Fiscales']
    },
    health: {
      title: isEn ? 'Health Insurance' : 'Seguro de Salud',
      desc: isEn ? 'Premium access to the best medical networks globally, ensuring you get the care you deserve.' : 'Acceso premium a las mejores redes médicas a nivel global, asegurando que recibas el cuidado que mereces.',
      features: isEn ? ['Global Coverage', 'Preventative Care', 'Specialist Access'] : ['Cobertura Global', 'Cuidado Preventivo', 'Acceso a Especialistas']
    }
  }

  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black mb-4">{dict.title}</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-foreground/5 border border-foreground/10 rounded-3xl p-10 flex flex-col h-full"
        >
          <div className="w-14 h-14 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center mb-6">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-bold mb-4">{dict.life.title}</h3>
          <p className="text-foreground/70 mb-8 flex-grow">{dict.life.desc}</p>
          <ul className="space-y-3">
            {dict.life.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-3 font-semibold text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-foreground/5 border border-foreground/10 rounded-3xl p-10 flex flex-col h-full"
        >
          <div className="w-14 h-14 bg-emerald-500/10 text-emerald-500 rounded-2xl flex items-center justify-center mb-6">
            <HeartPulse className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-bold mb-4">{dict.health.title}</h3>
          <p className="text-foreground/70 mb-8 flex-grow">{dict.health.desc}</p>
          <ul className="space-y-3">
            {dict.health.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-3 font-semibold text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  )
}
