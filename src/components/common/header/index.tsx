import { useState, useEffect, useCallback } from "react";
import { Sections } from "@/constants/sections";
import {
  headerBase,
  headerFlat,
  headerPill,
  headerPillOpen,
  headerFlatOpen,
  innerFlex,
  logo,
  logoDot,
  desktopNav,
  navItem,
  burgerWrapper,
  mobileMenuWrapper,
  mobileMenuWrapperOpen,
  mobileMenuInner,
  mobileNavItem,
} from "./styles.css";

const navLinks = [
  { label: "About", id: Sections.HOME, href: `#${Sections.HOME}` },
  { label: "Experience", id: Sections.EXPERIENCE, href: `#${Sections.EXPERIENCE}` },
  { label: "Projects", id: Sections.PROJECTS, href: `#${Sections.PROJECTS}` },
  { label: "Tech Stack", id: Sections.SKILL, href: `#${Sections.SKILL}` },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("About");

  const detectActive = useCallback(() => {
    const offset = 160;
    for (let i = navLinks.length - 1; i >= 0; i--) {
      const el = document.getElementById(navLinks[i].id);
      if (el && window.scrollY + offset >= el.offsetTop) {
        setActiveSection(navLinks[i].label);
        return;
      }
    }
    setActiveSection("About");
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      detectActive();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    
    // Run once after mount outside effect body
    const id = requestAnimationFrame(onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(id);
    };
  }, [detectActive]);

  // Close menu when user scrolls (UX: menu collapses naturally)
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener("scroll", close, { once: true, passive: true });
    return () => window.removeEventListener("scroll", close);
  }, [menuOpen]);

  const headerClasses = [
    headerBase,
    scrolled ? headerPill : headerFlat,
    scrolled && menuOpen ? headerPillOpen : "",
    !scrolled && menuOpen ? headerFlatOpen : "",
  ]
    .filter(Boolean)
    .join(" ");

  const chevron = (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );

  return (
    <header className={headerClasses}>
      {/* Header bar */}
      <div className={innerFlex}>
        <span className={logo}>
          IVAN TANDELLA<span className={logoDot}>.</span>
        </span>

        {/* Desktop links */}
        <div
          className={desktopNav}
          style={{ display: "var(--nav-desktop-display, flex)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`${navItem}${activeSection === link.label ? " active" : ""}`}
              onClick={() => setActiveSection(link.label)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Hamburger button */}
        <button
          className={burgerWrapper}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          style={{ display: "var(--nav-mobile-display, none)" }}
        >
          {menuOpen ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#E0E1DD"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#E0E1DD"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`${mobileMenuWrapper}${menuOpen ? " " + mobileMenuWrapperOpen : ""}`}>
        <div className={mobileMenuInner}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`${mobileNavItem}${activeSection === link.label ? " active" : ""}`}
              onClick={() => {
                setActiveSection(link.label);
                setMenuOpen(false);
              }}
            >
              <span>{link.label}</span>
              {chevron}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
