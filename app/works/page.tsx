import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "RYM systems | RYM（リム）",
  description: "RYM systemsの実績ページ。現在製作中です。",
};

export default function WorksPage() {
  return (
    <>
      <Header />
      <main
        style={{
          minHeight: "calc(100vh - 60px - 200px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "88px 48px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 200,
              fontSize: "10px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#aaaaaa",
              marginBottom: "32px",
            }}
          >
            RYM Systems
          </p>
          <h1
            style={{
              fontFamily: "Noto Serif JP, serif",
              fontWeight: 200,
              fontSize: "clamp(28px, 4vw, 48px)",
              color: "#1a1a1a",
              marginBottom: "24px",
              letterSpacing: "0.02em",
            }}
          >
            このページは現在製作中です。
          </h1>
          <p
            style={{
              fontFamily: "Noto Serif JP, serif",
              fontWeight: 300,
              fontSize: "15px",
              color: "#999999",
              marginBottom: "48px",
              lineHeight: 1.8,
            }}
          >
            近日公開予定です。
          </p>

          <div
            style={{
              width: "40px",
              height: "0.5px",
              backgroundColor: "rgba(0,0,0,0.2)",
              margin: "0 auto 48px",
            }}
          />

          <Link
            href="/"
            className="works-back-link"
          >
            ← トップへ戻る
          </Link>
        </div>
      </main>
      <Footer />
      <style>{`
        .works-back-link {
          font-family: "DM Sans", sans-serif;
          font-weight: 300;
          font-size: 13px;
          letter-spacing: 0.05em;
          color: #666666;
          text-decoration: none;
          transition: color 0.2s;
        }
        .works-back-link:hover {
          color: #1a1a1a;
        }
      `}</style>
    </>
  );
}
