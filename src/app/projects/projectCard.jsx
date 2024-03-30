/**
 * Projects start section.
 * @returns {JSX.Element}
 */
export default function ProjectCard({
  sectionType,
  projectTitle,
  projectText,
  imgUrl,
  pageUrl,
  githubUrl,
  tags,
  lastUpdatedTimestamp,
}) {
  return (
    // TODO fix styling classes to represent the projects page?
    <section
      className={`projects-section-${sectionType} project-card-container`}
    >
      <div className="project-card-img-container">
        <div className="project-card-img-status">Active</div>
        <img className="project-card-img" src={imgUrl}></img>
      </div>
      <ul className="project-card-tags">
        {tags.map((tag) => (
          <div className="project-card-tag">{tag}</div>
        ))}
      </ul>
      <h2 className="project-card-heading">{projectTitle}</h2>
      <div>
        <p>{projectText}</p>
      </div>
      <div className="project-card-last-updated">
        Last Updated: {lastUpdatedTimestamp.format("ddd MMM D, H:mma")}
      </div>
      <div className="project-card-buttons-container">
        <a className="project-card-button-dark" href={pageUrl}>
          Learn More
        </a>
        <a className="project-card-button-light" href={githubUrl}>
          Source Code
        </a>
      </div>
    </section>
  );
}
