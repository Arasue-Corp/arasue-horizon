"use client"
import Link from 'next/link'
import { useState, useTransition } from 'react'
import { submitLead } from '@/app/actions/lead'

export function FooterHolding({ dict, lang }: { dict: any, lang: string }) {
  const [isPending, startTransition] = useTransition()
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    startTransition(async () => {
      await submitLead(formData)
      setIsSuccess(true)
    })
  }

  return (
    <footer className="mt-32 border-t border-foreground/10 bg-foreground/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center md:text-left">
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <Link href={`/${lang}`} className="group inline-block w-full max-w-[200px] md:max-w-[260px]">
              <img src="/logo-horizon-oro.png" alt="Arasue Horizon" className="w-full h-auto object-contain transition-transform group-hover:scale-105 mx-auto md:mx-0" />
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
              <li><Link href={`/${lang}/studios`} className="hover:text-foreground transition-colors">Arasue Studios</Link></li>
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

          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h4 className="font-bold text-lg">{dict.newsletter}</h4>
            <p className="text-sm text-foreground/70">{dict.newsletter_desc}</p>
            {isSuccess ? (
              <div className="px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-600 text-sm font-medium">
                Success!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full max-w-sm">
                <input type="hidden" name="source" value="FooterHoldingNewsletter" />
                <input name="email" required type="email" placeholder="Email" className="px-4 py-2 rounded-xl border border-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-foreground/50 text-center md:text-left" />
                <button type="submit" disabled={isPending} className="px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity disabled:opacity-50">
                  {isPending ? '...' : dict.subscribe}
                </button>
              </form>
            )}
          </div>
        </div>
        
        <div className="pt-8 border-t border-foreground/10 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          <p>© {new Date().getFullYear()} Arasue Horizon SAS. {lang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
          <div className="flex gap-4 justify-center">
            <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-foreground transition-colors">X (Twitter)</a>
            <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
