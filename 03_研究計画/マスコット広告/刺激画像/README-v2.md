# ポッケ広告 v2

組み込みimage_genで編集。下半分の商品パッケージに同じキャラクターを追加。v1を保存したまま別ファイルとして作成。

- pokke-obedient-v2.png
- pokke-disobedient-v2.png

両画像の文字とキャラクター追加を目視確認。生成編集による写真・質感の微差は残る。

## 従順版編集プロンプト

```text
Edit this advertisement only by adding the same cream plush mascot shown at top left onto the front of the cookie package in the LOWER RIGHT half of the ad. Replace the cookie illustration printed on the package below the ポッケ logo with a prominent full body picture of the identical mascot: round cream body, short ears, brown collar and biscuit button, belly pocket, small limbs, gentle smile. It should look like printed package artwork. Keep package logo readable. Keep foreground real cookies unchanged. Preserve all Japanese text verbatim, all layout, top mascot, speech bubble, photo, colors, lighting, canvas size. No other changes. This is the obedient condition with headline 今日のおやつに、ポッケ。 and speech わかった。会社が決めたコピーだから、そのまま使うよ。ぼくは指示どおりにする！
```

## 不服従版編集プロンプト

```text
Edit the provided advertisement into the matched disobedient condition. Change ONLY two text regions: mascot speech bubble to exactly 「いやだ。会社が決めたコピーでも、そのままは使わないよ。ぼくは自分で決める！」, with readable line breaks; and large headline to exactly 「おやつの時間だ、ポッケ。」 on two lines. Preserve everything else exactly including the instruction at top still requesting 今日のおやつに、ポッケ。, both mascot appearances (top left and printed on lower-right package), their expressions and poses, all cookies, packaging, lighting, cream colors, fonts, positions, canvas dimensions, descriptor ひとくちバタークッキー, supporting line さくっとした食感と、バターの香り。, footer 1袋40g／税込180円. No other changes.
```
