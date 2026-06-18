import '../../globals.css'
import { getDictionary, Locale } from '@/i18n/dictionaries'
import { HeaderProtection } from '@/components/HeaderProtection'
import { FooterHolding } from '@/components/FooterHolding'
import { playfair } from '@/lib/fonts'

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
    <html lang={resolvedParams.lang}>
      <body className={`antialiased min-h-screen flex flex-col bg-background text-foreground ${playfair.variable}`}>
        <HeaderProtection lang={resolvedParams.lang} />
        <main className="flex-grow">
          {children}
        </main>
        <FooterHolding dict={dict.footer} lang={resolvedParams.lang} />
      </body>
    </html>
  )
}
