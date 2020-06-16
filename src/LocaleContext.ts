import { createContextIO } from "react-context-io";

function getLocale() {
  const cache = window.localStorage.getItem("locale");
  if (cache) {
    return cache;
  }
  return window.navigator.language.toLowerCase() === "zh-cn" ? "zh" : "en";
}

const LocaleContext = createContextIO<string>(getLocale());

export function switchLocale(forceUpdateLocale: any) {
  const locale = LocaleContext.read() === "en" ? "zh" : "en";
  forceUpdateLocale(locale);
  LocaleContext.write(locale);
  window.localStorage.setItem("locale", LocaleContext.read());
}

export default LocaleContext;
