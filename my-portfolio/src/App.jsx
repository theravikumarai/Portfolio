import { useEffect, useLayoutEffect, useState } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Header from "./components/Header.jsx";
import Profile from "./components/Profile.jsx";
import About from "./components/About.jsx";
import Proficiencies from "./components/Proficiencies.jsx";
import Projects from "./components/Projects.jsx";
import Certifications from "./components/Certifications.jsx";
import OtherPlatform from "./components/OtherPlatform.jsx";
import Contacts from "./components/Contacts.jsx";

import gsap from "gsap";

function App() {
  const timeline = gsap.timeline();
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    return savedTheme ? savedTheme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useLayoutEffect(() => {
    // Timeline plays automatically in order
    // You can also add delay here if needed
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", isDark);
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <>
      <Header timeline={timeline} isDark={isDark} onThemeToggle={() => setIsDark((currentTheme) => !currentTheme)} />
      <Box as="main" className="main">
        <Profile timeline={timeline} />
        <About timeline={timeline} />
        <Proficiencies />
        <Projects />
        <Certifications />
        <OtherPlatform />
        <Contacts />
        <Box as="footer" className="site-footer">
          <Typography component="p" variant="subtitle1" className="section_text_p1">
            Copyright &copy; 2023 Ravi Kumar. All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default App;
