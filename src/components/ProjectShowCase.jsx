function ProjectShowcase({
    title,
    description,
    images,
    details,
    layout = "mobile"
}) {
    return (
        <section className="min-h-[calc(100dvh-120px)] px-8 py-12">

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">

                {/* Coluna esquerda */}
                <div>
                    <h2 className="text-3xl font-medium">
                        {title}
                    </h2>

                    <p className="mt-4 leading-relaxed">
                        {description}
                    </p>

                    <dl className="mt-8">
                        {details.map((detail) => (
                            <div
                                key={detail.label}
                                className="grid grid-cols-[100px_1fr] gap-4 border-t py-4"
                            >
                                <dt>{detail.label}</dt>
                                <dd>{detail.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>

                {/* Coluna direita */}
                <div
                    className={`
    grid gap-4
    border-t border-zinc-300 pt-8
    lg:border-t-0 lg:border-l lg:pl-12 lg:pt-0
    ${layout === "web"
                            ? "grid-cols-1"
                            : "grid-cols-3"
                        }
  `}
                >
                    {images.map((image) => (
                        <div
                            key={image}
                            className={`
        overflow-hidden rounded-xl bg-zinc-200
        ${layout === "web"
                                    ? "aspect-video"
                                    : "aspect-[3/5]"
                                }
      `}
                        >
                            <img
                                src={image}
                                alt={`Tela do projeto ${title}`}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectShowcase;