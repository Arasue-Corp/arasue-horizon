"use client"
import { useState, useTransition } from 'react'
import { submitLead } from '@/app/actions/lead'
import { motion } from 'framer-motion'

export function ForgeEstimator({ dict, currencySymbol }: { dict: any, currencySymbol: string }) {
  const t = dict
  
  const [complexity, setComplexity] = useState(1) // 1: MVP, 2: Mid, 3: Enterprise
  const [timeline, setTimeline] = useState('relaxed')
  const [isCalculating, setIsCalculating] = useState(false)
  
  const [showEmailInput, setShowEmailInput] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isPending, startTransition] = useTransition()

  const handleTimelineChange = (val: string) => {
    setIsCalculating(true)
    setTimeout(() => {
      setTimeline(val)
      setIsCalculating(false)
    }, 200)
  }

  const getPrice = () => {
    const isMexico = currencySymbol === '$' 
    let base = 0;
    
    if (complexity === 1) base = isMexico ? 150000 : 8000;
    if (complexity === 2) base = isMexico ? 350000 : 18000;
    if (complexity === 3) base = isMexico ? 800000 : 45000;
    
    let multiplier = timeline === 'rush' ? 1.4 : 1.0;
    
    const min = Math.round((base * multiplier) * 0.9);
    const max = Math.round((base * multiplier) * 1.1);
    
    return isMexico ? `${currencySymbol}${min.toLocaleString()} - ${currencySymbol}${max.toLocaleString()} MXN` : `${currencySymbol}${min.toLocaleString()} - ${currencySymbol}${max.toLocaleString()}`
  }

  const handleRequest = () => {
    if (!showEmailInput) {
      setShowEmailInput(true)
      return
    }

    if (!email) return

    const formData = new FormData()
    formData.append('intent', 'forge_proposal_request')
    formData.append('email', email)
    formData.append('complexity', String(complexity))
    formData.append('timeline', timeline)
    formData.append('estimated_price', getPrice())

    startTransition(async () => {
      const res = await submitLead(formData)
      if (res?.success) {
        setSubmitted(true)
      } else {
        alert(res?.error || 'Error')
      }
    })
  }

  return (
    <div className="bg-secondary/50 backdrop-blur-3xl border border-border rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl shadow-black max-w-6xl mx-auto">
      {/* Left side: Controls */}
      <div className="flex-1 p-8 md:p-16">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">{t.title}</h2>
          <p className="text-foreground/60 font-inter text-lg">{t.subtitle}</p>
        </div>

        <div className="space-y-12">
          {/* Complexity Slider */}
          <div>
            <label className="font-mono text-xs uppercase tracking-widest text-foreground/50 mb-8 block">{t.complexity}</label>
            <div className="relative pt-1">
              <input 
                type="range" 
                min={1} 
                max={3} 
                step={1}
                value={complexity} 
                onChange={(e) => setComplexity(Number(e.target.value))}
                className="w-full h-3 bg-muted rounded-full appearance-none cursor-pointer hover:bg-muted-foreground/20 transition-all [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:bg-foreground [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg"
              />
            </div>
            <div className="flex justify-between text-xs text-foreground/50 mt-8 font-mono uppercase tracking-widest font-bold">
              <span>{t.min}</span>
              <span>{t.max}</span>
            </div>
          </div>

          {/* Timeline Buttons */}
          <div>
            <label className="font-mono text-xs uppercase tracking-widest text-foreground/50 mb-6 block">{t.timeline}</label>
            <div className="flex flex-col sm:flex-row gap-4 bg-muted/50 p-2 rounded-3xl">
              {t.options.map((opt: any) => (
                <button 
                  key={opt.id}
                  onClick={() => handleTimelineChange(opt.id)}
                  className={`flex-1 py-5 px-6 rounded-2xl text-sm font-bold font-inter transition-all duration-300 ${
                    timeline === opt.id 
                    ? 'bg-primary text-primary-foreground shadow-md' 
                    : 'text-foreground/50 hover:bg-primary/20 hover:text-foreground'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right side: Calculation & Output */}
      <div className="lg:w-[450px] bg-foreground text-background p-8 md:p-16 flex flex-col justify-center relative overflow-hidden group">
        
        <div className="relative z-10">
          <h3 className="font-mono uppercase tracking-widest text-xs text-background/50 mb-6">{t.total}</h3>
          
          <div className={`mb-6 transition-all duration-300 ${isCalculating ? 'blur-md opacity-50 scale-95' : 'blur-0 opacity-100 scale-100'}`}>
            <div className="text-4xl md:text-5xl font-black tracking-tighter">
              {getPrice()}
            </div>
          </div>
          
          <p className="text-background/50 text-sm mb-12 leading-relaxed font-medium font-inter">
            {t.note}
          </p>
          
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="bg-accent/10 p-6 rounded-2xl text-center text-sm font-bold text-accent border border-accent/20"
            >
              {t.success}
            </motion.div>
          ) : (
            <div className="space-y-4 font-inter">
              {showEmailInput && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }} 
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-3"
                >
                  <label className="text-xs font-bold text-background/60 uppercase tracking-wider">{t.emailPrompt}</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full bg-black/5 border border-black/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:bg-black/10 text-black transition-all placeholder:text-black/30" 
                    placeholder="corporate@domain.com"
                  />
                </motion.div>
              )}
              <button 
                onClick={handleRequest}
                disabled={isPending}
                className="w-full bg-background border border-border text-foreground font-bold text-base py-5 rounded-2xl hover:bg-secondary active:scale-95 transition-all disabled:opacity-50"
              >
                {isPending ? t.submitting : t.cta}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
