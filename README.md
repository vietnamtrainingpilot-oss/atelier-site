# Atelier — website

Marketing site for **Atelier**, a set of eight domain routers that dispatch agent
skills to the right specialist.

Live: <https://vietnamtrainingpilot-oss.github.io/atelier-site/>

## What Atelier is

You install forty skills, and now you are the router. Every request becomes
"which eleven of these forty do I need this time," and a fifth of them are
duplicates competing for the same job.

Atelier replaces you with eight entry points. Each one knows its whole domain,
picks a lead skill, adds at most two supports, and hands off to another router
when the work crosses a boundary.

- **8 routers** — `web-design`, `video-production`, `seo`, `backend`, `payments`,
  `security`, `vibe-code`, `ship-it`
- **105 skills** across 110 declared dependencies
- **36 skills bundled** in the plugin for offline install
- **7 agent hosts** — opencode, Claude Code, Cursor, Codex, Windsurf, Gemini, and
  the generic `agents` root

To install the plugin itself (this site is only documentation for it):

```bash
node install.mjs
```

It needs Node 18+ and git, and your agent must be restarted afterwards because
skills only register at startup.

## Running this site locally

There is no build step, no package manager, and no dependencies. It is five
static HTML files with inline CSS and inline JavaScript.

Open `index.html` in any browser:

```
open index.html            # macOS
start index.html           # Windows
xdg-open index.html        # Linux
```

Double-clicking the file works too. Everything works from a `file://` URL.

### Pages

| File | Purpose |
|---|---|
| `index.html` | Home — hero, routing console, scenario diagram, eight domains, manifest |
| `routers.html` | Every router in full: lead, supports, hand-offs, env vars, MCP servers, worked examples, and the eight security subagents |
| `install.html` | Install guide — command, flags, supported hosts, troubleshooting |
| `about.html` | Why Atelier exists, what it values, and what it cannot do |
| `404.html` | Not found |

### Optional: serve it over HTTP

Only needed if you want to test the copy buttons against a secure context
(`navigator.clipboard` is unavailable on `file://` in some browsers). Any static
server will do:

```bash
npx serve .
# or
python -m http.server 8000
```

## Design constraints

These are deliberate and should be preserved in any future edit.

- **One background colour** — `#F5F2EC` on `html`, `body`, and every section, all
  the way to the viewport edges. No dark sections, no dark-mode toggle.
- **One accent colour** — `#B4552D`. No gradients, no glow, no neon.
- **Display serif for everything.** Monospace only for code: commands, env vars,
  file paths, and skill slugs.
- **Maximum border-radius 2px.** No pills, no blobs.
- **Hairline borders and whitespace** instead of shadows.
- **Centre everything** — section headings, grids, prose capped around 66ch.
- **Motion is progressive enhancement only.** Content is fully visible without
  JavaScript, and `prefers-reduced-motion` disables all animation.

## Licence

MIT. The skills Atelier dispatches to belong to their original authors.