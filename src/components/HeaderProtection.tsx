"use client";
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Globe, Menu, X, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { Logo } from '@/components/ui/Logo'

export function HeaderProtection({ dict, lang }: { dict: any, lang: string }) {
  const otherLang = lang === 'es' ? 'en' : 'es'
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-background/95 border-b border-border">
      <div className="bg-primary text-primary-foreground text-xs py-1.5 text-center flex justify-center items-center gap-2 font-semibold tracking-wide">
        <span className="opacity-80">An Arasue Horizon Company</span>
        <Link href={`/${lang}`} className="underline hover:opacity-100 transition-opacity">Return to Holding</Link>
      </div>
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href={`/${lang}/protection`} className="py-2">
          <Logo division="Protection" />
        </Link>
        
        <nav className="hidden md:flex gap-6 text-sm font-bold">
          <Link href={`/${lang}/protection#coverage`} className="hover:text-foreground/70 transition-colors">
            {dict.coverage}
          </Link>
          <Link href={`/${lang}/protection#process`} className="hover:text-foreground/70 transition-colors">
            {dict.process}
          </Link>
          <Link href={`/${lang}/protection#calculator`} className="hover:text-foreground/70 transition-colors">
            {dict.calculator}
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link 
            href={`/${otherLang}/protection`}
            className="flex items-center gap-2 text-xs font-bold hover:opacity-70 transition-opacity"
          >
            <Globe className="w-4 h-4" /> {otherLang.toUpperCase()}
          </Link>
          <Link href={`/${lang}/contact`} className="px-4 py-2 rounded-full bg-slate-900 text-slate-100 text-sm font-bold active:scale-[0.97] transition-transform duration-200 ease-out flex items-center gap-1">
            {dict.contact} <ArrowUpRight className="w-4 h-4" />
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
          <Link href={`/${lang}/protection#coverage`} className="font-bold py-2 border-b border-foreground/5">{dict.coverage}</Link>
          <Link href={`/${lang}/protection#process`} className="font-bold py-2 border-b border-foreground/5">{dict.process}</Link>
          <Link href={`/${lang}/protection#calculator`} className="font-bold py-2 border-b border-foreground/5">{dict.calculator}</Link>
          <Link href={`/${lang}/contact`} className="font-bold py-2 border-b border-foreground/5">{dict.contact}</Link>
          <Link href={`/${otherLang}/protection`} className="font-bold py-2 flex items-center gap-2 text-foreground/70"><Globe className="w-4 h-4"/> {otherLang.toUpperCase()}</Link>
        </motion.div>
      )}
    </header>
  )
}
