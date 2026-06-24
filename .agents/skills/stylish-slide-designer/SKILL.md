---
name: stylish-slide-designer
description: Create polished, style-forward presentation decks from rough source material, research notes, Markdown outlines, or existing slide code. Use when Codex needs to design or redesign slides that should feel premium rather than generic, especially for PptxGenJS or `.pptx` workflows involving typography selection, section dividers, table-of-contents slides, icon systems, branding accents, layout refinement, review-driven iteration, or converting `source.md` plus design feedback into a finished deck.
---

# Stylish Slide Designer

Build decks like a design system, not a document dump. Start from source material, define a visual direction, generate slides with consistent components, then review the exported deck and tighten weak slides.

Prefer a coded deck workflow when the user wants repeatable iteration, theme control, or large structural edits. In those cases, keep content, assets, and slide-generation code in the same project folder so design feedback can be applied surgically.

## Workflow

Follow this sequence unless the user already completed some steps:

1. Inspect the available source files first.
2. Turn the raw information into a clear deck structure.
3. Define the visual system before polishing individual slides.
4. Implement the deck with reusable slide helpers and assets.
5. Export, review, and write explicit improvement notes.
6. Apply the notes back into the generator and re-export.

## Inspect Inputs

Read the project folder and locate any of these before designing:

- `source.md`: factual source material or narrative basis
- `prompt_logs.md`: prior iteration history and user taste clues
- `generate.js` or similar: current PptxGenJS generator
- `improvement_points.md`: critique from a prior review pass
- existing `.pptx` output: the artifact to inspect and improve
- local assets such as icons, backgrounds, or logos

If facts are incomplete and the user expects current information, research and verify them before slide generation. Keep factual fixes separate from design polish.

## Shape The Story

Convert the source into a concise slide narrative before writing design code. A strong default structure is:

1. Title slide
2. Table of contents
3. Section divider
4. 2-4 content slides for the section
5. Repeat section divider plus content as needed
6. Summary or closing slide

Do not let every slide use the same layout. Mix a few controlled patterns: hero statement, card grid, comparison, timeline, architecture, and summary. Repetition is fine at the component level, not at the full-slide level.

### Theme Consistency Rule

**A single deck must use a unified background theme — either all-dark or all-light. Do not alternate dark and light backgrounds across slides.** Mixing dark title/divider slides with light content slides creates visual whiplash and breaks the sense of a cohesive brand.

- **Dark-unified deck:** Every slide uses a dark background. Title, TOC, section dividers, content, and summary slides all share the same dark palette. Use lighter text, tinted cards, and subtle gradient variations to create depth within the dark family.
- **Light-unified deck:** Every slide uses a light background. Title, TOC, section dividers, content, and summary slides all share the same light palette. Use accent-colored bars, cards, and shapes for visual contrast without switching to dark backgrounds.

Choose which mode to use based on the deck's purpose and audience, then commit to it throughout. Section dividers should differ from content slides through **accent color treatment, typography scale, or layout** — not by flipping the background darkness.

## Build A Visual System

Decide these before editing large amounts of slide code:

- title font and body font with obvious contrast
- background treatment for title, TOC, section, content, and summary slides
- 1-2 accent colors plus muted support colors
- a consistent icon style (default to **Lucide** icons — see the Icon System section below)
- logo or brand marker placement rules
- margin and spacing rules that keep slides breathable

Use expressive typography and avoid default office-like choices when the deck is meant to feel modern. A solid pattern is a display face for headings and a readable sans-serif for body text. If the deck contains Japanese, ensure the body font supports it cleanly.

For design guidance and concrete heuristics, read [references/antigravity-patterns.md](./references/antigravity-patterns.md).

---

### Color Design Principles

#### The 60:30:10 Rule

Every palette should follow this ratio to keep slides balanced:

| Ratio | Role           | Where to use              |
| ----: | -------------- | ------------------------- |
|   60% | Base color     | Backgrounds, whitespace   |
|   30% | Main color     | Headings, shapes, cards   |
|   10% | Accent color   | Highlights, numbers, CTAs |

Adding a **text color** (dark gray, not pure black) and an optional **sub-color** (for charts/diagrams) rounds out the system.

#### Key Color Heuristics

- **Background:** Avoid pure white `#FFFFFF`. Tinted off-whites feel more polished — try `#F8FAFC` (clean), `#FDF7F0` (warm), `#F5F7FF` (tech), `#F4F1EA` (natural). For premium dark slides, use `#0F172A`.
- **Text:** Never use pure black `#000000`. Use dark grays: `#1F2937` for body, `#4B5563` for secondary, `#6B7280` for captions. On dark backgrounds, use `#F8FAFC`.
- **Accent:** Limit to one accent color. Apply it only to elements that must stand out — keywords, numbers, arrows, CTA buttons. Multiple accents create noise.
- **Same-hue + pop:** An easy safe pattern is building the palette from one hue family (e.g., blues) then adding a single contrasting accent (e.g., orange).
- **Luxury feel:** Use low-saturation colors (navy, charcoal, beige, gold, muted tones) with generous whitespace. Dark background + white text + gold accent is a reliable luxury formula.

#### Color NG Patterns — Avoid These

| Bad practice                          | Why it fails                    |
| ------------------------------------- | ------------------------------- |
| Primary colors (pure red/blue/yellow) | Looks childish                  |
| Heavy use of neon / fluorescent       | Eye-straining                   |
| Low contrast between bg and text      | Illegible                       |
| Too many accent colors                | No clear hierarchy              |
| Different palette per slide           | Destroys visual unity           |

---

### Color Palette Library

Choose a palette that matches the deck's purpose. Each palette defines 5 roles: background, main, accent, body text, and support.

#### 1. Business / Trust (Default for corporate decks)

| Role    | Color       | HEX       |
| ------- | ----------- | --------- |
| BG      | Off-white   | `#F8FAFC` |
| Main    | Navy        | `#1E3A8A` |
| Accent  | Orange      | `#F97316` |
| Text    | Dark gray   | `#1F2937` |
| Support | Slate       | `#64748B` |

Best for: proposals, business plans, marketing analysis, academic presentations.

#### 2. Startup / Tech

| Role    | Color        | HEX       |
| ------- | ------------ | --------- |
| BG      | Pale blue    | `#F5F7FF` |
| Main    | Indigo       | `#4F46E5` |
| Accent  | Cyan         | `#06B6D4` |
| Text    | Dark navy    | `#111827` |
| Support | Light gray   | `#E5E7EB` |

Best for: app launches, AI services, SaaS, tech talks.

#### 3. Pop / SNS

| Role    | Color     | HEX       |
| ------- | --------- | --------- |
| BG      | Cream     | `#FFF7ED` |
| Main    | Coral     | `#FB7185` |
| Accent  | Purple    | `#A855F7` |
| Text    | Charcoal  | `#27272A` |
| Support | Yellow    | `#FACC15` |

Best for: SNS campaigns, youth-targeted proposals, event posters.

#### 4. Natural / Tourism

| Role    | Color          | HEX       |
| ------- | -------------- | --------- |
| BG      | Ecru           | `#F4F1EA` |
| Main    | Forest green   | `#2F5D50` |
| Accent  | Terracotta     | `#C76F4D` |
| Text    | Brown-black    | `#2B2520` |
| Support | Sage           | `#A3B18A` |

Best for: tourism, regional revitalization, sustainability, nature themes.

#### 5. Luxury / Hotel

| Role    | Color       | HEX       |
| ------- | ----------- | --------- |
| BG      | Dark navy   | `#0F172A` |
| Main    | Ivory       | `#F8FAFC` |
| Accent  | Gold        | `#D4AF37` |
| Text    | Light gray  | `#CBD5E1` |
| Support | Deep gray   | `#1E293B` |

Best for: hotels, luxury brands, portfolios, high-end services.

#### 6. Minimal / Research

| Role    | Color        | HEX       |
| ------- | ------------ | --------- |
| BG      | White-gray   | `#F9FAFB` |
| Main    | Black-navy   | `#111827` |
| Accent  | Blue         | `#2563EB` |
| Text    | Gray         | `#374151` |
| Support | Light gray   | `#E5E7EB` |

Best for: academic papers, data analysis, research presentations.

#### 7. Cute / Soft

| Role    | Color        | HEX       |
| ------- | ------------ | --------- |
| BG      | Pale pink    | `#FFF1F2` |
| Main    | Rose         | `#E11D48` |
| Accent  | Lavender     | `#C084FC` |
| Text    | Dark brown   | `#3F2A2A` |
| Support | Peach        | `#FED7AA` |

Best for: cafés, lifestyle, student presentations, women-oriented proposals.

#### 8. Dark / Futuristic

| Role       | Color        | HEX       |
| ---------- | ------------ | --------- |
| BG         | Black-navy   | `#020617` |
| Main       | White        | `#F8FAFC` |
| Accent     | Neon blue    | `#38BDF8` |
| Sub-accent | Neon purple  | `#A78BFA` |
| Support    | Slate        | `#334155` |

Best for: AI, technology, gaming, futuristic themes.

#### Theme → Palette Quick Reference

| Theme                | Recommended palette                    |
| -------------------- | -------------------------------------- |
| Business proposal    | Navy × Orange × Off-white              |
| Tourism / Regional   | Green × Terracotta × Ecru              |
| AI / App launch      | Indigo × Cyan × Pale blue              |
| Luxury brand         | Dark navy × Gold × Ivory               |
| Research / Academic  | White-gray × Black-navy × Blue         |
| SNS / Youth          | Coral × Purple × Cream                 |
| Sustainability       | Sage green × Beige × Brown             |
| Cute / Soft          | Pink × Lavender × Peach                |

---

### Default Color Palette — Ocean Gradient

Unless the user specifies a different palette or a theme-appropriate alternative from the library above, use the following unified color system. This palette has been validated across multiple presentation decks for consistency, readability, and professional appearance.

**Important:** Choose either the **Dark-Unified** or **Light-Unified** usage mode below and apply it consistently across the entire deck. Do not mix dark-background slides with light-background slides.

```
primary:     065A82   — main brand teal, used for card headers, step numbers, top bars, table headers
secondary:   1C7293   — lighter teal, used for section divider accent fills, top-bar backgrounds
accent:      21295C   — deep navy, used for footer bands, summary card backgrounds
dark:        0A1628   — near-black navy, base background for dark-unified decks
darkAlt:     122240   — slightly lighter navy for layered dark elements (cards, panels on dark bg)
light:       F0F6FA   — cool blue-white, base background for light-unified decks
white:       FFFFFF   — card fills, table cell backgrounds
textDark:    1A2A3A   — primary body text on light backgrounds
textMid:     3A5A6A   — secondary/description text on light backgrounds
textLight:   8AAABB   — muted text on dark backgrounds, footer page numbers
gold:        F9C846   — accent highlight, subtitle text, top-bar stripe, icon tint
warn:        D97706   — warning/caution card header
warnBg:      FFF8E1   — warning card body background
tableBorder: B8D4E6   — subtle table border
tableHeader: 065A82   — matches primary for table header rows
tableAlt:    E8F2F8   — alternating table row tint
green:       0D9488   — tip/success accent bar
greenBg:     F0FDF4   — tip/success card background
```

#### Dark-Unified Mode

Use `dark` (`#0A1628`) as the background for **all** slides — title, TOC, section dividers, content, and summary. Create visual variety through:

- **Cards/panels:** Use `darkAlt` (`#122240`) or semi-transparent overlays for card fills instead of white
- **Section dividers:** Distinguish with `secondary` (`#1C7293`) accent bars or `gold` (`#F9C846`) typography, not by switching to a light background
- **Text:** Use `#F8FAFC` for headings, `textLight` (`#8AAABB`) for body, `gold` for emphasis
- **Tables:** Use `darkAlt` for header rows, `dark` for alternating rows, light text throughout

#### Light-Unified Mode

Use `light` (`#F0F6FA`) as the background for **all** slides. Create visual variety through:

- **Cards/panels:** Use `white` (`#FFFFFF`) for card fills with subtle border or shadow
- **Section dividers:** Distinguish with `primary` (`#065A82`) accent bars, large typography, or colored header bands — not by switching to a dark background
- **Text:** Use `textDark` (`#1A2A3A`) for headings, `textMid` (`#3A5A6A`) for body, `primary` for emphasis
- **Tables:** Use `primary` for header rows with white text, `tableAlt` for alternating rows

**Section label color on colored backgrounds:** `BBDDEE`

**Icon tinting rules:**
- Gold icon (`#F9C846`): title slide hero icon
- White icon (`#FFFFFF`): icons on dark or colored backgrounds
- Primary icon (`#065A82`): icons on light/white backgrounds (e.g. checkmarks in feature lists)

---

### Icon System — Lucide Icons

Use [Lucide](https://lucide.dev/) as the default icon family for all slide decks. Lucide is an open-source icon set derived from Feather Icons with a consistent 24×24 stroke style, 1400+ icons, and clean SVG output — ideal for professional presentations.

#### Why Lucide

| Advantage              | Detail                                                    |
| ---------------------- | --------------------------------------------------------- |
| Visual consistency     | Uniform stroke width and corner radius across all icons   |
| Large coverage         | 1400+ icons spanning UI, business, tech, and nature       |
| SVG-native             | Crisp at any size; easy to tint with PptxGenJS options    |
| Lightweight            | Each icon is a single SVG — no font file or sprite sheet  |
| Actively maintained    | Regular additions; MIT-licensed                           |

#### Acquiring Lucide Icons for Slides

Download individual SVGs from the Lucide site or use the npm package:

```bash
npm install lucide-static
# SVGs are located at node_modules/lucide-static/icons/*.svg
```

Copy only the icons you need into the project `icons/` folder. Name them descriptively:

```
icons/
  lucide-brain.svg
  lucide-rocket.svg
  lucide-shield-check.svg
  lucide-code-2.svg
  lucide-lightbulb.svg
```

#### Icon Selection Guidelines

Choose Lucide icons that reinforce the slide's message. Below are common slide concepts mapped to recommended Lucide icon names:

| Concept / Topic       | Recommended Lucide Icons                          |
| --------------------- | ------------------------------------------------- |
| Introduction / Start  | `rocket`, `play`, `sparkles`                      |
| Features / Benefits   | `check-circle`, `star`, `zap`                     |
| Warnings / Caution    | `alert-triangle`, `shield-alert`, `ban`           |
| Tips / Best practices | `lightbulb`, `bookmark`, `thumbs-up`              |
| Steps / Process       | `list-ordered`, `arrow-right`, `workflow`          |
| Settings / Config     | `settings`, `sliders-horizontal`, `wrench`        |
| Data / Analytics      | `bar-chart-3`, `trending-up`, `pie-chart`         |
| Security              | `shield-check`, `lock`, `key`                     |
| AI / Intelligence     | `brain`, `cpu`, `bot`                             |
| Code / Development    | `code-2`, `terminal`, `file-code`                 |
| Communication         | `message-circle`, `mail`, `users`                 |
| Success / Completion  | `circle-check`, `trophy`, `party-popper`          |
| Summary / Closing     | `flag`, `book-open`, `graduation-cap`             |

#### Using Lucide Icons in PptxGenJS

Add icons as image elements with tinting applied via shape overlays or pre-tinted SVGs:

```js
// Example: adding a Lucide icon to a slide
slide.addImage({
  path: "icons/lucide-rocket.svg",
  x: 0.5, y: 0.4, w: 0.6, h: 0.6,
});
```

For tinting SVG icons to match the palette, either:
1. **Pre-process** — edit the SVG `stroke` attribute to the target color before saving
2. **Overlay** — place a semi-transparent colored shape behind a white-stroke icon

#### Icon Do's and Don'ts

| ✅ Do                                         | ❌ Don't                                       |
| --------------------------------------------- | ---------------------------------------------- |
| Use one icon family (Lucide) throughout        | Mix Lucide with emoji or other icon sets       |
| Keep icons the same size on a single slide     | Scatter differently-sized icons                |
| Tint icons to match your palette               | Use raw black stroke on colored backgrounds    |
| Pick semantically relevant icons               | Use decorative icons that don't aid meaning    |
| Limit to 1-2 icons per content card            | Overload a slide with 5+ icons                 |

---

### Font Combination Principles

#### Core Rule: Use At Most 2 Font Families

Polished slides use fewer fonts, not more. The fundamental pairing is:

- **Title font** — expressive, with personality and visual weight
- **Body font** — clean, highly readable, stays out of the way

Avoid using 3+ different font families. Achieve hierarchy through **weight** (Bold/SemiBold/Regular/Light) and **size**, not by adding fonts.

#### Weight-Based Hierarchy

Even with a single font family, weight variation creates clear information levels:

| Element       | Weight              |
| ------------- | ------------------- |
| Title         | Bold / ExtraBold    |
| Sub-heading   | SemiBold            |
| Body          | Regular             |
| Caption/Note  | Light               |

For projection, body text should be **Regular or Medium** — Light is often too thin on screen.

#### Separate Japanese and English Fonts

For Japanese-language decks, use a dedicated Japanese font for body text and a Latin/European font for English headings, numbers, and short labels. This significantly improves design quality.

Example: Japanese body in **Noto Sans JP**, English headings in **Montserrat**, numbers in **Inter Bold**.

#### Font Size Guidelines

| Element         | Size range  |
| --------------- | ----------- |
| Cover title     | 44–72 pt    |
| Slide heading   | 28–40 pt    |
| Body text       | 18–24 pt    |
| Caption / Note  | 10–14 pt    |

Maintain a **large gap between title and body sizes** — similar sizes flatten the visual hierarchy.

#### Spacing Tips

- **Letter-spacing:** Widen slightly for short English headings (magazine / brand feel). Do not widen Japanese body text.
- **Line-height:** Set body text line spacing to **1.2–1.5×** for readability. Dense text without line spacing looks cramped.
- **Bold sparingly:** Reserve bold for keywords, numbers, conclusions, and headings only. Bold everywhere = bold nowhere.

#### Font Pairing NG Patterns — Avoid These

| Bad practice                                  | Why it fails                            |
| --------------------------------------------- | --------------------------------------- |
| Decorative / script font for body text        | Illegible at body sizes                 |
| 3+ font families                              | No unity, looks amateur                 |
| Mismatched mood (e.g., pop JP + luxury EN)    | Atmosphere conflict                     |
| Too-thin font for projected slides            | Disappears on screen                    |
| Similar-looking fonts paired together         | "Almost the same" reads as a mistake    |

---

### Font Pairing Library — By Atmosphere

Use this table to select pairings that match the deck's mood:

| Atmosphere   | Title font            | Body font        | English / Numbers          |
| ------------ | --------------------- | ---------------- | -------------------------- |
| Simple       | Noto Sans JP Bold     | Noto Sans JP     | Inter                      |
| Luxury       | Noto Serif JP         | Noto Sans JP     | Playfair Display           |
| Modern       | Montserrat            | Noto Sans JP     | Inter                      |
| Pop / SNS    | Poppins               | Noto Sans JP     | Poppins                    |
| Soft / Cute  | M PLUS Rounded 1c     | Noto Sans JP     | Nunito                     |
| Japanese     | Shippori Mincho       | Noto Sans JP     | Cormorant Garamond         |
| Tech         | Inter Bold            | Noto Sans JP     | JetBrains Mono / Inter     |
| Magazine     | Playfair Display      | Noto Sans JP     | Didot / Bodoni             |

#### Theme-Specific Recommendations

| Theme                    | Font combination                                        |
| ------------------------ | ------------------------------------------------------- |
| Academic / Business      | Noto Sans JP Bold + Noto Sans JP + Inter                |
| Tourism / Regional       | Shippori Mincho Bold + Noto Sans JP + Playfair Display  |
| App / Startup / AI       | Montserrat ExtraBold + Noto Sans JP + Inter Bold        |
| Luxury brand / Hotel     | Playfair Display + Noto Serif JP + Noto Sans JP         |
| Education / Beginners    | M PLUS Rounded 1c Bold + Noto Sans JP + Nunito          |
| SNS / Marketing          | Poppins ExtraBold + Noto Sans JP + Montserrat Bold      |

#### Default Typography

When no specific atmosphere is requested, use:

- **Heading font:** `Trebuchet MS` — bold, clean display face
- **Body font:** `Calibri` — highly readable sans-serif with good Japanese support

For Japanese-heavy decks where Google Fonts are available, prefer:

- **Heading:** `Noto Sans JP Bold`
- **Body:** `Noto Sans JP Regular`
- **Numbers / English labels:** `Inter`

## Implement The Deck

When using PptxGenJS, organize the generator around reusable helpers instead of one long slide script. Common helpers include:

- background helper per slide type
- footer or page-number helper
- section-divider helper
- card or panel helper
- icon plus label helper (use Lucide SVGs — see Icon System section)
- title block helper
- logo placement helper

Favor local assets over emoji. Use **Lucide icons** as the default icon set — download the needed SVGs into the project `icons/` folder and render them as image assets so the deck looks intentional and consistent. Never fall back to emoji when a matching Lucide icon exists.

Keep generated output inside the project folder, near the source and generator, so revisions remain traceable.

## Review And Iterate

After exporting a `.pptx`, inspect the artifact and write explicit improvement notes before making the next code pass. Review at least these points:

- visual depth: flat versus rich background treatment
- typography hierarchy: title contrast, body readability, spacing
- whitespace: whether content is breathing or cramped
- card treatment: flat blocks versus translucent or layered surfaces
- icon richness: are all icons from the Lucide set? Do they feel systematic, not placeholder?
- icon consistency: same stroke weight, same sizing, palette-matched tinting
- brand integration: whether accents and logo placement feel deliberate

Name the critique file something like `improvement_points.md`, then apply those notes back to the generator. This review loop is part of the design process, not a postscript.

## Output Expectations

Aim for decks that feel like product marketing or strategy presentations, not lecture notes. The user should be able to point at visible design decisions: typography, contrast, pacing, iconography, section rhythm, and restraint.

When appropriate, also create support files in the same project folder:

- a prompt file for generating a square logo asset
- image prompt files for backgrounds or characters
- critique notes describing the next round of improvements

## Resources

Read [references/antigravity-patterns.md](./references/antigravity-patterns.md) when you need concrete patterns extracted from a real slide-making workflow, including typography, logo placement, TOC and section-divider conventions, icon replacement, and review-driven iteration.
