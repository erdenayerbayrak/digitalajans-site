import tr from './locales/tr.json';
import en from './locales/en.json';

type Language = 'tr' | 'en';
type Translations = typeof tr;

const translations: { [key in Language]: Translations } = {
  tr,
  en,
};

let currentLang: Language = 'tr';

function getNavigatorLang(): Language {
  const lang = navigator.language.split('-')[0];
  if (lang === 'en' || lang === 'tr') {
    return lang;
  }
  return 'tr';
}

export function setLang(lang: Language): void {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.dispatchEvent(new CustomEvent('languageChange'));
}

export function t(key: keyof Translations): string {
  const translation = translations[currentLang][key];
  return typeof translation === 'string' ? translation : String(key);
}

export function getLang(): Language {
    return currentLang;
}

// Set initial language based on browser preference
setLang(getNavigatorLang()); 