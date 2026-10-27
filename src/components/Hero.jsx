import { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaRegEnvelope,
  FaGraduationCap,
} from "react-icons/fa";

const frases = [
  "Desenvolvo soluções para problemas reais.",
  "Transformo ideias em produtos digitais.",
  "Construo aplicações web e APIs.",
];

const linksContatoHero = [
  {
    label: "Email",
    href: "mailto:edivarfilho16@gmail.com",
    Icon: FaRegEnvelope,
    external: false,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/edivar-cruz-carvalho-filho-7121b7265",
    Icon: FaLinkedin,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/EdivarCr",
    Icon: FaGithub,
    external: true,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/edivarcr/",
    Icon: FaInstagram,
    external: true,
  },
  {
    label: "Lattes",
    href: "http://lattes.cnpq.br/6502231174315309",
    Icon: FaGraduationCap,
    external: true,
  },
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
      className="snap-section min-h-dvh pt-[var(--navbar-height)] flex flex-col justify-between max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:pl-14 lg:pr-24 xl:px-16"
    >
      {/* Espaçador superior para equilibrar verticalmente em telas médias/grandes */}
      <div className="hidden md:block h-6 lg:h-8" aria-hidden="true" />

      {/* Conteúdo principal editorial (Mobile-First) */}
      <div className="my-auto py-8 sm:py-12 md:py-16 lg:ml-[10%] xl:ml-[18%] max-w-4xl">
        <p className="reveal-up text-xs sm:text-meta-editorial uppercase tracking-[0.14em] sm:tracking-[0.16em] text-[var(--current-secondary)] mb-4 sm:mb-5">
          Engenharia de Software (UFC) &bull; Backend, Full Stack &amp; IA
        </p>

        <h1 className="reveal-up reveal-delay-1 text-hero-greeting text-[var(--current-text)]">
          Olá, sou Edivar.
        </h1>

        <div
          className="reveal-up reveal-delay-2 mt-3 md:mt-4 min-h-[6.75rem] sm:min-h-[6.5rem] lg:min-h-[8.5rem] flex items-start"
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
      <div className="reveal-up reveal-delay-3 border-t border-[var(--current-border)] py-5 sm:py-6 md:py-8 flex flex-col sm:flex-row sm:items-end justify-between gap-5 sm:gap-6">
        <div className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-[0.14em] text-[var(--current-secondary)]">
            Contato
          </span>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-6 text-meta-editorial">
            {linksContatoHero.map(({ label, href, Icon, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group py-1 inline-flex items-center gap-2 text-[var(--current-text)] hover:text-[var(--accent)] transition-colors duration-300"
              >
                <Icon
                  aria-hidden="true"
                  className="w-4 h-4 text-[var(--current-secondary)] group-hover:text-[var(--accent)] transition-colors duration-300 shrink-0"
                />
                <span>{label}</span>
                <span
                  aria-hidden="true"
                  className="text-xs opacity-60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-8 text-meta-editorial text-[var(--current-secondary)]">
          <span>Quixadá, CE &bull; Brasil</span>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-[var(--current-text)] opacity-75 hover:opacity-100 transition-opacity py-1"
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
