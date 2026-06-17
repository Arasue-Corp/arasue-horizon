import { MotionDiv } from '@/components/Motion'
import { Search } from 'lucide-react'

export async function generateMetadata() {
  return {
    title: 'Workshop Sandbox | Arasue Horizon',
    description: 'Explore our latest mockups, experiments, and project previews.'
  }
}

export default function WorkshopIndexPage() {
  const categories = ["Cafeteria", "Gym", "E-commerce", "SaaS", "Real Estate", "Landing Page", "Mobile App"]

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
            Search for your business type to find interactive demos and project structures we have built.
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
              placeholder="Ej. 'Cafeteria', 'Gym', 'E-commerce'..." 
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
           {[1, 2, 3, 4].map((item) => (
             <div key={item} className="aspect-video bg-foreground/5 rounded-3xl border border-foreground/10 overflow-hidden relative group cursor-pointer">
                <img 
                  src={`https://placehold.co/800x450/1a1a1a/ffffff?text=Project+Preview+${item}`} 
                  alt="Project Preview" 
                  className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-white text-xl font-bold">Demo Project {item}</h3>
                    <p className="text-white/70 text-sm mt-2">Interactive Preview</p>
                  </div>
                </div>
             </div>
           ))}
        </MotionDiv>
      </div>
    </div>
  )
}
