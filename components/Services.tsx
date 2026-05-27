"use client";

import Link from "next/link";

const services = [
  {
    number: "01",
    nameJa: "長岡念珠店",
    nameEn: "Nagaoka Nenju",
    description: "念珠・仏具の専門店。\n伝統の技と心を大切に、\n丁寧なご提案をいたします。",
    linkLabel: "サイトへ ↗",
    href: "http://nagaokanenju.com",
    external: true,
  },
  {
    number: "02",
    nameJa: "まなびライフ",
    nameEn: "Manabi Life",
    description: "PCサポート・個人レッスン・\nメディア制作を通じて、\nデジタルの力を身近に。",
    linkLabel: "サイトへ ↗",
    href: "http://manabi-life.net",
    external: true,
  },
  {
    number: "03",
    nameJa: "RYM systems",
    nameEn: "RYM Systems",
    description: "企業・寺院への業務改善コンサルティング・\nシステム開発。課題解決を、共に。",
    linkLabel: "実績を見る →",
    href: "/works/",
    external: false,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: "88px 48px",
        borderTop: "0.5px solid rgba(0,0,0,0.1)",
        backgroundColor: "#f9f7f4",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p className="section-label" style={{ marginBottom: "48px" }}>
          Services
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0",
            border: "0.5px solid rgba(0,0,0,0.1)",
          }}
        >
          {services.map((service, index) => (
            <div
              key={service.number}
              style={{
                padding: "40px 36px",
                borderRight:
                  index < services.length - 1
                    ? "0.5px solid rgba(0,0,0,0.1)"
                    : "none",
                transition: "background 0.3s",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "#ffffff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "transparent";
              }}
            >
              <span
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontWeight: 200,
                  fontSize: "11px",
                  letterSpacing: "0.3em",
                  color: "#aaaaaa",
                }}
              >
                {service.number}
              </span>

              <div>
                <h3
                  style={{
                    fontFamily: "Noto Serif JP, serif",
                    fontWeight: 300,
                    fontSize: "22px",
                    color: "#1a1a1a",
                    marginBottom: "6px",
                    letterSpacing: "0.02em",
                  }}
                >
                  {service.nameJa}
                </h3>
                <p
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontWeight: 200,
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    color: "#999999",
                  }}
                >
                  {service.nameEn}
                </p>
              </div>

              <p
                style={{
                  fontFamily: "Noto Serif JP, serif",
                  fontWeight: 300,
                  fontSize: "14px",
                  lineHeight: 2,
                  color: "#666666",
                  whiteSpace: "pre-line",
                  flex: 1,
                }}
              >
                {service.description}
              </p>

              {service.external ? (
                <a
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontWeight: 300,
                    fontSize: "12px",
                    letterSpacing: "0.05em",
                    color: "#1a1a1a",
                    textDecoration: "none",
                    borderBottom: "0.5px solid rgba(0,0,0,0.3)",
                    paddingBottom: "2px",
                    alignSelf: "flex-start",
                  }}
                >
                  {service.linkLabel}
                </a>
              ) : (
                <Link
                  href={service.href}
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontWeight: 300,
                    fontSize: "12px",
                    letterSpacing: "0.05em",
                    color: "#1a1a1a",
                    textDecoration: "none",
                    borderBottom: "0.5px solid rgba(0,0,0,0.3)",
                    paddingBottom: "2px",
                    alignSelf: "flex-start",
                  }}
                >
                  {service.linkLabel}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
