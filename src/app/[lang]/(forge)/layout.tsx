import '../../globals.css'
import { HeaderForge } from '@/components/HeaderForge'
import { FooterForge } from '@/components/FooterForge'
import { getDictionary, Locale } from '@/i18n/dictionaries'
import { playfair, inter } from '@/lib/fonts'
import { Analytics } from '@/components/Analytics'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)
  
  return {
    title: `${dict.nav.forge} | Premium Software Agency`,
    description: dict.forge?.hero?.subtitle || 'Building robust digital products.',
    metadataBase: new URL('https://arasue.com'),
    alternates: {
      canonical: `/${resolvedParams.lang}/forge`,
      languages: {
        'en': '/en/forge',
        'es': '/es/forge',
      },
    },
    openGraph: {
      title: `${dict.nav.forge}`,
      description: dict.forge?.hero?.subtitle,
      url: `https://arasue.com/${resolvedParams.lang}/forge`,
      siteName: dict.nav.forge,
      locale: resolvedParams.lang,
      type: 'website',
    }
  }
}

export default async function ForgeLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang as Locale)

  return (
    <html lang={resolvedParams.lang} className="theme-forge" suppressHydrationWarning>
      <head>
        <Analytics />
      </head>
      <body suppressHydrationWarning className={`antialiased min-h-screen flex flex-col bg-background text-foreground ${playfair.variable} ${inter.variable}`}>
        <HeaderForge dict={dict.nav} lang={resolvedParams.lang} />
        <main className="flex-1">{children}</main>
        <FooterForge dict={dict.footer} lang={resolvedParams.lang} />
      </body>
    </html>
  )
}


export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}
