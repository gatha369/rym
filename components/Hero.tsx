"use client";

export default function Hero() {
  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector("#services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      style={{
        position: "relative",
        minHeight: "calc(100vh - 60px)",
        display: "flex",
        alignItems: "center",
        padding: "88px 48px",
        overflow: "hidden",
      }}
    >
      {/* 装飾SVG（念珠モチーフ） */}
      <svg
        viewBox="0 0 400 400"
        style={{
          position: "absolute",
          right: "-40px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "520px",
          height: "520px",
          opacity: 0.055,
          pointerEvents: "none",
        }}
        fill="none"
        stroke="#1a1a1a"
        strokeWidth="0.5"
      >
        {/* 同心円 */}
        <circle cx="200" cy="200" r="180" />
        <circle cx="200" cy="200" r="140" />
        <circle cx="200" cy="200" r="100" />
        <circle cx="200" cy="200" r="60" />
        <circle cx="200" cy="200" r="20" />
        {/* 十字線 */}
        <line x1="200" y1="20" x2="200" y2="380" />
        <line x1="20" y1="200" x2="380" y2="200" />
        {/* 斜め線 */}
        <line x1="73" y1="73" x2="327" y2="327" />
        <line x1="327" y1="73" x2="73" y2="327" />
        {/* 外周の小円（念珠の玉） */}
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i / 16) * Math.PI * 2 - Math.PI / 2;
          const x = 200 + 180 * Math.cos(angle);
          const y = 200 + 180 * Math.sin(angle);
          return <circle key={i} cx={x} cy={y} r="6" fill="#1a1a1a" />;
        })}
      </svg>

      {/* コンテンツ */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "600px" }}>
        <p
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontWeight: 200,
            fontSize: "11px",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#999999",
            marginBottom: "32px",
          }}
        >
          Tradition &amp; Innovation
        </p>

        <h1
          style={{
            fontFamily: "Noto Serif JP, serif",
            fontWeight: 200,
            fontSize: "clamp(40px, 6vw, 72px)",
            lineHeight: 1.3,
            color: "#1a1a1a",
            marginBottom: "40px",
            letterSpacing: "0.02em",
          }}
        >
          伝統と革新を
          <br />
          つなぐ
        </h1>

        <p
          style={{
            fontFamily: "Noto Serif JP, serif",
            fontWeight: 300,
            fontSize: "15px",
            lineHeight: 2,
            color: "#666666",
            marginBottom: "48px",
          }}
        >
          念珠・仏具の伝統的な文化から、
          <br />
          デジタルの学びとシステムの力まで。
          <br />
          RYMは多様な事業を通じて、
          <br />
          人と技術の架け橋となります。
        </p>

        <a
          href="#services"
          onClick={handleScrollToServices}
          style={{
            display: "inline-block",
            padding: "14px 32px",
            border: "0.5px solid #1a1a1a",
            fontFamily: "DM Sans, sans-serif",
            fontWeight: 300,
            fontSize: "13px",
            letterSpacing: "0.05em",
            color: "#1a1a1a",
            textDecoration: "none",
            transition: "background 0.3s, color 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#1a1a1a";
            e.currentTarget.style.color = "#ffffff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#1a1a1a";
          }}
        >
          事業を見る →
        </a>
      </div>

      {/* 縦書き scroll */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          right: "48px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <span
          style={{
            writingMode: "vertical-rl",
            fontFamily: "DM Sans, sans-serif",
            fontWeight: 200,
            fontSize: "9px",
            letterSpacing: "0.3em",
            color: "#aaaaaa",
            textTransform: "uppercase",
          }}
        >
          scroll
        </span>
        <div
          style={{
            width: "0.5px",
            height: "48px",
            backgroundColor: "#aaaaaa",
          }}
        />
      </div>
    </section>
  );
}
