# Repository Guidelines

## Project Structure

This repository contains a Japanese undergraduate thesis on how mascot disobedience in advertising affects brand attitudes. Start with [README.md](README.md) for links to the manuscript and research plan.

- `01_参考資料/` holds literature reviews, prior theses, and the seminar writing guide, `how_to_write.pdf`.
- `02_テーマ検討/` records topic proposals and earlier decisions.
- `03_研究計画/マスコット広告/` holds Study1 and Study2 plans, Google Forms documentation, versioned stimuli in `刺激画像/`, and character assets in `キャラクター/`.
- `04_発表資料/` holds deck sources, assets, and exports. Follow the relevant style folder’s `DESIGN.md` and the deck’s README where available. The top-level `output/pdf/` holds a presentation PDF export.
- `05_卒論本文/マスコット/` holds the thesis draft.

## Local Preview and Build

- From a deck folder with a PNG gallery, run `open index.html` on macOS or open the file in a browser.
- Run `node render-stimuli.cjs` from the Digital Agency style 20-slide deck folder to rebuild stimulus slides 07–12. Check the script’s absolute paths to the research assets, Playwright, and Chrome first.
- The POP decks’ `generate.mjs` files export a `build` function for the Codex presentation runtime. Use the exported PowerPoint for a quick review.

## Writing and Naming

Write thesis prose in Japanese using the `である` style. Follow the seminar guide and consult `.agents/skills/ad-creative-thesis/SKILL.md` for research and writing references. Match the surrounding indentation in slide scripts. Use `YYYYMMDD_` for new dated research notes and keep version suffixes such as `-v5` on stimulus sets. Retain earlier versions that document research decisions.

## Verification

Run `node --check generate.mjs` or `node --check render-stimuli.cjs` in the relevant deck folder after editing a script. Open revised slides and check Japanese text, clipping, and image placement. Cross-check condition labels, question wording, and stimulus versions across the manuscript, form documentation, and slides. Label planned analyses as planned.

## Commits and Pull Requests

Use short, descriptive commit subjects. Recent documentation commits commonly use `docs:` followed by a Japanese summary. In pull requests, explain what changed, record the checks performed, and link the relevant issue or research note when available. Attach a preview for visual changes. Keep temporary files such as Word lock files (`~$*.docx`) out of commits.
