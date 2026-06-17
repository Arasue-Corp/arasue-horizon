import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Supported locales
const locales = ['es', 'en']
// Default locale
const defaultLocale = 'es'

function getLocale(request: NextRequest) {
  // Check if there is any Accept-Language header
  const acceptLanguage = request.headers.get('accept-language')
  if (!acceptLanguage) return defaultLocale

  // Simple parser to extract the primary language (e.g., "en-US,en;q=0.9,es;q=0.8" -> "en")
  const primaryLang = acceptLanguage.split(',')[0].split('-')[0].toLowerCase()

  if (locales.includes(primaryLang)) {
    return primaryLang
  }
  
  return defaultLocale
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, public files)
    '/((?!_next|api|favicon.ico|.*\\..*).*)',
  ],
}
