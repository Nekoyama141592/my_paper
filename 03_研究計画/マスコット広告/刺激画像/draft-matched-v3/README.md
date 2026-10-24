# 草案対応広告 v3：完成コピー共通版

作成日：2026年10月24日

## 現行の実験仕様（2026年10月24日更新）

不服従の発言は「いやだ。会社が決めたコピーでも、そのままは使わないよ。ぼくは自分で決める！」とする。完成コピーは両条件ともA「今日のおやつに、ポッケ。」に統一する。従順はA指定→A採用、不服従はB「おやつの時間だ、ポッケ。」指定→A採用とする。従順の発言は「指示はわかったよ。ぼくもそのコピーがいいと思う。これを使うね。」を維持する。

今回は文書上の仕様のみの変更であり、画像は生成・編集していない。本フォルダの不服従画像は穏やかな発言の旧仕様である。一方、`attachment-edits-v2`の強い反抗表現の画像はA指定→B採用である。どちらも最新仕様の不服従広告としてそのまま使用しない。以下は既存v3画像の制作記録であり、最新仕様の画像の完成を意味しない。

## 保持する元の反抗表現

元の強い反抗表現「いやだ。会社が決めたコピーでも、そのままは使わないよ。ぼくは自分で決める！」の画像は、[旧版の不服従広告](../attachment-edits-v2/01-disobedient-lower-mascot.png)として元の場所に保持する。対応する[旧版の従順広告](../attachment-edits-v2/02-obedient-lower-mascot.png)も保持する。旧版はA指定→B採用で、今回のv3とは文言・採用コピーが異なる。

対象草案：`05_卒論本文/20261019_マスコットの企業への不服従表現_卒論草案_Study1まで.md`（2026年10月20日改訂仕様）。組み込み image_gen の画像編集で生成。旧版は保持。

- `01-obedient-A-to-A.png`：従順。A指定→A採用。
- `02-disobedient-B-to-A.png`：不服従。B指定→A採用。

A＝「今日のおやつに、ポッケ。」、B＝「おやつの時間だ、ポッケ。」。両広告で完成見出しはAを使用。会社の指示と吹き出しの発言を変更し、両条件で指示の理解と自分の意思を示す。袋型マスコットは上部と左下の2か所、商品パッケージには顔のないクッキー1枚を配置。

従順版を旧版の共通広告から編集し、その生成結果を基に不服従版を編集した。生成編集による写真・質感・配置の微差は残り得る。草案のプレ調査は未実施であり、実査使用前に操作の理解、文字の読みやすさ、自然さを確認する。ブランド紹介カードは今回の制作対象に含めない。

## 目視確認

2枚とも、宣伝部の指定コピー、発言、共通の完成コピー、商品名、説明文、価格を目視確認した。マスコットの登場回数・表情・ポーズと大枠の配置も対応している。写真の細部・質感には微差が残るため、文字以外がピクセル単位で同一の刺激ではない。

## 従順版プロンプト

```text
Use case: text-localization / ads-marketing. Edit the supplied existing Japanese cookie advertisement into the revised OBEDIENT research stimulus. Preserve its square canvas, warm ivory/brown palette, photographic cookies and cream package, brown typography, layout, large upper-left paper snack bag mascot and identical small lower-left mascot, neutral happy expressions, poses, brand mark p, and all product details. Change ONLY the company instruction text and mascot speech inside their existing panels. Preserve the lower finished advertisement unchanged, including headline 「今日のおやつに、ポッケ。」, descriptor 「ひとくちバタークッキー」, supporting text 「さくっとした食感と、バターの香り。」 and price 「1袋40g／税込180円」. Package displays ポッケ and one plain round cookie, no mascot on package. Top label stays 「宣伝部」. Replace instruction verbatim with 「今回の広告には『今日のおやつに、ポッケ。』を使ってください。コピーは変更しないでください。」 (use Japanese quotation marks 「」 instead of 『』 around the quoted slogan in actual design if needed). Replace mascot speech verbatim with 「指示はわかったよ。ぼくもそのコピーがいいと思う。これを使うね。」 Break speech into 3-4 readable balanced lines within the existing bubble, with generous white space. No additional explanatory labels such as condition names. High-quality Japanese text with exact characters. Keep the mascot face and pose unchanged; no angry expression. All non-text parts must match the input.
```

## 不服従版プロンプト

```text
undefined
```

