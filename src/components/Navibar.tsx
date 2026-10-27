import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "#home", targetId: "home", group: "home" },
  { label: "Projetos", href: "#projects", targetId: "agil", group: "projects" },
  { label: "Sobre", href: "#about", targetId: "about", group: "about" },
  { label: "Contato", href: "#contact", targetId: "contact", group: "contact" },
];

const Navibar = ({ activeSection, onNavigate }) => {
  const [menuAberto, setMenuAberto] = useState(false);
  const isDarkTheme = activeSection?.theme === "contact";
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
        isDarkTheme
          ? "bg-[#121214]/85 text-[#F7F7F7]"
          : "bg-[var(--current-bg)]/85 text-[var(--current-text)]"
      } backdrop-blur-md`}
    >
      <div className="max-w-[1440px] mx-auto h-full px-6 md:px-12 lg:px-16 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, navItems[0])}
          className="text-lg md:text-xl font-medium tracking-tight transition-opacity duration-300 hover:opacity-70"
        >
          Edivar.Dev
        </a>

        {/* Navegação Desktop */}
        <nav aria-label="Navegação principal" className="hidden md:flex items-center">
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

        {/* Botão Menu Mobile */}
        <button
          type="button"
          onClick={() => setMenuAberto((aberto) => !aberto)}
          aria-expanded={menuAberto}
          aria-controls="mobile-menu"
          aria-label={menuAberto ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          className="md:hidden inline-flex items-center justify-center p-2 text-sm tracking-wide uppercase opacity-80 hover:opacity-100 transition-opacity"
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

      {/* Menu Mobile */}
      <nav
        id="mobile-menu"
        aria-label="Navegação mobile"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isDarkTheme
            ? "bg-[#121214]/95 text-[#F7F7F7] border-b border-white/10"
            : "bg-[var(--current-bg)]/95 text-[var(--current-text)] border-b border-black/10"
        } backdrop-blur-md ${
          menuAberto ? "max-h-72 py-6 opacity-100" : "max-h-0 py-0 opacity-0 pointer-events-none"
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
                    isActive ? "font-medium opacity-100" : "opacity-65 hover:opacity-100"
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
