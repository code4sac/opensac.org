export default function SingleProjectsRoadmap({ sectionType, data }) {
  return (
    <>
      <section id="roadmap" className={`project-section-${sectionType}`}>
        <h2 className="project-heading project-heading-underline">Roadmap</h2>
        <p className="project-section-paragraph">
          Know the current progress, scope, and stage of project
        </p>
        <div className="project-info-container">
          <div>
            <p className = "project-info-label">Research</p>
            <p>{data.meta.roadmap.research.time_range}</p>
            <p className = "project-info-label">Design</p>
            <p>{data.meta.roadmap.design.time_range}</p>
            <p className = "project-info-label">Development</p>
            <p>{data.meta.roadmap.development.time_range}</p>
            <p className = "project-info-label">Deployment</p>
            <p>{data.meta.roadmap.deployment.time_range}</p>
            <p className = "project-info-label">Launch</p>
            <p>{data.meta.roadmap.launch.time_range}</p>
          </div>
          <h4 className = "project-info-label">Objective</h4>
          <p className="project-paragraph project-info-line-top">
            {data.meta.roadmap.objective}
          </p>

          <h4 className = "project-info-label">Comments</h4>
          <p className="project-paragraph project-info-line-top">
            {data.meta.roadmap.comments}
          </p>

          <h4 className = "project-info-label">Outcome</h4>
          <p className="project-paragraph project-info-line-top">
            {data.meta.roadmap.outcome}
          </p>
          <div></div>
        </div>
      </section>
    </>
  );
}
