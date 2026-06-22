import { WorkshopGalleryClient } from './WorkshopGalleryClient'

export async function generateMetadata() {
  return {
    title: 'Workshop Sandbox | Arasue Horizon',
    description: 'Explora nuestras plantillas, mockups y proyectos listos para producción optimizados para alta conversión.'
  }
}

export default async function WorkshopIndexPage({
  params
}: {
  params: Promise<{ lang: string }>
}) {
  const resolvedParams = await params
  const lang = resolvedParams.lang as 'en' | 'es'

  return <WorkshopGalleryClient lang={lang} />
}
