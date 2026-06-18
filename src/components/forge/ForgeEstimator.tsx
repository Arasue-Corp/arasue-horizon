"use client"
import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const dict = {
  usa: {
    title: 'Project Estimator',
    subtitle: 'Get an immediate baseline for your custom software or enterprise digital transformation.',
    complexity: 'Scope Complexity',
    timeline: 'Timeline Urgency',
    min: 'MVP / Web App',
    max: 'Enterprise Ecosystem',
    options: [
      { id: 'relaxed', label: 'Standard (3-4 Months)' },
      { id: 'rush', label: 'Rush (8-10 Weeks)' }
    ],
    total: 'Estimated Investment',
    note: '*Estimate based on current availability. Final scope requires a discovery session.',
    cta: 'Request Formal Proposal'
  },
  mex: {
    title: 'Estimador de Proyectos',
    subtitle: 'Obtén una línea base inmediata para tu software a medida o transformación digital.',
    complexity: 'Complejidad del Alcance',
    timeline: 'Urgencia del Cronograma',
    min: 'MVP / Web App',
    max: 'Ecosistema Empresarial',
    options: [
      { id: 'relaxed', label: 'Estándar (3-4 Meses)' },
      { id: 'rush', label: 'Urgente (8-10 Semanas)' }
    ],
    total: 'Inversión Estimada',
    note: '*Estimación basada en disponibilidad actual. El alcance final requiere una sesión de descubrimiento.',
    cta: 'Solicitar Propuesta Formal'
  }
}

export function ForgeEstimator({ lang }: { lang: 'en' | 'es' }) {
  const isMexico = lang === 'es'
  const t = dict[isMexico ? 'mex' : 'usa']
  
  const [complexity, setComplexity] = useState(1) // 1: MVP, 2: Mid, 3: Enterprise
  const [timeline, setTimeline] = useState('relaxed')
  const [isCalculating, setIsCalculating] = useState(false)
  
  const handleTimelineChange = (val: string) => {
    setIsCalculating(true)
    setTimeout(() => {
      setTimeline(val)
      setIsCalculating(false)
    }, 200)
  }

  const getPrice = () => {
    let base = 0;
    if (complexity === 1) base = isMexico ? 150000 : 8000;
    if (complexity === 2) base = isMexico ? 350000 : 18000;
    if (complexity === 3) base = isMexico ? 800000 : 45000;
    
    let multiplier = timeline === 'rush' ? 1.4 : 1.0;
    
    const min = Math.round((base * multiplier) * 0.9);
    const max = Math.round((base * multiplier) * 1.1);
    
    return isMexico ? `$${min.toLocaleString()} - $${max.toLocaleString()} MXN` : `$${min.toLocaleString()} - $${max.toLocaleString()}`
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-2xl max-w-5xl mx-auto">
      <div className="flex-1 p-8 lg:p-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2">{t.title}</h2>
          <p className="text-white/50">{t.subtitle}</p>
        </div>

        <div className="space-y-10">
          <div>
            <div className="flex justify-between mb-4">
              <label className="font-mono text-xs uppercase tracking-widest text-blue-400">{t.complexity}</label>
            </div>
            <input 
              type="range" 
              min={1} 
              max={3} 
              step={1}
              value={complexity} 
              onChange={(e) => setComplexity(Number(e.target.value))}
              className="w-full accent-blue-500 h-2 bg-white/10 rounded-full appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-white/50 mt-4 font-mono uppercase tracking-widest">
              <span>{t.min}</span>
              <span>{t.max}</span>
            </div>
          </div>

          <div>
            <label className="font-mono text-xs uppercase tracking-widest text-blue-400 block mb-6">{t.timeline}</label>
            <div className="flex flex-col sm:flex-row gap-4">
              {t.options.map(opt => (
                <button 
                  key={opt.id}
                  onClick={() => handleTimelineChange(opt.id)}
                  className={`flex-1 py-4 px-6 rounded-xl border text-sm font-bold transition-all duration-200 active:scale-95 ${
                    timeline === opt.id 
                    ? 'border-blue-500 bg-blue-500/20 text-white' 
                    : 'border-white/10 text-white/50 hover:border-white/30'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-[400px] bg-gradient-to-br from-blue-900/20 to-black border-l border-white/10 p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
        <h3 className="font-mono uppercase tracking-widest text-xs text-white/50 mb-6">{t.total}</h3>
        
        <div className={`mb-6 transition-all duration-200 ${isCalculating ? 'blur-sm opacity-50' : 'blur-0 opacity-100'}`}>
          <div className="text-3xl lg:text-4xl font-black tracking-tighter mb-2 text-white">
            {getPrice()}
          </div>
        </div>
        
        <p className="text-white/40 text-xs mb-8 leading-relaxed font-medium">
          {t.note}
        </p>
        
        <button className="w-full bg-white text-black font-bold text-sm py-5 rounded-xl hover:bg-neutral-200 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
          {t.cta}
        </button>
      </div>
    </div>
  )
}
