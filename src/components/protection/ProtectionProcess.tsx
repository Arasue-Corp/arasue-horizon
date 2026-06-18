"use client";
import { motion } from 'framer-motion'
import { FileText, Search, ShieldCheck } from 'lucide-react'

export function ProtectionProcess({ lang }: { lang: 'en' | 'es' }) {
  const isEn = lang === 'en'
  const dict = {
    title: isEn ? 'How It Works' : 'Cómo Funciona',
    steps: [
      {
        title: isEn ? '1. Assessment' : '1. Evaluación',
        desc: isEn ? 'We analyze your current lifestyle, family structure, and financial goals.' : 'Analizamos tu estilo de vida actual, estructura familiar y objetivos financieros.',
        icon: Search
      },
      {
        title: isEn ? '2. Custom Policy' : '2. Póliza a Medida',
        desc: isEn ? 'Our brokers design a policy leveraging the best global underwriters.' : 'Nuestros corredores diseñan una póliza utilizando los mejores suscriptores globales.',
        icon: FileText
      },
      {
        title: isEn ? '3. Peace of Mind' : '3. Tranquilidad',
        desc: isEn ? 'Instant coverage activation and 24/7 concierge support.' : 'Activación de cobertura instantánea y soporte de conserjería 24/7.',
        icon: ShieldCheck
      }
    ]
  }

  return (
    <section className="py-24 px-6 bg-foreground/5 border-y border-foreground/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16">{dict.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dict.steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-8"
            >
              <div className="w-16 h-16 rounded-full bg-background border-2 border-foreground flex items-center justify-center mb-6">
                <step.icon className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-foreground/70 font-medium">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
