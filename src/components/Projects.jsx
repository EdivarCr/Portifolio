import HeroImagem from '../assets/hero.png'
import ProjectShowcase from './ProjectShowCase'

function Projects() {
    return (
        <section
            id="projects"
            className="
        min-h-[calc(100dvh-120px)]
        flex flex-col
        px-8 py-8
      "
        >
            <ProjectShowcase
                title="AGIL - Aplicativo de Gerência de Insumos e Laboratórios"
                description="Sdesenvolvido na disciplina Projeto Integrado 3, foi pensado
                        para a comunidade acadêmica do Instituto Federal do Ceará,
                        visando facilitar o agendamento e gestão dos insumos e laboratório
                        de química para alunos, técnicos e professores."
                images={[
                    "/images/agil-1.png",
                    "/images/agil-2.png"
                ]}
                details={[
                    { label: "Ano", value: "2026 (em andamento)" },
                    { label: "Atuação", value: "Desenvolvedor Full-stack" },
                    { label: "Tecnologias", value: "React Native, NestJS, PostgreSQL" }
                ]}
            />

            <ProjectShowcase
                title="PROBATOR-IA"
                description="Freelancer para desenvolvimento de um sistema de inteligência artificial 
                para area de educacao com foco em professores."
                layout="web"
                images={[
                    "/images/agil-1.png",
                ]}
                details={[
                    { label: "Ano", value: "2026" },
                    { label: "Atuação", value: "Desenvolvedor Backend" },
                    { label: "Tecnologias", value: "React Native, NestJS, PostgreSQL" }
                ]}
            />

            <ProjectShowcase
                title="SIGBRO - Sitema de Insumos e Gestao da Empresa BRO Pimentas"
                description="Sistema desenvolvido na disciplina Projeto Integrado 2, foi desenvolvido para atender
                as necessidades da empresa BRO Pimentas em Teresina para a gestão de insumos e clientes, alem do controle
                financeiro."
                images={[
                    "/images/agil-1.png",
                    "/images/agil-2.png"
                ]}
                details={[
                    { label: "Ano", value: "2026" },
                    { label: "Atuação", value: "Desenvolvedor Backend" },
                    { label: "Tecnologias", value: "Python, FastAPI, Docker" }
                ]}
            />
        </section>
    );
}

export default Projects;