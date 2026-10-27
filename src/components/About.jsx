import fotoEu from "../assets/FotoEu.jpg";
import fotoFundo from "../assets/FotoFundo.jpg";

function About() {
  return (
    <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:pl-14 lg:pr-24 xl:px-16 pt-8 sm:pt-10 md:pt-12 pb-8 md:pb-10">
      {/* Banner Panorâmico de Fundo (Mobile-First: mais alto proporcionalmente no celular) */}
      <div className="reveal-up relative w-full overflow-hidden rounded-2xl border border-[var(--current-border)] aspect-[16/8] sm:aspect-[21/7] lg:aspect-[24/7] bg-zinc-200">
        <img
          src={fotoFundo}
          alt="Vista panorâmica do campus da UFC Quixadá e dos monólitos de Quixadá, Ceará"
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent"
        />
        <span className="absolute bottom-2.5 right-3 sm:bottom-3 sm:right-4 text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-white/90 font-medium backdrop-blur-xs bg-black/30 px-2.5 sm:px-3 py-1 rounded-full">
          Quixadá, CE &bull; UFC
        </span>
      </div>

      {/* Grid Principal Sobre Mim */}
      <div className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-[28%_1fr] gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-start">
        {/* Coluna esquerda: Retrato (FotoEu) sobreposto ao banner + Identificação */}
        <div className="reveal-up space-y-4 sm:space-y-5">
          <div className="-mt-14 sm:-mt-20 md:-mt-24 relative z-10 inline-block">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 overflow-hidden rounded-2xl border-4 border-[var(--current-bg)] bg-white shadow-md">
              <img
                src={fotoEu}
                alt="Foto de perfil de Edivar Cruz"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--current-secondary)] mb-1.5 sm:mb-2 font-medium">
              Sobre mim
            </p>
            <h2 className="text-project-title text-[var(--current-text)]">
              Edivar Cruz
            </h2>
            <p className="mt-1 text-sm text-[var(--current-secondary)]">
              Quixadá, CE &bull; Engenharia de Software (UFC)
            </p>
          </div>
        </div>

        {/* Coluna direita: Apresentação editorial clara e acessível */}
        <div className="reveal-up reveal-delay-1 lg:border-l lg:border-[var(--current-border)] lg:pl-10 xl:pl-14 space-y-5 sm:space-y-6 max-w-3xl">
          <p className="text-project-title text-[var(--current-text)] leading-snug">
            Estudante de Engenharia de Software na UFC e pesquisador em
            Qualidade de Software e Inteligência Artificial.
          </p>

          <p className="text-body-editorial text-[var(--current-secondary)]">
            Tenho experiência prática na construção de APIs REST e sistemas em
            produção utilizando TypeScript, Node.js, NestJS, Python, FastAPI e
            PostgreSQL, atuando desde a modelagem de dados, autenticação segura
            (JWT) e testes automatizados até a integração com modelos de
            inteligência artificial. Atualmente também desenvolvo interfaces
            mobile e integrações Full Stack para o IFCE, unindo rigor técnico,
            metodologias ágeis e foco na resolução de problemas reais.
          </p>

          <div className="pt-5 sm:pt-6 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 border-t border-[var(--current-border)] text-meta-editorial">
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-[var(--current-secondary)]">
                Backend &amp; Full Stack
              </p>
              <p className="mt-1.5 sm:mt-2 text-[var(--current-text)]">
                Python, TypeScript, FastAPI, NestJS, React Native, Prisma,
                SQLAlchemy
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-[var(--current-secondary)]">
                Dados, Testes &amp; Cloud
              </p>
              <p className="mt-1.5 sm:mt-2 text-[var(--current-text)]">
                PostgreSQL, Supabase, Docker, AWS (EC2/S3), Pytest, Jest,
                Testcontainers
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-[var(--current-secondary)]">
                IA &amp; Metodologias
              </p>
              <p className="mt-1.5 sm:mt-2 text-[var(--current-text)]">
                Gemini API, Engenharia de Prompts, Reinforcement Learning, Scrum
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
