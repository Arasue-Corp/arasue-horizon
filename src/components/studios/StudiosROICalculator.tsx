"use client"
import { useState } from 'react'

const dict = {
  usa: {
    title: 'Campaign ROI Estimator',
    subtitle: 'Project your potential reach and conversions based on your influencer marketing budget.',
    budget: 'Campaign Budget',
    platform: 'Primary Platform',
    platforms: [
      { id: 'tiktok', label: 'TikTok (Viral Reach)' },
      { id: 'youtube', label: 'YouTube (Deep Conversion)' },
      { id: 'twitch', label: 'Twitch (Live Engagement)' }
    ],
    estReach: 'Estimated Reach',
    estConv: 'Est. Conversions',
    note: '*Projections based on historical aggregate data. Actual results depend on creative execution and product-market fit.',
    cta: 'Discuss Strategy'
  },
  mex: {
    title: 'Estimador de ROI de Campaña',
    subtitle: 'Proyecta tu alcance potencial y conversiones basado en tu presupuesto de marketing de influencers.',
    budget: 'Presupuesto de Campaña',
    platform: 'Plataforma Principal',
    platforms: [
      { id: 'tiktok', label: 'TikTok (Alcance Viral)' },
      { id: 'youtube', label: 'YouTube (Conversión Profunda)' },
      { id: 'twitch', label: 'Twitch (Interacción en Vivo)' }
    ],
    estReach: 'Alcance Estimado',
    estConv: 'Conversiones Est.',
    note: '*Proyecciones basadas en datos agregados históricos. Los resultados reales dependen de la ejecución creativa.',
    cta: 'Discutir Estrategia'
  }
}

export function StudiosROICalculator({ lang }: { lang: 'en' | 'es' }) {
  const isMexico = lang === 'es'
  const t = dict[isMexico ? 'mex' : 'usa']
  
  const [budget, setBudget] = useState(10000)
  const [platform, setPlatform] = useState('tiktok')
  const [isCalculating, setIsCalculating] = useState(false)
  
  const handlePlatformChange = (val: string) => {
    setIsCalculating(true)
    setTimeout(() => {
      setPlatform(val)
      setIsCalculating(false)
    }, 200)
  }

  const getMetrics = () => {
    let reachMultiplier = platform === 'tiktok' ? 150 : platform === 'youtube' ? 40 : 60;
    let convRate = platform === 'tiktok' ? 0.005 : platform === 'youtube' ? 0.025 : 0.015;
    
    // adjust budget if Mexico to simulate USD equivalent for metrics
    const effectiveBudget = isMexico ? budget / 18 : budget;
    
    const reach = Math.round(effectiveBudget * reachMultiplier);
    const conversions = Math.round(reach * convRate);
    
    return {
      reach: (reach / 1000000).toFixed(1) + 'M+',
      conversions: conversions.toLocaleString()
    }
  }

  const metrics = getMetrics()

  return (
    <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-2xl">
      <div className="flex-1 p-8 lg:p-12">
        <div className="mb-12">
          <h2 className="text-3xl font-black uppercase mb-2">{t.title}</h2>
          <p className="text-white/50">{t.subtitle}</p>
        </div>

        <div className="space-y-10">
          <div>
            <div className="flex justify-between mb-4">
              <label className="font-bold text-xs uppercase tracking-widest text-purple-400">{t.budget}</label>
              <span className="font-mono text-white/80">{isMexico ? `$${budget.toLocaleString()} MXN` : `$${budget.toLocaleString()} USD`}</span>
            </div>
            <input 
              type="range" 
              min={isMexico ? 50000 : 5000} 
              max={isMexico ? 2000000 : 200000} 
              step={isMexico ? 10000 : 1000}
              value={budget} 
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full accent-purple-500 h-2 bg-white/10 rounded-full appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label className="font-bold text-xs uppercase tracking-widest text-purple-400 block mb-6">{t.platform}</label>
            <div className="flex flex-col gap-3">
              {t.platforms.map(opt => (
                <button 
                  key={opt.id}
                  onClick={() => handlePlatformChange(opt.id)}
                  className={`py-4 px-6 rounded-xl border text-sm font-bold transition-all duration-200 text-left ${
                    platform === opt.id 
                    ? 'border-purple-500 bg-purple-500/20 text-white' 
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

      <div className="md:w-[400px] bg-purple-900/20 border-l border-white/10 p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
        
        <div className={`space-y-8 mb-8 transition-all duration-200 ${isCalculating ? 'blur-sm opacity-50' : 'blur-0 opacity-100'}`}>
          <div>
            <h3 className="font-bold uppercase tracking-widest text-xs text-white/50 mb-2">{t.estReach}</h3>
            <div className="text-5xl font-black tracking-tighter text-white">
              {metrics.reach}
            </div>
          </div>
          <div>
            <h3 className="font-bold uppercase tracking-widest text-xs text-white/50 mb-2">{t.estConv}</h3>
            <div className="text-4xl font-black tracking-tighter text-purple-400">
              {metrics.conversions}
            </div>
          </div>
        </div>
        
        <p className="text-white/40 text-xs mb-8 leading-relaxed font-medium">
          {t.note}
        </p>
        
        <button className="w-full bg-white text-black font-black uppercase tracking-widest text-sm py-5 rounded-xl hover:bg-neutral-200 active:scale-95 transition-all shadow-[0_0_30px_rgba(168,85,247,0.3)]">
          {t.cta}
        </button>
      </div>
    </div>
  )
}
