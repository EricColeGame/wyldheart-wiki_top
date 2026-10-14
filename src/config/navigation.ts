import type { LucideIcon } from "lucide-react";

export interface NavItem {
  key: string;
  path: string;
  icon?: LucideIcon;
  isContentType: boolean;
}

// 内容导航将在后续阶段按新主题重建，本阶段先清空。
export const NAVIGATION_CONFIG: readonly NavItem[] = [];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG.filter(
  (item) => item.isContentType,
).map((item) => item.path.replace(/^\//, ""));
