const zhMessages: Record<string, string> = require("./locales/zh.json");

(window as any).appLocale.zh = {
  messages: zhMessages,
  locale: "zh-CN",
};
