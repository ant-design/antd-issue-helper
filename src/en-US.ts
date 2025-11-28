const enMessages: any = require("./locales/en.json");

// react-intl v7 不再需要 addLocaleData/locale-data 预加载
(window as any).appLocale.en = {
  messages: enMessages,
  locale: "en",
};
