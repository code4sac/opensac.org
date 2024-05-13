/**
 * Projects start section.
 * @returns {JSX.Element}
 */
export default function ProjectCard({
  isLoading,
  sectionType,
  projectStatus,
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
    <section className={`project-card-container`}>
      <div className="project-card-img-container">
        <div className={`project-card-img-status ${isLoading && 'project-card-loading'}`}>{projectStatus}</div>
        {isLoading ? <div className="project-card-img project-card-loading"></div> : <img className="project-card-img" src={imgUrl}></img>}
      </div>
      <ul className="project-card-tags">
        {tags.map((tag,index) => (
          <div key={projectTitle + tag} className={`project-card-tag ${isLoading && 'project-card-loading'}`}>{tag}</div>
        ))}
      </ul>
      <h2 className={`project-card-heading ${isLoading && 'project-card-loading'}`}>{projectTitle}</h2>
      <div className="project-card-description-container">
        <p className={`project-card-description ${isLoading && 'project-card-loading'}`}>{projectText}</p>
      </div>
      <div className={`project-card-last-updated ${isLoading && 'project-card-loading'}`}>
        Last Updated: {lastUpdatedTimestamp.format("ddd MMM D, H:mma")}
      </div>
      <div className="project-card-buttons-container">
        <a className={`project-card-button-dark ${isLoading && 'project-card-loading'}`} href={pageUrl}>
          Learn More
        </a>
        <a className={`project-card-button-light ${isLoading && 'project-card-loading'}`} href={githubUrl}>
          Source Code
        </a>
      </div>
    </section>
  );
}
