export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Static files and excluded routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/workshop') ||
    pathname.includes('.')
  ) {
    return next();
  }

  const locales = ['es', 'en'];
  const defaultLocale = 'es';

  // Cloudflare provides country code via cf.country or cf-ipcountry header
  let country = 'US';
  if (request.cf && request.cf.country) {
    country = request.cf.country;
  } else {
    country = request.headers.get('cf-ipcountry') || 'US';
  }
  
  // Parse cookies
  const cookieHeader = request.headers.get('Cookie') || '';
  const cookies = {};
  cookieHeader.split(';').forEach(cookie => {
    const parts = cookie.split('=');
    if (parts.length >= 2) {
      cookies[parts[0].trim()] = parts[1].trim();
    }
  });

  const simCountry = cookies['sim_country'] || country;

  let locale = defaultLocale;
  let currency = 'USD';
  let system = 'metric';

  if (simCountry === 'US') {
    locale = 'en';
    currency = 'USD';
    system = 'imperial';
  } else if (simCountry === 'MX') {
    locale = 'es';
    currency = 'MXN';
    system = 'metric';
  } else {
    const acceptLanguage = request.headers.get('accept-language');
    if (acceptLanguage) {
      const primaryLang = acceptLanguage.split(',')[0].split('-')[0].toLowerCase();
      if (locales.includes(primaryLang)) {
        locale = primaryLang;
      }
    }
  }

  const pathnameHasLocale = locales.some(
    (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`
  );

  const prefs = { currency, system, locale, country: simCountry };
  
  // Create cookie strings
  const prefsCookie = `arasue-locale-prefs=${JSON.stringify(prefs)}; Path=/; SameSite=Lax`;
  const countryCookie = `user-country=${simCountry}; Path=/; SameSite=Lax`;

  if (!pathnameHasLocale) {
    url.pathname = `/${locale}${pathname}`;
    const headers = new Headers();
    headers.append('Location', url.toString());
    headers.append('Set-Cookie', prefsCookie);
    headers.append('Set-Cookie', countryCookie);
    return new Response(null, {
      status: 302,
      headers: headers
    });
  }

  // Continue to the requested page
  const response = await next();
  
  // Cloudflare Pages returns immutable responses from assets, so we must clone it to modify headers
  const newResponse = new Response(response.body, response);
  newResponse.headers.append('Set-Cookie', prefsCookie);
  newResponse.headers.append('Set-Cookie', countryCookie);
  
  return newResponse;
}
