import React from 'react'
import { Hexagon, Zap, Leaf, PlaySquare, ShieldCheck } from 'lucide-react'
import Image from 'next/image'

type Division = 'Horizon' | 'Forge' | 'Labs' | 'Studios' | 'Protection'

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
    Studios: PlaySquare,
    Protection: ShieldCheck,
  }

  const Icon = Icons[division]

  // Use custom image logos for Horizon, Forge, Studios, Labs
  const useCustomImage = division === 'Horizon' || division === 'Forge' || division === 'Studios' || division === 'Labs'
  const imageSrc = division === 'Horizon' ? '/logo-horizon-oro.png' : division === 'Forge' ? '/logo-forge-negro.png' : division === 'Studios' ? '/logo-studios-blanco.png' : '/logo-labs-base.png'

  if (useCustomImage) {
    return (
      <div className={`flex items-center group ${className}`}>
        {/* The image itself contains the text and logo mark */}
        <img 
          src={imageSrc} 
          alt={`Arasue ${division} Logo`} 
          className="h-8 md:h-10 w-auto object-contain transition-transform group-hover:scale-105"
        />
      </div>
    )
  }

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
