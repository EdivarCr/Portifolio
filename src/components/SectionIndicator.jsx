function SectionIndicator({ sections = [], activeIndex = 0, onSelectSection }) {
  if (!sections.length) return null;

  const currentNumber = String(activeIndex + 1).padStart(2, "0");
  const totalNumber = String(sections.length).padStart(2, "0");
  const activeSection = sections[activeIndex] || sections[0];
  const isDarkTheme = activeSection?.theme === "contact";

  return (
    <aside
      aria-label="Indicador de seções da página"
      className={`hidden lg:flex fixed right-5 xl:right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-4 select-none transition-colors duration-700 ${
        isDarkTheme ? "text-[#F7F7F7]" : "text-[var(--current-text)]"
      }`}
    >
      {/* Contador numérico dinâmico (ex: 02 / 06) */}
      <div
        aria-live="polite"
        className="font-mono text-xs tracking-[0.14em] opacity-75 tabular-nums"
      >
        <span>{currentNumber}</span>
        <span className="mx-1 opacity-45">/</span>
        <span className="opacity-55">{totalNumber}</span>
      </div>

      {/* Marcadores verticais interativos */}
      <nav aria-label="Atalhos das seções">
        <ul className="flex flex-col items-end gap-2.5">
          {sections.map((section, index) => {
            const isActive = index === activeIndex;
            const formattedIdx = String(index + 1).padStart(2, "0");

            return (
              <li key={section.id}>
                <button
                  type="button"
                  onClick={() => onSelectSection?.(section.id)}
                  aria-label={`Ir para seção ${formattedIdx}: ${section.label}`}
                  aria-current={isActive ? "true" : undefined}
                  title={section.label}
                  className="group py-1 px-1 flex items-center gap-2.5 cursor-pointer"
                >
                  <span
                    className={`text-[11px] tracking-wide transition-all duration-300 ${
                      isActive
                        ? "opacity-85 translate-x-0"
                        : "opacity-0 translate-x-1 group-hover:opacity-65 group-hover:translate-x-0"
                    }`}
                  >
                    {section.label}
                  </span>

                  <span
                    className={`block rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-2 h-5 bg-current opacity-100"
                        : "w-1.5 h-1.5 bg-current opacity-30 group-hover:opacity-75 group-hover:scale-125"
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default SectionIndicator;
