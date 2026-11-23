# ドットジェイピー熊本企業支部 ホームページ

GitHub Pages で公開している、支部の公式サイトです（1ページ構成）。

- 公開URL：https://sohgonoguchi0803-spec.github.io/dotjp-kumamoto/
- 更新は かめきち（Claude）に頼む想定です。

## ファイル

| ファイル | 中身 |
|---|---|
| `index.html` | ページの文章とリンク（合説の日程、メンバー、問い合わせ先など） |
| `styles.css` | デザイン（白ベース＋黒と赤） |
| `app.js` | スマホのメニュー、合説の「次回／終了」表示の自動切り替え |
| `assets/members/` | メンバーの写真（自己紹介画像の切り抜き素材を縮小したもの） |
| `assets/photos/` | 過去の合同説明会の写真 |
| `assets/og.png` | LINEなどでURLを送ったときに出る画像 |

## よくある更新

- **合説の日程を変える**：`index.html` の `<ol class="slots">` の中の `<li class="slot" data-date="YYYY-MM-DD">` を書き換える。過ぎた回は自動で「終了」になり、いちばん近い回に「次回」が付く。
- **申込先を変える**：合説は `https://forms.gle/xZubgpPHNpe9b5Ay6`、プレキャリは `https://line.me/ti/p/9gQTiUs10u` をまとめて置き換える。
- **正式公開する**：`index.html` の `<meta name="robots" content="noindex, nofollow">` の行を消すと、検索結果に出るようになる。

## 情報の出どころ（2026年11月23日時点）

- 合説の日程・時間・会場：申込フォーム（Googleフォーム）の記載
- プレキャリの内容：Instagram投稿「プレキャリ × 自己分析」のキャプション
- 団体紹介：ドットジェイピー公式サイト、58期 熊本企業支部の事業計画書
- メンバー：自己紹介画像の素材とプロフィール原文
- 参加者の声・写真：合同説明会ご提案資料（過去の開催）
