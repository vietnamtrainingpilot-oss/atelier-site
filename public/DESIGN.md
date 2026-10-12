# Atelier Design System

## Overview
Atelier is an opencode and Claude plugin that dispatches agent work to the right specialist skill across eight domains. The design system enforces a warm, studio-inspired aesthetic with strict typography, color, and spacing rules.

## Color Palette (from BRAND.md)

| Token | Hex | Use |
|---|---|---|
| `--atelier-ink` | `#14120F` | Primary text, headings |
| `--atelier-paper` | `#F5F2EC` | Background — warm, not white |
| `--atelier-rule` | `#D8D2C6` | Borders, dividers |
| `--atelier-muted` | `#7A7267` | Secondary text |
| `--atelier-mark` | `#B4552D` | Accent — the mark, links, active state |

**Why warm**: Every cold grey/blue palette reads as developer-tool chrome. Warm paper with burnt-orange accent reads as studio, matching the "atelier" (workshop) name. One accent only — it has to mean something.

## Typography

- **Headings**: `var(--font-display)` = `"Fraunces Variable", Georgia, "Times New Roman", serif` — the atelier voice
- **Body/UI**: `-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif`
- **Code**: `var(--font-mono)` = `"JetBrains Mono Variable", ui-monospace, "SF Mono", "Cascadia Code", "JetBrains Mono", monospace`

The serif/sans split is the whole brand in one decision: craft on top, machinery underneath.

## Grid & Spacing

- **Page max**: `var(--page-max)` = `1200px`
- **Gutter**: `var(--gutter)` = `clamp(1.25rem, 4vw, 4.5rem)`
- **Section padding**: `clamp(4rem, 9vw, 8.5rem)`
- **Section tight**: `clamp(3rem, 6vw, 5.5rem)`

## Section Coloring

- **`--section--dark`**: `background: var(--atelier-ink)`, `color: var(--atelier-paper)`, `padding-block: clamp(4rem, 9vw, 7rem)`
- **`--section--light`**: `background: var(--atelier-paper)`, `color: var(--atelier-ink)`, `padding-block: clamp(4rem, 9vw, 7rem)`

## Accent Rules

- `--atelier-mark` (`#B4552D`) is the single accent color
- Used on: heading emphasis, border accents, hover states, active links
- **Never** use more than one accent color per section
- Mark accent darkens on hover: `rgba(180,85,45,0.08)` / `rgba(180,85,45,0.05)`

## Component Specs

### RouterCard
- `background: var(--paper-raised)` with `border: var(--rule)` + `border-top: 2px solid var(--atelier-rule)`
- Hover: `transform: translateY(-4px)`, `border-top-color: var(--atelier-mark)`, `box-shadow: 0 12px 32px rgba(180,85,45,0.15)`
- Chip pills: `display: inline-block`, `padding: 0.2em 0.55em`, `background: var(--mark-wash)`, `color: var(--mark-deep)`
- One lead skill, up to 2 supports shown in handoffs

### Feature Grid (home page)
- 2-column grid on desktop, 1-column on mobile
- Cards: `background: var(--atelier-ink)`, padding `clamp(1.75rem, 4vw, 3rem)`
- Hover: `background: rgba(245,242,236,0.03)`
- Numbers: `font-size: 0.65rem`, `color: var(--atelier-mark)`, `letter-spacing: 0.1em`
- Labels: `color: rgba(245,242,236,0.4)`

### Routing Diagram
- 3 scenario stages showing "One verb in. One specialist out."
- Each stage: verb text, router name (mark accent), skills as pills
- Skills: `font-size: 0.72rem`, `color: var(--atelier-muted)`, `background: var(--paper-deep)`, `padding: 0.15em 0.45em`, `border-radius: var(--radius)`

### Navigation
- Dark hero: `data-hero` class, transparent nav, auto-inverts on scroll
- Light sections: normal papger nav
- Mark accent on hover: `color: var(--atelier-mark)`

## Motion Rules

- **GSAP + ScrollTrigger + Lenis** with `prefers-reduced-motion` guard
- `window.__atelierMotionReady` flag set after motion registration
- Only animate `transform` and `opacity`
- Marquee animates only when motion allowed
- Reduced motion: disable marquee, simplify transitions

## One-Line Rules

- **One lead, two supports.** Never a committee.
- **Route on input, not output** — determinism beats taste.
- **Document the gap** instead of implying coverage.
- **Verify, then report.** "Should work" is not a result.

## Quick Reference: Color Applications

| Element | Dark Mode | Light Mode |
|---------|-----------|------------|
| Headings | `var(--atelier-mark)` | `var(--atelier-mark)` |
| Feature card border | `var(--atelier-mark)` | `var(--atelier-mark)` |
| Feature card hover | `rgba(180,85,45,0.08)` | `rgba(180,85,45,0.05)` |
| Router card border-top | `var(--atelier-rule)` | `var(--atelier-rule)` |
| Router card hover border-top | `var(--atelier-mark)` | `var(--atelier-mark)` |
| Button accent | `var(--atelier-mark)` | `var(--atelier-mark)` |

---
*Enforced by BRAND.md — the only authoritative source for color, typography, and spacing.*