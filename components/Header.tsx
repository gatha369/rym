"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "RYMとは", href: "#about" },
  { label: "事業紹介", href: "#services" },
  { label: "代表", href: "#profile" },
  { label: "沿革", href: "#history" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setMobileOpen(false);
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
      <div className="header-inner">
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

        {/* Desktop nav */}
        <nav className="header-nav">
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

        {/* Hamburger button */}
        <button
          className="hamburger-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="メニュー"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile nav */}
      <nav className={`mobile-nav${mobileOpen ? " open" : ""}`}>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="mobile-nav-item"
            onClick={(e) => handleScroll(e, item.href)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
