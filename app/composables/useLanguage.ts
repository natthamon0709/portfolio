import { ref } from 'vue'

export type Locale = 'en' | 'th'

export const useLanguage = () => {
  const currentLang = useState<Locale>('portfolio-lang', () => 'en')

  const toggleLanguage = () => {
    currentLang.value = currentLang.value === 'en' ? 'th' : 'en'
  }

  const setLanguage = (lang: Locale) => {
    currentLang.value = lang
  }

  // Helper for localized strings
  const t = <T extends Record<string, any>>(obj: { en: T; th: T } | undefined): T | string => {
    if (!obj) return ''
    return obj[currentLang.value] ?? obj.en ?? ''
  }

  return {
    currentLang,
    toggleLanguage,
    setLanguage,
    t
  }
}
