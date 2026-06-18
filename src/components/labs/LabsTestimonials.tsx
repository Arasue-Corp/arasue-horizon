"use client"
import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

const dict = {
  usa: {
    title: 'Words from our Community',
    subtitle: 'Real experiences from people who integrated Arasue Labs into their daily ritual.',
    reviews: [
      { name: 'Elena R.', role: 'Yoga Instructor', text: 'The Nighttime Lavender Honey completely changed my sleep architecture. I wake up feeling genuinely restored without any grogginess.' },
      { name: 'Marcus T.', role: 'Creative Director', text: 'I replaced my afternoon coffee with the Active Pollen mix. No jitters, just clean sustained focus through my longest design sprints.' },
      { name: 'Sophia L.', role: 'Wellness Coach', text: 'The purity is unmatched. You can taste the terroir in the honey. It\'s become a non-negotiable part of my morning routine.' }
    ]
  },
  mex: {
    title: 'Palabras de nuestra Comunidad',
    subtitle: 'Experiencias reales de personas que integraron Arasue Labs a su ritual diario.',
    reviews: [
      { name: 'Elena R.', role: 'Instructora de Yoga', text: 'La Miel de Lavanda Nocturna cambió por completo mi arquitectura de sueño. Me despierto sintiéndome genuinamente restaurada sin pesadez.' },
      { name: 'Marcus T.', role: 'Director Creativo', text: 'Reemplacé mi café de la tarde con la mezcla de Polen Activo. Sin nerviosismo, solo un enfoque limpio y sostenido durante mis sprints de diseño más largos.' },
      { name: 'Sophia L.', role: 'Coach de Bienestar', text: 'La pureza es inigualable. Puedes saborear el origen en la miel. Se ha convertido en una parte no negociable de mi rutina matutina.' }
    ]
  }
}

export function LabsTestimonials({ lang }: { lang: 'en' | 'es' }) {
  const isMexico = lang === 'es'
  const t = dict[isMexico ? 'mex' : 'usa']

  return (
    <div className="max-w-7xl mx-auto px-6 font-sans">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-serif text-[#1a2e1a] mb-6">{t.title}</h2>
        <p className="text-[#1a2e1a]/60 text-lg max-w-xl mx-auto">{t.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {t.reviews.map((review, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-10 rounded-[2rem] border border-[#1a2e1a]/5 shadow-sm"
          >
            <div className="flex gap-1 mb-8">
              {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-[#1a2e1a] text-[#1a2e1a]" />)}
            </div>
            <p className="text-[#1a2e1a]/80 text-lg leading-relaxed mb-8 italic">"{review.text}"</p>
            <div>
              <div className="font-bold text-[#1a2e1a]">{review.name}</div>
              <div className="text-sm text-[#1a2e1a]/50 uppercase tracking-widest mt-1 font-mono">{review.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
