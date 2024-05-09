import ProjectCard from "@/app/projects/projectCard";
import moment from "moment";

const ProjectsCardsContainer = ({projectsData, sectionType}) => {
  return (
    <div className="project-cards-container">
          {projectsData.map((project) => (
            <ProjectCard
              key={moment(project.updated_at)}
              sectionType={sectionType}
              projectTitle={project.meta.title}
              projectText={project.meta.description}
              imgUrl={`https://raw.githubusercontent.com/${project.full_name}/main/${project.meta.screenshots[0]}`}
              pageUrl={`/projects/${project.name}`}
              githubUrl={project.html_url}
              tags={project.meta.tags.split(",")}
              lastUpdatedTimestamp={moment(project.updated_at)}
            />
          ))}
        </div>
  )
}

export default ProjectsCardsContainer