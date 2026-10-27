import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaRegEnvelope,
  FaGraduationCap,
} from "react-icons/fa";

const canaisContato = [
  {
    label: "Email",
    subtitulo: "edivarfilho16@gmail.com",
    href: "mailto:edivarfilho16@gmail.com",
    Icon: FaRegEnvelope,
    external: false,
  },
  {
    label: "LinkedIn",
    subtitulo: "Edivar Cruz",
    href: "https://www.linkedin.com/in/edivar-cruz-carvalho-filho-7121b7265",
    Icon: FaLinkedin,
    external: true,
  },
  {
    label: "GitHub",
    subtitulo: "@EdivarCr",
    href: "https://github.com/EdivarCr",
    Icon: FaGithub,
    external: true,
  },
  {
    label: "Instagram",
    subtitulo: "@edivarcr",
    href: "https://www.instagram.com/edivarcr/",
    Icon: FaInstagram,
    external: true,
  },
  {
    label: "Currículo Lattes",
    subtitulo: "Plataforma CNPq",
    href: "http://lattes.cnpq.br/6502231174315309",
    Icon: FaGraduationCap,
    external: true,
  },
];

function Footer() {
  return (
    <footer
      id="contact"
      data-section-id="contact"
      data-section-theme="contact"
      className="snap-section min-h-dvh pt-[var(--navbar-height)] bg-[#121214] text-[#F7F7F7] flex flex-col justify-between"
    >
      <div className="max-w-[1440px] w-full mx-auto flex-1 flex flex-col justify-between px-5 sm:px-8 md:px-12 lg:pl-14 lg:pr-24 xl:px-16 py-12 sm:py-14 md:py-20 gap-12 sm:gap-16">
        {/* Topo do Rodapé */}
        <div className="reveal-up lg:ml-[28%] my-auto">
          <div
            iv className="flex items-center gap-3 mb-6 sm:mb-8">
            <span
              aria-hidden="true"
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#F7F7F7] rounded-full inline-block shrink-0"
            />
            <span className="text-xs uppercase tracking-[0.14em] sm:tracking-[0.16em] text-[#9E9EA6]">
              Contato &bull; Disponível para oportunidades e projetos
            </span>
          </div>

          <h2 className="text-footer-headline max-w-3xl text-[#F7F7F7]">
            Vamos transformar ideias em soluções reais?
          </h2>
        </div>

        {/* Grade de Canais de Contato + Barra de Direitos */}
        <div className="reveal-up reveal-delay-1 lg:ml-[28%] space-y-8 sm:space-y-10">
          <div className="border-t border-white/15 pt-8 sm:pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1.35fr_1fr_1fr_1fr_1.15fr] gap-6 sm:gap-8 text-meta-editorial">
            {canaisContato.map(({ label, subtitulo, href, Icon, external }) => (
              <div key={label} className="flex flex-col min-w-0">
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group py-1 inline-flex items-center gap-2 text-[#F7F7F7] hover:text-[#8b9aff] transition-colors duration-300 w-fit whitespace-nowrap"
                >
                  <Icon
                    aria-hidden="true"
                    className="w-4 h-4 text-[#9E9EA6] group-hover:text-[#8b9aff] transition-colors duration-300 shrink-0"
                  />
                  <span className="font-medium">{label}</span>
                  <span
                    aria-hidden="true"
                    className="text-xs opacity-60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    ↗
                  </span>
                </a>

                <p className="text-[#9E9EA6] mt-1 text-sm truncate" title={subtitulo}>
                  {subtitulo}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-[#9E9EA6]">
            <span>Edivar Cruz Carvalho Filho &bull; Edivar.Dev</span>
            <span>
              © {new Date().getFullYear()} &bull; Quixadá, CE — Brasil
            </span>
          </div>
        </div>
      </div>
    </footer >
  );
}

export default Footer;
