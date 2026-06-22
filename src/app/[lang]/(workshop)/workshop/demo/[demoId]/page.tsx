import dynamic from 'next/dynamic'

const WebCorporativa = dynamic(() => import('@/components/workshop-demos/WebCorporativa').then(mod => mod.WebCorporativa))
const WebPersonal = dynamic(() => import('@/components/workshop-demos/WebPersonal').then(mod => mod.WebPersonal))
const DashboardFacturas = dynamic(() => import('@/components/workshop-demos/DashboardFacturas').then(mod => mod.DashboardFacturas))
const Ecommerce = dynamic(() => import('@/components/workshop-demos/Ecommerce').then(mod => mod.Ecommerce))
const ConcreteCompany = dynamic(() => import('@/components/workshop-demos/ConcreteCompany').then(mod => mod.ConcreteCompany))
const ConstructionCompany = dynamic(() => import('@/components/workshop-demos/ConstructionCompany').then(mod => mod.ConstructionCompany))
const Carpentry = dynamic(() => import('@/components/workshop-demos/Carpentry').then(mod => mod.Carpentry))
const MechanicShop = dynamic(() => import('@/components/workshop-demos/MechanicShop').then(mod => mod.MechanicShop))
const Roofing = dynamic(() => import('@/components/workshop-demos/Roofing').then(mod => mod.Roofing))
const HVAC = dynamic(() => import('@/components/workshop-demos/HVAC').then(mod => mod.HVAC))

export async function generateStaticParams() {
  const demos = [
    'web-corporativa', 'concrete-company', 'construction-company',
    'carpentry', 'mechanic-shop', 'roofing', 'hvac',
    'web-personal', 'dashboard-facturas', 'ecommerce'
  ]
  
  // We need to generate paths for both 'en' and 'es'
  const paths: { lang: string, demoId: string }[] = []
  
  for (const lang of ['en', 'es']) {
    for (const demoId of demos) {
      paths.push({ lang, demoId })
    }
  }
  
  return paths
}

export default async function DemoPage({
  params,
}: {
  params: Promise<{ demoId: string, lang: string }>
}) {
  const { demoId } = await params;

  switch (demoId) {
    case 'web-corporativa':
      return <WebCorporativa />
    case 'concrete-company':
      return <ConcreteCompany />
    case 'construction-company':
      return <ConstructionCompany />
    case 'carpentry':
      return <Carpentry />
    case 'mechanic-shop':
      return <MechanicShop />
    case 'roofing':
      return <Roofing />
    case 'hvac':
      return <HVAC />
    case 'web-personal':
      return <WebPersonal />
    case 'dashboard-facturas':
      return <DashboardFacturas />
    case 'ecommerce':
      return <Ecommerce />
    default:
      return (
        <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
          <div className="text-center">
            <h1 className="text-4xl font-black mb-4">Demo Not Found</h1>
            <p className="opacity-70">We couldn't find the requested demo template.</p>
          </div>
        </div>
      )
  }
}
