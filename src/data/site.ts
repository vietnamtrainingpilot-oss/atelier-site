const BASE = import.meta.env.BASE_URL;

export function url(path = "/"): string {
  const joined = BASE.replace(/\/+$/, "") + "/" + path.replace(/^\/+/, "");
  return joined.replace(/\/{2,}/g, "/");
}

export const SITE = {
  name: "Atelier",
  wordmark: "⌂ Atelier",
  tagline: "Domain routers that dispatch agent skills to the right specialist.",
  description:
    "Atelier is an opencode and Claude plugin: eight domain routers that dispatch to the right specialist skill. 110 dependencies, 105 unique skills, 36 bundled for offline install.",
  repo: "https://github.com/vietnamtrainingpilot-oss/atelier",
  license: "MIT",
  version: "1.0.0",
};

export interface NavItem {
  href: string;
  label: string;
}

export const NAV: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/routers/", label: "Routers" },
  { href: "/install/", label: "Install" },
  { href: "/about/", label: "About" },
];
