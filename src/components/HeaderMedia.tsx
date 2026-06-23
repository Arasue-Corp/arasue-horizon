"use client";
import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { Globe, Menu, X, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { Logo } from '@/components/ui/Logo'

export function HeaderMedia({ dict, lang }: { dict: any, lang: string }) {
  const otherLang = lang === 'es' ? 'en' : 'es'
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathname) return `/${locale}/media`
    const segments = pathname.split('/')
    segments[1] = locale
    return segments.join('/')
  }
  
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-background/95 border-b border-border">
      <div className="bg-primary text-primary-foreground text-xs py-1.5 text-center flex justify-center items-center gap-2 font-semibold tracking-wide">
        <span className="opacity-80">An Arasue Horizon Company</span>
        <Link href={`/${lang}`} className="underline hover:opacity-100 transition-opacity">Return to Holding</Link>
      </div>
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href={`/${lang}/media`} className="py-2">
          <Logo division="Media" />
        </Link>
        
        <nav className="hidden md:flex gap-6 text-sm font-bold">
          <Link href={`/${lang}/media/work`} className="hover:text-foreground/70 transition-colors">
            Work
          </Link>
          <Link href={`/${lang}/media/creators`} className="hover:text-foreground/70 transition-colors">
            Creators
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link 
            href={redirectedPathName(otherLang)}
            className="flex items-center gap-2 text-xs font-bold hover:opacity-70 transition-opacity"
          >
            <Globe className="w-4 h-4" /> {otherLang.toUpperCase()}
          </Link>
          <Link href={`/${lang}/media/contact`} className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-bold active:scale-[0.97] transition-transform duration-200 ease-out flex items-center gap-1">
            Partner <ArrowUpRight className="w-4 h-4" />
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
          <Link href={`/${lang}/media/work`} className="font-bold py-2 border-b border-foreground/5">Work</Link>
          <Link href={`/${lang}/media/creators`} className="font-bold py-2 border-b border-foreground/5">Creators</Link>
          <Link href={`/${lang}/media/contact`} className="font-bold py-2 border-b border-foreground/5">Partner</Link>
          <Link href={redirectedPathName(otherLang)} className="font-bold py-2 flex items-center gap-2 text-foreground/70"><Globe className="w-4 h-4"/> {dict.nav?.language || "Language"}: {otherLang.toUpperCase()}</Link>
        </motion.div>
      )}
    </header>
  )
}
