import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "RYM systems | 業務改善・システム開発 - RYM",
  description:
    "中小企業・寺院・NPOの業務改善をシステム開発で支援。GAS・AppSheetによる自動化からオーダーメイドWebアプリまで。初期費用なし・月額サブスク型。北海道江別市。",
};

function AutomationIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="4" stroke="#1a1a1a" strokeWidth="0.8" />
      <path
        d="M14 2C7.373 2 2 7.373 2 14s5.373 12 12 12"
        stroke="#1a1a1a"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M14 26c6.627 0 12-5.373 12-12S20.627 2 14 2"
        stroke="#1a1a1a"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeDasharray="2 2"
      />
      <path d="M20 2.5L23 5.5L20 8.5" stroke="#1a1a1a" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M10 8L4 14L10 20" stroke="#1a1a1a" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 8L24 14L18 20" stroke="#1a1a1a" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 6L12 22" stroke="#1a1a1a" strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  );
}

function TempleIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M14 3L4 9H24L14 3Z" stroke="#1a1a1a" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 9V22M22 9V22" stroke="#1a1a1a" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M10 14V22M18 14V22" stroke="#1a1a1a" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M3 22H25" stroke="#1a1a1a" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M10 14H18" stroke="#1a1a1a" strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  );
}

const services = [
  {
    icon: <AutomationIcon />,
    title: "業務改善・自動化",
    description:
      "紙・Excelで行っている業務をシステム化。\nGoogle Apps Script・AppSheetを活用した、\n現場が使いやすい仕組みを構築します。",
    tags: ["GAS", "AppSheet", "Googleスプレッドシート"],
  },
  {
    icon: <CodeIcon />,
    title: "システム開発・Webアプリ",
    description:
      "管理台帳・会計・名簿管理など、既製品では対応しにくい\n業務に合わせたオーダーメイドのWebシステムを開発します。",
    tags: ["Next.js", "React", "オーダーメイド対応"],
  },
  {
    icon: <TempleIcon />,
    title: "寺院・非営利団体向け支援",
    description:
      "檀家管理・会計・事務処理のデジタル化を、\n宗教法人・NPO・地域団体の実情に合わせてサポートします。",
    tags: ["寺院・宗教法人", "NPO", "地域団体"],
  },
];

const worksData = [
    {
    title: "企業向け　顧客管理アプリ",
    description:
      "Excelで管理していたデータを、長年見慣れてきた配列を活かして「壊れないしくみ」にすることができます。",
    status: "導入済み",
    statusClass: "text-green-700 bg-green-50 border border-green-200",
    tags: ["GAS", "appsheet","Googleスプレッドシート"],
  },
  {
    title: "地域団体向け　現金出納・会計システム",
    description:
      "現金での収支管理をデジタル化。月次・年次の集計・帳票出力まで対応。会計担当が複数人でも同時管理が可能。スマホアプリも同期するため、外出先でも付け忘れなく現金の管理ができます。",
    status: "導入済み",
    statusClass: "text-green-700 bg-green-50 border border-green-200",
    tags: ["GAS", "Googleスプレッドシート"],
  },
  {
    title: "水道工事会社　行政書類自動作成システム",
    description:
      "手作業で作成していた行政向け書類を自動生成。入力項目を記入するだけで提出用書類を出力。手打ち部分と併用しやすいように使いな入れたExcel方式で出力。",
    status: "開発中",
    statusClass: "text-amber-700 bg-amber-50 border border-amber-200",
    tags: ["Webアプリ", "Next.js", "データベース"],
  },
  {
    title: "寺院　檀家管理システム",
    description:
      "檀家情報・法事の管理をシステム化。名簿・施主情報の検索・更新・印刷に対応。",
    status: "開発中",
    statusClass: "text-amber-700 bg-amber-50 border border-amber-200",
    tags: ["Webアプリ", "Next.js", "データベース"],
  },
];

export default function WorksPage() {
  return (
    <>
      <Header />
      <main>
        {/* ページヘッダーセクション */}
        <section
          className="section-padding"
          style={{
            borderBottom: "0.5px solid rgba(0,0,0,0.1)",
            backgroundColor: "#f9f7f4",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <p className="section-label" style={{ marginBottom: "32px" }}>
              RYM systems
            </p>
            <h1
              style={{
                fontFamily: "Noto Serif JP, serif",
                fontWeight: 200,
                fontSize: "clamp(28px, 4vw, 48px)",
                color: "#1a1a1a",
                letterSpacing: "0.02em",
                marginBottom: "32px",
                lineHeight: 1.4,
              }}
            >
              業務改善・システム開発
            </h1>
            <p
              style={{
                fontFamily: "Noto Serif JP, serif",
                fontWeight: 300,
                fontSize: "15px",
                color: "#666666",
                lineHeight: 2,
                maxWidth: "560px",
                whiteSpace: "pre-line",
              }}
            >
              {`大手SIerには頼みにくい規模の業務課題に、現場に寄り添った仕組みで応えます。\n初期費用なし・月額サブスク型で、小さく始めて確実に改善できます。`}
            </p>
          </div>
        </section>

        {/* サービス内容セクション */}
        <section
          className="section-padding"
          style={{
            borderBottom: "0.5px solid rgba(0,0,0,0.1)",
            backgroundColor: "#f9f7f4",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <p className="section-label" style={{ marginBottom: "16px" }}>
              Services
            </p>
            <h2
              style={{
                fontFamily: "Noto Serif JP, serif",
                fontWeight: 200,
                fontSize: "clamp(22px, 3vw, 32px)",
                color: "#1a1a1a",
                letterSpacing: "0.02em",
                marginBottom: "56px",
              }}
            >
              サービス内容
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                border: "0.5px solid rgba(0,0,0,0.1)",
              }}
            >
              {services.map((service, i) => (
                <div
                  key={i}
                  className="works-service-card"
                  style={{
                    borderBottom:
                      i < services.length - 1
                        ? "0.5px solid rgba(0,0,0,0.1)"
                        : "none",
                  }}
                >
                  <div
                    className="works-service-icon"
                    style={{
                      flexShrink: 0,
                      width: "64px",
                      height: "64px",
                      border: "0.5px solid rgba(0,0,0,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#f9f7f4",
                    }}
                  >
                    {service.icon}
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3
                      style={{
                        fontFamily: "Noto Serif JP, serif",
                        fontWeight: 300,
                        fontSize: "18px",
                        color: "#1a1a1a",
                        letterSpacing: "0.02em",
                        marginBottom: "14px",
                        lineHeight: 1.5,
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "Noto Serif JP, serif",
                        fontWeight: 300,
                        fontSize: "14px",
                        color: "#666666",
                        lineHeight: 2,
                        whiteSpace: "pre-line",
                        marginBottom: "20px",
                      }}
                    >
                      {service.description}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-gray-200 text-gray-500 text-xs px-2 py-0.5 rounded"
                          style={{
                            fontFamily: "DM Sans, sans-serif",
                            fontWeight: 300,
                            letterSpacing: "0.03em",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* 導入実績セクション */}
        <section
          className="section-padding"
          style={{
            borderBottom: "0.5px solid rgba(0,0,0,0.1)",
            backgroundColor: "#f9f7f4",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <p className="section-label" style={{ marginBottom: "16px" }}>
              Works
            </p>
            <h2
              style={{
                fontFamily: "Noto Serif JP, serif",
                fontWeight: 200,
                fontSize: "clamp(22px, 3vw, 32px)",
                color: "#1a1a1a",
                letterSpacing: "0.02em",
                marginBottom: "56px",
              }}
            >
              導入実績
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                border: "0.5px solid rgba(0,0,0,0.1)",
              }}
            >
              {worksData.map((work, i) => (
                <div
                  key={i}
                  className="works-record-card"
                  style={{
                    borderBottom:
                      i < worksData.length - 1
                        ? "0.5px solid rgba(0,0,0,0.1)"
                        : "none",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: "16px",
                      marginBottom: "14px",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "Noto Serif JP, serif",
                        fontWeight: 300,
                        fontSize: "16px",
                        color: "#1a1a1a",
                        letterSpacing: "0.02em",
                        lineHeight: 1.6,
                      }}
                    >
                      {work.title}
                    </h3>
                    <span
                      className={work.statusClass}
                      style={{
                        fontFamily: "DM Sans, sans-serif",
                        fontWeight: 300,
                        fontSize: "11px",
                        letterSpacing: "0.03em",
                        padding: "2px 10px",
                        borderRadius: "999px",
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                      }}
                    >
                      {work.status}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: "Noto Serif JP, serif",
                      fontWeight: 300,
                      fontSize: "14px",
                      color: "#666666",
                      lineHeight: 2,
                      marginBottom: "20px",
                    }}
                  >
                    {work.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-gray-200 text-gray-500 text-xs px-2 py-0.5 rounded"
                        style={{
                          fontFamily: "DM Sans, sans-serif",
                          fontWeight: 300,
                          letterSpacing: "0.03em",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 料金セクション */}
        <section
          className="section-padding"
          style={{
            borderBottom: "0.5px solid rgba(0,0,0,0.1)",
            backgroundColor: "#f9f7f4",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <p className="section-label" style={{ marginBottom: "16px" }}>
              Pricing
            </p>
            <h2
              style={{
                fontFamily: "Noto Serif JP, serif",
                fontWeight: 200,
                fontSize: "clamp(22px, 3vw, 32px)",
                color: "#1a1a1a",
                letterSpacing: "0.02em",
                marginBottom: "32px",
              }}
            >
              料金について
            </h2>

            <span
              style={{
                display: "inline-block",
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 300,
                fontSize: "12px",
                letterSpacing: "0.05em",
                color: "#666666",
                backgroundColor: "rgba(0,0,0,0.04)",
                border: "0.5px solid rgba(0,0,0,0.1)",
                borderRadius: "999px",
                padding: "6px 18px",
                marginBottom: "32px",
              }}
            >
              ↻ 初期費用なし・月額サブスク型
            </span>

            <p
              style={{
                fontFamily: "Noto Serif JP, serif",
                fontWeight: 300,
                fontSize: "15px",
                color: "#666666",
                lineHeight: 2.2,
                maxWidth: "520px",
              }}
            >
              導入時の初期費用は不要です。月額費用のみでご利用いただけます。
              <br />
              システムの規模や機能に応じてご相談のうえ決定します。
              <br />
              まずはお気軽にご連絡ください。
            </p>
          </div>
        </section>

        {/* CTAセクション */}
        <section
          className="section-padding"
          style={{
            backgroundColor: "#f0ede8",
            borderBottom: "0.5px solid rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontFamily: "Noto Serif JP, serif",
                fontWeight: 200,
                fontSize: "clamp(22px, 3vw, 36px)",
                color: "#1a1a1a",
                letterSpacing: "0.02em",
                marginBottom: "20px",
                lineHeight: 1.6,
              }}
            >
              業務の課題、まずはご相談ください
            </h2>
            <p
              style={{
                fontFamily: "Noto Serif JP, serif",
                fontWeight: 300,
                fontSize: "14px",
                color: "#666666",
                marginBottom: "40px",
                lineHeight: 1.8,
              }}
            >
              「こんなことできる？」という段階でも歓迎です。
            </p>
            <Link href="/#contact" className="works-cta-btn">
              お問い合わせ →
            </Link>
          </div>
        </section>

        {/* トップへ戻るリンク */}
        <div
          className="section-padding"
          style={{
            backgroundColor: "#f9f7f4",
            borderBottom: "0.5px solid rgba(0,0,0,0.1)",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <Link href="/" className="works-back-link">
              ← トップへ戻る
            </Link>
          </div>
        </div>
      </main>
      <Footer />

      <style>{`
        .works-service-card {
          display: flex;
          align-items: flex-start;
          gap: 40px;
          padding: 40px 48px;
          transition: background 0.3s;
        }
        .works-service-card:hover {
          background: #ffffff;
        }
        .works-record-card {
          padding: 36px 48px;
          transition: background 0.3s;
        }
        .works-record-card:hover {
          background: #ffffff;
        }
        .works-cta-btn {
          display: inline-block;
          font-family: "DM Sans", sans-serif;
          font-weight: 300;
          font-size: 13px;
          letter-spacing: 0.08em;
          color: #1a1a1a;
          text-decoration: none;
          border: 0.5px solid rgba(0,0,0,0.3);
          padding: 14px 40px;
          transition: background 0.2s, color 0.2s;
        }
        .works-cta-btn:hover {
          background: #1a1a1a;
          color: #f9f7f4;
        }
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
        @media (max-width: 768px) {
          .works-service-card {
            gap: 24px;
            padding: 32px 24px;
          }
          .works-record-card {
            padding: 28px 24px;
          }
        }
        @media (max-width: 480px) {
          .works-service-card {
            flex-direction: column;
            gap: 20px;
            padding: 28px 20px;
          }
          .works-service-icon {
            width: 48px !important;
            height: 48px !important;
          }
          .works-record-card {
            padding: 24px 20px;
          }
        }
      `}</style>
    </>
  );
}
