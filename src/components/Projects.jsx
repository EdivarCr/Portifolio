import ProjectShowcase from "./ProjectShowCase";
import { projectsData } from "../data/projects";

function Projects() {
  return (
    <section id="projects" aria-label="Projetos em destaque">
      {projectsData.map((project, index) => (
        <ProjectShowcase
          key={project.id}
          id={project.id}
          theme={project.theme}
          index={index}
          total={projectsData.length}
          title={project.title}
          description={project.description}
          layout={project.layout}
          images={project.images}
          captions={project.captions}
          details={project.details}
          links={project.links}
        />
      ))}
    </section>
  );
}

export default Projects;
