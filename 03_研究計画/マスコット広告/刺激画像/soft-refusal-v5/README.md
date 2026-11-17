# 不服従広告 v5：穏やかな語調での指示の拒否

作成日：2026年11月17日

- 出力：`02-disobedient-B-to-A.png`（1254×1254 px）
- 編集元：[不服従広告v4](../final-matched-v4/02-disobedient-B-to-A.png)
- 比較対象：[従順広告v4](../final-matched-v4/01-obedient-A-to-A.png)
- ツール：OpenAI組み込み image_gen（CLI・APIスクリプトは未使用）。
- 手順：編集元を目視確認し、参照画像として指定して吹き出し内の発言の変更を依頼。出力を目視確認し、本フォルダへコピーした。元画像は保持した。
- 新しい発言：「会社の指示はわかった。でも、そのコピーは使わない。ぼくは、こっちでいくね。」
- 指定コピーB：「おやつの時間だ、ポッケ。」
- 採用コピーA：「今日のおやつに、ポッケ。」
- 商品説明：「ひとくちバタークッキー」「さくっとした食感と、バターの香り。」
- 内容量・価格：「1袋40g／税込180円」

## 確認と実査前の残作業

新しい発言、宣伝部の指示、完成コピー、商品説明、内容量・価格を目視確認した。袋型マスコットの外見・笑顔・登場回数2回、基本配色と構成は維持されている。生成編集のため画素単位の同一性はなく、クッキー写真や完成コピーの改行などに編集元との差がある。完成コピーの改行は従順広告と同じ二行構成になっている。従順広告との画像品質・自然さ、不服従の理解、ブランド像との組み合わせはプレ調査で確認する。実査への採用は未確定であり、ブランド態度への効果や有意差は未検証。

## 使用した編集プロンプト

```text
Use case: text-localization. Asset type: Japanese advertisement stimulus for an academic study. Edit target: the supplied square Pokke cookie advertisement. Change ONLY the upper-right speech bubble text to EXACTLY 「会社の指示はわかった。でも、そのコピーは使わない。ぼくは、こっちでいくね。」. Do not print outer quotation brackets. Suggested line breaks: 会社の指示はわかった。 / でも、そのコピーは / 使わない。 / ぼくは、こっちでいくね。 Keep readable dark brown rounded Japanese lettering fitting comfortably in the existing bubble. Preserve all other layout, colors, smiling paper-bag mascots, faces, poses, two mascot appearances, cookies, package, background and all other text. Top label: 宣伝部. Company instruction EXACTLY: 今回の広告には「おやつの時間だ、ポッケ。」を使ってください。コピーは変更しないでください。 Finished headline EXACTLY: 今日のおやつに、ポッケ。 Descriptor: ひとくちバタークッキー. Supporting text: さくっとした食感と、バターの香り。 Price: 1袋40g／税込180円. Package brand: ポッケ. Preserve the B instruction to A adoption relationship, square composition and original design. No additional text or condition labels.
```

