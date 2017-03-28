import appLocaleData from 'react-intl/locale-data/en';

const enMessages: any = require('../locales/en.json');

(window as any).appLocale.en = {
  messages: {
    ...enMessages,
  },
  locale: 'en-US',
  data: appLocaleData,
};
