export const runtime = 'experimental-edge';
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

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/workshop') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  const country = (request as any).geo?.country || request.headers.get('x-vercel-ip-country') || request.headers.get('CF-IPCountry') || 'US'
  const simCountry = request.cookies.get('sim_country')?.value || country

  let locale = defaultLocale
  let currency = 'USD'
  let system = 'metric'

  if (simCountry === 'US') {
    locale = 'en'
    currency = 'USD'
    system = 'imperial'
  } else if (simCountry === 'MX') {
    locale = 'es'
    currency = 'MXN'
    system = 'metric'
  } else {
    locale = getLocale(request)
    currency = 'USD'
    system = 'metric'
  }

  const pathnameHasLocale = locales.some(
    (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`
  )

  let response: NextResponse;

  if (!pathnameHasLocale) {
    request.nextUrl.pathname = `/${locale}${pathname}`
    response = NextResponse.redirect(request.nextUrl)
  } else {
    locale = pathname.split('/')[1]
    response = NextResponse.next()
  }

  const prefs = { currency, system, locale, country: simCountry }
  response.cookies.set('arasue-locale-prefs', JSON.stringify(prefs), { path: '/' })
  response.cookies.set('user-country', simCountry, { path: '/' })
  
  return response
}

export const config = {
  matcher: [
    '/((?!_next).*)',
  ],
}
