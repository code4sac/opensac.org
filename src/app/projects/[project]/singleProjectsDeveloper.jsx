import { upperFirst } from "@/utils/string";

export default function SingleProjectsDeveloper({ sectionType, data }) {
  return (
    <>
      <section id="developer" className="project-developer-container">
        <div className="project-main-heading-container projects-main-heading-underline">
          <h2 className="project-heading project-heading-underline">Developer</h2>
        </div>
        <p className="project-section-paragraph">
          Developers can actively contribute to the project by submitting pull
          requests with code enhancements or bug fixes via the project's GitHub
          repository.
        </p>
        <hr className="project-info-line-top-2" />
        <div className="project-info-container project-info-line-top">
          <p className="project-info-label">Difficulty</p>
          <p className="project-info-text">
            {upperFirst(data.meta.contributing.developer.difficulty)}
          </p>
        </div>
        <hr className="project-info-line-top-2" />
        <div className="project-info-container project-info-line-top">
          <p className="project-info-label">Frontend</p>
          <p className="project-info-text">
            {data.meta.contributing.developer.frontend}
          </p>
        </div>
        <hr className="project-info-line-top-2" />
        <div className="project-info-container project-info-line-top">
          <p className="project-info-label">Backend</p>
          <p className="project-info-text">
            {data.meta.contributing.developer.backend}
          </p>
        </div>
        <hr className="project-info-line-top-2" />
        <div className="project-info-container project-info-line-top">
          <p className="project-info-label">Technologies</p>
          <p className="project-info-text">
            {data.meta.contributing.developer.technologies}
          </p>
        </div>
        <hr className="project-info-line-top-2" />
        <div className="project-info-line-top">
          <div className="project-info-container">
            <p className="project-info-label">Version Control</p>
            <p className="project-info-text">
              {data.meta.contributing.developer.version_control}
            </p>
            <p className="project-info-label">Repo</p>
            <p className="project-info-text">
              {data.meta.contributing.developer.repo}
            </p>
          </div>
        </div>
        <hr className="project-info-line-top-2" />
        <div className="project-info-container project-info-line-top project-info-line-bottom">
          <p className="project-info-label">Ways to Contribute</p>
          <p className="project-info-text">
            {data.meta.contributing.developer.ways_to_contribute}
          </p>
        </div>
        <hr className="project-info-line-top-2" />
      </section>
    </>
  );
}
