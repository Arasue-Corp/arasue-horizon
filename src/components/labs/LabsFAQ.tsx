"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const dict = {
  usa: {
    title: 'Common Questions',
    items: [
      { q: 'Are your ingredients organic?', a: 'Yes. We source exclusively from certified organic, sustainable farms. Our honey is raw, unpasteurized, and ethically harvested to preserve the natural enzymes and pollen.' },
      { q: 'How long until I feel the effects?', a: 'While some people notice an immediate shift in energy or sleep quality, adaptogens and natural compounds compound over time. We recommend consistent use for at least 14 days to evaluate the full benefit.' },
      { q: 'Can I combine multiple products?', a: 'Absolutely. Many of our customers use the Active Pollen in the morning for sustained energy and the Lavender Honey at night to optimize their sleep architecture.' },
      { q: 'Do you ship internationally?', a: 'Currently, we ship across North America (USA, Canada, Mexico) and select European countries. Shipping times vary by region.' }
    ]
  },
  mex: {
    title: 'Preguntas Comunes',
    items: [
      { q: '¿Sus ingredientes son orgánicos?', a: 'Sí. Nos abastecemos exclusivamente de granjas sostenibles y con certificación orgánica. Nuestra miel es cruda, sin pasteurizar y cosechada éticamente para preservar las enzimas naturales y el polen.' },
      { q: '¿Cuánto tiempo hasta que sienta los efectos?', a: 'Aunque algunas personas notan un cambio inmediato en la energía o la calidad del sueño, los adaptógenos y compuestos naturales se acumulan con el tiempo. Recomendamos un uso constante durante al menos 14 días para evaluar el beneficio completo.' },
      { q: '¿Puedo combinar varios productos?', a: 'Absolutamente. Muchos de nuestros clientes usan el Polen Activo por la mañana para energía sostenida y la Miel de Lavanda por la noche para optimizar su arquitectura de sueño.' },
      { q: '¿Hacen envíos internacionales?', a: 'Actualmente, hacemos envíos a toda Norteamérica (EE. UU., Canadá, México) y a países europeos seleccionados. Los tiempos de envío varían según la región.' }
    ]
  }
}

export function LabsFAQ({ lang }: { lang: 'en' | 'es' }) {
  const isMexico = lang === 'es'
  const t = dict[isMexico ? 'mex' : 'usa']
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="max-w-4xl mx-auto px-6 font-sans">
      <h2 className="text-3xl md:text-5xl font-serif text-[#1a2e1a] mb-12 text-center">{t.title}</h2>
      <div className="space-y-4">
        {t.items.map((item, i) => (
          <div key={i} className="border-b border-[#1a2e1a]/10 overflow-hidden">
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between py-6 text-left hover:text-[#1a2e1a]/70 transition-colors"
            >
              <span className="font-medium text-lg text-[#1a2e1a] pr-8">{item.q}</span>
              {openIndex === i ? (
                <Minus className="w-5 h-5 text-[#1a2e1a]/50 flex-shrink-0" />
              ) : (
                <Plus className="w-5 h-5 text-[#1a2e1a]/50 flex-shrink-0" />
              )}
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 text-[#1a2e1a]/70 text-lg leading-relaxed">
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
