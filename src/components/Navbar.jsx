import React, { useState, useEffect } from "react";
import { Menu, X, Github, Mail } from "lucide-react";
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
    { name: "Introduction", href: "#introduction" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(5, 5, 5, 0.8)" : "transparent",
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
            fontSize: "1.5rem",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          MANGU<span style={{ color: "var(--color-primary)" }}>.DEV</span>
        </a>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: "none", gap: "2rem" }}>
          <style>{`@media (min-width: 768px) { .desktop-menu { display: flex !important; } .mobile-toggle { display: none !important; } }`}</style>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontSize: "0.9rem",
                fontWeight: "500",
                color: "var(--color-text-main)",
                opacity: 0.8,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = "var(--color-primary)";
                e.currentTarget.style.opacity = "1";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "var(--color-text-main)";
                e.currentTarget.style.opacity = "0.8";
              }}
            >
              {link.name.toUpperCase()}
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
            color: "white",
            cursor: "pointer",
          }}
        >
          <Menu size={28} />
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
                background: "rgba(0,0,0,0.8)",
                zIndex: 98,
              }}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                right: 0,
                width: "300px",
                background: "var(--color-surface)",
                padding: "2rem",
                zIndex: 99,
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                borderLeft: "1px solid var(--color-border)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  <X size={28} />
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                  marginTop: "2rem",
                }}
              >
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    style={{ fontSize: "1.2rem", fontWeight: "600" }}
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
