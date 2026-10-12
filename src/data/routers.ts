export interface Router {
  slug: string;
  title: string;
  summary: string;
  n: number;
  requires: string[];
  handoffs: string[];
  env?: string[];
  mcp?: string[];
  notes?: string;
}

export const ROUTERS: Router[] = [
  {
    slug: "web-design",
    title: "Web Design",
    summary:
      "Landing pages, portfolios, redesigns, design systems, UI, and scroll/cinematic motion.",
    n: 46,
    requires: [
      "ai-ui-ux-motion-engine",
      "awwwards-animations",
      "cinematic-gsap-lenis-motion-system",
      "gsap-core",
      "gsap-scrolltrigger",
      "gsap-react",
      "vercel-react-best-practices",
      "design-md",
      "fixing-motion-performance",
      "scroll-craft",
      "ui-ux-pro-max",
      "apple-design",
      "emil-design-eng",
      "review-animations",
      "improve-animations",
      "find-animation-opportunities",
      "animation-vocabulary",
      "animate",
      "gpt-taste",
      "high-end-visual-design",
      "brandkit",
      "stitch-design-taste",
      "design-taste-frontend",
      "design-taste-frontend-v1",
      "ptfs-va-website-builder",
      "redesign-existing-projects",
      "ultimate-frontend-skills",
      "industrial-brutalist-ui",
      "minimalist-ui",
      "image-to-code",
      "imagegen-frontend-web",
      "imagegen-frontend-mobile",
      "img2threejs",
      "visual-research",
      "prototype",
      "pick-ui-library",
      "ask-sonner",
      "slides",
      "enhance-prompt",
      "banner-design",
      "design-system",
      "design",
      "design-is",
      "ui-styling",
      "impeccable",
      "impeccable-design-polish",
    ],
    mcp: ["magicui", "chrome-devtools", "playwright"],
    handoffs: ["video-production"],
  },
  {
    slug: "video-production",
    title: "Video Production",
    summary:
      "HTML-to-video rendering (HyperFrames), React video (Remotion), and social promo.",
    n: 25,
    requires: [
      "hyperframes",
      "general-video",
      "hyperframes-core",
      "hyperframes-animation",
      "hyperframes-creative",
      "hyperframes-registry",
      "hyperframes-keyframes",
      "hyperframes-audio",
      "hyperframes-cli",
      "hyperframes-studio",
      "media-use",
      "product-launch-video",
      "pr-to-video",
      "faceless-explainer",
      "music-to-video",
      "talking-head-recut",
      "slideshow",
      "motion-graphics",
      "embedded-captions",
      "figma",
      "remotion-to-hyperframes",
      "remotion-best-practices",
      "remotion-markup",
      "remotion-maps",
      "remotion-captions",
    ],
    notes:
      "media-use needs the heygen CLI for bgm/sfx resolution. Set HEYGEN_API_BASE to route through a host app.",
    handoffs: ["web-design"],
  },
  {
    slug: "seo",
    title: "SEO",
    summary:
      "Keyword research, clustering, audits, competitor analysis, backlinks, AI visibility, client reports.",
    n: 12,
    requires: [
      "seo-project-setup",
      "seo-audit",
      "keyword-research",
      "keyword-clustering",
      "competitor-analysis",
      "competitive-landscape",
      "link-prospecting",
      "ai-visibility-audit",
      "ai-prompt-research",
      "local-seo",
      "seo-coach",
      "seo-report",
    ],
    handoffs: [],
  },
  {
    slug: "backend",
    title: "Backend",
    summary:
      "APIs, data, auth, architecture, refactors, legacy codebases, issue backlogs.",
    n: 15,
    requires: [
      "smart-explore",
      "learn-codebase",
      "pathfinder",
      "think",
      "ponytail",
      "ponytail-audit",
      "ponytail-review",
      "ponytail-debt",
      "oh-my-issues",
      "standup",
      "full-output-enforcement",
      "make-plan",
      "do",
      "executing-plans",
      "subagent-driven-development",
    ],
    handoffs: [],
  },
  {
    slug: "payments",
    title: "Payments",
    summary:
      "Stripe integration, checkout, subscriptions, webhooks, tax/VAT, PCI-safe flows.",
    n: 1,
    requires: ["stripe-best-practices"],
    env: ["STRIPE_SECRET_KEY", "STRIPE_WEBHOOK_SECRET"],
    notes:
      "Never commit keys. Verify webhook signatures and use idempotency keys on every write.",
    handoffs: [],
  },
  {
    slug: "security",
    title: "Security",
    summary:
      "Repository and diff scanning, auth/secrets/injection review, verified patch generation.",
    n: 1,
    requires: ["claude-security"],
    notes:
      "The Claude Code Workflow orchestrator does not run in opencode. Dispatch the cs-* agents manually in order: inventory -> research -> verify -> generate -> verify patch.",
    handoffs: [],
  },
  {
    slug: "vibe-code",
    title: "Vibe Code",
    summary:
      "Fast path from a vague idea to something running. Deliberately skips heavyweight process.",
    n: 4,
    requires: [
      "brainstorming",
      "ponytail",
      "design-taste-frontend",
      "vercel-react-best-practices",
    ],
    handoffs: [],
  },
  {
    slug: "ship-it",
    title: "Ship It",
    summary:
      "Process-to-result delivery: decide, plan, build, verify, secure, perform, ship.",
    n: 6,
    requires: [
      "brainstorming",
      "writing-plans",
      "executing-plans",
      "verification-before-completion",
      "release-director",
      "version-bump",
    ],
    handoffs: [
      "web-design",
      "video-production",
      "seo",
      "payments",
      "security",
      "backend",
    ],
  },
];

export const AGENTS: string[] = [
  "cs-explore",
  "cs-scan-inventory",
  "cs-scan-researcher",
  "cs-scan-verifier",
  "cs-scan-loader",
  "cs-scan-redactor",
  "cs-patch-generator",
  "cs-patch-verifier",
];

export const TOTAL_DEPS = ROUTERS.reduce((sum, r) => sum + r.n, 0);
export const UNIQUE_SKILLS = 105;
export const BUNDLED = 36;
export const FETCHED = 67;
export const HOSTS = 7;
export const ROUTER_COUNT = ROUTERS.length;

export function routerBySlug(slug: string): Router | undefined {
  return ROUTERS.find((r) => r.slug === slug);
}
