"use client";
import { useState } from 'react'
import { motion } from 'framer-motion'

export function ProtectionCalculator({ lang }: { lang: 'en' | 'es' }) {
  const isEn = lang === 'en'
  const dict = {
    title: isEn ? 'Estimate Your Coverage' : 'Estima tu Cobertura',
    desc: isEn ? 'Get a baseline idea of the recommended life insurance coverage based on your current income and age.' : 'Obtén una idea base de la cobertura de seguro de vida recomendada basada en tus ingresos actuales y edad.',
    age: isEn ? 'Your Age' : 'Tu Edad',
    income: isEn ? 'Annual Income' : 'Ingreso Anual',
    recommended: isEn ? 'Recommended Coverage' : 'Cobertura Recomendada',
    est_premium: isEn ? 'Est. Monthly Premium' : 'Prima Mensual Estimada',
    disclaimer: isEn ? '*This is a simplified estimate. Actual premiums depend on medical underwriting.' : '*Esta es una estimación simplificada. Las primas reales dependen de la evaluación médica.',
    cta: isEn ? 'Request Formal Quote' : 'Solicitar Cotización Formal'
  }

  const [age, setAge] = useState(35)
  const [income, setIncome] = useState(100000)

  // Very simplified rule of thumb: 10x to 15x income depending on age
  const multiplier = age < 40 ? 15 : (age < 55 ? 12 : 10)
  const recommendedCoverage = income * multiplier
  
  // Very simplified premium calculation
  const baseRate = 0.5 // base per 1000
  const ageFactor = age / 30
  const monthlyPremium = (recommendedCoverage / 1000) * baseRate * ageFactor

  return (
    <section id="calculator" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-black mb-4">{dict.title}</h2>
        <p className="text-foreground/70">{dict.desc}</p>
      </div>

      <div className="bg-foreground/5 border border-foreground/10 rounded-[2rem] p-8 md:p-12 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-bold mb-4 flex justify-between">
                <span>{dict.age}</span>
                <span className="text-blue-500">{age} yrs</span>
              </label>
              <input 
                type="range" 
                min="18" 
                max="75" 
                value={age} 
                onChange={(e) => setAge(parseInt(e.target.value))}
                className="w-full accent-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold mb-4 flex justify-between">
                <span>{dict.income}</span>
                <span className="text-emerald-500">${income.toLocaleString()}</span>
              </label>
              <input 
                type="range" 
                min="30000" 
                max="500000" 
                step="5000"
                value={income} 
                onChange={(e) => setIncome(parseInt(e.target.value))}
                className="w-full accent-emerald-500"
              />
            </div>
          </div>

          <div className="bg-background rounded-2xl p-8 border border-foreground/10 flex flex-col justify-center">
            <div className="mb-6">
              <div className="text-sm text-foreground/60 font-bold uppercase tracking-wider mb-2">{dict.recommended}</div>
              <div className="text-4xl md:text-5xl font-black text-slate-800 dark:text-slate-200">
                ${(recommendedCoverage / 1000000).toFixed(1)}M
              </div>
            </div>
            <div className="mb-8">
              <div className="text-sm text-foreground/60 font-bold uppercase tracking-wider mb-2">{dict.est_premium}</div>
              <div className="text-2xl font-bold text-blue-500">
                ${monthlyPremium.toFixed(0)} <span className="text-sm text-foreground/50 font-normal">/ mo</span>
              </div>
            </div>
            
            <a href={`/${lang}/contact`} className="block w-full py-4 text-center rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity">
              {dict.cta}
            </a>
            <p className="text-xs text-foreground/40 mt-4 text-center leading-tight">
              {dict.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
