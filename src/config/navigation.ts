import type { LucideIcon } from "lucide-react";

export interface NavItem {
  key: string;
  path: `/${string}`;
  icon?: LucideIcon;
  isContentType: boolean;
}

// 分类 slug 与 articles/<locale>/ 子目录、content.ts 的 GROUP_TITLES/GROUP_ORDER、en.json 的 nav 键完全一致。
// 每项必须同时保留 key（翻译键）与 path（URL），site.tsx 的 SiteHeader 消费这两个字段。
export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "characters", path: "/characters", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "modes", path: "/modes", isContentType: true },
  { key: "platforms", path: "/platforms", isContentType: true },
  { key: "release", path: "/release", isContentType: true },
  { key: "community", path: "/community", isContentType: true },
] satisfies readonly NavItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG.filter(
  (item) => item.isContentType,
).map((item) => item.path.replace(/^\//, ""));
