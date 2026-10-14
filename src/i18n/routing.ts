import { defineRouting } from "next-intl/routing";

// 唯一真相源：新增/移除语言只需改这里，并同步 request.ts、language-switcher.tsx 与 src/locales/*.json
export const locales = ["en", "ja", "de", "fr"] as const;

export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales: [...locales],
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});
