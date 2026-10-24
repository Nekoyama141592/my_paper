# ポッケ広告：おやつ袋マスコット版

広告刺激は、Aを指定した2条件に整理した。各参加者には広告1枚を提示する。

- **従順条件**：宣伝部がコピーAを指定し、ポッケくんがAを採用する。
- **不服従条件**：宣伝部がコピーAを指定し、ポッケくんがコピーBを採用する。

コピーA：「今日のおやつに、ポッケ。」  
コピーB：「おやつの時間だ、ポッケ。」

## 広告画像

- [A指定→A採用／従順](04-ad-A-A-obedient-paperbag.png)
- [A指定→B採用／不服従](05-ad-A-B-disobedient-paperbag.png)

どちらも上部に「おやつ袋」のポッケくん、下半分の左下に小さなポッケくんを配置し、商品パッケージにはキャラクターの代わりに1枚のクッキーを載せた。コピーと紹介順は条件間で対応させている。画像編集で生じる細部の微差は残る。左下配置の編集記録は [lower-left-mascot-edit.md](lower-left-mascot-edit.md)。

## 編集プロンプト

### A指定→A採用／従順

```text
Edit the advertisement using reference image 1 as the exact bag-mascot design reference. Replace BOTH existing bear-like mascots in the ad (the large mascot at upper left and the small character printed on the cookie package) with the paper-bag character from reference image 1. Make both the same cream paper bag body, folded-over top flap with one lifted corner, small simple eyes and mouth, little arms/feet, small brown p mark; character must read clearly as an anthropomorphic folded paper snack bag. Keep approximately the same positions and visual sizes. Remove animal ears, fur, round animal silhouette, collar and biscuit button. Preserve every other aspect of reference image 2 advertisement exactly, especially all Japanese text verbatim, speech bubble, instruction note, product headline, product photo, cookie/package shapes, colors, layout, proportions and canvas. The exact upper copy says 「今日のおやつに、ポッケ。」; mascot says 「わかった。会社が決めたコピーだから、そのまま使うよ。ぼくは指示どおりにする！」; headline says 「今日のおやつに、ポッケ。」. No other change.
```

### A指定→B採用／不服従

```text
Replace BOTH mascot illustrations (upper-left mascot and small mascot printed on product package) with the exact original cream paper snack-bag character in reference image 1: folded-over top flap with asymmetric lifted corner, slightly tapered soft rectangular bag body, tiny face, little arms and legs, lowercase p mark. Keep both in same location and approximate scale. Remove all animal-like features. Preserve all other design and text from reference image 2 exactly, including every Japanese character, product, package, cookies, typography, layout, color, background and dimensions. Do not change anything besides these two mascots. Exact required text configuration: speech bubble exactly 「いやだ。会社が決めたコピーでも、そのままは使わないよ。ぼくは自分で決める！」 and headline exactly 「おやつの時間だ、ポッケ。」
```

画像生成編集のため、文字・写真の細部に微差が残る可能性がある。実査前に刺激として確認する。
