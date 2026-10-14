export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  websiteUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    reddit?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Wyldheart Wiki",
  shortName: "Wyldheart",
  logoText: "W",
  tagline: "Builds, Skills, Co-op Guides & Dungeon Walkthroughs",
  description: "Fan-made Wyldheart wiki with co-op guides, character builds, skills, ancestries, weapons, crafting tips, dungeon walkthroughs, demo updates and release news.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://wyldheart-wiki.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://wyldheart-wiki.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/3642910/Wyldheart/",
  websiteUrl: "https://wyldheartgame.com",
  heroVideoId: "SGIl5UuRpxg", // Wyldheart | Official Reveal Trailer (DEMO OUT NOW!)
  social: {
    discord: "https://discord.gg/wyldheart",
    youtube: "https://www.youtube.com/@wyldheartgame",
    twitter: "https://x.com/wyldheartgame",
    reddit: "https://www.reddit.com/r/wyldheartgame",
    tiktok: "https://www.tiktok.com/@wyldheartgame",
  },
  locales: ["en", "ja", "de", "fr"],
  defaultLocale: "en",
};
