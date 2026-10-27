import agilLoginImg from "../assets/AGIL1.png";
import agilProfImg from "../assets/AGIL.png";
import agilTechImg from "../assets/AGIL2.png";
import probatorImg from "../assets/Probator.jpeg";
import sigbroImg from "../assets/SigBro.png";

export const projectsData = [
  {
    id: "agil",
    theme: "agil",
    shortLabel: "AGIL",
    title: "AGIL — Gestão de Laboratórios e Insumos",
    description:
      "Aplicação mobile e backend desenvolvida para o Instituto Federal do Ceará (IFCE) que centraliza o agendamento de laboratórios, solicitações de materiais e o controle de estoque de insumos. Conta com monitoramento automatizado de estoque crítico, histórico de movimentações e alertas inteligentes por e-mail.",
    layout: "mobile",
    images: [agilLoginImg, agilProfImg, agilTechImg],
    captions: [
      "Login institucional do IFCE com seleção de perfil (Aluno, Professor e Técnico)",
      "Visão do Professor: agendamento de laboratórios, disponibilidade e históricos",
      "Painel Técnico: aprovações pendentes, alertas de estoque baixo e avarias",
    ],
    details: [
      { label: "Período", value: "Set 2026 – Atualmente" },
      {
        label: "Atuação",
        value: "Desenvolvedor Full Stack (Projeto Acadêmico — IFCE)",
      },
      {
        label: "Tecnologias",
        value:
          "React Native, Expo, TypeScript, Node.js, NestJS, Prisma, PostgreSQL, Docker, NativeWind",
      },
    ],
    links: [
      {
        label: "Repositório no GitHub",
        href: "https://github.com/Randson-Silva/AGIL",
      },
    ],
  },
  {
    id: "probator",
    theme: "probator",
    shortLabel: "ProbatorAI",
    title: "ProbatorAI — Plataforma Educacional com IA",
    description:
      "Sistema voltado à área de educação com foco em professores para criação de avaliações e gerenciamento de bancos de questões privadas com apoio de inteligência artificial. Implementei autenticação segura com controle de acesso por perfis (JWT), importação estruturada de questões em JSON e integração direta com a Gemini API para um cliente real.",
    layout: "mobile",
    images: [probatorImg],
    captions: [
      "Interface mobile do Probator-AI: criação de avaliações com IA e login institucional",
    ],
    details: [
      { label: "Período", value: "Abr 2026 – Ago 2026" },
      { label: "Atuação", value: "Desenvolvedor Backend (Freelance)" },
      {
        label: "Tecnologias",
        value:
          "TypeScript, Node.js, NestJS, Prisma, PostgreSQL, JWT, Docker, Gemini API",
      },
    ],
    links: [
      {
        label: "Repositório privado (confidencialidade da empresa)",
        private: true,
      },
    ],
  },
  {
    id: "sigbro",
    theme: "sigbro",
    shortLabel: "ApiSisBro",
    title: "ApiSisBro (SIGBRÓ) — Gestão de Estoque, Clientes e Vendas",
    description:
      "Sistema web entregue e em uso real pelo cliente (BRO Pimentas) para controle de estoque, alertas de validade, gestão de clientes, visão financeira e pontos de venda. Liderei a arquitetura e construção do backend, o alinhamento de requisitos junto ao Product Owner, a análise de hospedagem em nuvem e a manutenção pós-entrega.",
    layout: "web",
    images: [sigbroImg],
    captions: [
      "Dashboard web do SIGBRÓ: indicadores de faturamento, vendas, estoque, clientes e visão financeira",
    ],
    details: [
      { label: "Período", value: "Mar 2026 – Jun 2026" },
      { label: "Atuação", value: "Líder de Backend (Projeto Acadêmico)" },
      {
        label: "Tecnologias",
        value:
          "Python, FastAPI, Docker, SQLAlchemy, Alembic, Supabase Storage (S3), PostgreSQL, Pytest",
      },
    ],
    links: [
      {
        label: "Repositório no GitHub",
        href: "https://github.com/EdivarCr/ApiSisBro",
      },
    ],
  },
];

export const navigableSections = [
  { id: "home", label: "Home", theme: "home", navGroup: "home" },
  ...projectsData.map((project) => ({
    id: project.id,
    label: project.shortLabel || project.title,
    theme: project.theme,
    navGroup: "projects",
  })),
  { id: "about", label: "Sobre & Conquistas", theme: "about", navGroup: "about" },
  { id: "contact", label: "Contato", theme: "contact", navGroup: "contact" },
];
