import Link from 'next/link'

export function FooterHolding({ dict, lang }: { dict: any, lang: string }) {
  return (
    <footer className="mt-32 border-t border-foreground/10 bg-foreground/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <Link href={`/${lang}`} className="group inline-block">
              <img src="/logo-horizon-oro.png" alt="Arasue Horizon" className="h-20 md:h-28 w-auto object-contain transition-transform group-hover:scale-105" />
            </Link>
            <p className="text-foreground/70 max-w-sm">
              {dict.about}
            </p>
            <div className="space-y-2">
              <p className="font-bold">{dict.address}</p>
              <p className="text-foreground/60 text-sm">{dict.address_val}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg">{dict.links}</h4>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li><Link href={`/${lang}`} className="hover:text-foreground transition-colors">Arasue Horizon</Link></li>
              <li><Link href={`/${lang}/forge`} className="hover:text-foreground transition-colors">Arasue Forge</Link></li>
              <li><Link href={`/${lang}/media`} className="hover:text-foreground transition-colors">Arasue Media</Link></li>
              <li><Link href={`/${lang}/labs`} className="hover:text-foreground transition-colors">Arasue Labs</Link></li>
              <li><Link href={`/${lang}/protection`} className="hover:text-foreground transition-colors">Arasue Protection</Link></li>
              <li><Link href={`/${lang}/workshop`} className="hover:text-foreground transition-colors">Workshop</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg">{dict.legal}</h4>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li><a href="#" className="hover:text-foreground transition-colors">{dict.privacy}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{dict.terms}</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg">{dict.newsletter}</h4>
            <p className="text-sm text-foreground/70">{dict.newsletter_desc}</p>
            <form className="flex flex-col gap-2">
              <input type="email" placeholder="Email" className="px-4 py-2 rounded-xl border border-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-foreground/50" />
              <button type="button" className="px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity">
                {dict.subscribe}
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-foreground/10 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          <p>© {new Date().getFullYear()} Arasue Horizon SAS. {dict.rights}</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-foreground transition-colors">X (Twitter)</a>
            <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
