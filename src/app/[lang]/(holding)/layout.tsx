import '../../globals.css'
import { HeaderHolding as Header } from "@/components/HeaderHolding"
import { FooterHolding as Footer } from "@/components/FooterHolding"
import { getDictionary, Locale } from '@/i18n/dictionaries'
import { playfair } from '@/lib/fonts'

export const metadata = {
  title: 'Arasue Horizon',
  description: 'The holding company behind modern digital innovation.',
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
    <html lang={resolvedParams.lang}>
      <body className={`antialiased min-h-screen flex flex-col ${playfair.variable}`}>
        <Header dict={dict.nav} lang={resolvedParams.lang} />
        <main className="flex-1">{children}</main>
        <Footer dict={dict.footer} lang={resolvedParams.lang} />
      </body>
    </html>
  )
}
