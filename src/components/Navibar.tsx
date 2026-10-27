import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "#home", targetId: "home", group: "home" },
  { label: "Projetos", href: "#projects", targetId: "agil", group: "projects" },
  { label: "Sobre", href: "#about", targetId: "about", group: "about" },
  { label: "Contato", href: "#contact", targetId: "contact", group: "contact" },
];

const Navibar = ({
  activeSection,
  onNavigate,
  colorMode = "light",
  onToggleColorMode,
}) => {
  const [menuAberto, setMenuAberto] = useState(false);
  const isDarkMode = colorMode === "dark";
  const isDarkSurface = isDarkMode || activeSection?.theme === "contact";
  const activeGroup = activeSection?.navGroup || "home";

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuAberto(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleLinkClick = (event, item) => {
    setMenuAberto(false);
    if (onNavigate) {
      event.preventDefault();
      onNavigate(item.targetId);
      window.history.replaceState(null, "", item.href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 z-40 w-full h-[var(--navbar-height)] transition-colors duration-700 ${
        activeSection?.theme === "contact"
          ? "bg-[#121214]/85 text-[#F7F7F7]"
          : "bg-[var(--current-bg)]/85 text-[var(--current-text)]"
      } backdrop-blur-md`}
    >
      <div className="max-w-[1440px] mx-auto h-full px-6 md:px-12 lg:px-16 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, navItems[0])}
          className="inline-flex items-center gap-2.5 text-lg md:text-xl font-medium tracking-tight transition-opacity duration-300 hover:opacity-70"
        >
          <span
            aria-hidden="true"
            className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-semibold tracking-tighter transition-colors duration-700 ${
              isDarkSurface
                ? "bg-[#F7F7F7] text-[#121214]"
                : "bg-[#121214] text-[#F7F7F7]"
            }`}
          >
            E<span className="text-[#7C7CE0]">.</span>
          </span>
          <span>Edivar.Dev</span>
        </a>

        {/* Navegação Desktop + Alternador de Tema */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <nav aria-label="Navegação principal" className="flex items-center">
            <ul className="flex items-center gap-10 lg:gap-12">
              {navItems.map((item) => {
                const isActive = activeGroup === item.group;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item)}
                      aria-current={isActive ? "page" : undefined}
                      className={`relative py-1 text-[15px] tracking-wide transition-colors duration-300 ${
                        isActive
                          ? "font-medium opacity-100"
                          : "font-normal opacity-60 hover:opacity-100"
                      }`}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={`absolute left-0 -bottom-0.5 h-[1.5px] bg-current transition-all duration-300 ${
                          isActive ? "w-full opacity-100" : "w-0 opacity-0"
                        }`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Separador sutil */}
          <span
            aria-hidden="true"
            className="h-4 w-[1px] bg-current opacity-20"
          />

          {/* Botão de Alternância de Tema (Claro / Escuro) */}
          <button
            type="button"
            onClick={onToggleColorMode}
            aria-pressed={isDarkMode}
            aria-label={
              isDarkMode ? "Alternar para tema claro" : "Alternar para tema escuro"
            }
            title={isDarkMode ? "Mudar para modo claro" : "Mudar para modo escuro"}
            className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--current-border)] text-xs tracking-wide opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer"
          >
            {isDarkMode ? (
              <>
                <svg
                  aria-hidden="true"
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-45"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
                <span>Claro</span>
              </>
            ) : (
              <>
                <svg
                  aria-hidden="true"
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-rotate-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
                <span>Escuro</span>
              </>
            )}
          </button>
        </div>

        {/* Controles Mobile (Tema + Menu) */}
        <div className="md:hidden flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleColorMode}
            aria-pressed={isDarkMode}
            aria-label={
              isDarkMode ? "Alternar para tema claro" : "Alternar para tema escuro"
            }
            className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[var(--current-border)] opacity-85 hover:opacity-100 transition-opacity"
          >
            {isDarkMode ? (
              <svg
                aria-hidden="true"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <button
            type="button"
            onClick={() => setMenuAberto((aberto) => !aberto)}
            aria-expanded={menuAberto}
            aria-controls="mobile-menu"
            aria-label={
              menuAberto ? "Fechar menu de navegação" : "Abrir menu de navegação"
            }
            className="inline-flex items-center justify-center p-2 text-sm tracking-wide uppercase opacity-80 hover:opacity-100 transition-opacity"
          >
            <span className="sr-only">Menu</span>
            <div className="w-6 flex flex-col items-end gap-1.5">
              <span
                className={`block h-[1.5px] bg-current transition-all duration-300 ${
                  menuAberto ? "w-6 translate-y-[3.5px] rotate-45" : "w-6"
                }`}
              />
              <span
                className={`block h-[1.5px] bg-current transition-all duration-300 ${
                  menuAberto ? "w-6 -translate-y-[3.5px] -rotate-45" : "w-4"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <nav
        id="mobile-menu"
        aria-label="Navegação mobile"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isDarkSurface
            ? "bg-[#121214]/95 text-[#F7F7F7] border-b border-white/10"
            : "bg-[var(--current-bg)]/95 text-[var(--current-text)] border-b border-black/10"
        } backdrop-blur-md ${
          menuAberto
            ? "max-h-72 py-6 opacity-100"
            : "max-h-0 py-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="px-6 flex flex-col gap-4">
          {navItems.map((item) => {
            const isActive = activeGroup === item.group;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item)}
                  className={`block py-1.5 text-lg transition-opacity ${
                    isActive
                      ? "font-medium opacity-100"
                      : "opacity-65 hover:opacity-100"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navibar;
