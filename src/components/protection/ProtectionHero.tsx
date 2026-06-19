"use client";
import { motion } from 'framer-motion'
import { ShieldCheck, HeartPulse, Shield } from 'lucide-react'
import Link from 'next/link'

export function ProtectionHero({ lang }: { lang: 'en' | 'es' }) {
  const isEn = lang === 'en'
  const dict = {
    title: isEn ? 'Secure Your Legacy.' : 'Asegura tu Legado.',
    subtitle: isEn ? 'Premium Life & Health Insurance designed for uncompromising peace of mind.' : 'Seguros de Vida y Salud premium diseñados para una tranquilidad sin concesiones.',
    cta: isEn ? 'Get Protected' : 'Protégete Ahora',
    contact: isEn ? 'Talk to an Advisor' : 'Habla con un Asesor'
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 text-slate-50">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/40 via-slate-950/80 to-slate-950" />
      </div>
      
      <div className="container relative z-10 mx-auto px-6 py-32 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-8 shadow-2xl border border-slate-700">
            <Shield className="w-8 h-8 text-slate-300" />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6">
            {dict.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-12 font-medium">
            {dict.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link 
              href={`/${lang}/protection#calculator`}
              className="px-8 py-4 rounded-full bg-slate-100 text-slate-950 font-bold text-lg hover:bg-white active:scale-[0.98] transition-all"
            >
              {dict.cta}
            </Link>
            <Link 
              href={`/${lang}/contact`}
              className="px-8 py-4 rounded-full bg-slate-800 text-slate-100 font-bold text-lg hover:bg-slate-700 border border-slate-700 active:scale-[0.98] transition-all"
            >
              {dict.contact}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
