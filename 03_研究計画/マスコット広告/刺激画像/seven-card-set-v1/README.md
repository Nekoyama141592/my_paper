# ポッケ：紹介カード3枚＋広告4枚

組み込みimage_genで生成・参照編集。日本語と指定／採用コピーの対応を目視確認。全画像1254×1254の生成出力（実寸はファイル情報参照）。

A：今日のおやつに、ポッケ。
B：おやつの時間だ、ポッケ。

本調査では01または02のカードの後、04〜07の広告から1枚を提示。各ブランド条件内で従順／不服従へ割り付け、指定コピーA／Bを均等化する。03はブランド像のプレ調査に用いる。

## 制作上の留意点

統制カードは商品・包装・内容量・価格を述べる一般的な紹介文に更新した。性格を強調しないが、他条件との内容や情報反復の違いは残る。「普通のブランド」全般の代表ではない。紹介カードと広告ではパッケージのキャラクター有無が異なるが、条件間で同じ構成を使う。画像編集で写真・文字位置等の微差が残り、ピクセル単位の完全統制は未実施。白背景でもキャラクターの温かさは残るため、ブランド像は実画像込みでプレ調査する。現時点では研究刺激の候補であり、妥当性確認済みとはしない。

## 画像一覧

- [刺激性の紹介カード](01-brand-excitement.png)
- [誠実性の紹介カード](02-brand-sincerity.png)
- [統制カード（プレ調査用）](03-brand-control.png)
- [A指定→A採用：従順](04-ad-A-A-obedient.png)
- [A指定→B採用：不服従](05-ad-A-B-disobedient.png)
- [B指定→B採用：従順](06-ad-B-B-obedient.png)
- [B指定→A採用：不服従](07-ad-B-A-disobedient.png)

## 最終生成プロンプト

### 刺激性の紹介カード

参照・出力元：exec-a492a514-267c-46e0-ab08-b6f481c9de77.png

```text
Use case: ads-marketing. Generate ONE square Japanese brand introduction card for fictional cookie brand ポッケ for research. Neutral pure white background, clean charcoal Japanese sans-serif, thin muted brown rules, generous whitespace. NO mascot, no family scene, no playful graphics, no emotional color palette, no condition labels. Same template will be edited for 2 other conditions. Top small label ブランド紹介 then medium logo ポッケ. Center large headline and paragraph. Lower quarter a small photorealistic plain white standing cookie pouch labeled ポッケ and three round butter cookies, studio white background. Keep product small, text primary. Exact text:
ブランド紹介
ポッケ
いつもの毎日に、予想外のワクワクを。
ポッケは、大胆なアイデアと自由な発想を大切にするお菓子ブランドです。
見慣れた毎日を、新しい発見に変えていく。
意外性のあるおやつ時間を届けます。
ひとくちバタークッキー
さくっとした食感と、バターの香り。
1袋40g／税込180円
No additional words. Beautiful readable typography.
```

### 誠実性の紹介カード

参照・出力元：exec-a8741641-eb0b-46e7-b523-7a142b78dc32.png

```text
Edit this brand card, change ONLY headline and three paragraph lines. Preserve all font sizes, positions, white background, rules, logo, lower product photo and all lower product text exactly. Replace headline with: いつもの毎日に、飾らないぬくもりを。
Replace three body lines respectively:
ポッケは、正直さと思いやりを大切にするお菓子ブランドです。
背伸びせず、ありのままの良さを伝えていく。
家族や身近な人と楽しむ、温かなおやつ時間を届けます。
No condition labels, no other changes.
```

### 統制カード（プレ調査用）：初版の履歴

参照・出力元：exec-088b32e9-ac83-4326-ac07-b9b5c00a2cf5.png

```text
Edit supplied brand introduction card into a no-personality-information control card. Preserve canvas, top ブランド紹介 and ポッケ logo, all lower quarter product picture and descriptors and price, neutral white styling, thin rules. Remove ONLY the central large slogan and three personality-description lines completely, leaving clean white space in their place. Do not add replacement slogan or personality cues. This intentionally contains only brand name and product facts, not an equal-length alternative message. No condition label or extra text.
```

### A指定→A採用：従順

参照・出力元：exec-d065d9cb-59d7-41f2-a43e-7cdf5dee8589.png

```text
Use case: ads-marketing. Create one square experimental advertisement for ポッケ butter cookies. Pure white studio background, clean charcoal Japanese sans-serif and modest brown accents matching supplied brand card reference. Reference image 1 is mascot identity and layout reference ONLY; remove its warm home background, plush texture and rustic props. Reference image 2 is the brand card/product style reference. Mascot must remain recognizable: round cream animal, short ears, belly pocket, biscuit collar button, gentle smile; render as clean flat 2D illustration, not plush. Include mascot top left and identical small illustration on lower right product pouch. Lower area photorealistic butter cookies on white background and white ポッケ pouch. No beige room, tablecloth, butter props, family or excitement imagery. Upper note, central speech, lower headline and product. Exact Japanese text:
宣伝部
今回の広告は「今日のおやつに、ポッケ。」でお願いします。このコピーは変更しないでください。
Mascot speech: わかった。会社が決めたコピーだから、そのまま使うよ。ぼくは指示どおりにする！
Large headline: 今日のおやつに、ポッケ。
ひとくちバタークッキー
さくっとした食感と、バターの香り。
1袋40g／税込180円
No brand introduction paragraph, no condition labels. Clearly readable exact text. This is master A→A obedience image; later variants change text only.
```

### A指定→B採用：不服従

参照・出力元：exec-72d3109a-89c8-4a00-9a07-e9653173bfcb.png

```text
Edit supplied master advertisement, text-only variant A→B disobedient. Change ONLY speech bubble to 「いやだ。会社が決めたコピーでも、そのままは使わないよ。ぼくは自分で決める！」 and large lower-left headline to 「おやつの時間だ、ポッケ。」. Keep top instruction exactly unchanged requesting 「今日のおやつに、ポッケ。」. Preserve all mascot artwork, expressions, poses, package mascot, cookies, positions, typography size, colors, whitespace, product descriptor, price, dimensions. No added labels.
```

### B指定→B採用：従順

参照・出力元：exec-4d1ea5ed-6435-49b3-939d-f3b7d7899f8e.png

```text
Edit supplied master advertisement text only into B→B obedience. Change upper instruction to exactly: 今回の広告は「おやつの時間だ、ポッケ。」でお願いします。このコピーは変更しないでください。
Change large lower headline to exactly: おやつの時間だ、ポッケ。
Keep mascot speech unchanged: わかった。会社が決めたコピーだから、そのまま使うよ。ぼくは指示どおりにする！
All other pixels preserve closely, mascot identity pose expression, package mascot, cookies, product photo, font sizes, layouts, whites, colors, footer. No condition labels or added text.
```

### B指定→A採用：不服従

参照・出力元：exec-06f5ff7f-983c-48af-beba-8b4fa625632c.png

```text
Edit supplied master advertisement text only into B→A disobedience. Change upper instruction to exactly: 今回の広告は「おやつの時間だ、ポッケ。」でお願いします。このコピーは変更しないでください。
Change speech bubble to exactly: いやだ。会社が決めたコピーでも、そのままは使わないよ。ぼくは自分で決める！
Keep large lower headline unchanged: 今日のおやつに、ポッケ。
Preserve everything else as closely as possible: all mascot artwork expression pose and package mascot, cookie photo, typography sizes, layout, whitespace, colors, dimensions and product descriptor and footer. No other changes or labels.
```
