"use client";
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronDown, Globe, Menu, X } from 'lucide-react'
import { useState } from 'react'

export function HeaderHolding({ dict, lang }: { dict: any, lang: string }) {
  const otherLang = lang === 'es' ? 'en' : 'es'
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-background/80 border-b border-foreground/10">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href={`/${lang}`} className="font-extrabold text-2xl tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
            <span className="text-background font-bold text-lg leading-none">A</span>
          </div>
          Horizon
        </Link>
        
        <nav className="hidden lg:flex gap-8 text-sm font-semibold">
          {/* Holding Dropdown */}
          <div className="relative group cursor-pointer h-20 flex items-center">
            <span className="flex items-center gap-1 hover:text-foreground/70 transition-colors">
              {dict.holding_menu.title} <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform" />
            </span>
            <div className="absolute top-20 left-0 w-64 bg-background border border-foreground/10 rounded-2xl p-4 shadow-2xl opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
              <Link href={`/${lang}/about`} className="block p-3 hover:bg-foreground/5 rounded-xl transition-colors">
                <div className="font-bold">{dict.holding_menu.overview}</div>
                <div className="text-xs text-foreground/60">{dict.holding_menu.overview_desc}</div>
              </Link>
              <Link href={`/${lang}/investors`} className="block p-3 hover:bg-foreground/5 rounded-xl transition-colors">
                <div className="font-bold">{dict.holding_menu.investors}</div>
                <div className="text-xs text-foreground/60">{dict.holding_menu.investors_desc}</div>
              </Link>
              <Link href={`/${lang}/newsroom`} className="block p-3 hover:bg-foreground/5 rounded-xl transition-colors">
                <div className="font-bold">Newsroom</div>
                <div className="text-xs text-foreground/60">Press and Updates</div>
              </Link>
              <Link href={`/${lang}/contact`} className="block p-3 hover:bg-foreground/5 rounded-xl transition-colors">
                <div className="font-bold">Contact HQ</div>
                <div className="text-xs text-foreground/60">Global inquiries</div>
              </Link>
            </div>
          </div>

          {/* Subsidiaries Dropdown */}
          <div className="relative group cursor-pointer h-20 flex items-center">
            <span className="flex items-center gap-1 hover:text-foreground/70 transition-colors">
              Subsidiaries <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform" />
            </span>
            <div className="absolute top-20 left-0 w-64 bg-background border border-foreground/10 rounded-2xl p-4 shadow-2xl opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
              <Link href={`/${lang}/forge`} className="block p-3 hover:bg-foreground/5 rounded-xl transition-colors">
                <div className="font-bold">Arasue Forge</div>
                <div className="text-xs text-foreground/60">Digital products & SaaS</div>
              </Link>
              <Link href={`/${lang}/media`} className="block p-3 hover:bg-foreground/5 rounded-xl transition-colors">
                <div className="font-bold">Arasue Media</div>
                <div className="text-xs text-foreground/60">Content & Streaming</div>
              </Link>
              <Link href={`/${lang}/labs`} className="block p-3 hover:bg-foreground/5 rounded-xl transition-colors">
                <div className="font-bold">Arasue Labs</div>
                <div className="text-xs text-foreground/60">Premium organic goods</div>
              </Link>
            </div>
          </div>

          {/* Services Dropdown */}
          <div className="relative group cursor-pointer h-20 flex items-center">
            <span className="flex items-center gap-1 hover:text-foreground/70 transition-colors">
              Services <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform" />
            </span>
            <div className="absolute top-20 left-0 w-64 bg-background border border-foreground/10 rounded-2xl p-4 shadow-2xl opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
              <Link href={`/${lang}/forge/services`} className="block p-3 hover:bg-foreground/5 rounded-xl transition-colors">
                <div className="font-bold">Web Development</div>
                <div className="text-xs text-foreground/60">Next.js & React ecosystem</div>
              </Link>
              <Link href={`/${lang}/forge/services`} className="block p-3 hover:bg-foreground/5 rounded-xl transition-colors">
                <div className="font-bold">Growth & Ads</div>
                <div className="text-xs text-foreground/60">Meta Ads & SEO strategies</div>
              </Link>
              <Link href={`/${lang}/forge/services`} className="block p-3 hover:bg-foreground/5 rounded-xl transition-colors">
                <div className="font-bold">Automations</div>
                <div className="text-xs text-foreground/60">AI & Workflow pipelines</div>
              </Link>
            </div>
          </div>
          
          <Link href={`/${lang}/workshop`} className="h-20 flex items-center hover:text-foreground/70 transition-colors">
            {dict.workshop}
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <Link 
            href={`/${otherLang}`}
            className="flex items-center gap-2 text-sm font-semibold hover:opacity-70 transition-opacity"
          >
            <Globe className="w-4 h-4" /> {otherLang.toUpperCase()}
          </Link>
          <Link href={`/${lang}/contact`} className="px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-bold active:scale-[0.97] transition-transform duration-200 ease-out">
            Contact HQ
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button className="lg:hidden p-2" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="lg:hidden bg-background border-b border-foreground/10 px-6 py-4 flex flex-col gap-4"
        >
          <Link href={`/${lang}`} className="font-bold py-2 border-b border-foreground/5">{dict.holding_menu.title}</Link>
          <div className="font-bold py-2 border-b border-foreground/5 flex flex-col gap-2">
            <span>Subsidiaries</span>
            <Link href={`/${lang}/forge`} className="text-sm opacity-70 ml-4">Arasue Forge</Link>
            <Link href={`/${lang}/media`} className="text-sm opacity-70 ml-4">Arasue Media</Link>
            <Link href={`/${lang}/labs`} className="text-sm opacity-70 ml-4">Arasue Labs</Link>
          </div>
          <Link href={`/${lang}/forge/services`} className="font-bold py-2 border-b border-foreground/5">Services</Link>
          <Link href={`/${lang}/workshop`} className="font-bold py-2 border-b border-foreground/5">{dict.workshop}</Link>
          <Link href={`/${otherLang}`} className="font-bold py-2 flex items-center gap-2 text-foreground/70"><Globe className="w-4 h-4"/> {dict.language}: {otherLang.toUpperCase()}</Link>
        </motion.div>
      )}
    </header>
  )
}
