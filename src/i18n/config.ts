import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './locales/en/translations.json';
import viTranslations from './locales/vi/translations.json';

i18n.use(initReactI18next).init({
	fallbackLng: 'en',
	lng: localStorage.getItem('lang') || 'en',
	resources: {
		en: {
			translations: enTranslations
		},
		vi: {
			translations: viTranslations
		}
	},
	ns: ['translations'],
	defaultNS: 'translations'
});

i18n.languages = ['en', 'vi'];

export default i18n;