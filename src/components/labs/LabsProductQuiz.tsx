"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Sparkles, Moon, Sun, Shield } from 'lucide-react'

const dict = {
  usa: {
    title: 'Find Your Ritual',
    subtitle: 'Answer 2 questions to find the product that matches your body\'s needs.',
    q1: 'What is your primary goal?',
    q1_opts: [
      { id: 'energy', label: 'Sustained Energy', icon: Sun },
      { id: 'sleep', label: 'Deep Sleep', icon: Moon },
      { id: 'immunity', label: 'Immune Support', icon: Shield }
    ],
    q2: 'When do you prefer to take your supplements?',
    q2_opts: [
      { id: 'morning', label: 'Morning' },
      { id: 'night', label: 'Evening' }
    ],
    result_title: 'Your Match:',
    result_desc: 'Based on your goals, we recommend:',
    btn_start: 'Start Quiz',
    btn_next: 'Next',
    btn_restart: 'Retake Quiz'
  },
  mex: {
    title: 'Encuentra tu Ritual',
    subtitle: 'Responde 2 preguntas para encontrar el producto que coincide con las necesidades de tu cuerpo.',
    q1: '¿Cuál es tu objetivo principal?',
    q1_opts: [
      { id: 'energy', label: 'Energía Sostenida', icon: Sun },
      { id: 'sleep', label: 'Sueño Profundo', icon: Moon },
      { id: 'immunity', label: 'Soporte Inmunológico', icon: Shield }
    ],
    q2: '¿Cuándo prefieres tomar tus suplementos?',
    q2_opts: [
      { id: 'morning', label: 'Por la Mañana' },
      { id: 'night', label: 'Por la Noche' }
    ],
    result_title: 'Tu Coincidencia:',
    result_desc: 'Basado en tus objetivos, recomendamos:',
    btn_start: 'Iniciar Quiz',
    btn_next: 'Siguiente',
    btn_restart: 'Volver a Tomar'
  }
}

export function LabsProductQuiz({ lang }: { lang: 'en' | 'es' }) {
  const isMexico = lang === 'es'
  const t = dict[isMexico ? 'mex' : 'usa']
  
  const [step, setStep] = useState(0)
  const [goal, setGoal] = useState('')
  const [time, setTime] = useState('')
  
  const getRecommendation = () => {
    if (goal === 'sleep') return { name: isMexico ? 'Miel de Lavanda Nocturna' : 'Nighttime Lavender Honey', price: '$45.00' }
    if (goal === 'energy') return { name: isMexico ? 'Polen Activo Matutino' : 'Morning Active Pollen', price: '$35.00' }
    return { name: isMexico ? 'Propóleo Inmune' : 'Immune Propolis Drops', price: '$85.00' }
  }

  const rec = getRecommendation()

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-12 md:p-16 shadow-xl border border-foreground/5 overflow-hidden relative min-h-[400px]">
      {/* Decorative */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#e8e4d9] rounded-full blur-[80px] opacity-50" />
      
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div 
            key="step0"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -20 }}
            className="flex flex-col items-center justify-center text-center h-full pt-10"
          >
            <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-foreground" />
            </div>
            <h3 className="text-4xl font-serif text-foreground mb-4">{t.title}</h3>
            <p className="text-foreground/60 font-sans mb-10 max-w-sm mx-auto">{t.subtitle}</p>
            <button 
              onClick={() => setStep(1)}
              className="px-8 py-4 bg-foreground text-foreground rounded-full font-sans font-bold hover:scale-105 transition-all"
            >
              {t.btn_start}
            </button>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div 
            key="step1"
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
            className="h-full flex flex-col"
          >
            <span className="text-foreground/40 font-mono text-sm mb-4">1 / 2</span>
            <h3 className="text-3xl font-serif text-foreground mb-8">{t.q1}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-sans">
              {t.q1_opts.map(opt => {
                const Icon = opt.icon
                return (
                  <button 
                    key={opt.id}
                    onClick={() => { setGoal(opt.id); setTimeout(() => setStep(2), 300) }}
                    className={`p-6 rounded-2xl border text-left flex flex-col gap-4 transition-all ${goal === opt.id ? 'border-[#1a2e1a] bg-background' : 'border-foreground/10 hover:border-foreground/30'}`}
                  >
                    <Icon className="w-6 h-6 text-foreground" />
                    <span className="font-bold text-foreground">{opt.label}</span>
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div 
            key="step2"
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
            className="h-full flex flex-col"
          >
            <span className="text-foreground/40 font-mono text-sm mb-4">2 / 2</span>
            <h3 className="text-3xl font-serif text-foreground mb-8">{t.q2}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
              {t.q2_opts.map(opt => (
                <button 
                  key={opt.id}
                  onClick={() => { setTime(opt.id); setTimeout(() => setStep(3), 300) }}
                  className={`p-6 rounded-2xl border text-center transition-all ${time === opt.id ? 'border-[#1a2e1a] bg-foreground text-foreground' : 'border-foreground/10 hover:border-foreground/30 text-foreground'}`}
                >
                  <span className="font-bold">{opt.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div 
            key="step3"
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            className="h-full flex flex-col items-center justify-center text-center pt-8"
          >
            <p className="text-foreground/60 font-sans mb-2">{t.result_desc}</p>
            <h3 className="text-4xl font-serif text-foreground mb-6">{rec.name}</h3>
            
            <div className="flex gap-4 font-sans items-center">
              <button className="px-8 py-4 bg-foreground text-foreground rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform">
                {rec.price} <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => setStep(0)} className="px-4 py-4 text-foreground/60 hover:text-foreground text-sm font-medium underline underline-offset-4 transition-colors">
                {t.btn_restart}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
