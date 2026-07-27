import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Logo from "assets/logo.png";
import { useGSAP } from "@gsap/react";
import { HiMenu, HiMoon, HiSun } from "react-icons/hi";
import SideBar from "./SideBar";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#proficiencies" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Platforms", href: "#other-platforms" },
];

const Header = ({ timeline, isDark, onThemeToggle }) => {
  const headerRef = useRef(null);
  const [showSidePanel, setShowSidePanel] = useState(false);
  const [activeSection, setActiveSection] = useState("profile");

  useEffect(() => {
    const sections = ["profile", ...navItems.map((item) => item.href.slice(1)), "contacts"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useGSAP(() => {
    const logo = headerRef.current?.querySelector(".site-brand");
    const links = headerRef.current?.querySelectorAll(".nav-link");
    const menuButton = headerRef.current?.querySelector(".menu-icon");
    const animationTargets = [logo, ...Array.from(links || []), menuButton].filter(Boolean);

    if (animationTargets.length) {
      timeline.from(animationTargets, { y: -20, opacity: 0, delay: 0.45, duration: 0.45, stagger: 0.08 });
    }
  }, { scope: headerRef, dependencies: [timeline] });

  return (
    <Box ref={headerRef} component="header" className="site-header">
      <Box className="header-link-container">
        <a className="site-brand" href="#profile" aria-label="Ravi Kumar home">
          <img src={Logo} alt="Ravi Kumar logo" />
          <span className="site-brand__text">
            <strong>Ravi Kumar</strong>
            <small>AI Engineer</small>
          </span>
        </a>

        <Box component="nav" className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => <a className={`nav-link ${activeSection === item.href.slice(1) ? "nav-link--active" : ""}`} href={item.href} key={item.href}>{item.label}</a>)}
        </Box>

        <button type="button" className="header-theme-toggle" onClick={onThemeToggle} aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"} title={isDark ? "Switch to light mode" : "Switch to dark mode"}>
          {isDark ? <HiSun /> : <HiMoon />}
        </button>
        <a className={`header-contact-link nav-link ${activeSection === "contacts" ? "nav-link--active" : ""}`} href="#contacts">Let&apos;s Talk</a>
        <button type="button" className="menu-icon" onClick={() => setShowSidePanel(true)} aria-label="Open navigation menu" aria-expanded={showSidePanel}>
          <HiMenu />
        </button>
      </Box>

      <SideBar showSidePanel={showSidePanel} setShowSidePanel={setShowSidePanel} />
    </Box>
  );
};

export default Header;
