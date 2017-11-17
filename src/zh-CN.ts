import * as appLocaleData from 'react-intl/locale-data/zh';

const zhMessages: any = require('./locales/zh.json');

(window as any).appLocale.zh = {
  messages: {
    ...zhMessages,
  },
  locale: 'zh-CN',
  data: appLocaleData,
};
