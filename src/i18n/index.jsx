import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './en';
import ua from './ua';

const resources = {
  ua: { translation: ua },
  en: { translation: en },
};

const appLocales = Object.keys(resources);

i18n.use(initReactI18next).use(LanguageDetector).init({
  resources,
  lng: 'en',
  fallbackLng: appLocales,
  react: {
    useSuspense: true,
  },
  detection: {
    order: ['localStorage', 'navigator'],
    caches: ['localStorage'],
    lookupLocalStorage: 'i18nextLng',
    fallbackLng: 'en',
  }
});

export default i18n;
