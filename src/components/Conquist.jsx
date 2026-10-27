const conquistas = [
    {
        categoria: "Conquistas",
        itens: [
            {
                titulo: "Projetos acadêmicos",
                descricao: "Desenvolvimento de aplicações web e APIs.",
            },
        ],
    },
];

function Conquistas() {
    return (
        <section
            id="conquistas"
            className="px-8 py-16"
        >
            {conquistas.map((grupo) => (
                <div
                    key={grupo.categoria}
                    className="
            grid grid-cols-1
            lg:grid-cols-4
            gap-8
            border-b border-zinc-300
            py-12
          "
                >
                    {/* Coluna do título */}
                    <h2 className="text-xl font-medium">
                        {grupo.categoria}
                    </h2>

                    {/* Área dos itens */}
                    <div
                        className="
              lg:col-span-3
              grid grid-cols-1
              md:grid-cols-3
              gap-x-8 gap-y-12
            "
                    >
                        {grupo.itens.map((item) => (
                            <article key={item.titulo}>
                                <h3 className="text-lg text-zinc-900">
                                    {item.titulo}
                                </h3>

                                <p className="text-lg text-zinc-500">
                                    {item.descricao}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Conquistas;