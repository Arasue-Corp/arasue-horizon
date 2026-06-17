"use client";
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Globe, Menu, X, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

export function HeaderForge({ dict, lang }: { dict: any, lang: string }) {
  const otherLang = lang === 'es' ? 'en' : 'es'
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-background/95 border-b border-foreground/10">
      <div className="bg-foreground text-background text-xs py-1.5 text-center flex justify-center items-center gap-2 font-semibold tracking-wide">
        <span className="opacity-80">An Arasue Horizon Company</span>
        <Link href={`/${lang}`} className="underline hover:opacity-100 transition-opacity">Return to Holding</Link>
      </div>
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href={`/${lang}/forge`} className="font-black text-2xl tracking-tighter flex items-center gap-2">
          Forge
        </Link>
        
        <nav className="hidden md:flex gap-6 text-sm font-bold">
          <Link href={`/${lang}/forge#services`} className="hover:text-foreground/70 transition-colors">
            {dict.forge_menu.services}
          </Link>
          <span className="hover:text-foreground/70 transition-colors opacity-50 cursor-not-allowed">
            {dict.forge_menu.portfolio}
          </span>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link 
            href={`/${otherLang}/forge`}
            className="flex items-center gap-2 text-xs font-bold hover:opacity-70 transition-opacity"
          >
            <Globe className="w-4 h-4" /> {otherLang.toUpperCase()}
          </Link>
          <Link href={`/${lang}/forge#contact`} className="px-4 py-2 rounded-full bg-foreground text-background text-sm font-bold hover:scale-105 transition-transform flex items-center gap-1">
            {dict.forge_menu.contact} <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden p-2" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-background border-b border-foreground/10 px-6 py-4 flex flex-col gap-4"
        >
          <Link href={`/${lang}/forge#services`} className="font-bold py-2 border-b border-foreground/5">{dict.forge_menu.services}</Link>
          <Link href={`/${otherLang}/forge`} className="font-bold py-2 flex items-center gap-2 text-foreground/70"><Globe className="w-4 h-4"/> {dict.language}: {otherLang.toUpperCase()}</Link>
        </motion.div>
      )}
    </header>
  )
}
