"use client";
import { motion } from 'framer-motion'
import { CheckCircle2, Zap } from 'lucide-react'
import Link from 'next/link'

export function ForgePricingClient({ dict, lang }: { dict: any, lang: string }) {
  return (
    <div className="container mx-auto px-6 max-w-7xl mb-24">
      {/* Hero Section */}
      <div className="text-center mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-xs font-bold uppercase tracking-widest mb-6 text-accent">
            <Zap className="w-4 h-4" /> Zero Technical Debt
          </div>
          <h1 className="text-6xl md:text-[6rem] font-black tracking-tighter leading-[1] mb-8">
            {dict.title}
          </h1>
          <p className="text-2xl text-foreground/60 font-inter max-w-2xl mx-auto">
            {dict.anchoring_text}
          </p>
        </motion.div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {dict.plans?.map((plan: any, i: number) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`relative rounded-[3rem] p-10 flex flex-col h-full border ${
              plan.featured 
              ? 'bg-foreground text-background border-transparent shadow-2xl scale-100 lg:scale-105 z-10' 
              : 'bg-secondary/30 border-border text-foreground'
            }`}
          >
            {plan.featured && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-accent text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">
                Premium
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-3xl font-black tracking-tight mb-2">{plan.name}</h3>
              <p className={`font-inter ${plan.featured ? 'text-background/70' : 'text-foreground/60'}`}>
                {plan.subtitle}
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-end gap-2 mb-2">
                <span className="text-5xl font-black tracking-tighter">{plan.price}</span>
              </div>
              <p className={`text-sm font-bold uppercase tracking-widest ${plan.featured ? 'text-background/50' : 'text-foreground/40'}`}>
                {plan.period}
              </p>
              <div className="mt-4 pt-4 border-t border-current/10">
                <p className="font-bold text-xl">{plan.monthly}</p>
                <p className={`text-xs uppercase tracking-widest ${plan.featured ? 'text-background/50' : 'text-foreground/40'}`}>
                  Hosting & Maintenance
                </p>
              </div>
            </div>

            <ul className="space-y-4 mb-12 flex-grow">
              {plan.features.map((feature: string, j: number) => (
                <li key={j} className="flex items-start gap-3">
                  <CheckCircle2 className={`w-5 h-5 shrink-0 ${plan.featured ? 'text-accent' : 'text-foreground/40'}`} />
                  <span className="font-inter font-medium text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Link 
              href={`/${lang}/forge/contact`}
              className={`w-full py-4 rounded-full font-bold text-center transition-transform active:scale-95 ${
                plan.featured 
                ? 'bg-background text-foreground hover:bg-background/90' 
                : 'bg-foreground text-background hover:bg-foreground/90'
              }`}
            >
              Contact
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
