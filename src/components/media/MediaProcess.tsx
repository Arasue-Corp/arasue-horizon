"use client"
import { motion } from 'framer-motion'

const dict = {
  usa: {
    title: 'Campaign Architecture',
    subtitle: 'How we manufacture virality, predictably.',
    steps: [
      { step: '01', title: 'Data & Cultural Anthropology', desc: 'We don\'t guess. We analyze deep cultural trends and platform algorithms to find the white space for your brand.' },
      { step: '02', title: 'Creator Casting', desc: 'Matching your brand not just with follower counts, but with creators who have genuine, cult-like influence over your target demographic.' },
      { step: '03', title: 'Content Engineering', desc: 'Producing high-retention, platform-native content that feels organic, not like an ad.' },
      { step: '04', title: 'Amplification', desc: 'Using paid media to pour gasoline on the organic fire, maximizing ROI and driving measurable conversions.' }
    ]
  },
  mex: {
    title: 'Arquitectura de Campaña',
    subtitle: 'Cómo fabricamos viralidad de manera predecible.',
    steps: [
      { step: '01', title: 'Datos y Antropología Cultural', desc: 'No adivinamos. Analizamos tendencias culturales profundas y algoritmos de plataformas para encontrar el espacio en blanco para tu marca.' },
      { step: '02', title: 'Casting de Creadores', desc: 'Emparejando tu marca no solo con recuentos de seguidores, sino con creadores que tienen una influencia genuina, casi de culto, sobre tu grupo demográfico.' },
      { step: '03', title: 'Ingeniería de Contenido', desc: 'Produciendo contenido nativo de la plataforma y de alta retención que se siente orgánico, no como un anuncio.' },
      { step: '04', title: 'Amplificación', desc: 'Usando medios pagados para echar gasolina al fuego orgánico, maximizando el ROI e impulsando conversiones medibles.' }
    ]
  }
}

export function MediaProcess({ lang }: { lang: 'en' | 'es' }) {
  const isMexico = lang === 'es'
  const t = dict[isMexico ? 'mex' : 'usa']

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">{t.title}</h2>
        <p className="text-xl text-white/50 max-w-2xl mx-auto">{t.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {t.steps.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 30, delay: i * 0.1 }}
            className="group"
          >
            <div className="text-8xl font-black text-white/5 group-hover:text-purple-500/20 transition-colors mb-4">{item.step}</div>
            <div className="border-t border-white/20 pt-6">
              <h3 className="text-2xl font-bold uppercase mb-4">{item.title}</h3>
              <p className="text-white/60 leading-relaxed font-light">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
