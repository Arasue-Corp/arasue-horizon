import Link from 'next/link'

export function FooterForge({ dict, lang }: { dict: any, lang: string }) {
  return (
    <footer className="mt-20 border-t border-foreground/10 bg-background pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="space-y-4 text-center md:text-left">
            <Link href={`/${lang}/forge`} className="font-black text-3xl tracking-tighter">
              Arasue Forge
            </Link>
            <p className="text-foreground/60 text-sm max-w-sm">
              Premium software development and digital strategy agency.
            </p>
          </div>
          
          <div className="flex gap-6 text-sm font-bold">
            <Link href={`/${lang}/forge#services`} className="hover:text-foreground/70 transition-colors">Services</Link>
            <Link href={`/${lang}/forge#contact`} className="hover:text-foreground/70 transition-colors">Contact</Link>
            <Link href={`/${lang}`} className="hover:text-foreground/70 transition-colors">Arasue Horizon (Holding)</Link>
          </div>
        </div>
        
        <div className="pt-8 border-t border-foreground/10 text-center flex flex-col items-center gap-2 text-xs font-semibold text-foreground/40">
          <p>© {new Date().getFullYear()} Arasue Forge LLC. An Arasue Horizon Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
