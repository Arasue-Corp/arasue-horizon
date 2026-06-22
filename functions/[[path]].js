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

  // 1. Detect locale from pathname if present
  let urlLocale = null;
  for (const l of locales) {
    if (pathname.startsWith(`/${l}/`) || pathname === `/${l}`) {
      urlLocale = l;
      break;
    }
  }

  // 2. Parse existing cookie preferences
  const cookieHeader = request.headers.get('Cookie') || '';
  const cookies = {};
  cookieHeader.split(';').forEach(cookie => {
    const parts = cookie.split('=');
    if (parts.length >= 2) {
      cookies[parts[0].trim()] = parts[1].trim();
    }
  });

  let existingPrefs = {};
  try {
    if (cookies['arasue-locale-prefs']) {
      existingPrefs = JSON.parse(decodeURIComponent(cookies['arasue-locale-prefs']));
    }
  } catch(e) {}

  // 3. Determine base country
  let country = 'US';
  if (request.cf && request.cf.country) {
    country = request.cf.country;
  } else {
    country = request.headers.get('cf-ipcountry') || 'US';
  }
  const simCountry = cookies['sim_country'] || country;

  // 4. Determine Locale
  // Precedence: URL > Cookie > Browser > Default
  let locale = defaultLocale;
  
  if (urlLocale) {
    locale = urlLocale;
  } else if (existingPrefs.locale) {
    locale = existingPrefs.locale;
  } else {
    const acceptLanguage = request.headers.get('accept-language');
    if (acceptLanguage) {
      const primaryLang = acceptLanguage.split(',')[0].split('-')[0].toLowerCase();
      if (locales.includes(primaryLang)) {
        locale = primaryLang;
      }
    }
  }

  // 5. Determine Currency and System based on Country
  let currency = 'USD';
  let system = 'metric';

  if (simCountry === 'US') {
    currency = 'USD';
    system = 'imperial';
  } else if (simCountry === 'MX') {
    currency = 'MXN';
    system = 'metric';
  }

  const prefs = { currency, system, locale, country: simCountry };
  
  // Create cookie strings
  const prefsCookie = `arasue-locale-prefs=${JSON.stringify(prefs)}; Path=/; SameSite=Lax`;
  const countryCookie = `user-country=${simCountry}; Path=/; SameSite=Lax`;

  if (!urlLocale) {
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
