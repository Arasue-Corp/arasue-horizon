"use client";
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { ChevronDown, Globe, Menu, X, ArrowRight } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'

// Spring physics
const spring = { type: "spring", stiffness: 300, damping: 30 } as const

export function HeaderHolding({ dict, lang }: { dict: any, lang: string }) {
  const otherLang = lang === 'es' ? 'en' : 'es'
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathname) return `/${locale}`
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
    <header className="fixed top-6 inset-x-0 z-50 flex justify-center pointer-events-none px-4">
      {/* Dynamic Island Container */}
      <motion.div 
        layout
        transition={spring}
        className={`pointer-events-auto flex flex-col bg-secondary/90 backdrop-blur-xl border border-white/10 shadow-2xl ${scrolled ? 'rounded-[2rem] px-4 py-2' : 'w-full max-w-7xl rounded-[2rem] px-6 py-4'}`}
      >
        <div className="flex items-center justify-between w-full gap-8 relative">
          {/* Logo - Pops out of the container */}
          <Link href={`/${lang}`} className="relative z-50 flex-shrink-0 flex items-center h-full" onClick={() => setActiveMenu(null)}>
            <img src="/icono-horizon-oro.png" alt="Arasue Horizon Icon" className="absolute top-1/2 -translate-y-1/2 left-0 h-16 md:h-24 w-auto object-contain transition-transform hover:scale-105 drop-shadow-2xl" />
            {/* Spacer */}
            <div className="w-16 md:w-24 h-8" />
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            <NavItem 
              title={dict.holding_menu.title} 
              isActive={activeMenu === 'holding'}
              onToggle={() => setActiveMenu(activeMenu === 'holding' ? null : 'holding')}
            />
            <NavItem 
              title={dict.divisions} 
              isActive={activeMenu === 'divisions'}
              onToggle={() => setActiveMenu(activeMenu === 'divisions' ? null : 'divisions')}
            />
            <NavItem 
              title="Services" 
              isActive={activeMenu === 'services'}
              onToggle={() => setActiveMenu(activeMenu === 'services' ? null : 'services')}
            />
            <Link href={`/${lang}/workshop`} className="px-4 py-1.5 text-sm font-bold text-[#ffcc00] border border-[#ffcc00]/30 hover:bg-[#ffcc00] hover:text-[#171425] transition-all rounded-full flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ffcc00] animate-pulse"></span>
              {dict.workshop}
            </Link>
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <Link 
              href={redirectedPathName(otherLang)}
              className="flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors px-3 py-1.5 rounded-full hover:bg-white/5"
            >
              <Globe className="w-4 h-4" /> {otherLang.toUpperCase()}
            </Link>
            <Link href={`/${lang}/contact`} className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-bold active:scale-[0.97] transition-transform duration-200">
              Contact HQ
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-white" 
            onClick={() => setActiveMenu(activeMenu === 'mobile' ? null : 'mobile')}
          >
            {activeMenu === 'mobile' ? <X /> : <Menu />}
          </button>
        </div>

        {/* Dynamic Island Expanded Content */}
        <AnimatePresence mode="wait">
          {activeMenu === 'holding' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={spring}
              className="w-full pt-6 overflow-hidden"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/10 pt-4">
                <MenuLink title={dict.holding_menu.overview} desc={dict.holding_menu.overview_desc} href={`/${lang}/about`} />
                <MenuLink title={dict.holding_menu.investors} desc={dict.holding_menu.investors_desc} href={`/${lang}/investors`} />
                <MenuLink title="Newsroom" desc="Press and Updates" href={`/${lang}/newsroom`} />
                <MenuLink title="Contact HQ" desc="Global inquiries" href={`/${lang}/contact`} />
              </div>
            </motion.div>
          )}
          {activeMenu === 'divisions' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={spring}
              className="w-full pt-6 overflow-hidden"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/10 pt-4">
                <MenuLink title="Arasue Forge" desc="Digital products & SaaS" href={`/${lang}/forge`} color="#0511F2" />
                <MenuLink title="Arasue Studios" desc="Content & Streaming" href={`/${lang}/studios`} color="#f9d657" />
                <MenuLink title="Arasue Labs" desc="Premium organic goods" href={`/${lang}/labs`} color="#1a2e1a" />
                <MenuLink title="Arasue Protection" desc="Life & Health Insurance" href={`/${lang}/protection`} color="#162D59" />
              </div>
            </motion.div>
          )}
          {activeMenu === 'services' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={spring}
              className="w-full pt-6 overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-white/10 pt-4">
                <MenuLink title="Web Development" desc="Next.js & React ecosystem" href={`/${lang}/forge/services`} />
                <MenuLink title="Growth & Ads" desc="Meta Ads & SEO strategies" href={`/${lang}/forge/services`} />
                <MenuLink title="Automations" desc="AI & Workflow pipelines" href={`/${lang}/forge/services`} />
              </div>
            </motion.div>
          )}
          {activeMenu === 'mobile' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={spring}
              className="w-full flex flex-col gap-4 pt-6 border-t border-white/10 mt-4 overflow-hidden"
            >
              <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-2 pb-4">
                <div>
                  <h3 className="text-white/50 text-xs uppercase tracking-widest font-bold mb-3">{dict.holding_menu?.title || 'Holding'}</h3>
                  <div className="flex flex-col gap-3 pl-4 border-l border-white/10">
                    <Link href={`/${lang}/about`} className="text-white font-semibold text-lg">{dict.holding_menu?.overview || 'Overview'}</Link>
                    <Link href={`/${lang}/investors`} className="text-white font-semibold text-lg">{dict.holding_menu?.investors || 'Investors'}</Link>
                    <Link href={`/${lang}/newsroom`} className="text-white font-semibold text-lg">Newsroom</Link>
                    <Link href={`/${lang}/contact`} className="text-white font-semibold text-lg">Contact HQ</Link>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-white/50 text-xs uppercase tracking-widest font-bold mb-3">{dict.divisions || 'Divisions'}</h3>
                  <div className="flex flex-col gap-3 pl-4 border-l border-white/10">
                    <Link href={`/${lang}/forge`} className="text-white font-semibold text-lg">Arasue Forge</Link>
                    <Link href={`/${lang}/studios`} className="text-white font-semibold text-lg">Arasue Studios</Link>
                    <Link href={`/${lang}/labs`} className="text-white font-semibold text-lg">Arasue Labs</Link>
                    <Link href={`/${lang}/protection`} className="text-white font-semibold text-lg">Arasue Protection</Link>
                  </div>
                </div>

                <div>
                  <h3 className="text-white/50 text-xs uppercase tracking-widest font-bold mb-3">Services</h3>
                  <div className="flex flex-col gap-3 pl-4 border-l border-white/10">
                    <Link href={`/${lang}/forge/services`} className="text-white font-semibold text-lg">Web Development</Link>
                    <Link href={`/${lang}/forge/services`} className="text-white font-semibold text-lg">Growth & Ads</Link>
                    <Link href={`/${lang}/forge/services`} className="text-white font-semibold text-lg">Automations</Link>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
                  <Link href={`/${lang}/workshop`} className="w-full text-center py-4 rounded-xl bg-[#ffcc00]/10 text-[#ffcc00] border border-[#ffcc00]/30 font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#ffcc00] animate-pulse"></span>
                    {dict.workshop || 'Workshop'}
                  </Link>
                  <Link href={redirectedPathName(otherLang)} className="text-primary font-bold text-lg flex items-center justify-center gap-2 py-2"><Globe className="w-5 h-5"/> Switch to {otherLang.toUpperCase()}</Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  )
}

function NavItem({ title, isActive, onToggle }: { title: string, isActive: boolean, onToggle: () => void }) {
  return (
    <button 
      onClick={onToggle}
      className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-colors flex items-center gap-1 ${isActive ? 'text-white bg-white/10' : 'text-white/70 hover:text-white hover:bg-white/5'}`}
    >
      {title}
      <ChevronDown className={`w-3 h-3 transition-transform ${isActive ? 'rotate-180' : ''}`} />
    </button>
  )
}

function MenuLink({ title, desc, href, color }: { title: string, desc: string, href: string, color?: string }) {
  return (
    <Link href={href} className="group relative p-4 rounded-xl hover:bg-white/5 transition-colors overflow-hidden border border-transparent hover:border-white/10">
      {color && <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl" style={{ backgroundColor: color }} />}
      <div className="relative z-10 flex items-center justify-between">
        <h4 className="text-white font-bold font-inter">{title}</h4>
        <ArrowRight className="w-4 h-4 text-white/0 group-hover:text-white/50 -translate-x-2 group-hover:translate-x-0 transition-all" />
      </div>
      <p className="relative z-10 text-white/50 text-xs mt-1">{desc}</p>
    </Link>
  )
}
