function Footer() {
  return (
    <footer
      id="contact"
      data-section-id="contact"
      data-section-theme="contact"
      className="snap-section min-h-dvh pt-[var(--navbar-height)] bg-[#121214] text-[#F7F7F7] flex flex-col justify-between"
    >
      <div className="max-w-[1440px] w-full mx-auto flex-1 flex flex-col justify-between px-6 md:px-12 lg:px-16 py-14 md:py-20 gap-16">
        {/* Topo do Rodapé */}
        <div className="reveal-up lg:ml-[28%] my-auto">
          <div className="flex items-center gap-3 mb-8">
            <span
              aria-hidden="true"
              className="w-3 h-3 bg-[#F7F7F7] rounded-full inline-block"
            />
            <span className="text-xs uppercase tracking-[0.16em] text-[#9E9EA6]">
              Contato &bull; Disponível para oportunidades e projetos
            </span>
          </div>

          <h2 className="text-footer-headline max-w-3xl text-[#F7F7F7]">
            Vamos transformar ideias em soluções reais?
          </h2>
        </div>

        {/* Links de Contato e Direitos */}
        <div className="reveal-up reveal-delay-1 border-t border-white/15 pt-10 lg:ml-[28%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-meta-editorial">
          <div>
            <a
              href="mailto:edivarfilho16@gmail.com"
              className="group inline-flex items-center gap-1.5 text-[#F7F7F7] hover:text-[#8b9aff] transition-colors duration-300"
            >
              <span>Entre em contato</span>
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </a>

            <p className="text-[#9E9EA6] mt-1.5 text-sm break-all">
              edivarfilho16@gmail.com
            </p>
          </div>

          <div>
            <a
              href="https://www.linkedin.com/in/edivar-cruz-carvalho-filho-7121b7265"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-[#F7F7F7] hover:text-[#8b9aff] transition-colors duration-300"
            >
              <span>LinkedIn</span>
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </a>

            <p className="text-[#9E9EA6] mt-1.5 text-sm">
              Edivar Cruz
            </p>
          </div>

          <div>
            <a
              href="https://github.com/EdivarCr"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-[#F7F7F7] hover:text-[#8b9aff] transition-colors duration-300"
            >
              <span>GitHub</span>
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </a>

            <p className="text-[#9E9EA6] mt-1.5 text-sm">
              github.com/EdivarCr
            </p>
          </div>

          <div className="sm:text-right flex flex-col justify-between">
            <div>
              <a
                href="http://lattes.cnpq.br/6502231174315309"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center sm:justify-end gap-1.5 text-[#F7F7F7] hover:text-[#8b9aff] transition-colors duration-300"
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

            <p className="text-[#9E9EA6] mt-1.5 text-sm">
              © {new Date().getFullYear()} &bull; Quixadá, CE
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
