"use client";

import Link from "next/link";

const navItems = [
  { label: "RYMとは", href: "#about" },
  { label: "事業紹介", href: "#services" },
  { label: "代表", href: "#profile" },
  { label: "沿革", href: "#history" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Header() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "#f9f7f4",
        borderBottom: "0.5px solid rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 48px",
          height: "60px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "Shippori Mincho, serif",
            fontWeight: 400,
            fontSize: "20px",
            color: "#1a1a1a",
            textDecoration: "none",
            letterSpacing: "0.05em",
          }}
        >
          RYM
        </Link>
        <nav style={{ display: "flex", gap: "32px" }}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 300,
                fontSize: "13px",
                color: "#666666",
                textDecoration: "none",
                letterSpacing: "0.02em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1a1a1a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#666666")}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
