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

function App() {
  const { activeIndex, activeSection, activeTheme, scrollToSection } =
    useActiveSection(navigableSections);

  return (
    <div
      data-theme={activeTheme}
      className="theme-surface min-h-dvh selection:bg-[#5757B8]/20 selection:text-[#171717]"
    >
      <CustomCursor activeTheme={activeTheme} />

      <Navibar activeSection={activeSection} onNavigate={scrollToSection} />

      <SectionIndicator
        sections={navigableSections}
        activeIndex={activeIndex}
        onSelectSection={scrollToSection}
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
