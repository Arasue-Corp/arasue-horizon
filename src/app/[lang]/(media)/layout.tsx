export const dynamicParams = false;
import '../../globals.css'
import { getDictionary, Locale } from '@/i18n/dictionaries'
import { HeaderMedia } from '@/components/HeaderMedia'
import { playfair, inter } from '@/lib/fonts'
import { Analytics } from '@/components/Analytics'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)
  
  return {
    title: `Arasue Media | ${dict.media?.hero?.title || 'Media Production'}`,
    description: dict.media?.hero?.subtitle || 'Digital marketing, streaming, and content creation powerhouse.',
    metadataBase: new URL('https://arasue.com'),
    alternates: {
      canonical: `/${resolvedParams.lang}/media`,
      languages: {
        'en': '/en/media',
        'es': '/es/media',
      },
    },
    openGraph: {
      title: 'Arasue Media',
      description: dict.media?.hero?.subtitle,
      url: `https://arasue.com/${resolvedParams.lang}/media`,
      siteName: 'Arasue Media',
      locale: resolvedParams.lang,
      type: 'website',
    }
  }
}

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
    <html lang={resolvedParams.lang} className="theme-media" suppressHydrationWarning>
      <head>
        <Analytics />
      </head>
      <body suppressHydrationWarning className={`antialiased min-h-screen bg-background text-foreground flex flex-col ${playfair.variable} ${inter.variable}`}>
        {/* Notice Media is Dark Mode by default */}
        <HeaderMedia dict={dict} lang={resolvedParams.lang} />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  )
}


export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}
