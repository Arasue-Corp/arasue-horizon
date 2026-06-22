export const dynamicParams = false;
import '../../globals.css'
import { HeaderHolding as Header } from "@/components/HeaderHolding"
import { FooterHolding as Footer } from "@/components/FooterHolding"
import { getDictionary, Locale } from '@/i18n/dictionaries'
import { playfair, inter } from '@/lib/fonts'
import { Analytics } from '@/components/Analytics'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)
  
  return {
    title: `${dict.nav.horizon} | The Holding Company`,
    description: dict.horizon?.hero?.subtitle || 'The holding company behind modern digital innovation.',
    metadataBase: new URL('https://arasue.com'),
    alternates: {
      canonical: `/${resolvedParams.lang}`,
      languages: {
        'en': '/en',
        'es': '/es',
      },
    },
    openGraph: {
      title: `${dict.nav.horizon}`,
      description: dict.horizon?.hero?.subtitle,
      url: `https://arasue.com/${resolvedParams.lang}`,
      siteName: dict.nav.horizon,
      locale: resolvedParams.lang,
      type: 'website',
    }
  }
}

export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }]
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang as Locale)

  return (
    <html lang={resolvedParams.lang} className="theme-horizon" suppressHydrationWarning>
      <head>
        <Analytics />
      </head>
      <body suppressHydrationWarning className={`antialiased min-h-screen flex flex-col ${playfair.variable} ${inter.variable}`}>
        <Header dict={dict.nav} lang={resolvedParams.lang} />
        <main className="flex-1">{children}</main>
        <Footer dict={dict.footer} lang={resolvedParams.lang} />
      </body>
    </html>
  )
}
