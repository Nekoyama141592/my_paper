---
design_name: "Academic Slide Image Style"
version: "1.1"
purpose: "卒論・研究計画発表向けのスライド画像を、他セッションでも一貫した見た目で生成する"
format: "16:9 landscape"
language: "Japanese"
tone: "clean, academic, modern, trustworthy"
---

# DESIGN.md

## 1. Design Goal

このデザインは、大学の卒論・研究計画発表に使える、読みやすく信頼感のあるスライド画像を生成するためのスタイルガイドである。

主な目的は以下の3点。

- 研究内容を一目で理解できるようにする
- 学術的でありながら、古くさくない印象にする
- 画像生成AIに渡しても、毎回似た品質・構成・配色になるようにする

---

## 2. Visual Identity

### Keywords

- clean
- academic
- modern university presentation
- business research proposal
- minimal infographic
- readable Japanese typography
- navy and cyan accents
- white background
- generous spacing

### Avoid (Non-Goals)

- 暗い背景
- 紫・ベージュ・茶色中心の配色
- 過度なグラデーション
- 写真っぽい人物
- SNSロゴや実在ブランドロゴ
- 小さすぎる文字
- 長文の詰め込み
- 装飾過多
- 誤字のある日本語
- 生成AIっぽい不自然な文字
- 派手な広告バナー風のデザイン
- 実在サービスのUIを模倣する表現

---

## 3. Canvas

- Aspect ratio: 16:9
- Recommended size: 1792 × 1024 or similar landscape
- Safe margin: 5% from all edges
- Slide count indicator: optional, bottom-right only
- Never place slide numbers, page numbers, or progress indicators in the top-right corner.
- The top-right corner must remain empty whitespace unless it is part of the main slide content.
- Background: pure white (`#FFFFFF`) or very light blue-white

---

## 4. Color Tokens

```yaml
colors:
  background: "#FFFFFF"
  surface: "#F3F8FD"
  surface_soft: "#EAF4FB"
  navy: "#08245C"
  navy_dark: "#041A44"
  cyan: "#08A9D6"
  cyan_soft: "#DDF4FA"
  border: "#B9DFF0"
  text_primary: "#08245C"
  text_secondary: "#2B3A55"
  gray: "#6B7280"
```

### Color Rules

- 背景は基本 `#FFFFFF`
- 見出しやメインの文字はネイビー（`#08245C`）
- 強調語、矢印、アイコン、アクセントラインにはシアン（`#08A9D6`）
- カード背景には薄いブルー（`surface` や `surface_soft`）
- 1スライド内で使う色は3色程度に抑える

---

## 5. Typography & Japanese Text Rules

### Font Tokens

```yaml
typography:
  title:
    weight: bold
    color: navy
    size: very large
  heading:
    weight: bold
    color: navy
    size: large
  body:
    weight: medium
    color: text_primary
    size: readable
  note:
    weight: regular
    color: text_secondary
    size: small but readable
```

### Japanese Text Rules

- 日本語は可読性を最優先し、太めのゴシック体（clean Japanese sans-serif）を使用する。
- 1スライドあたり主要テキストは最大5〜7行とし、長文は避けて短いフレーズに分解する。
- 日本語の誤字を避けるため、画像生成プロンプトでは「Text verbatim」を明示し、「Japanese text must be clean and readable」と指定する。
- 引用符は `“ ”` よりも日本語では `「 」` を優先する。

### Japanese Copy Tone (文章表現のルール)

スライドに含める文章（コピー）は、以下のトーン＆マナーに統一する。

- **簡潔**: 一目で意図が伝わる長さにする。
- **学術的**: 「〜である」「〜を検証する」といった客観的な表現を用いる。
- **断定しすぎない**: まだ検証前の仮説段階では「〜の可能性」「〜に影響を与えるか」といった表現を使う。
- **口語表現は控える**: 発表でスライドとして見せるのに適したフォーマルな表現にする。

* **良い例**: `「AI音声のフラットさが説得意図を弱める可能性」`
* **避けるべき例**: `「AI音声は絶対にステマ感を下げる」`

---

## 6. Layout Patterns

### Title Slide
**用途**: 表紙・研究テーマ紹介
- **レイアウト**: 左側に大きくメインタイトル、右側にサブタイトルやキーフレーズ、下部または側面にシンプルなアイコンを配置する。余白を広く取る。
- **テキスト例**:
  ```text
  「SNS上の口コミ風広告におけるAI音声の効果」
  「商業的意図の知覚・広告信頼性・購買意向に着目して」
  「AI音声 × UGC風広告 × Z世代」
  ```

### Three-Card Slide
**用途**: 背景・理論・比較など複数要素の並列
- **レイアウト**: 上部にタイトル、中央に横3列（または縦3段）のカードを配置。各カードにはアイコン＋見出し＋短い説明文を入れる。下部に要約メッセージ（Highlight Bar）を配置する。

### Flow Model Slide
**用途**: 研究モデル・因果モデル・分析モデル
- **レイアウト**: 左から右への因果関係フロー。要素は角丸カードに入れ、太い矢印でつなぐ。効果の方向性を `↓` (負の影響) や `↑` (正の影響) で示す。下部に1行の説明を入れる。
- **テキスト例**:
  ```text
  「AI音声」 → 「商業的意図の知覚 ↓」 → 「広告信頼性 ↑」 → 「購買意向 ↑」
  ```

### Hypothesis Slide
**用途**: H1〜H5などの仮説の整理
- **レイアウト**: 上部左にタイトル、その下に仮説カードを縦に並べる。左側に大きく「H1」「H2」などのラベルを置き、右側に仮説文を配置する。

### Method Slide
**用途**: 実験デザイン・手続きの説明
- **レイアウト**: 2つの実験条件カード（条件A vs 条件B）を左右に配置。中央または下部に「制御変数（同じ条件にする要素）」を明記し、下部に手順フローを配置する。
- **テキスト例**:
  ```text
  「条件A: 人間の声による口コミ・Vlog風広告」
  「条件B: AI音声による口コミ・Vlog風広告」
  「※同じ映像・同じ台本・同じ字幕・同じ尺（音声のみを操作）」
  ```

### Measurement Slide
**用途**: アンケート項目・測定変数の整理
- **レイアウト**: 4〜6個の変数カードをグリッド状（2x2 または 2x3）に配置。各カードにはアイコン＋変数名＋測定項目の具体例（スラッシュ区切り）を入れる。
- **テキスト例**:
  ```text
  「商業的意図: 広告っぽい／案件のようだ」
  「広告信頼性: 信頼できる／誇張が少ない」
  「購買意向: 試したい／詳しく調べたい」
  ```

---

## 7. Component Tokens

```yaml
components:
  card:
    background: surface
    border: 1px solid border
    radius: 12px
    shadow: subtle or none
    padding: generous

  highlight_bar:
    background: cyan_soft
    border: 1px solid cyan
    text_color: navy
    radius: 8px

  title_marker:
    shape: vertical line
    color: cyan
    width: 6px

  slide_number:
    background: navy
    text_color: white
    position: bottom-right only
    forbidden_position: top-right
```

### Slide Number Rules

- **右上にはページ数・スライド番号・進行表示を絶対に配置しない。**
- ページ数を入れる場合は、必ず右下に小さく控えめに配置する。
- 右上に `1/10`、`Slide 1`、`p.1`、丸数字などの番号表現を置くことは禁止する。
- 画像生成AIへの指示では、必ず `No slide number or page number in the top-right corner.` を含める。

---

## 8. Icon Style

アイコンは、以下のルールに従ってシンプルなものを使用する。

### 推奨モチーフ
- 音声波形 (speech waveform)
- スマートフォン (smartphone video)
- 盾・チェックマーク (shield/check)
- 天秤 (balance scale)
- ショッピングカート (shopping cart)
- グラフ (chart)
- クリップボード (clipboard)
- ユーザーグループ (people/group)
- ロボットヘッド (robot head)
- メガホン (megaphone)

### アイコンルール
- 線画またはフラットなアイコンを使用する（フラットな塗りまたはネイビーの線＋シアンの塗り）。
- 複雑なイラストや、実在する人物の写真は避ける。
- 実在するSNS（TikTok, Instagram, YouTubeなど）の公式ロゴは許可がない限り使用しない。

---

## 9. Image Generation Prompt Template

スライド画像を生成する際は、以下のテンプレートを使用する。

```text
Use case: productivity-visual
Asset type: Japanese academic presentation slide, 16:9 landscape, slide {n} of {total}

Primary request:
Create a clean Japanese academic presentation slide about {topic}.

Style/medium:
clean modern university presentation, white background, navy and cyan accent, minimal infographic, readable Japanese typography, professional.

Composition/framing:
{layout pattern}. Use generous margins, clear hierarchy, and simple icons.

Text (verbatim, must be accurate):
「{title}」
「{line_1}」
「{line_2}」
「{line_3}」
「{line_4}」

Constraints:
Japanese typography must be clean and readable. Use only the listed text. 16:9 slide. No watermark. No fake logos. No photorealistic people. No slide number or page number in the top-right corner.

Avoid:
misspelled Japanese, tiny text, dense paragraphs, dark background, excessive decoration, top-right slide numbers, top-right page numbers.
```

### Example Prompt (研究モデルスライドの場合)

```text
Use case: productivity-visual
Asset type: Japanese academic presentation slide, 16:9 landscape, slide 5 of 10

Primary request:
Create a slide showing the research model as a causal flow diagram.

Style/medium:
clean academic infographic, white background, deep navy text, cyan highlights, simple arrows, rounded rectangles, flat line icons.

Composition/framing:
Left-to-right causal model with five nodes. Use a downward arrow for commercial intent and upward arrows for trust and purchase intention. Add a short message strip at the bottom.

Text (verbatim, must be accurate):
「研究モデル」
「AI音声」
「商業的意図の知覚 ↓」
「情報の中立性 ↑」
「広告信頼性 ↑」
「購買意向 ↑」
`「AI音声は“売り込まれている感じ”を弱め、信頼を通じて購買意向に影響する」`

Constraints:
Japanese text must be clean and readable. 16:9 slide. No watermark. Minimal slide. Use only the listed Japanese text. No slide number or page number in the top-right corner.

Avoid:
misspelled Japanese, extra labels, dense text, dark background, top-right slide numbers, top-right page numbers.
```

---

## 10. Recommended 10-Slide Structure & YAML

スライド一式（10枚）を作成する際の標準的な構成は以下の通りである。

### スライド構成一覧

| スライド番号 | タイトル (英語/日本語) | レイアウトパターン | 目的・役割 |
| :---: | :--- | :--- | :--- |
| 1 | 表紙 | Title Slide | 研究テーマ、発表者情報、キーワードの提示 |
| 2 | 研究背景 | Three-Card Slide | SNS広告とAI音声を取り巻く背景・現状の説明 |
| 3 | Research Question | (Central Question Box) | 本研究が解決を目指す核心的な問いの提示 |
| 4 | 理論的枠組み | Three-Card Slide | 説得知識モデル(PKM)、広告信頼性、UGC風広告の解説 |
| 5 | 研究モデル | Flow Model Slide | 変数間の因果関係（媒介プロセス）を視覚的に図示 |
| 6 | 仮説一覧 | Hypothesis Slide | 研究モデルに基づく仮説（H1〜H5）の整理 |
| 7 | 実験デザイン | Method Slide | 被験者に提示する2つの条件比較と実験手続きの説明 |
| 8 | 測定項目 | Measurement Slide | アンケートで用いる主要な測定変数と質問項目の例示 |
| 9 | 分析計画 | Method / Grid Slide | 媒介分析、t検定、サンプルサイズ設計などの分析手法 |
| 10 | まとめとスケジュール | Three-Card / Flow Slide | 本研究の貢献度、今後の予定（タイムライン） |

### YAML形式の構成定義

```yaml
slides:
  - title: "表紙"
    layout: "title slide"
  - title: "研究背景"
    layout: "three-card slide"
  - title: "Research Question"
    layout: "central question box"
  - title: "理論的枠組み"
    layout: "three-column theory cards"
  - title: "研究モデル"
    layout: "left-to-right causal flow"
  - title: "仮説"
    layout: "stacked hypothesis cards"
  - title: "実験デザイン"
    layout: "two condition cards + procedure flow"
  - title: "測定項目"
    layout: "variable card grid"
  - title: "分析方法"
    layout: "analysis steps + mediation model"
  - title: "まとめ・今後の進め方"
    layout: "takeaway cards + timeline"
```

---

## 11. Quality Checklist & Final Design Principle

### Quality Checklist (生成後確認事項)
- [ ] 日本語のフォントが綺麗で、誤字脱字や文字化けがないか
- [ ] スライドタイトルが非常に大きく、十分な余白（マージン）が確保されているか
- [ ] 1枚につき1つの明確なメッセージ（One Slide, One Message）に絞られているか
- [ ] 配色が「白背景」「ネイビー」「シアン」で統一され、余計なグラデーションがないか
- [ ] テキスト量が多すぎず、箇条書きやカードに適切に整理されているか
- [ ] アイコンがシンプルで、スライドの文脈（音声、SNS、信頼等）に合致しているか
- [ ] 実在するブランド（TikTok、Instagramなど）のロゴが勝手に使われていないか
- [ ] 右上にページ数・スライド番号・進行表示が入っていないか
- [ ] 10枚のスライド全体を並べた時に、一貫したデザインシステムが感じられるか

### Final Design Principle (最終デザイン原則)
このデザインシステムにおいて最も重要なのは、豪華な装飾ではなく**「研究内容の見通しやすさ（Clarity）」**である。
スライドを目にした瞬間に、**「何を研究し、なぜそれが面白く、どう検証し、どう分析するのか」**が直感的に伝わる状態を理想とする。
