const conquistas = [
  {
    categoria: "Prêmios & Reconhecimentos",
    itens: [
      {
        titulo: "Best Short Paper Award — LLM4Code 2026",
        periodo: "2026",
        descricao:
          'Artigo "Evaluating LLMs-Driven Java Code Refactoring from a Developer\'s Perspective", reconhecido como melhor short paper do workshop.',
      },
      {
        titulo: "3º Lugar Brasil — AWS DeepRacer",
        periodo: "2024",
        descricao:
          "Modelagem de função de recompensa e ajuste de hiperparâmetros em competição nacional de Reinforcement Learning.",
      },
      {
        titulo: "4º Lugar Nordeste — AWS DeepRacer",
        periodo: "2025",
        descricao:
          "Manutenção de alta performance de agentes autônomos em competições regionais na plataforma AWS.",
      },
      {
        titulo: "Best Paper Award — Encontros Universitários UFC",
        periodo: "2024",
        descricao:
          "Melhor artigo da sessão nos Encontros Universitários da UFC sobre refatoração de código e ocorrência de Test Smells.",
      },
    ],
  },
  {
    categoria: "Pesquisa & Monitoria (UFC)",
    itens: [
      {
        titulo: "Bolsista de Iniciação Científica (PIBIC/FUNCAP)",
        periodo: "2026 – 2027 • UFC",
        descricao:
          "Análise e melhoria da qualidade em repositórios abertos de requisitos utilizando Grandes Modelos de Linguagem (LLMs).",
      },
      {
        titulo: "Monitor de Inteligência Artificial (DeepRacer)",
        periodo: "2025 – 2026 • UFC",
        descricao:
          "Ministração de aulas práticas sobre Aprendizado por Reforço e Python para graduação e mentoria técnica na plataforma AWS.",
      },
      {
        titulo: "Pesquisador Bolsista (PIBIC)",
        periodo: "2024 – 2025 • UFC",
        descricao:
          "Investigação sobre o impacto da refatoração na ocorrência de Test Smells e coautoria de artigos publicados na WASHES 2025 e WEI 2025.",
      },
    ],
  },
  {
    categoria: "Formação & Produções",
    itens: [
      {
        titulo: "Bacharelado em Engenharia de Software",
        periodo: "Cursando 6º semestre • Conclusão: 2027",
        descricao:
          "Universidade Federal do Ceará (UFC), Campus Quixadá.",
      },
      {
        titulo: "Publicações Científicas Nacionais",
        periodo: "WASHES 2025 & WEI 2025",
        descricao:
          "Artigos completos publicados em anais de congressos nacionais sobre qualidade de software e educação em computação.",
      },
      {
        titulo: "Idiomas",
        periodo: "Português & Inglês",
        descricao:
          "Português nativo e Inglês técnico com foco em leitura e escrita de documentação e artigos científicos.",
      },
    ],
  },
];

function Conquistas() {
  return (
    <div
      id="conquistas"
      className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-16"
    >
      <div className="border-t border-[var(--current-border)]">
        {conquistas.map((grupo) => (
          <div
            key={grupo.categoria}
            className="reveal-up grid grid-cols-1 lg:grid-cols-[28%_1fr] gap-8 lg:gap-14 xl:gap-16 border-b border-[var(--current-border)] py-10 md:py-14"
          >
            {/* Coluna do título da categoria à esquerda */}
            <div>
              <h3 className="text-xl md:text-2xl font-normal tracking-tight text-[var(--current-text)]">
                {grupo.categoria}
              </h3>
            </div>

            {/* Área dos itens distribuídos em 3 colunas no desktop */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 lg:pl-12 xl:pl-14">
              {grupo.itens.map((item) => (
                <article key={item.titulo} className="space-y-2">
                  {item.periodo && (
                    <p className="text-xs uppercase tracking-[0.12em] text-[var(--current-secondary)]">
                      {item.periodo}
                    </p>
                  )}

                  <h4 className="text-lg font-normal text-[var(--current-text)]">
                    {item.titulo}
                  </h4>

                  <p className="text-meta-editorial text-[var(--current-secondary)] leading-relaxed">
                    {item.descricao}
                  </p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Conquistas;
