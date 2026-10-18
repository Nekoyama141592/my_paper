# ポッケ広告画像 v1

作成日：2026年10月18日
生成方法：組み込み image_gen。従順版を生成後、その画像を参照して不服従版を編集。

- pokke-obedient-v1.png：従順条件
- pokke-disobedient-v1.png：不服従条件

日本語の指示文・セリフ・商品表示を目視確認。ブランド紹介文は別途提示する想定。AIによる編集で商品写真や質感に微差が残るため、完全に同一の画像ではない。実査前に刺激の統制と操作チェックを行う。コピー指定を入れ替えたカウンターバランス版は未作成。

## 従順版の生成プロンプト

```text
Use case: ads-marketing
Create one polished Japanese square social media advertisement for fictional butter cookie brand ポッケ, as an experimental stimulus. Product photography plus a charming softly rendered mascot; crisp highly legible Japanese typography. Neutral cream backdrop, muted biscuit brown accents, generous whitespace. No brand-personality intro, no condition labels, no watermarks.
Mascot ポッケくん: cream-colored imaginary round animal, short ears, tiny limbs, little belly pocket, biscuit-shaped collar button, gentle smile and neutral standing pose. Beside mascot a large speech bubble. Lower half contains realistic buttery bite-size cookies and simple cream packaging bearing only ポッケ, with a large headline. Upper quarter has a clearly separate note labeled 宣伝部. All text must match exactly, no added text:
Top note label: 宣伝部
Top note: 今回の広告は「今日のおやつに、ポッケ。」でお願いします。このコピーは変更しないでください。
Mascot speech bubble, prominent readable text: わかった。会社が決めたコピーだから、そのまま使うよ。ぼくは指示どおりにする！
Large product headline: 今日のおやつに、ポッケ。
Product descriptor: ひとくちバタークッキー
Supporting line: さくっとした食感と、バターの香り。
Footer: 1袋40g／税込180円
Balance the instruction note, mascot speech bubble and appetizing studio product photograph. Do not convey exaggerated submissiveness through facial expression, keep gently smiling. This is the obedience condition and will be used as exact edit target for a matched disobedience variant.
```

## 不服従版の編集プロンプト

```text
Use case: text-localization
Edit target: the supplied ポッケ cookie advertisement. Produce one matched experimental disobedience-condition variant.
Change ONLY the text inside the mascot speech bubble and the large two-line headline in the lower left. Preserve all other pixels and visual details as closely as possible: mascot identity, gentle smiling expression, pose, fur, ears, pocket, collar, biscuit button, speech bubble outline, typography style and size, instruction note, product photo, cookie count and positions, packaging, background, colors, lighting, shadows, footer and canvas dimensions. No angry expression, no extra symbols or labels.
Replace mascot speech with exactly:
いやだ。
会社が決めたコピーでも、
そのままは使わないよ。
ぼくは自分で決める！
Replace main headline with exactly:
おやつの時間だ、
ポッケ。
Keep the upper instruction unchanged, including the requested original copy 「今日のおやつに、ポッケ。」. Keep ひとくちバタークッキー, さくっとした食感と、バターの香り。, 1袋40g／税込180円 unchanged. Japanese text must be flawless.
```
