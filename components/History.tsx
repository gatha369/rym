const historyItems = [
  { year: "2009", event: "個人事業主として長岡念珠店を開業", bold: "長岡念珠店" },
  { year: "2017", event: "合同会社長岡念珠店として法人化", bold: "合同会社長岡念珠店" },
  { year: "2021", event: "PCサポート・メディア制作事業まなびライフを立ち上げ", bold: "まなびライフ" },
  { year: "2026", event: "企業・寺院向けシステム開発・コンサルティング事業RYM systemsを新設", bold: "RYM systems" },
  { year: "2026", event: "統合ブランドRYM（リム）を確立、rym.co.jp 開設", bold: "RYM（リム）" },
];

function formatEvent(event: string, bold: string) {
  const parts = event.split(bold);
  return (
    <>
      {parts[0]}
      <strong style={{ fontWeight: 400, color: "#1a1a1a" }}>{bold}</strong>
      {parts[1]}
    </>
  );
}

export default function History() {
  return (
    <section
      id="history"
      style={{
        padding: "88px 48px",
        borderTop: "0.5px solid rgba(0,0,0,0.1)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p className="section-label" style={{ marginBottom: "48px" }}>
          History
        </p>

        <div
          style={{
            borderLeft: "0.5px solid rgba(0,0,0,0.15)",
            paddingLeft: "0",
          }}
        >
          {historyItems.map((item, index) => (
            <div
              key={index}
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr",
                gap: "40px",
                padding: "24px 0 24px 40px",
                borderBottom: "0.5px solid rgba(0,0,0,0.1)",
                alignItems: "center",
                marginLeft: "-0.5px",
                borderLeft: "0.5px solid rgba(0,0,0,0.15)",
              }}
            >
              <span
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontWeight: 200,
                  fontSize: "28px",
                  color: "#aaaaaa",
                  letterSpacing: "0.02em",
                }}
              >
                {item.year}
              </span>
              <p
                style={{
                  fontFamily: "Noto Serif JP, serif",
                  fontWeight: 300,
                  fontSize: "15px",
                  lineHeight: 1.8,
                  color: "#666666",
                }}
              >
                {formatEvent(item.event, item.bold)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
