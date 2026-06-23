import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function FooterStudios({ dict, lang }: { dict: any, lang: string }) {
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
            <Link href={`/${lang}/studios`} className="group inline-block w-full max-w-[200px] md:max-w-[260px] mb-8">
              <img src="/logo-studios-blanco.png" alt="Arasue Studios" className="w-full h-auto object-contain transition-transform group-hover:scale-105" />
            </Link>
            <p className="text-foreground/60 text-sm max-w-sm mb-8 leading-relaxed font-inter">
              {dict.studios.hero.subtitle || "A powerhouse of content creation, streaming, and digital storytelling."}
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
            
            {/* Studios Ecosystem */}
            <div className="flex flex-col gap-4">
              <h4 className="text-foreground font-bold tracking-wide uppercase text-xs font-mono mb-2">Studios Ecosystem</h4>
              <Link href={`/${lang}/studios/work`} className="text-sm text-foreground/60 hover:text-primary transition-colors">Work</Link>
              <Link href={`/${lang}/studios/creators`} className="text-sm text-foreground/60 hover:text-primary transition-colors">Creators</Link>
            </div>

            {/* Corporate */}
            <div className="flex flex-col gap-4">
              <h4 className="text-foreground font-bold tracking-wide uppercase text-xs font-mono mb-2">Corporate</h4>
              <Link href={`/${lang}/studios/contact`} className="text-sm text-foreground/60 hover:text-primary transition-colors">Partner with Us</Link>
              <Link href={`/${lang}`} className="text-sm text-foreground/60 hover:text-primary transition-colors">Arasue Horizon (Holding)</Link>
              <Link href={`/${lang}/forge`} className="text-sm text-foreground/60 hover:text-primary transition-colors">Arasue Forge</Link>
              <Link href={`/${lang}/labs`} className="text-sm text-foreground/60 hover:text-primary transition-colors">Arasue Labs</Link>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col gap-4">
              <h4 className="text-foreground font-bold tracking-wide uppercase text-xs font-mono mb-2">Broadcast</h4>
              <p className="text-xs text-foreground/50 font-inter mb-2">Get the latest drops and digital culture updates.</p>
              <form className="flex w-full">
                <input 
                  type="email" 
                  placeholder="contact@domain.com" 
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
          <p>© {new Date().getFullYear()} Arasue Studios LLC. An Arasue Horizon Company. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
