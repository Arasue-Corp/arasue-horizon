import React from 'react'
import { Hexagon, Zap, Leaf, PlaySquare, ShieldCheck } from 'lucide-react'

type Division = 'Horizon' | 'Forge' | 'Labs' | 'Media' | 'Protection'

interface LogoProps {
  division: Division
  className?: string
  iconSize?: number
}

export function Logo({ division, className = '', iconSize = 28 }: LogoProps) {
  // Mapping of icons per division
  const Icons = {
    Horizon: Hexagon,
    Forge: Zap,
    Labs: Leaf,
    Media: PlaySquare,
    Protection: ShieldCheck,
  }

  const Icon = Icons[division]

  // Mapping of primary brand colors per division (using the Tailwind vars we set in CSS)
  // We use inline styles for the icon color to guarantee it matches the theme, 
  // or we can just use `text-primary`. Since we set `--primary` in CSS, `text-primary` works perfectly!
  
  return (
    <div className={`flex items-center gap-2 group ${className}`}>
      <div className="flex items-center justify-center bg-primary text-primary-foreground rounded-lg transition-transform group-hover:scale-105" style={{ width: iconSize + 8, height: iconSize + 8 }}>
        <Icon size={iconSize - 4} strokeWidth={2.5} />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-sm font-black tracking-widest uppercase leading-none opacity-50 mb-0.5">
          Arasue
        </span>
        <span className="text-xl md:text-2xl font-black font-playfair tracking-tight leading-none text-foreground">
          {division}
        </span>
      </div>
    </div>
  )
}
