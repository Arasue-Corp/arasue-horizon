import '../../globals.css'
import { getDictionary, Locale } from '@/i18n/dictionaries'
import { HeaderProtection } from '@/components/HeaderProtection'
import { FooterHolding } from '@/components/FooterHolding'
import { playfair, inter } from '@/lib/fonts'
import { Analytics } from '@/components/Analytics'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  
  return {
    title: 'Arasue Protection | Digital Security',
    description: 'Enterprise-grade cybersecurity and digital protection services.',
    metadataBase: new URL('https://arasue.com'),
    alternates: {
      canonical: `/${resolvedParams.lang}/protection`,
      languages: {
        'en': '/en/protection',
        'es': '/es/protection',
      },
    },
    openGraph: {
      title: 'Arasue Protection',
      description: 'Enterprise-grade cybersecurity and digital protection services.',
      url: `https://arasue.com/${resolvedParams.lang}/protection`,
      siteName: 'Arasue Protection',
      locale: resolvedParams.lang,
      type: 'website',
    }
  }
}

export default async function ProtectionLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)

  return (
    <html lang={resolvedParams.lang} className="theme-protection" suppressHydrationWarning>
      <head>
        <Analytics />
      </head>
      <body className={`antialiased min-h-screen flex flex-col bg-background text-foreground ${playfair.variable} ${inter.variable}`}>
        <HeaderProtection dict={dict} lang={resolvedParams.lang} />
        <main className="flex-grow">
          {children}
        </main>
        <FooterHolding dict={dict.footer} lang={resolvedParams.lang} />
      </body>
    </html>
  )
}
