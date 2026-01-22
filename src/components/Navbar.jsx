import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "소개", href: "#introduction" },
    { name: "경력", href: "#experience" },
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
        background: scrolled ? "rgba(255, 255, 255, 0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "none",
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
        }}
      >
        <a
          href="#"
          style={{
            fontSize: "1.25rem",
            fontWeight: "700",
            letterSpacing: "-0.5px",
            color: "var(--color-text-main)",
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
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setIsOpen(true)}
          style={{
            background: "none",
            border: "none",
            color: "var(--color-text-main)",
            cursor: "pointer",
          }}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.2)",
                zIndex: 1001,
              }}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                right: 0,
                width: "280px",
                background: "var(--color-bg)",
                padding: "2rem",
                zIndex: 1002,
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                boxShadow: "-5px 0 15px rgba(0,0,0,0.05)"
              }}
            >
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--color-text-main)",
                    cursor: "pointer",
                  }}
                >
                  <X size={24} />
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                  marginTop: "1rem",
                }}
              >
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    style={{ fontSize: "1.1rem", fontWeight: "500", color: "var(--color-text-main)" }}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
