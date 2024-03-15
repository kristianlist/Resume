// src/i18n.js
import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

register('da', () => import('$lib/locales/da.json'));

init({
	fallbackLocale: 'da',
	initialLocale: getLocaleFromNavigator()
});
