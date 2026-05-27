# RYM Webサイト 設計書

## 概要

| 項目 | 内容 |
|------|------|
| サイト名 | RYM（リム） |
| ドメイン | rym.co.jp |
| 運営者 | 合同会社長岡念珠店 |
| サイト形式 | ハブサイト（LP形式 + /works/ サブページ） |
| フレームワーク | Next.js（App Router） |
| スタイリング | Tailwind CSS |

---

## ディレクトリ構成

```
rym.co.jp/
├── app/
│   ├── page.tsx          # トップページ（LP）
│   ├── layout.tsx        # 共通レイアウト
│   ├── globals.css       # グローバルスタイル
│   └── works/
│       └── page.tsx      # 実績ページ（製作中）
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Profile.tsx
│   ├── History.tsx
│   ├── Numbers.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── public/
    └── images/
        └── prof.jpg      # 代表写真（800×800px）
```

---

## ページ構成

### rym.co.jp/（トップページ）

セクション順：

1. Header（固定ナビ）
2. Hero
3. About
4. Services
5. Profile
6. History
7. Numbers
8. Contact
9. Footer

### rym.co.jp/works/

- 「製作中」表示の1ページ
- ヘッダー・フッターは共通コンポーネントを使用

---

## デザイン仕様

### カラー

| 用途 | 値 |
|------|----|
| 背景 | `#f9f7f4`（オフホワイト） |
| テキスト（メイン） | `#1a1a1a` |
| テキスト（サブ） | `#666666` |
| テキスト（ミュート） | `#999999` |
| テキスト（薄） | `#aaaaaa` |
| ボーダー | `rgba(0,0,0,0.1)` |
| ホバー背景 | `#ffffff` |

### フォント

| 用途 | フォント |
|------|---------|
| 和文見出し | Noto Serif JP（weight: 200, 300） |
| ロゴ・ブランド名 | Shippori Mincho（weight: 400） |
| 欧文・UI | DM Sans（weight: 200, 300, 400） |

Google Fonts URL:
```
https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200;300;400&family=Shippori+Mincho:wght@400;500&family=DM+Sans:wght@200;300;400&display=swap
```

### 共通スタイルルール

- ボーダーはすべて `0.5px solid`
- セクション間のパディング: `padding: 88px 48px`
- セクションラベル（英字）: `font-size: 10px, letter-spacing: 0.3em, uppercase`
- カードホバー: `background: #ffffff`（トランジション 0.3s）
- ボタン: ボーダーのみ、ホバーで背景黒・文字白に反転

---

## セクション別仕様・コンテンツ

### 1. Header

- ロゴ：`RYM`（Shippori Mincho）
- ナビゲーション（スクロールリンク）：
  - RYMとは → `#about`
  - 事業紹介 → `#services`
  - 代表 → `#profile`
  - 沿革 → `#history`
  - お問い合わせ → `#contact`
- 挙動：`position: sticky; top: 0`

---

### 2. Hero

**英字サブタイトル（上部）**
```
Tradition & Innovation
```

**キャッチコピー（h1）**
```
伝統と革新を
つなぐ
```

**サブコピー**
```
念珠・仏具の伝統的な文化から、
デジタルの学びとシステムの力まで。
RYMは多様な事業を通じて、
人と技術の架け橋となります。
```

**CTAボタン**
```
事業を見る →（#services へスクロール）
```

**装飾**
- 右側に同心円＋十字線のSVG（念珠モチーフ）、opacity: 0.055
- 右下に縦書き「scroll」＋縦線

---

### 3. About（id="about"）

**セクションラベル**
```
About
```

**見出し（h2）**
```
あらゆる「困りごと」に、
誠実に向き合う。
```

**本文**
```
RYM（リム）は、長年にわたり夫婦で営んできた事業を統合する形で生まれたブランドです。R・Y・Mの3文字は、3人の子どもたちの名前の頭文字を表しています。

念珠・仏具、デジタルサポート、システム開発——一見かけ離れたように見えるこれらの事業は、「伝統と未来の架け橋になりたい」という想いのもとに集まっています。

古いものを壊して改革するのではなく、かといって変化を恐れて衰退する未来でもない。伝統の志を大切にしながら、知恵を絞って未来を切り拓く——それが私たちの願いです。

人口減少、時代の変化、伝統文化の衰退。多くの個人や団体が直面するこれらの課題に、技術と問題解決の力をもって向き合っていきます。
```

---

### 4. Services（id="services"）

**セクションラベル**
```
Services
```

**カード一覧（3カラムグリッド）**

#### カード01：長岡念珠店
```
番号：01
日本語名：長岡念珠店
英語名：Nagaoka Nenju
説明文：念珠・仏具の専門店。
        伝統の技と心を大切に、
        丁寧なご提案をいたします。
リンク：サイトへ ↗
URL：http://nagaokanenju.com（外部リンク、target="_blank"）
```

#### カード02：まなびライフ
```
番号：02
日本語名：まなびライフ
英語名：Manabi Life
説明文：PCサポート・個人レッスン・
        メディア制作を通じて、
        デジタルの力を身近に。
リンク：サイトへ ↗
URL：http://manabi-life.net（外部リンク、target="_blank"）
```

#### カード03：RYM systems
```
番号：03
日本語名：RYM systems
英語名：RYM Systems
説明文：企業・寺院への業務改善コンサルティング・
        システム開発。課題解決を、共に。
リンク：実績を見る →
URL：/works/（内部リンク）
```

---

### 5. Profile（id="profile"）

**セクションラベル**
```
Representative
```

**写真**
```
ファイル：/public/images/prof.jpg
サイズ：800×800px
表示サイズ：200×200px、border-radius: 2px
```

**氏名**
```
長岡 慶一郎
```

**肩書き**
```
合同会社長岡念珠店 代表 / RYM
```

**プロフィール本文**
```
北見工業大学卒業後、システム開発会社にてプログラマーとして従事。「もっと人と向き合える仕事がしたい」という想いから仏具店の営業職へ転身し、仏教への理解を深めながら自らの生き方を見つめ直す。2009年に長岡念珠店を開業し、以来夫婦で運営を続けてきました。

ITへの関心は途切れることなく、資格取得を重ねながら周囲のPCサポートに応じてきた経験から「まなびライフ」を、AIの進化が後押しする形で「RYM systems」を立ち上げ、現在に至ります。

保護司・民生委員・PTA会長など、地域のボランティア活動にも長年携わっています。
```

---

### 6. History（id="history"）

**セクションラベル**
```
History
```

**タイムライン（年表）**

| 年 | 出来事 |
|----|--------|
| 2009 | 個人事業主として**長岡念珠店**を開業 |
| 2017 | **合同会社長岡念珠店**として法人化 |
| 2021 | PCサポート・メディア制作事業**まなびライフ**を立ち上げ |
| 2026 | 企業・寺院向けシステム開発・コンサルティング事業**RYM systems**を新設 |
| 2026 | 統合ブランド**RYM（リム）**を確立、rym.co.jp 開設 |

**スタイル**
- 左ボーダー（縦線）＋年号・出来事のグリッドレイアウト
- 各行は `border-bottom: 0.5px`

---

### 7. Numbers

**セクションラベル**
```
Numbers
```

**3カラムグリッド（数字は開設年から自動計算）**

| 数値 | 単位 | ラベル |
|------|------|--------|
| `new Date().getFullYear() - 2009` | 年 | 長岡念珠店 創業からの年数 |
| `new Date().getFullYear() - 2021` | 年 | まなびライフ サービス提供年数 |
| 3 | 事業 | RYMが展開する事業領域 |

---

### 8. Contact（id="contact"）

**セクションラベル**
```
Contact
```

**見出し（h2）**
```
お気軽に
ご相談ください
```

**説明文**
```
各事業へのお問い合わせは、
下記フォームより承ります。
担当者よりご連絡いたします。

※ 現在、店舗での営業はしておりません。
ご来店を希望される場合は事前にご予約をお願いします。
```

**Googleフォーム埋め込み**
```html
<iframe
  src="https://docs.google.com/forms/d/e/1FAIpQLSfExlzrnTsPsUpTrK__MNYTgXMNwGH__R_TFcuGKFkSNMutrQ/viewform?embedded=true"
  width="640"
  height="972"
  frameborder="0"
  marginheight="0"
  marginwidth="0"
>
  読み込んでいます…
</iframe>
```

---

### 9. Footer

**ロゴ**
```
RYM（Shippori Mincho）
```

**住所・連絡先**
```
合同会社長岡念珠店
〒067-0065
北海道江別市ゆめみ野東町44－5
TEL: 011-389-6772
```

**リンク一覧**
```
長岡念珠店 ↗ → http://nagaokanenju.com（外部）
まなびライフ ↗ → http://manabi-life.net（外部）
RYM systems → /works/（内部）
```

**コピーライト**
```
© 2026 RYM / 合同会社長岡念珠店 All rights reserved.
```

---

## /works/ ページ仕様

```
表示内容：「製作中」
ヘッダー・フッター：共通コンポーネントを使用

見出し：RYM systems
サブテキスト：このページは現在製作中です。
              近日公開予定です。
戻るリンク：← トップへ戻る（/ へ内部リンク）
```

---

## 外部サービス・リソース

| サービス | 用途 | URL/情報 |
|---------|------|---------|
| Google Fonts | フォント配信 | 上記参照 |
| Googleフォーム | お問い合わせ | 上記iframe参照 |
| nagaokanenju.com | 外部リンク | http://nagaokanenju.com |
| manabi-life.net | 外部リンク | http://manabi-life.net |

---

## 画像ファイル

| ファイル名 | 用途 | 仕様 |
|-----------|------|------|
| `prof.jpg` | 代表プロフィール写真 | 800×800px、正方形 |

配置先：`/public/images/prof.jpg`

---

## メタ情報（SEO）

```
title：RYM（リム）| 伝統と革新をつなぐ
description：RYM（リム）は、長岡念珠店・まなびライフ・RYM systemsの3事業を展開するブランドです。念珠・仏具の伝統から、デジタルサポート、システム開発まで。北海道江別市。
og:image：（別途設定）
```

---

*このドキュメントはClaude Codeへの実装指示書として使用します。*
