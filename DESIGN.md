# Design Brief

## Direction

Luxury Real Estate Showroom — premium, cinematic, corporate luxury brand with exclusive dark theme and refined gold accents.

## Tone

Refined minimalist opulence. Rolls Royce meets LVMH — calculated elegance without excess. Dark foundation with strategic gold highlights and subtle dark red accents for prestige and trust.

## Differentiation

Custom gold circular cursor with trailing animation, premium sound effects on interactions, cinematic scroll-fade-in animations, parallax depth effects, and glowing button states that evoke high-end luxury touchpoints.

## Color Palette

| Token       | OKLCH             | Role                                                |
| ----------- | ----------------- | --------------------------------------------------- |
| background  | 0.098 0 0         | Near-black base (#0a0a0a) — highest contrast       |
| foreground  | 0.93 0 0          | Off-white text — premium readability               |
| card        | 0.15 0.01 0       | Elevated surfaces with depth                        |
| primary     | 0.73 0.15 60      | Gold accent (#D4AF37) — CTAs, highlights, hover    |
| accent      | 0.39 0.27 25      | Dark red (#8B0000) — secondary highlights, badges  |
| muted       | 0.2 0.01 0        | Dark grey — secondary text, disabled states        |
| destructive | 0.52 0.25 25      | Warm red — alerts, warnings                        |
| border      | 0.22 0.01 0       | Subtle dark borders — visual separation            |

## Typography

- Display: Space Grotesk — bold geometric headings, premium presence, luxe feel
- Body: DM Sans — clean, professional, highly readable
- Scale: hero `text-6xl md:text-7xl font-bold tracking-tight`, h2 `text-4xl md:text-5xl font-bold`, label `text-sm font-semibold tracking-widest uppercase`, body `text-base leading-relaxed`

## Elevation & Depth

Layered shadow hierarchy creates visual separation: subtle elevation shadows on cards, soft gold glows on interactive elements, large powerful shadows on hero sections. Depth through transparency (`bg-opacity-80`), blur backdrops, and strategic elevation.

## Structural Zones

| Zone    | Background      | Border        | Notes                                    |
| ------- | --------------- | ------------- | ---------------------------------------- |
| Header  | card/0.15       | border-gold   | Sticky navbar, transparent to solid      |
| Hero    | background/0.10 | —             | Full-width video background, glow CTAs   |
| Content | background      | border        | Alternating card/muted sections          |
| Footer  | card/0.15       | border-top    | Subtle dark card with gold text accents  |

## Spacing & Rhythm

Large generous spacing (6-8 sections gaps) creates editorial breathing room. Cards separated by `gap-6 md:gap-8`. Content padding `px-6 md:px-8 lg:px-12`. Golden ratio proportions. Consistent rhythm prevents visual chaos in dark theme.

## Component Patterns

- Buttons: rectangular with `rounded-sm`, gold `bg-primary` or dark red `bg-accent`, hover `glow-gold` with lift effect
- Cards: dark subtle elevation, hover `hover-lift` with shadow, image zoom on hover
- Badges: small dark red accents with gold text, `text-xs font-semibold`
- Links: gold underline, no decoration by default, hover glow

## Motion

- Entrance: fade-in + slide-up (`fade-in slide-up`) 0.6s on scroll for cards/sections
- Hover: lift effect (translateY -4px) + glow intensification, smooth 0.3s transitions
- Decorative: floating animations on hero elements, pulse glow on CTAs, parallax scroll on backgrounds

## Constraints

- No neon colors, no harsh gradients. All accents are muted yet luxe.
- Shadows are warm (dark, not cool blue). Gold glows are 0.4 opacity max.
- Text contrast on dark: foreground `0.93` on background `0.098` = AA+++ accessibility.
- All animations respect `prefers-reduced-motion` to avoid user discomfort.

## Signature Detail

Custom gold circular cursor with trailing animation and context-aware expand/glow on hover. Click ripple effect and sound feedback. Together, these micro-interactions elevate the interface from standard to unforgettable luxury brand experience.
