import { useState, useEffect, useCallback } from "react";
import Navibar from "./components/Navibar.tsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import About from "./components/About.jsx";
import Conquist from "./components/Conquist.jsx";
import Footer from "./components/Footer.jsx";
import SectionIndicator from "./components/SectionIndicator.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import { navigableSections } from "./data/projects.js";
import { useActiveSection } from "./hooks/useActiveSection.js";

function getInitialColorMode() {
  if (typeof window === "undefined") return "light";
  const saved = window.localStorage.getItem("edivar-color-mode");
  if (saved === "dark" || saved === "light") return saved;
  return "light";
}

function App() {
  const [colorMode, setColorMode] = useState(getInitialColorMode);
  const { activeIndex, activeSection, activeTheme, scrollToSection } =
    useActiveSection(navigableSections);

  useEffect(() => {
    window.localStorage.setItem("edivar-color-mode", colorMode);
    document.documentElement.setAttribute("data-color-mode", colorMode);
  }, [colorMode]);

  const toggleColorMode = useCallback(() => {
    setColorMode((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  return (
    <div
      data-color-mode={colorMode}
      data-theme={activeTheme}
      className="theme-surface min-h-dvh selection:bg-[#5757B8]/25 selection:text-current"
    >
      <CustomCursor activeTheme={activeTheme} colorMode={colorMode} />

      <Navibar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        colorMode={colorMode}
        onToggleColorMode={toggleColorMode}
      />

      <SectionIndicator
        sections={navigableSections}
        activeIndex={activeIndex}
        onSelectSection={scrollToSection}
        colorMode={colorMode}
      />

      <main>
        <Hero />

        <Projects />

        <section
          id="about"
          data-section-id="about"
          data-section-theme="about"
          aria-label="Sobre mim e conquistas acadêmicas"
          className="snap-section min-h-dvh pt-[var(--navbar-height)] flex flex-col justify-center"
        >
          <About />
          <Conquist />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
