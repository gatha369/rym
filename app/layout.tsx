import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RYM（リム）| 伝統と革新をつなぐ",
  description:
    "RYM（リム）は、長岡念珠店・まなびライフ・RYM systemsの3事業を展開するブランドです。念珠・仏具の伝統から、デジタルサポート、システム開発まで。北海道江別市。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200;300;400&family=Shippori+Mincho:wght@400;500&family=DM+Sans:wght@200;300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
