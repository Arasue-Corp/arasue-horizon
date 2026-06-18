import { MotionDiv } from '@/components/Motion'
import { Search } from 'lucide-react'

import Link from 'next/link'

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
  const lang = resolvedParams.lang

  const categories = ["Web Corporativa", "Web Personal", "Dashboard / SaaS", "E-commerce", "Landing Page", "Meta Ads UI", "SEO Hub"]

  const demos = [
    {
      id: "web-corporativa",
      title: "Landscaping & Exteriors",
      subtitle: "B2B / B2C Local Service Lead Gen",
      image: "https://placehold.co/800x450/14532d/ffffff?text=Landscaping+Web",
      tags: ["Web Corporativa", "Niche", "Quote Gen"]
    },
    {
      id: "web-personal",
      title: "Web Personal",
      subtitle: "Personal Branding & Authority",
      image: "https://placehold.co/800x450/1a1a1a/ffffff?text=Personal+Web",
      tags: ["Web Personal", "Portfolio"]
    },
    {
      id: "dashboard-facturas",
      title: "Dashboard Facturación",
      subtitle: "SaaS UI & Data Viz",
      image: "https://placehold.co/800x450/1a1a1a/ffffff?text=Dashboard+UI",
      tags: ["Dashboard / SaaS", "React"]
    },
    {
      id: "ecommerce",
      title: "E-commerce Elite",
      subtitle: "Frictionless Checkout",
      image: "https://placehold.co/800x450/1a1a1a/ffffff?text=E-commerce",
      tags: ["E-commerce", "Sales"]
    },
    {
      id: "concrete-company",
      title: "Slabworks",
      subtitle: "Brutalist Concrete Solutions",
      image: "https://placehold.co/800x450/111111/ffffff?text=Concrete+Web",
      tags: ["Web Corporativa", "Industrial"]
    },
    {
      id: "construction-company",
      title: "Apex Construct",
      subtitle: "B2B Commercial Contracting",
      image: "https://placehold.co/800x450/0F172A/FF5A00?text=Construction",
      tags: ["Web Corporativa", "B2B"]
    },
    {
      id: "carpentry",
      title: "Oak & Iron",
      subtitle: "Bespoke Millwork & Carpentry",
      image: "https://placehold.co/800x450/2A1B12/FDFBF7?text=Carpentry",
      tags: ["Web Corporativa", "Artisan"]
    },
    {
      id: "mechanic-shop",
      title: "Velocity Tech",
      subtitle: "European Auto Diagnostics",
      image: "https://placehold.co/800x450/050505/DC2626?text=Mechanic",
      tags: ["Web Corporativa", "Automotive"]
    },
    {
      id: "roofing",
      title: "Shelter Pro",
      subtitle: "Premium Roofing Estimator",
      image: "https://placehold.co/800x450/2563EB/ffffff?text=Roofing",
      tags: ["Web Corporativa", "Residential"]
    },
    {
      id: "hvac",
      title: "Aerotherm",
      subtitle: "HVAC System Sizing",
      image: "https://placehold.co/800x450/0EA5E9/ffffff?text=HVAC",
      tags: ["Web Corporativa", "Climate"]
    }
  ]

  return (
    <div className="flex flex-col min-h-[80vh] pt-32 pb-24 px-6 bg-background text-foreground">
      <div className="max-w-5xl mx-auto w-full">
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 text-center"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-foreground/10 bg-foreground/5 text-sm font-semibold mb-6">
            Interactive Showcase
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
            Workshop
          </h1>
          <p className="text-xl md:text-2xl opacity-70 max-w-2xl mx-auto">
            Explora demostraciones interactivas diseñadas con Neuromarketing y listas para producción.
          </p>
        </MotionDiv>

        <MotionDiv 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 max-w-3xl mx-auto space-y-8"
        >
          {/* Search Bar */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-foreground/50 group-focus-within:text-foreground transition-colors">
              <Search className="w-6 h-6" />
            </div>
            <input 
              type="text" 
              placeholder="Ej. 'Web Corporativa', 'SaaS', 'E-commerce'..." 
              className="w-full bg-background border-2 border-foreground/10 rounded-full py-6 pl-16 pr-8 text-xl font-medium outline-none focus:border-foreground/30 focus:ring-4 focus:ring-foreground/5 transition-all shadow-sm"
            />
            <button className="absolute inset-y-2 right-2 px-8 bg-foreground text-background font-bold rounded-full hover:bg-foreground/90 transition-colors active:scale-95">
              Search
            </button>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3 justify-center pt-4">
            {categories.map((category) => (
              <button 
                key={category}
                className="px-4 py-2 rounded-full border border-foreground/10 bg-foreground/5 text-sm font-medium hover:border-foreground/30 hover:bg-foreground/10 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </MotionDiv>
        
        {/* Empty State / Results Area */}
        <MotionDiv 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 opacity-50"
        >
           {/* Mockup Result Cards */}
           {demos.map((demo) => (
             <Link 
               href={`/${lang}/workshop/demo/${demo.id}`} 
               key={demo.id} 
               className="aspect-video bg-foreground/5 rounded-3xl border border-foreground/10 overflow-hidden relative group cursor-pointer block"
             >
                <img 
                  src={demo.image} 
                  alt={demo.title} 
                  className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                  <div>
                    <div className="flex gap-2 mb-3">
                      {demo.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-white/20 backdrop-blur-md rounded-md text-[10px] font-bold text-white uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-white text-2xl font-black tracking-tight">{demo.title}</h3>
                    <p className="text-white/80 text-sm mt-1 font-medium">{demo.subtitle}</p>
                  </div>
                </div>
             </Link>
           ))}
        </MotionDiv>
      </div>
    </div>
  )
}
