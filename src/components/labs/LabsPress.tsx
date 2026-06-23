export function LabsPress({ dict }: { dict: any }) {
  return (
    <section className="py-12 bg-primary text-white border-y border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-70">
            {dict.tag}
          </span>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="text-2xl font-serif font-bold italic tracking-wider">
            VOGUE
          </div>
          <div className="text-2xl font-serif font-black tracking-widest uppercase">
            FoodNetwork
          </div>
          <div className="text-2xl font-serif font-medium tracking-tight">
            The New York Times
          </div>
          <div className="text-2xl font-sans font-black tracking-tighter uppercase">
            GQ
          </div>
        </div>
      </div>
    </section>
  )
}
