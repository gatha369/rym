"use client";

const currentYear = new Date().getFullYear();

const stats = [
  {
    value: currentYear - 2009,
    unit: "年",
    label: "長岡念珠店 創業からの年数",
  },
  {
    value: currentYear - 2021,
    unit: "年",
    label: "まなびライフ サービス提供年数",
  },
  {
    value: 3,
    unit: "事業",
    label: "RYMが展開する事業領域",
  },
];

export default function Numbers() {
  return (
    <section
      className="section-padding"
      style={{
        borderTop: "0.5px solid rgba(0,0,0,0.1)",
        backgroundColor: "#ffffff",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p className="section-label" style={{ marginBottom: "48px" }}>
          Numbers
        </p>

        <div className="numbers-grid">
          {stats.map((stat, index) => (
            <div key={index} className="numbers-grid-item">
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "8px",
                  marginBottom: "16px",
                }}
              >
                <span
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontWeight: 200,
                    fontSize: "56px",
                    color: "#1a1a1a",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontFamily: "Noto Serif JP, serif",
                    fontWeight: 300,
                    fontSize: "18px",
                    color: "#666666",
                  }}
                >
                  {stat.unit}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "Noto Serif JP, serif",
                  fontWeight: 300,
                  fontSize: "13px",
                  color: "#999999",
                  lineHeight: 1.8,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
