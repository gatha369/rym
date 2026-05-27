export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding"
      style={{ borderTop: "0.5px solid rgba(0,0,0,0.1)" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p className="section-label" style={{ marginBottom: "32px" }}>
          Contact
        </p>

        <div className="contact-grid">
          {/* 左: テキスト */}
          <div>
            <h2
              style={{
                fontFamily: "Noto Serif JP, serif",
                fontWeight: 200,
                fontSize: "clamp(24px, 3vw, 36px)",
                lineHeight: 1.7,
                color: "#1a1a1a",
                marginBottom: "32px",
                letterSpacing: "0.02em",
              }}
            >
              お気軽に
              <br />
              ご相談ください
            </h2>

            <div
              style={{
                fontFamily: "Noto Serif JP, serif",
                fontWeight: 300,
                fontSize: "14px",
                lineHeight: 2,
                color: "#666666",
              }}
            >
              <p style={{ marginBottom: "24px" }}>
                各事業へのお問い合わせは、
                <br />
                下記フォームより承ります。
                <br />
                担当者よりご連絡いたします。
              </p>
              <p
                style={{
                  fontSize: "13px",
                  color: "#999999",
                  borderTop: "0.5px solid rgba(0,0,0,0.1)",
                  paddingTop: "20px",
                }}
              >
                ※ 現在、店舗での営業はしておりません。
                <br />
                ご来店を希望される場合は事前にご予約をお願いします。
              </p>
            </div>
          </div>

          {/* 右: Googleフォーム */}
          <div>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfExlzrnTsPsUpTrK__MNYTgXMNwGH__R_TFcuGKFkSNMutrQ/viewform?embedded=true"
              width="640"
              height="972"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              style={{ width: "100%", border: "none" }}
            >
              読み込んでいます…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
