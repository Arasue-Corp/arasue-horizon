"use client"
import { useEffect } from 'react'

export default function RootPage() {
  useEffect(() => {
    // Detect browser language
    const lang = navigator.language.toLowerCase()
    
    // Redirect to /en if english, otherwise default to /es
    if (lang.startsWith('en')) {
      window.location.replace('/en')
    } else {
      window.location.replace('/es')
    }
  }, [])

  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#0B0F19]">
      <div className="w-8 h-8 border-4 border-[#ffcc00] border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
}
