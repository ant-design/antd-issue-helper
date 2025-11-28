import React from "react";

function getLocale() {
  const cache = window.localStorage.getItem("locale");
  if (cache) {
    return cache;
  }
  return window.navigator.language.toLowerCase() === "zh-cn" ? "zh" : "en";
}

// 使用原生 React Context 存储当前语言值
const LocaleContext = React.createContext<string>(getLocale());

// 兼容之前的 read/write 使用场景的轻量替代实现：
// 注意：这不是响应式状态，仅用于读取/写入当前持久化的 locale。
export const LocaleIO = {
  read(): string {
    return getLocale();
  },
  write(next: string): void {
    window.localStorage.setItem("locale", next);
  },
};

export function switchLocale(forceUpdateLocale: (next: string) => void) {
  const next = LocaleIO.read() === "en" ? "zh" : "en";
  forceUpdateLocale(next);
  LocaleIO.write(next);
}

export default LocaleContext;
