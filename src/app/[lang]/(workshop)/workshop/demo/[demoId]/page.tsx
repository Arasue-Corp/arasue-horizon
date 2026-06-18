import { WebCorporativa } from '@/components/workshop-demos/WebCorporativa'
import { WebPersonal } from '@/components/workshop-demos/WebPersonal'
import { DashboardFacturas } from '@/components/workshop-demos/DashboardFacturas'
import { Ecommerce } from '@/components/workshop-demos/Ecommerce'
import { ConcreteCompany } from '@/components/workshop-demos/ConcreteCompany'
import { ConstructionCompany } from '@/components/workshop-demos/ConstructionCompany'
import { Carpentry } from '@/components/workshop-demos/Carpentry'
import { MechanicShop } from '@/components/workshop-demos/MechanicShop'
import { Roofing } from '@/components/workshop-demos/Roofing'
import { HVAC } from '@/components/workshop-demos/HVAC'

export default async function DemoPage({
  params,
}: {
  params: Promise<{ demoId: string }>
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
