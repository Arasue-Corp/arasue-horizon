export const dynamicParams = false;
import '../../globals.css'
import { getDictionary, Locale } from '@/i18n/dictionaries'
import { HeaderStudios } from '@/components/HeaderStudios'
import { playfair, inter } from '@/lib/fonts'
import { Analytics } from '@/components/Analytics'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)
  
  return {
    title: `Arasue Studios | ${dict.studios?.hero?.title || 'Studios Production'}`,
    description: dict.studios?.hero?.subtitle || 'Digital marketing, streaming, and content creation powerhouse.',
    metadataBase: new URL('https://arasue.com'),
    alternates: {
      canonical: `/${resolvedParams.lang}/studios`,
      languages: {
        'en': '/en/studios',
        'es': '/es/studios',
      },
    },
    openGraph: {
      title: 'Arasue Studios',
      description: dict.studios?.hero?.subtitle,
      url: `https://arasue.com/${resolvedParams.lang}/studios`,
      siteName: 'Arasue Studios',
      locale: resolvedParams.lang,
      type: 'website',
    },
    icons: {
      icon: [
        { url: '/icono-studios-negro.png', type: 'image/png' },
      ],
      apple: [
        { url: '/icono-studios-negro.png', type: 'image/png' }
      ]
    }
  }
}

import { FooterStudios } from '@/components/FooterStudios'

export default async function MediaLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)
  
  return (
    <html lang={resolvedParams.lang} className="theme-studios" suppressHydrationWarning>
      <head>
        <Analytics />
      </head>
      <body suppressHydrationWarning className={`antialiased min-h-screen bg-background text-foreground flex flex-col ${playfair.variable} ${inter.variable}`}>
        {/* Notice Media is Dark Mode by default */}
        <HeaderStudios dict={dict} lang={resolvedParams.lang} />
        <main className="flex-1">
          {children}
        </main>
        <FooterStudios dict={dict} lang={resolvedParams.lang} />
      </body>
    </html>
  )
}


export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}
