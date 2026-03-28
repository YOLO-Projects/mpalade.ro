import { boot } from 'quasar/wrappers';
import messages from 'src/i18n';
import { createI18n } from 'vue-i18n';

const getInitialLocale = () => {
  const loc = (window.navigator?.language || '').toLowerCase();
  if (loc.startsWith('ro')) {
    return 'ro-ro';
  }

  return 'en-us';
};

const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: 'en-us',
  messages,
  globalInjection: true,
});

export default boot(({ app }) => {
  app.use(i18n);
});

export { i18n };
