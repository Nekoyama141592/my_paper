# Antigravity Patterns

Use this file as a concrete reference for premium slide decks created from rough notes and iterated through code.

## Core Workflow

1. Install the deck-generation dependencies.
2. Gather or repair the factual source in `source.md`.
3. Generate the first deck from the source.
4. Upgrade typography and spacing.
5. Replace placeholder visuals with a coherent icon or asset system.
6. Add structural slides such as a TOC and section dividers.
7. Introduce brand assets such as a logo.
8. Export the deck and write review notes.
9. Fold the review notes back into the generator.

## File Pattern

A useful project layout is:

- `source.md`: verified source content
- `prompt_logs.md`: request history and taste cues
- `generate.js`: main PptxGenJS generator
- `*.pptx`: exported deck
- `improvement_points.md`: critique and next-pass tasks
- `logo/`: logo assets
- `icons/`: rendered icons
- `bg_images/`: background images by slide type

## Design Moves That Read Well

- Use a display font for headings such as `Montserrat`.
- Use a readable body font with Japanese support such as `Noto Sans JP`.
- Reserve distinct backgrounds for title, TOC, section, content, and summary slides.
- Add section divider slides so the deck has rhythm.
- Keep logos off title and summary slides unless there is a strong reason to add them.
- Place the logo consistently, for example on the top-right of regular content slides.
- Replace emoji with **Lucide icons** — the default icon family. Download needed SVGs from [lucide.dev](https://lucide.dev/) or `lucide-static` npm package into the project `icons/` folder.
- Use accent lines, thin bars, or restrained color blocks instead of loud decoration.

## PptxGenJS Implementation Notes

- Define color, font, and layout constants at the top of the generator.
- Build helper functions for repeating components.
- Keep slide dimensions and margin rules explicit.
- Use reusable card components for feature grids and comparisons.
- Use page numbers or a small footer if the deck benefits from navigation cues.

## Review Checklist

When inspecting an exported deck, look for:

- flat backgrounds that need depth or texture
- weak title versus body contrast
- cramped content blocks near the slide edges
- repetitive slide layouts with no pacing
- icons that feel generic or mismatched
- brand accents that feel pasted on instead of integrated

## Prompting Patterns

When the user asks for an "osharena" or stylish deck, translate that into concrete design actions:

- choose a clear visual direction instead of defaulting to plain corporate slides
- define a font pairing before slide-level tweaks
- add at least one structural slide pattern beyond plain content slides
- use Lucide icons as deliberate visual assets instead of emoji
- run one critique pass after export and improve the generator instead of hand-waving quality

## Logo Prompt Pattern

If the deck needs a custom logo, write a separate prompt file rather than generating the image blindly. A good pattern is:

`generate an image and save it in <project>/logo/<name>.png`

Then leave one blank line and describe:

- the brand personality
- the visual style
- the shape language
- the preferred color direction
- the aspect ratio, usually `1:1` for a slide corner logo
