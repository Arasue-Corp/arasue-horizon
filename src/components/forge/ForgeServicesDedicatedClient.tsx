"use client";
import { motion } from 'framer-motion'
import { Code2, Target, Search, Settings, Briefcase, Wrench, Globe, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const serviceIcons: Record<string, any> = {
  web_dev: Code2,
  brand_web: Globe,
  meta_ads: Target,
  seo_audit: Search,
  automations: Settings,
  pm: Briefcase,
  mechanical_design: Wrench,
}

const serviceCols: Record<string, string> = {
  web_dev: "col-span-1 md:col-span-2 aspect-[2/1]",
  brand_web: "col-span-1 aspect-square",
  meta_ads: "col-span-1 aspect-square",
  seo_audit: "col-span-1 aspect-square",
  automations: "col-span-1 md:col-span-2 aspect-[2/1]",
  pm: "col-span-1 aspect-square",
  mechanical_design: "col-span-1 md:col-span-2 aspect-[2/1]",
}

export function ForgeServicesDedicatedClient({ dictPage, dictServices, lang }: { dictPage: any, dictServices: any, lang: string }) {
  // Extract keys from dictServices excluding "title"
  const serviceKeys = Object.keys(dictServices).filter(k => k !== 'title')

  return (
    <div className="container mx-auto px-6 max-w-7xl mb-24">
      {/* Hero Section */}
      <div className="mb-24 pt-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-foreground/10 bg-foreground/5 text-xs font-bold uppercase tracking-widest mb-6">
            Core Competencies
          </div>
          <h1 className="text-5xl md:text-[6rem] font-black tracking-tighter leading-[0.9] mb-8">
            {dictPage.title}
          </h1>
          <p className="text-2xl text-foreground/60 font-inter max-w-2xl">
            {dictPage.subtitle}
          </p>
        </motion.div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {serviceKeys.map((key, i) => {
          const service = dictServices[key];
          const Icon = serviceIcons[key] || Code2;
          const colSpan = serviceCols[key] || "col-span-1 aspect-square";

          return (
            <motion.div 
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.05 }}
              className={`relative group overflow-hidden rounded-[2.5rem] bg-secondary/30 border border-border p-8 md:p-12 flex flex-col justify-between ${colSpan}`}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-foreground/10 flex items-center justify-center text-foreground mb-8 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold tracking-tight mb-4">
                  {service.title}
                </h3>
              </div>

              <div className="relative z-10">
                <p className="text-foreground/70 font-inter text-lg">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Scarcity Banner */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mt-24 p-8 md:p-12 border border-accent/20 bg-accent/5 rounded-3xl text-center max-w-4xl mx-auto"
      >
        <p className="text-xl md:text-2xl font-bold text-accent">
          {dictPage.scarcity}
        </p>
      </motion.div>

      {/* CTA */}
      <div className="mt-24 text-center">
        <Link 
          href={`/${lang}/forge/contact`}
          className="inline-flex items-center justify-center px-12 py-5 rounded-full bg-foreground text-background font-bold text-lg hover:scale-105 transition-transform shadow-2xl group"
        >
          Book a Discovery Call
          <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

    </div>
  )
}
