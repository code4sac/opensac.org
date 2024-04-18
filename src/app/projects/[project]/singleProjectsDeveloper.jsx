import { upperFirst } from "@/utils/string";

export default function SingleProjectsDeveloper({ sectionType, data }) {
  return (
    <>
      <section id="developer" className={`project-section-${sectionType}`}>
        <h2 className="project-heading">Developer</h2>
        <p className="project-section-paragraph">
          Developers can actively contribute to the project by submitting pull
          requests with code enhancements or bug fixes via the project's GitHub
          repository.
        </p>
        <p>Difficulty</p>
        <p>{upperFirst(data.meta.contributing.developer.difficulty)}</p>
        <p>Frontend</p>
        <p>{data.meta.contributing.developer.frontend}</p>
        <p>Backend</p>
        <p>{data.meta.contributing.developer.backend}</p>
        <p>Technologies</p>
        <p>{data.meta.contributing.developer.technologies}</p>
        <p>Version Control</p>
        <p>{data.meta.contributing.developer.version_control}</p>
        <p>Repo</p>
        <p>{data.meta.contributing.developer.repo}</p>
        <p>Ways to Contribute</p>
        <p>{data.meta.contributing.developer.ways_to_contribute}</p>
      </section>
    </>
  );
}
