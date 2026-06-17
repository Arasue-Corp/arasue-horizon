import '../../globals.css'
import { HeaderForge } from '@/components/HeaderForge'
import { FooterForge } from '@/components/FooterForge'
import { getDictionary, Locale } from '@/i18n/dictionaries'

export const metadata = {
  title: 'Arasue Forge | Premium Software Agency',
  description: 'Building robust digital products.',
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
    <html lang={resolvedParams.lang}>
      <body className="antialiased min-h-screen flex flex-col bg-background text-foreground">
        <HeaderForge dict={dict.nav} lang={resolvedParams.lang} />
        <main className="flex-1">{children}</main>
        <FooterForge dict={dict.footer} lang={resolvedParams.lang} />
      </body>
    </html>
  )
}
