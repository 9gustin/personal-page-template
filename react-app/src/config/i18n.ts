import i18next from 'i18next';
import { DEFAULT_LANG } from 'constants/langs';
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({
  fallbackLng: DEFAULT_LANG.key,
  initImmediate: false
});

export default i18next;
