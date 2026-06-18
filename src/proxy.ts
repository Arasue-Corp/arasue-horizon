import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['es', 'en']
const defaultLocale = 'es'

function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get('accept-language')
  if (!acceptLanguage) return defaultLocale

  const primaryLang = acceptLanguage.split(',')[0].split('-')[0].toLowerCase()

  if (locales.includes(primaryLang)) {
    return primaryLang
  }
  
  return defaultLocale
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/workshop') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (!pathnameHasLocale) {
    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`
    return NextResponse.redirect(request.nextUrl)
  }

  const response = NextResponse.next()

  const country = request.headers.get('cf-ipcountry') || 'US'
  response.cookies.set('user-country', country, { path: '/' })
  
  return response
}

export const config = {
  matcher: [
    '/((?!_next).*)',
  ],
}
