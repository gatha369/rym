export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "88px 48px",
        borderTop: "0.5px solid rgba(0,0,0,0.1)",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <p className="section-label" style={{ marginBottom: "32px" }}>
        About
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "start",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "Noto Serif JP, serif",
              fontWeight: 200,
              fontSize: "clamp(28px, 3vw, 40px)",
              lineHeight: 1.6,
              color: "#1a1a1a",
              letterSpacing: "0.02em",
            }}
          >
            あらゆる「困りごと」に、
            <br />
            誠実に向き合う。
          </h2>
        </div>

        <div
          style={{
            fontFamily: "Noto Serif JP, serif",
            fontWeight: 300,
            fontSize: "15px",
            lineHeight: 2,
            color: "#666666",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <p>
            RYM（リム）は、長年にわたり夫婦で営んできた事業を統合する形で生まれたブランドです。R・Y・Mの3文字は、3人の子どもたちの名前の頭文字を表しています。
          </p>
          <p>
            念珠・仏具、デジタルサポート、システム開発——一見かけ離れたように見えるこれらの事業は、「伝統と未来の架け橋になりたい」という想いのもとに集まっています。
          </p>
          <p>
            古いものを壊して改革するのではなく、かといって変化を恐れて衰退する未来でもない。伝統の志を大切にしながら、知恵を絞って未来を切り拓く——それが私たちの願いです。
          </p>
          <p>
            人口減少、時代の変化、伝統文化の衰退。多くの個人や団体が直面するこれらの課題に、技術と問題解決の力をもって向き合っていきます。
          </p>
        </div>
      </div>
    </section>
  );
}
