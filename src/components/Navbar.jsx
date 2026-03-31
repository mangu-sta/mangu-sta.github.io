import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "소개", href: "#introduction" },
    { name: "기술Stack", href: "#skills" },
    { name: "프로젝트", href: "#portfolio" },
    { name: "연락처", href: "#contact" },
  ];

  return (

    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled || isOpen ? "var(--color-nav-bg, rgba(255, 255, 255, 0.9))" : "transparent",
        backdropFilter: scrolled || isOpen ? "blur(10px)" : "none",
        borderBottom: scrolled || isOpen ? "1px solid var(--color-border)" : "none",
        transition: "all 0.3s ease",
        height: "var(--nav-height)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          width: "100%",
        }}
      >
        <a
          href="#"
          style={{
            fontSize: "1.5rem",
            fontWeight: "800",
            letterSpacing: "-0.5px",
            color: "var(--color-text-main)",
            zIndex: 101, 
          }}
        >
          Mangu
        </a>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: "none", gap: "2.5rem" }}>
          <style>{`@media (min-width: 768px) { .desktop-menu { display: flex !important; } .mobile-toggle { display: none !important; } }`}</style>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontSize: "1rem",
                fontWeight: "500",
                color: "var(--color-text-muted)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = "var(--color-primary)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "var(--color-text-muted)";
              }}
            >
              {link.name}
            </a>
          ))}
          <button onClick={toggleTheme} style={{ background: 'none', border: 'none', color: 'var(--color-text-main)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" style={{ display: "flex", alignItems: "center", gap: "1rem", zIndex: 101 }}>
          <button onClick={toggleTheme} style={{ background: 'none', border: 'none', color: 'var(--color-text-main)', cursor: 'pointer', display: 'flex' }}>
            {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: "none",
              border: "none",
              color: "var(--color-text-main)",
              cursor: "pointer",
              display: 'flex'
            }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: "var(--color-nav-menu-bg, rgba(255, 255, 255, 0.95))",
              backdropFilter: "blur(10px)",
              borderBottom: "1px solid var(--color-border)",
              overflow: "hidden",
            }}
          >
            <div
              className="container"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                padding: "2.5rem 2rem",
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    const targetId = link.href.replace('#', '');
                    const element = document.getElementById(targetId);
                    if (element) {
                      setTimeout(() => {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  }}
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "500",
                    color: "var(--color-text-main)",
                    display: "block",
                    padding: "0.5rem 0",
                    cursor: "pointer",
                    textDecoration: "none"
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
    </nav>
  );
};

export default Navbar;
