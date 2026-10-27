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
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
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

        {/* Links de Contato e Direitos (Mobile-First: 1 col -> 2 cols -> 4 cols) */}
        <div className="reveal-up reveal-delay-1 border-t border-white/15 pt-8 sm:pt-10 lg:ml-[28%] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 text-meta-editorial">
          <div>
            <a
              href="mailto:edivarfilho16@gmail.com"
              className="group py-1 inline-flex items-center gap-1.5 text-[#F7F7F7] hover:text-[#8b9aff] transition-colors duration-300"
            >
              <span>Entre em contato</span>
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </a>

            <p className="text-[#9E9EA6] mt-1 text-sm break-all">
              edivarfilho16@gmail.com
            </p>
          </div>

          <div>
            <a
              href="https://www.linkedin.com/in/edivar-cruz-carvalho-filho-7121b7265"
              target="_blank"
              rel="noopener noreferrer"
              className="group py-1 inline-flex items-center gap-1.5 text-[#F7F7F7] hover:text-[#8b9aff] transition-colors duration-300"
            >
              <span>LinkedIn</span>
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </a>

            <p className="text-[#9E9EA6] mt-1 text-sm">
              Edivar Cruz
            </p>
          </div>

          <div>
            <a
              href="https://github.com/EdivarCr"
              target="_blank"
              rel="noopener noreferrer"
              className="group py-1 inline-flex items-center gap-1.5 text-[#F7F7F7] hover:text-[#8b9aff] transition-colors duration-300"
            >
              <span>GitHub</span>
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </a>

            <p className="text-[#9E9EA6] mt-1 text-sm">
              github.com/EdivarCr
            </p>
          </div>

          <div className="xl:text-right flex flex-col justify-between">
            <div>
              <a
                href="http://lattes.cnpq.br/6502231174315309"
                target="_blank"
                rel="noopener noreferrer"
                className="group py-1 inline-flex items-center xl:justify-end gap-1.5 text-[#F7F7F7] hover:text-[#8b9aff] transition-colors duration-300"
              >
                <span>Currículo Lattes</span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  ↗
                </span>
              </a>
            </div>

            <p className="text-[#9E9EA6] mt-1 text-sm">
              © {new Date().getFullYear()} &bull; Quixadá, CE
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
