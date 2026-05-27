import Image from "next/image";

export default function Profile() {
  return (
    <section
      id="profile"
      className="section-padding"
      style={{ borderTop: "0.5px solid rgba(0,0,0,0.1)" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p className="section-label" style={{ marginBottom: "48px" }}>
          Representative
        </p>

        <div className="profile-grid">
          {/* 写真 */}
          <div>
            <Image
              src="/images/prof.jpg"
              alt="長岡 慶一郎"
              width={200}
              height={200}
              style={{
                borderRadius: "2px",
                objectFit: "cover",
                border: "0.5px solid rgba(0,0,0,0.1)",
              }}
            />
          </div>

          {/* テキスト */}
          <div>
            <h2
              style={{
                fontFamily: "Noto Serif JP, serif",
                fontWeight: 300,
                fontSize: "28px",
                color: "#1a1a1a",
                marginBottom: "8px",
                letterSpacing: "0.05em",
              }}
            >
              長岡 慶一郎
            </h2>
            <p
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 200,
                fontSize: "12px",
                letterSpacing: "0.05em",
                color: "#999999",
                marginBottom: "32px",
              }}
            >
              合同会社長岡念珠店 代表 / RYM
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <p
                style={{
                  fontFamily: "Noto Serif JP, serif",
                  fontWeight: 300,
                  fontSize: "15px",
                  lineHeight: 2,
                  color: "#666666",
                }}
              >
                北見工業大学卒業後、システム開発会社にてプログラマーとして従事。「もっと人と向き合える仕事がしたい」という想いから仏具店の営業職へ転身し、仏教への理解を深めながら自らの生き方を見つめ直す。2009年に長岡念珠店を開業し、以来夫婦で運営を続けてきました。
              </p>
              <p
                style={{
                  fontFamily: "Noto Serif JP, serif",
                  fontWeight: 300,
                  fontSize: "15px",
                  lineHeight: 2,
                  color: "#666666",
                }}
              >
                ITへの関心は途切れることなく、資格取得を重ねながら周囲のPCサポートに応じてきた経験から「まなびライフ」を、AIの進化が後押しする形で「RYM systems」を立ち上げ、現在に至ります。
              </p>
              <p
                style={{
                  fontFamily: "Noto Serif JP, serif",
                  fontWeight: 300,
                  fontSize: "15px",
                  lineHeight: 2,
                  color: "#666666",
                }}
              >
                保護司・民生委員・PTA会長など、地域のボランティア活動にも長年携わっています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
