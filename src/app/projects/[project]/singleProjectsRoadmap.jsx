export default function SingleProjectsRoadmap({ sectionType, data }) {
  return (
    <>
      <section id="roadmap" className={`project-section-${sectionType}`}>
        <h2 className="project-heading-section">Roadmap</h2>
        <p className="project-section-paragraph">
          Know the current progress, scope, and stage of project
        </p>
        <div className="list-horizontal-container">
          <div>
            <p>Research</p>
            <p>{data.meta.roadmap.research.time_range}</p>
            <p>Design</p>
            <p>{data.meta.roadmap.design.time_range}</p>
            <p>Development</p>
            <p>{data.meta.roadmap.development.time_range}</p>
            <p>Deployment</p>
            <p>{data.meta.roadmap.deployment.time_range}</p>
            <p>Launch</p>
            <p>{data.meta.roadmap.launch.time_range}</p>
          </div>
          <h4 className="project-heading-section">Objective</h4>
          <p className="project-section-paragraph">
            {data.meta.roadmap.objective}
          </p>

          <h4 className="project-heading-section">Comments</h4>
          <p className="project-section-paragraph">
            {data.meta.roadmap.comments}
          </p>

          <h4 className="project-heading-section">Outcome</h4>
          <p className="project-section-paragraph">
            {data.meta.roadmap.outcome}
          </p>
          <div></div>
        </div>
      </section>
    </>
  );
}
