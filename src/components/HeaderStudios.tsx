"use client";
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Globe, Menu, X, ArrowUpRight } from 'lucide-react'
import { usePathname } from 'next/navigation'

// Spring physics for tactical feel
const spring = { type: "spring", stiffness: 350, damping: 35 } as const

export function HeaderStudios({ dict, lang }: { dict: any, lang: string }) {
  const otherLang = lang === 'es' ? 'en' : 'es'
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathname) return `/${locale}/studios`
    const segments = pathname.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  // Detect scroll for island effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      if (window.scrollY > 50 && activeMenu) {
        setActiveMenu(null) // auto-close on scroll
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeMenu])

  return (
    <>
      <div className="fixed top-0 inset-x-0 z-[60] bg-background text-primary text-[10px] uppercase tracking-[0.2em] py-1.5 text-center flex justify-center items-center gap-3 font-bold border-b border-white/5">
        <span className="opacity-60">{dict.company_tag || 'An Arasue Horizon Company'}</span>
        <Link href={`/${lang}`} className="underline hover:text-white transition-colors opacity-80 hover:opacity-100 flex items-center gap-1">
          {dict.return_holding || 'Return to Holding'}
        </Link>
      </div>
      <header className="fixed top-8 inset-x-0 z-50 flex justify-center pointer-events-none px-4">
        {/* Dynamic Island Container */}
        <motion.div 
          layout
          transition={spring}
          className={`pointer-events-auto flex flex-col bg-secondary/90 backdrop-blur-2xl border border-border shadow-2xl shadow-black/50 ${scrolled ? 'rounded-[1.5rem] px-5 py-2.5' : 'w-full max-w-6xl rounded-[1.5rem] px-6 py-4'}`}
        >
          <div className="flex items-center justify-between w-full gap-8 relative">
            {/* Logo - Lockup */}
            <Link href={`/${lang}/studios`} className="relative z-50 flex-shrink-0 flex items-center h-full" onClick={() => setActiveMenu(null)}>
              <img src="/icono-studios-blanco.png" alt="Arasue Studios Icon" className="absolute top-1/2 -translate-y-1/2 left-0 h-16 md:h-20 w-auto object-contain transition-transform hover:scale-105 drop-shadow-2xl" />
              {/* Spacer */}
              <div className="w-12 md:w-16 h-8" />
            </Link>
            
            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-2">
              <Link href={`/${lang}/studios/work`} className="px-4 py-2 rounded-lg text-sm font-semibold text-foreground/70 hover:text-foreground hover:bg-white/5 transition-colors">
                Work
              </Link>
              <Link href={`/${lang}/studios/creators`} className="px-4 py-2 rounded-lg text-sm font-semibold text-foreground/70 hover:text-foreground hover:bg-white/5 transition-colors">
                Creators
              </Link>
            </nav>

            {/* Actions */}
            <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
              <Link 
                href={redirectedPathName(otherLang)}
                className="flex items-center gap-2 text-sm font-semibold text-foreground/60 hover:text-foreground transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5"
              >
                <Globe className="w-4 h-4" /> {otherLang.toUpperCase()}
              </Link>
              <Link href={`/${lang}/studios/contact`} className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-bold active:scale-[0.97] transition-transform duration-200 flex items-center gap-1 shadow-lg shadow-primary/20">
                Partner <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="lg:hidden p-2 text-foreground" 
              onClick={() => setActiveMenu(activeMenu === 'mobile' ? null : 'mobile')}
            >
              {activeMenu === 'mobile' ? <X /> : <Menu />}
            </button>
          </div>

          {/* Dynamic Island Expanded Content */}
          <AnimatePresence mode="wait">
            {activeMenu === 'mobile' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={spring}
                className="w-full flex flex-col gap-4 pt-6 border-t border-border mt-4 overflow-hidden"
              >
                <div className="space-y-4 max-h-[70vh] overflow-y-auto pb-4">
                  <Link href={`/${lang}/studios/work`} className="block text-foreground font-semibold text-lg">Work</Link>
                  <Link href={`/${lang}/studios/creators`} className="block text-foreground font-semibold text-lg">Creators</Link>
                  <Link href={`/${lang}/studios/contact`} className="block text-foreground font-semibold text-lg">Partner</Link>
                  
                  <div className="pt-4 border-t border-border flex flex-col gap-4">
                    <Link href={redirectedPathName(otherLang)} className="text-foreground/70 font-bold text-lg flex items-center justify-center gap-2 py-2">
                      <Globe className="w-5 h-5"/> Switch to {otherLang.toUpperCase()}
                    </Link>
                    <Link href={`/${lang}`} className="text-foreground/50 text-sm text-center underline">
                      {dict.return_holding || 'Return to Arasue Horizon'}
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </header>
    </>
  )
}
