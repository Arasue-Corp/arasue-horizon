"use client";
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Globe, Menu, X, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

export function HeaderLabs({ dict, lang }: { dict: any, lang: string }) {
  const otherLang = lang === 'es' ? 'en' : 'es'
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#F9F7F1]/95 border-b border-foreground/10 text-[#1a2e1a]">
      <div className="bg-[#1a2e1a] text-[#F9F7F1] text-xs py-1.5 text-center flex justify-center items-center gap-2 font-semibold tracking-wide">
        <span className="opacity-80">An Arasue Horizon Company</span>
        <Link href={`/${lang}`} className="underline hover:opacity-100 transition-opacity">Return to Holding</Link>
      </div>
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href={`/${lang}/labs`} className="font-serif italic text-2xl tracking-tighter flex items-center gap-2">
          Labs
        </Link>
        
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href={`/${lang}/labs/shop`} className="hover:opacity-70 transition-opacity">
            Shop
          </Link>
          <Link href={`/${lang}/labs/story`} className="hover:opacity-70 transition-opacity">
            Our Story
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link 
            href={`/${otherLang}/labs`}
            className="flex items-center gap-2 text-xs font-medium hover:opacity-70 transition-opacity"
          >
            <Globe className="w-4 h-4" /> {otherLang.toUpperCase()}
          </Link>
          <Link href={`/${lang}/labs/contact`} className="px-4 py-2 rounded-full bg-[#1a2e1a] text-[#F9F7F1] text-sm font-medium active:scale-[0.97] transition-transform duration-200 ease-out flex items-center gap-1">
            Contact <ArrowUpRight className="w-4 h-4" />
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
          className="md:hidden bg-[#F9F7F1] border-b border-foreground/10 px-6 py-4 flex flex-col gap-4"
        >
          <Link href={`/${lang}/labs/shop`} className="font-medium py-2 border-b border-foreground/5">Shop</Link>
          <Link href={`/${lang}/labs/story`} className="font-medium py-2 border-b border-foreground/5">Our Story</Link>
          <Link href={`/${lang}/labs/contact`} className="font-medium py-2 border-b border-foreground/5">Contact</Link>
          <Link href={`/${otherLang}/labs`} className="font-medium py-2 flex items-center gap-2 opacity-70"><Globe className="w-4 h-4"/> {dict.nav?.language || "Language"}: {otherLang.toUpperCase()}</Link>
        </motion.div>
      )}
    </header>
  )
}
