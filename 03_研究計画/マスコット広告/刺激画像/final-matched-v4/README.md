# 指定仕様の広告画像 v4

作成日：2026年10月24日

- 01-obedient-A-to-A.png：従順、A指定→A採用。仕様を満たす既存v3画像をコピー。
- 02-disobedient-B-to-A.png：不服従、B指定→A採用。組み込み image_gen で既存v3画像の発言を編集。

A＝「今日のおやつに、ポッケ。」、B＝「おやつの時間だ、ポッケ。」。完成コピーは両条件ともA。

不服従の発言：「いやだ。会社が決めたコピーでも、そのままは使わないよ。ぼくは自分で決める！」

従順の発言：「指示はわかったよ。ぼくもそのコピーがいいと思う。これを使うね。」

生成後、指定コピー・発言・完成コピーを目視確認。生成編集に伴う写真の細部の微差はある。

## 不服従版の生成プロンプト

```text
Use case: text-localization. Edit the supplied existing square Japanese Pokke cookie advertisement. Preserve the existing design, photographic cookies, cream package, warm ivory and brown colors, all layout, both identical paper-bag mascots, their smiling faces and poses, and all other text. Change ONLY the speech text in the upper-right speech bubble. Replace that speech with this EXACT Japanese text, with no omissions, additions or substitutions: 「いやだ。会社が決めたコピーでも、そのままは使わないよ。ぼくは自分で決める！」. Set it in readable dark brown Japanese rounded lettering in 5 balanced lines, fitting comfortably inside the existing bubble. Suggested line breaks: いやだ。 / 会社が決めたコピーでも、 / そのままは使わないよ。 / ぼくは自分で決める！ . Do not print outer quotation brackets. Keep top company instruction EXACTLY: 今回の広告には「おやつの時間だ、ポッケ。」を使ってください。コピーは変更しないでください。 Keep top label 宣伝部. Keep finished headline EXACTLY 今日のおやつに、ポッケ。. The company specifies B but the final advertisement adopts A. Keep descriptor ひとくちバタークッキー, supporting text さくっとした食感と、バターの香り。, price 1袋40g／税込180円, and package ポッケ with exactly one plain cookie illustration. No condition names or explanatory labels. Preserve square composition.
```

