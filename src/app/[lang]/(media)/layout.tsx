import '../../globals.css'
import { getDictionary, Locale } from '@/i18n/dictionaries'
import { HeaderMedia } from '@/components/HeaderMedia'
import { playfair } from '@/lib/fonts'

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
    <html lang={resolvedParams.lang} className="dark">
      <body className={`antialiased min-h-screen bg-background text-foreground flex flex-col ${playfair.variable}`}>
        {/* Notice Media is Dark Mode by default */}
        <HeaderMedia dict={dict} lang={resolvedParams.lang} />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  )
}
