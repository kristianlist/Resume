// src/i18n.js
import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

register('da', () => import('$lib/locales/da.json'));
register('en', () => import('$lib/locales/en.json'));
register('es', () => import('$lib/locales/es.json'));

init({
	fallbackLocale: 'da',
	initialLocale: getLocaleFromNavigator()
});
