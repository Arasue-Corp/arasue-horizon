import '../../globals.css'
import { getDictionary, Locale } from '@/i18n/dictionaries'
import { HeaderLabs } from '@/components/HeaderLabs'
import { playfair } from '@/lib/fonts'
import { Analytics } from '@/components/Analytics'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)
  
  return {
    title: `Arasue Labs | ${dict.labs?.hero?.title || 'Organic Products'}`,
    description: dict.labs?.hero?.subtitle || 'Premium organic products, sustainably sourced and meticulously crafted.',
    metadataBase: new URL('https://arasue.com'),
    alternates: {
      canonical: `/${resolvedParams.lang}/labs`,
      languages: {
        'en': '/en/labs',
        'es': '/es/labs',
      },
    },
    openGraph: {
      title: 'Arasue Labs',
      description: dict.labs?.hero?.subtitle,
      url: `https://arasue.com/${resolvedParams.lang}/labs`,
      siteName: 'Arasue Labs',
      locale: resolvedParams.lang,
      type: 'website',
    }
  }
}

export default async function LabsLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)
  
  return (
    <html lang={resolvedParams.lang} className="theme-labs">
      <head>
        <Analytics />
      </head>
      <body className={`antialiased min-h-screen bg-background text-foreground flex flex-col ${playfair.variable}`}>
        <HeaderLabs dict={dict} lang={resolvedParams.lang} />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  )
}
