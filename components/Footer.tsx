"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="footer-padding"
      style={{
        borderTop: "0.5px solid rgba(0,0,0,0.1)",
        backgroundColor: "#f9f7f4",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="footer-grid">
          {/* ロゴ */}
          <div>
            <p
              style={{
                fontFamily: "Shippori Mincho, serif",
                fontWeight: 400,
                fontSize: "24px",
                color: "#1a1a1a",
                marginBottom: "16px",
                letterSpacing: "0.05em",
              }}
            >
              RYM
            </p>
            <p
              style={{
                fontFamily: "Noto Serif JP, serif",
                fontWeight: 300,
                fontSize: "12px",
                color: "#999999",
                lineHeight: 1.8,
              }}
            >
              合同会社長岡念珠店
            </p>
          </div>

          {/* 住所・連絡先 */}
          <div>
            <p
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 300,
                fontSize: "10px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#aaaaaa",
                marginBottom: "16px",
              }}
            >
              Contact
            </p>
            <address
              style={{
                fontStyle: "normal",
                fontFamily: "Noto Serif JP, serif",
                fontWeight: 300,
                fontSize: "13px",
                lineHeight: 2,
                color: "#666666",
              }}
            >
              〒067-0065
              <br />
              北海道江別市ゆめみ野東町44－5
              <br />
              TEL: 011-389-6772
            </address>
          </div>

          {/* リンク */}
          <div>
            <p
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 300,
                fontSize: "10px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#aaaaaa",
                marginBottom: "16px",
              }}
            >
              Services
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <a
                href="http://nagaokanenju.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "Noto Serif JP, serif",
                  fontWeight: 300,
                  fontSize: "13px",
                  color: "#666666",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#1a1a1a")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#666666")}
              >
                長岡念珠店 ↗
              </a>
              <a
                href="http://manabi-life.net"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "Noto Serif JP, serif",
                  fontWeight: 300,
                  fontSize: "13px",
                  color: "#666666",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#1a1a1a")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#666666")}
              >
                まなびライフ ↗
              </a>
              <Link
                href="/works/"
                style={{
                  fontFamily: "Noto Serif JP, serif",
                  fontWeight: 300,
                  fontSize: "13px",
                  color: "#666666",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#1a1a1a")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#666666")}
              >
                RYM systems
              </Link>
            </div>
          </div>
        </div>

        <p
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontWeight: 200,
            fontSize: "11px",
            color: "#aaaaaa",
            letterSpacing: "0.05em",
          }}
        >
          © 2026 RYM / 合同会社長岡念珠店 All rights reserved.
        </p>
      </div>
    </footer>
  );
}
