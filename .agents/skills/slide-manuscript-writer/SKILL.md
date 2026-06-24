---
name: slide-manuscript-writer
description: Automate the creation of speaker notes (manuscripts) from slide generation scripts or source documents. Extracts slide boundaries, titles, and text points to generate conversational, page-by-page Markdown scripts suitable for presentations.
---

# Slide Manuscript Writer

When a user requests to generate "manuscripts" (原稿) or speaker notes for slides, use this skill to extract the content from the slide deck (or its generating code) and turn it into a natural, conversational script formatted in Markdown. 

This workflow bridges the gap between raw slide code/text and human-friendly presentation scripts, making it easy to prepare for recording audio overviews or actual presentations.

## Workflow

1. **Locate the Source Files**
   Identify the slide files. These might be `.js` generator scripts (e.g., PptxGenJS), raw `.md` source documents, or other formats.
   
2. **Determine the Scale of the Task**
   - **Small Scale (1-3 files):** Directly read the source files, extract the key points, and use your LLM capabilities to write highly natural, conversational speaker notes via standard file writing.
   - **Large Scale (4+ files):** Writing them manually will consume too many tokens and take too long. Instead, write a temporary automation script (Python or Node.js) to parse the files, extract slide markers and text, and generate the Markdown scripts using template heuristics.

3. **Extracting Slide Content (For Automation Scripts)**
   When parsing `.js` slide generators or code, look for:
   - Slide boundary comments (e.g., `// S1 Title` or `// ── S1: Title ──`)
   - Text addition methods (e.g., `addText(...)`, `addSectionSlide(...)`)
   
   Extract these strings to understand what each slide is about and group them by the slide title.

4. **Generating the Script**
   Convert the extracted bullet points into conversational language. Use appropriate presentation phrasing based on the slide type. Example heuristics:
   - **Title Slide:** 「みなさん、こんにちは。このセッションでは『〇〇』について解説していきます。全体像をしっかり把握していきましょう。」
   - **TOC/Agenda:** 「本日のアジェンダです。主に〇〇や〇〇について順番に見ていきます。それぞれの項目について重要なポイントを押さえていきます。」
   - **Section Divider:** 「それでは、『〇〇』のセクションに入っていきましょう。」
   - **Content Slide:** 「続いて、『〇〇』について解説します。ここでの重要なポイントは〇〇です。特に重要な点について、さらに詳しく見ていきましょう。」
   - **Summary Slide:** 「最後に本日のまとめです。重要なポイントとして〇〇を確認しました。これらを念頭に置いて今後の学習に活かしてください。」

5. **Output Format**
   Save the scripts as `.md` files in the requested destination directory. Format them with page-by-page dividers so the user can easily read them alongside the slides:

   ```markdown
   # [Presentation Name] プレゼンテーション原稿

   ## S1: Title
   みなさん、こんにちは。...

   ## S2: TOC
   本日のアジェンダです。...
   ```

6. **Cleanup**
   If you wrote a temporary Python or Node.js script to generate the files at scale, ensure you delete the script after execution to keep the workspace clean.
