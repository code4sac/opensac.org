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
    <section className={`projects-section-${sectionType}`}>
      <div className="project-card-img-container">
        <div className="project-card-img-status">Active</div>
        <img className="project-card-img" href={imgUrl}></img>
      </div>
      <ul className="project-card-tags">
        {tags.map((tag) => (
          <li key={tag.id}>
            <a href={tag.url}>{tag.tagText}</a>
          </li>
        ))}
      </ul>
      <h3 className="project-card-heading">{projectTitle}</h3>
      <div>
        <p>{projectText}</p>
      </div>
      <div className="project-card-last-updated">
        Last Updated: {lastUpdatedTimestamp}
      </div>
      <a className="project-card-button-dark" href={pageUrl}>
        Learn More
      </a>
      <a className="project-card-button-light" href={githubUrl}>
        Source Code
      </a>
    </section>
  );
}
