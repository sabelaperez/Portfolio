import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)  // backend para cargar archivos JSON
  .use(LanguageDetector)  // detectar el idioma del navegador
  .use(initReactI18next)  // conectar con React
  .init({
    fallbackLng: 'en',  // idioma por defecto si no se puede detectar o no existe traducción
    supportedLngs: ['en', 'es', 'gl'],  // idiomas que vas a soportar
    interpolation: {
      escapeValue: false,  // en React no necesitas escapar
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',  // ruta para tus archivos de traducción
    },
    ns: ['translation'],  // namespaces, en este caso solo uno
    defaultNS: 'translation',
    debug: false,  // puedes activar para ver logs durante el desarrollo
  });

i18n.on('languageChanged', (lng: string) => {
  if (!lng) return;
  document.documentElement.lang = lng;

  // Actualiza meta tags según idioma
  const langMap: Record<string, string> = {
    es: 'es_ES',
    en: 'en_US',
    gl: 'gl_ES',
  };

  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) {
    ogLocale.setAttribute('content', langMap[lng] || 'es_ES');
  }
});

export default i18n;
