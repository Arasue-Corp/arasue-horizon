export const dynamicParams = false;
import '../../globals.css'
import { playfair, inter } from '@/lib/fonts'
import { WorkshopBanner } from '@/components/workshop/WorkshopBanner'
import { Analytics } from '@/components/Analytics'
import { WorkshopFrameClient } from '@/components/workshop/WorkshopFrameClient'

export const metadata = {
  title: 'Workshop Preview | Arasue Forge',
  description: 'Interactive project architecture preview.',
}

export default async function WorkshopLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as 'en' | 'es';
  
  const isEn = lang === 'en';

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <Analytics />
      </head>
      <body suppressHydrationWarning className={`antialiased min-h-screen flex flex-col bg-[#FCFCFC] text-[#111111] pb-16 ${playfair.variable} ${inter.variable} font-sans`}>
        
        <WorkshopFrameClient lang={lang} isEn={isEn}>
          {children}
        </WorkshopFrameClient>

        <WorkshopBanner lang={lang} />
      </body>
    </html>
  )
}


export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}
