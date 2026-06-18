import '../../globals.css'
import { getDictionary, Locale } from '@/i18n/dictionaries'
import { HeaderLabs } from '@/components/HeaderLabs'
import { playfair } from '@/lib/fonts'

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
    <html lang={resolvedParams.lang}>
      <body className={`antialiased min-h-screen bg-[#F9F7F1] text-[#1a2e1a] flex flex-col ${playfair.variable}`}>
        <HeaderLabs dict={dict} lang={resolvedParams.lang} />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  )
}
