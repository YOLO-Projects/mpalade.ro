import { boot } from 'quasar/wrappers';
import messages from 'src/i18n';
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  legacy: false,
  locale: 'ro-ro',
  fallbackLocale: 'en-us',
  messages,
  globalInjection: true,
});

export default boot(({ app }) => {
  app.use(i18n);
});

export { i18n };
