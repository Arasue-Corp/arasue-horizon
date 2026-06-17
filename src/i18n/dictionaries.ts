import 'server-only'

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  es: () => import('./dictionaries/es.json').then((module) => module.default),
}

export type Locale = keyof typeof dictionaries

export const getDictionary = async (locale: Locale) => {
  // If the locale doesn't exist in our dictionary, default to 'es'
  return dictionaries[locale]?.() ?? dictionaries['es']()
}
