"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const dict = {
  usa: {
    title: 'Frequently Asked Questions',
    items: [
      { q: 'Do you offer ongoing maintenance?', a: 'Yes. Most of our enterprise clients opt for our monthly retainer model, which includes continuous deployment, security updates, and a dedicated block of hours for new features.' },
      { q: 'What is your technology stack?', a: 'We specialize in the React ecosystem, specifically Next.js (App Router), TailwindCSS, and Framer Motion for the frontend. For the backend, we use Node.js, PostgreSQL, and scalable cloud infrastructure like Vercel or AWS.' },
      { q: 'How long does a typical project take?', a: 'It depends on the scope. A standard Web App or MVP typically takes 8-12 weeks. Enterprise ecosystems can take 4-6 months of iterative development.' },
      { q: 'Do you design the UI/UX as well?', a: 'Absolutely. We believe that engineering and design should not be siloed. We provide high-fidelity Figma prototypes and neuromarketing-driven UX design before we write a single line of code.' }
    ]
  },
  mex: {
    title: 'Preguntas Frecuentes',
    items: [
      { q: '¿Ofrecen mantenimiento continuo?', a: 'Sí. La mayoría de nuestros clientes empresariales optan por nuestro modelo de retención mensual, que incluye despliegue continuo, actualizaciones de seguridad y un bloque de horas dedicado a nuevas funciones.' },
      { q: '¿Cuál es su stack tecnológico?', a: 'Nos especializamos en el ecosistema de React, específicamente Next.js (App Router), TailwindCSS y Framer Motion para el frontend. Para el backend, utilizamos Node.js, PostgreSQL e infraestructura en la nube escalable como Vercel o AWS.' },
      { q: '¿Cuánto tiempo toma un proyecto típico?', a: 'Depende del alcance. Una Web App estándar o MVP típicamente toma de 8 a 12 semanas. Ecosistemas empresariales pueden tomar de 4 a 6 meses de desarrollo iterativo.' },
      { q: '¿También diseñan la interfaz (UI/UX)?', a: 'Absolutamente. Creemos que la ingeniería y el diseño no deben estar aislados. Proporcionamos prototipos de alta fidelidad en Figma y diseño UX impulsado por neuromarketing antes de escribir una sola línea de código.' }
    ]
  }
}

export function ForgeFAQ({ lang }: { lang: 'en' | 'es' }) {
  const isMexico = lang === 'es'
  const t = dict[isMexico ? 'mex' : 'usa']
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="max-w-3xl mx-auto px-6">
      <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">{t.title}</h2>
      <div className="space-y-4">
        {t.items.map((item, i) => (
          <div key={i} className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden">
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
            >
              <span className="font-bold text-sm text-white pr-8">{item.q}</span>
              <ChevronDown className={`w-5 h-5 text-white/50 flex-shrink-0 transform transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-white/60 text-sm leading-relaxed">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}
