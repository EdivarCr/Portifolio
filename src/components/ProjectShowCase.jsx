import { useState } from "react";

function CaptureItem({ src, title, caption, index, layout, isCarouselItem }) {
  const [imageError, setImageError] = useState(!src);
  const isWeb = layout === "web";

  return (
    <div
      data-cursor-hover
      className={`group relative overflow-hidden rounded-2xl border border-[var(--current-border)] bg-[var(--current-surface)] backdrop-blur-xs shadow-xs transition-all duration-500 ease-out hover:-translate-y-1 ${
        isWeb
          ? "w-full"
          : isCarouselItem
            ? "w-[74vw] max-w-[260px] shrink-0 snap-center sm:w-full sm:max-w-[290px] sm:mx-auto"
            : "w-full max-w-[280px] sm:max-w-[310px] mx-auto"
      }`}
    >
      {/* Moldura discreta de navegador quando layout === "web" */}
      {isWeb && (
        <div
          aria-hidden="true"
          className="flex items-center justify-between px-3.5 sm:px-4 py-2 sm:py-2.5 border-b border-[var(--current-border)] bg-[var(--current-surface-header)]"
        >
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-current opacity-20" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-current opacity-20" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-current opacity-20" />
          </div>
          <span className="text-[10px] sm:text-[11px] tracking-wide text-[var(--current-secondary)] font-mono truncate max-w-[180px] sm:max-w-[240px]">
            {title.split("—")[0].trim().toLowerCase().replace(/\s+/g, "-")}.app
          </span>
          <span className="w-6 sm:w-8" />
        </div>
      )}

      <div
        className={`relative w-full flex items-center justify-center overflow-hidden ${
          isWeb ? "aspect-[16/10] p-2 sm:p-3 md:p-4" : "p-2"
        }`}
      >
        {!imageError ? (
          <img
            src={src}
            alt={caption || `Captura ${index + 1} do projeto ${title}`}
            loading="lazy"
            onError={() => setImageError(true)}
            className={`w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.01] ${
              isWeb
                ? ""
                : "max-h-[420px] sm:max-h-[440px] lg:max-h-[58dvh] xl:max-h-[520px]"
            }`}
          />
        ) : (
          /* Fallback visual caso uma imagem não possa ser carregada */
          <div
            role="img"
            aria-label={
              caption || `Prévia estrutural do projeto ${title} — tela ${index + 1}`
            }
            className="w-full aspect-[9/18] rounded-xl border border-dashed border-[var(--current-border)] bg-[var(--current-surface)] p-5 flex flex-col justify-between text-left select-none"
          >
            <div className="flex items-center justify-between text-xs text-[var(--current-secondary)]">
              <span className="uppercase tracking-[0.14em] font-medium">
                {isWeb ? "Aplicação Web" : `Tela Mobile 0${index + 1}`}
              </span>
              <span className="font-mono opacity-70">
                {isWeb ? "16:10" : "9:18"}
              </span>
            </div>

            <div className="my-auto py-4 space-y-3">
              <div className="w-10 h-1.5 rounded-full bg-current opacity-20" />
              <p className="text-sm font-medium text-[var(--current-text)] line-clamp-2">
                {title.split("—")[0].trim()}
              </p>
              <p className="text-xs text-[var(--current-secondary)] leading-relaxed">
                {caption ||
                  `Captura ${index + 1} do sistema (${
                    isWeb ? "visão desktop" : "visão mobile"
                  }).`}
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-[var(--current-border)]/70 text-[11px] text-[var(--current-secondary)]">
              <span>Preview indisponível</span>
              <span>0{index + 1}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectShowcase({
  id,
  theme,
  index,
  total,
  title,
  description,
  images = [],
  captions = [],
  details = [],
  links = [],
  layout = "mobile",
}) {
  const isWeb = layout === "web";
  const hasMultipleMobile = !isWeb && images.length > 1;
  const formattedIndex =
    typeof index === "number" ? String(index + 1).padStart(2, "0") : null;
  const formattedTotal =
    typeof total === "number" ? String(total).padStart(2, "0") : null;

  // Mobile-First: carrossel horizontal no celular quando há múltiplas telas mobile,
  // e grid de 3 colunas a partir do tablet (sm) até notebook (lg) e monitor (xl)
  let rightColumnClasses = "grid grid-cols-1";
  if (!isWeb) {
    if (images.length === 1) {
      rightColumnClasses =
        "grid grid-cols-1 max-w-[290px] sm:max-w-[320px] mx-auto items-center";
    } else if (images.length === 2) {
      rightColumnClasses =
        "flex overflow-x-auto snap-x snap-mandatory gap-4 pb-3 -mx-1 px-1 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 sm:mx-0 sm:px-0 sm:gap-6 md:gap-8 items-center max-w-2xl mx-auto";
    } else {
      rightColumnClasses =
        "flex overflow-x-auto snap-x snap-mandatory gap-4 pb-3 -mx-1 px-1 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0 sm:mx-0 sm:px-0 sm:gap-4 md:gap-5 xl:gap-6 items-center";
    }
  }

  return (
    <article
      id={id}
      data-section-id={id}
      data-section-theme={theme}
      className="snap-section min-h-dvh pt-[var(--navbar-height)] flex items-center max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:pl-14 lg:pr-24 xl:px-16 py-10 sm:py-12 lg:py-14"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-[31%_1fr] xl:grid-cols-[28%_1fr] gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
        {/* Coluna esquerda (Mobile-First -> 28–31% no desktop): Informações do projeto */}
        <div className="reveal-up flex flex-col justify-between">
          <div>
            {formattedIndex && formattedTotal && (
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--current-secondary)] mb-2.5 sm:mb-3 font-medium">
                Projeto {formattedIndex} / {formattedTotal}
              </p>
            )}

            <h2 className="text-project-title text-[var(--current-text)]">
              {title}
            </h2>

            <p className="mt-3.5 sm:mt-4 text-body-editorial text-[var(--current-secondary)] max-w-prose">
              {description}
            </p>
          </div>

          {details.length > 0 && (
            <dl className="mt-6 sm:mt-8 border-b border-[var(--current-border)]">
              {details.map((detail) => (
                <div
                  key={detail.label}
                  className="grid grid-cols-1 sm:grid-cols-[105px_1fr] gap-1 sm:gap-4 border-t border-[var(--current-border)] py-3 sm:py-3.5 text-meta-editorial"
                >
                  <dt className="text-xs sm:text-meta-editorial uppercase sm:normal-case tracking-wider sm:tracking-normal text-[var(--current-secondary)] font-normal">
                    {detail.label}
                  </dt>
                  <dd className="text-[var(--current-text)] font-normal">
                    {detail.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}

          {links.length > 0 && (
            <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-4 sm:gap-5">
              {links.map((link) =>
                link.private ? (
                  <span
                    key={link.label}
                    className="inline-flex items-center gap-2 text-xs tracking-wide text-[var(--current-secondary)] border border-[var(--current-border)] rounded-full px-3.5 py-1.5"
                  >
                    <span
                      aria-hidden="true"
                      className="w-1.5 h-1.5 rounded-full bg-current opacity-60 shrink-0"
                    />
                    <span>{link.label}</span>
                  </span>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group py-1 inline-flex items-center gap-1.5 text-meta-editorial font-medium text-[var(--current-text)] hover:text-[var(--accent)] transition-colors"
                  >
                    <span>{link.label}</span>
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      ↗
                    </span>
                  </a>
                )
              )}
            </div>
          )}
        </div>

        {/* Coluna direita (Mobile-First -> 69–72% no desktop): Capturas mobile ou web */}
        <div className="reveal-up reveal-delay-1 w-full border-t border-[var(--current-border)] pt-6 sm:pt-8 lg:border-t-0 lg:border-l lg:pl-10 xl:pl-14 lg:pt-0">
          {hasMultipleMobile && (
            <p className="sm:hidden text-xs text-[var(--current-secondary)] mb-3 flex items-center justify-between">
              <span>Capturas do aplicativo ({images.length} telas)</span>
              <span aria-hidden="true">Deslize &rarr;</span>
            </p>
          )}

          <div className={rightColumnClasses}>
            {images.map((image, idx) => (
              <CaptureItem
                key={`${title}-${idx}`}
                src={image}
                title={title}
                caption={captions[idx]}
                index={idx}
                layout={layout}
                isCarouselItem={hasMultipleMobile}
              />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectShowcase;
