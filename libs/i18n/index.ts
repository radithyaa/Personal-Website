import { translations, type Locale } from './translations'

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.en
}

export function isValidLocale(locale: string): locale is Locale {
  return locale in translations
}

export const locales = Object.keys(translations) as Locale[]
export const defaultLocale: Locale = 'en'

export type { Locale }