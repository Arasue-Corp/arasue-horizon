import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function FooterLabs({ dict, lang }: { dict: any, lang: string }) {
  return (
    <footer className="bg-foreground text-background py-24 px-6 lg:px-24 border-t border-background/20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        
        {/* Brand & Newsletter */}
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-3xl font-serif">Arasue Labs.</h2>
          <p className="text-background/60 max-w-sm font-light">
            {dict.footer?.newsletter_desc || "Subscribe to The Apothecary Journal for early access to limited harvests."}
          </p>
          <form className="flex max-w-md border-b border-background/30 pb-2 focus-within:border-accent transition-colors">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-transparent w-full outline-none text-background placeholder:text-background/30"
            />
            <button type="submit" className="uppercase tracking-widest text-xs font-bold text-accent hover:text-white transition-colors">
              {dict.footer?.subscribe || "Subscribe"}
            </button>
          </form>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-background/50 mb-6">{dict.footer?.links || "Quick Links"}</h4>
          <ul className="space-y-4 text-sm font-light text-background/80">
            <li><Link href={`/${lang}/labs`} className="hover:text-accent transition-colors">Shop All</Link></li>
            <li><Link href={`/${lang}/labs/story`} className="hover:text-accent transition-colors">Our Story</Link></li>
            <li><Link href={`/${lang}/labs/contact`} className="hover:text-accent transition-colors">Wholesale</Link></li>
            <li><Link href={`/${lang}`} className="hover:text-accent transition-colors">Arasue Horizon</Link></li>
          </ul>
        </div>

        {/* Legal & Address */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-background/50 mb-6">{dict.footer?.legal || "Legal & Contact"}</h4>
          <ul className="space-y-4 text-sm font-light text-background/80">
            <li>{dict.footer?.address_val || "Global Headquarters"}</li>
            <li>hello@arasue.com</li>
            <li><Link href="#" className="hover:text-accent transition-colors">{dict.footer?.privacy || "Privacy Policy"}</Link></li>
            <li><Link href="#" className="hover:text-accent transition-colors">{dict.footer?.terms || "Terms of Service"}</Link></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center text-xs text-background/40 font-light">
        <p>© {new Date().getFullYear()} Arasue Horizon SAS. {dict.footer?.rights || "All rights reserved."}</p>
        <p className="mt-4 md:mt-0 uppercase tracking-widest">Premium Organic Goods</p>
      </div>
    </footer>
  )
}
