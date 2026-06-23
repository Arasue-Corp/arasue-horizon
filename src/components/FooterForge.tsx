import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function FooterForge({ dict, lang }: { dict: any, lang: string }) {
  const otherLang = lang === 'es' ? 'en' : 'es'

  return (
    <footer className="mt-20 border-t border-border bg-background pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href={`/${lang}/forge`} className="group inline-block w-full max-w-[200px] md:max-w-[260px] mb-8">
              <img src="/logo-forge-blanco.png" alt="Arasue Forge" className="w-full h-auto object-contain transition-transform group-hover:scale-105" />
            </Link>
            <p className="text-foreground/60 text-sm max-w-sm mb-8 leading-relaxed font-inter">
              {dict.forge.hero.subtitle || "Premium software development and digital strategy agency. We build the infrastructure that defines industries."}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary text-foreground/50 hover:text-primary hover:bg-primary/10 transition-colors text-xs font-bold font-mono">
                X
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary text-foreground/50 hover:text-primary hover:bg-primary/10 transition-colors text-xs font-bold font-mono">
                IN
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary text-foreground/50 hover:text-primary hover:bg-primary/10 transition-colors text-xs font-bold font-mono">
                IG
              </a>
            </div>
          </div>
          
          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-12">
            
            {/* Forge Ecosystem */}
            <div className="flex flex-col gap-4">
              <h4 className="text-foreground font-bold tracking-wide uppercase text-xs font-mono mb-2">Forge Ecosystem</h4>
              <Link href={`/${lang}/forge/services`} className="text-sm text-foreground/60 hover:text-primary transition-colors">Services</Link>
              <Link href={`/${lang}/forge/portfolio`} className="text-sm text-foreground/60 hover:text-primary transition-colors">Portfolio</Link>
              <Link href={`/${lang}/forge/pricing`} className="text-sm text-foreground/60 hover:text-primary transition-colors">Pricing</Link>
              <Link href={`/${lang}/workshop`} className="text-sm text-foreground/60 hover:text-primary transition-colors flex items-center gap-2">
                Workshop Demos <span className="px-1.5 py-0.5 rounded text-[10px] bg-primary/20 text-primary uppercase font-bold tracking-widest">New</span>
              </Link>
            </div>

            {/* Corporate */}
            <div className="flex flex-col gap-4">
              <h4 className="text-foreground font-bold tracking-wide uppercase text-xs font-mono mb-2">Corporate</h4>
              <Link href={`/${lang}/forge/contact`} className="text-sm text-foreground/60 hover:text-primary transition-colors">Contact HQ</Link>
              <Link href={`/${lang}`} className="text-sm text-foreground/60 hover:text-primary transition-colors">Arasue Horizon (Holding)</Link>
              <Link href={`/${lang}/media`} className="text-sm text-foreground/60 hover:text-primary transition-colors">Arasue Media</Link>
              <Link href={`/${lang}/labs`} className="text-sm text-foreground/60 hover:text-primary transition-colors">Arasue Labs</Link>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col gap-4">
              <h4 className="text-foreground font-bold tracking-wide uppercase text-xs font-mono mb-2">Dispatch</h4>
              <p className="text-xs text-foreground/50 font-inter mb-2">Get technical insights and updates directly to your inbox.</p>
              <form className="flex w-full">
                <input 
                  type="email" 
                  placeholder="corporate@domain.com" 
                  className="bg-secondary/50 border border-border rounded-l-lg px-4 py-2.5 text-xs w-full focus:outline-none focus:border-primary/50 text-foreground placeholder:text-foreground/30 transition-colors"
                />
                <button type="button" className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2.5 rounded-r-lg transition-colors flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold text-foreground/40 font-inter">
          <p>© {new Date().getFullYear()} Arasue Forge LLC. An Arasue Horizon Company. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
