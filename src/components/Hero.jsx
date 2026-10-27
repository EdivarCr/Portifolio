import { useState, useEffect } from "react";

const frases = [
  "Desenvolvo soluções para problemas reais.",
  "Transformo ideias em produtos digitais.",
  "Construo aplicações web e APIs.",
];

function Hero() {
  const [fraseAtual, setFraseAtual] = useState(0);
  const [visivel, setVisivel] = useState(true);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return undefined;

    let timeoutId;

    const intervaloId = setInterval(() => {
      setVisivel(false);

      timeoutId = setTimeout(() => {
        setFraseAtual((atual) => (atual + 1) % frases.length);
        setVisivel(true);
      }, 480);
    }, 4480);

    return () => {
      clearInterval(intervaloId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section
      id="home"
      data-section-id="home"
      data-section-theme="home"
      className="snap-section min-h-dvh pt-[var(--navbar-height)] flex flex-col justify-between max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16"
    >
      {/* Espaçador superior para equilibrar verticalmente */}
      <div className="hidden md:block h-8" aria-hidden="true" />

      {/* Conteúdo principal editorial */}
      <div className="my-auto py-12 md:py-16 lg:ml-[18%] max-w-4xl">
        <p className="reveal-up text-meta-editorial uppercase tracking-[0.16em] text-[var(--current-secondary)] mb-5">
          Engenharia de Software (UFC) &bull; Backend, Full Stack &amp; IA
        </p>

        <h1 className="reveal-up reveal-delay-1 text-hero-greeting text-[var(--current-text)]">
          Olá, sou Edivar.
        </h1>

        <div
          className="reveal-up reveal-delay-2 mt-3 md:mt-4 min-h-[5.5rem] sm:min-h-[6.5rem] lg:min-h-[8.5rem] flex items-start"
          aria-live="polite"
        >
          <p
            style={{
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            className={`text-hero-phrase text-[var(--current-secondary)] transition-all duration-[480ms] ${
              visivel
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
            }`}
          >
            {frases[fraseAtual]}
          </p>
        </div>
      </div>

      {/* Informações inferiores da primeira tela */}
      <div className="reveal-up reveal-delay-3 border-t border-[var(--current-border)] py-6 md:py-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-[0.14em] text-[var(--current-secondary)]">
            Contato
          </span>

          <div className="flex flex-wrap items-center gap-6 text-meta-editorial">
            <a
              href="mailto:edivarfilho16@gmail.com"
              className="group inline-flex items-center gap-1.5 text-[var(--current-text)] hover:text-[var(--accent)] transition-colors duration-300"
            >
              <span>Email</span>
              <span
                aria-hidden="true"
                className="text-xs opacity-60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/edivar-cruz-carvalho-filho-7121b7265"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-[var(--current-text)] hover:text-[var(--accent)] transition-colors duration-300"
            >
              <span>LinkedIn</span>
              <span
                aria-hidden="true"
                className="text-xs opacity-60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </a>

            <a
              href="https://github.com/EdivarCr"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-[var(--current-text)] hover:text-[var(--accent)] transition-colors duration-300"
            >
              <span>GitHub</span>
              <span
                aria-hidden="true"
                className="text-xs opacity-60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </a>

            <a
              href="http://lattes.cnpq.br/6502231174315309"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-[var(--current-text)] hover:text-[var(--accent)] transition-colors duration-300"
            >
              <span>Lattes</span>
              <span
                aria-hidden="true"
                className="text-xs opacity-60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-8 text-meta-editorial text-[var(--current-secondary)]">
          <span>Quixadá, CE &bull; Brasil</span>
          <a
            href="#projects"
            className="hidden sm:inline-flex items-center gap-2 text-[var(--current-text)] opacity-75 hover:opacity-100 transition-opacity"
          >
            <span>Explorar projetos</span>
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
