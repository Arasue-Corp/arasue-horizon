import '../../globals.css'
import { playfair } from '@/lib/fonts'
import Link from 'next/link'
import { ArrowLeft, Beaker } from 'lucide-react'
import { WorkshopBanner } from '@/components/workshop/WorkshopBanner'
import { Analytics } from '@/components/Analytics'

export const metadata = {
  title: 'Workshop Demo | Arasue Horizon',
  description: 'Interactive project preview',
}

export default async function WorkshopLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  return (
    <html lang={lang}>
      <head>
        <Analytics />
      </head>
      <body className={`antialiased min-h-screen flex flex-col bg-background text-foreground pb-16 ${playfair.variable}`}>
        {/* Subtle Forge-like Header */}
        <header className="h-12 w-full bg-black text-white flex items-center justify-between px-6 text-xs font-medium uppercase tracking-widest z-50 shrink-0">
          <Link 
            href={`/${lang}/workshop`}
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3 h-3" />
            Volver al Workshop
          </Link>
          <div className="flex items-center gap-2 opacity-50">
            <Beaker className="w-3 h-3" />
            Arasue Forge · Demo Environment
          </div>
        </header>
        
        {/* Main Content Area */}
        <main className="flex-1 w-full relative">
          {children}
        </main>

        <WorkshopBanner lang={lang as 'en' | 'es'} />
      </body>
    </html>
  )
}
