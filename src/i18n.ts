import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import es from './locales/es.json'
import en from './locales/en.json'

const savedLanguage = localStorage.getItem('site_lang')

void i18n.use(initReactI18next).init({
  resources: { es: { translation: es }, en: { translation: en } },
  lng: savedLanguage === 'en' ? 'en' : 'es',
  fallbackLng: 'es',
  interpolation: { escapeValue: false },
})

document.documentElement.lang = i18n.language
i18n.on('languageChanged', (language) => {
  document.documentElement.lang = language
  localStorage.setItem('site_lang', language)
})

export default i18n
