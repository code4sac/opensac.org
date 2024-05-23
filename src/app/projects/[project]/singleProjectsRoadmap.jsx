export default function SingleProjectsRoadmap({ sectionType, data }) {
  const Status = Object.freeze({
    NOT_STARTED: 0,
    IN_PROGRESS: 1,
    COMPLETED: 2
  });
  function parseRoadmapTimelineStatus(roadmap) {
    if (roadmap.time_range) {
      // TODO: Get the timeline status by checking the time range relative to the current date.
      const t = roadmap.time_range.split("-");
      return Status.COMPLETED
    } else {
      return Status.NOT_STARTED
    }
  }
  return (
      <section id="roadmap" className={`project-roadmap-container`}>
        <div className={`project-main-heading-container projects-main-heading-underline`}>
          <h2 className={`project-heading project-heading-underline`}>Roadmap</h2>
        </div>  
        <p className={`project-section-paragraph`}>
          Know the current progress, scope, and stage of project
        </p>
        <div className={`project-info-container-alt`}>
          <div className={`project-roadmap-milestone-container`}>
            <div>
                <div className={`project-roadmap-info-container`}>
                <img className={`project-roadmap-icon`} src={data.meta.roadmap.research ? "/img/project-roadmap/check-circle.svg" : "/img/project-roadmap/circle-stop.svg"} alt="Check circle image." />
                <div className={`project-info-text-container`}>
                  <p className={`project-roadmap-info-label`}>Research</p>
                  <p className={`project-info-alt`}>{data.meta.roadmap.research && data.meta.roadmap.research.time_range}</p>
                </div>
              </div>
              <img height={'32px'} className={`project-roadmap-icon-line`} src={data.meta.roadmap.research ? "/img/project-roadmap/line-4.svg" : "/img/project-roadmap/line-5.svg"} alt="Project roadmap divider line." />
              <div className={`project-roadmap-info-container`}>
                <img className={`project-roadmap-icon`} src={data.meta.roadmap.design ? "/img/project-roadmap/check-circle.svg" : "/img/project-roadmap/circle-stop.svg"} alt="Check circle image." />
                <div className={`project-info-text-container`}>
                  <p className={`project-roadmap-info-label`}>Design</p>
                  <p className={`project-info-alt`}>{data.meta.roadmap.design && data.meta.roadmap.design.time_range}</p>
                </div>
              </div>
              <img className={`project-roadmap-icon-line`} src={data.meta.roadmap.design ? "/img/project-roadmap/line-4.svg" : "/img/project-roadmap/line-5.svg"} alt="Project roadmap divider line." />
              <div className={`project-roadmap-info-container`}>
                <img className={`project-roadmap-icon`} src={data.meta.roadmap.development ? "/img/project-roadmap/check-circle.svg" : "/img/project-roadmap/circle-stop.svg"} alt="Check circle image." />
                <div className={`project-info-text-container`}>
                  <p className={`project-roadmap-info-label`}>Development</p>
                  <p className={`project-info-alt`}>{data.meta.roadmap.development && data.meta.roadmap.development.time_range}</p>
                </div>
              </div>
              <img className={`project-roadmap-icon-line`} src={data.meta.roadmap.development ? "/img/project-roadmap/line-4.svg" : "/img/project-roadmap/line-5.svg"} alt="Project roadmap divider line." />
              <div className={`project-roadmap-info-container`}>
                <img className={`project-roadmap-icon`} src={data.meta.roadmap.deployment ? "/img/project-roadmap/check-circle.svg" : "/img/project-roadmap/circle-stop.svg"} alt="Check circle image." />
                <div className={`project-info-text-container`}>
                  <p className={`project-roadmap-info-label`}>Deployment</p>
                  <p className={`project-info-alt`}>{data.meta.roadmap.deployment && data.meta.roadmap.deployment.time_range}</p>
                </div>
              </div>
              <img className={`project-roadmap-icon-line`} src={data.meta.roadmap.deployment ? "/img/project-roadmap/line-4.svg" : "/img/project-roadmap/line-5.svg"} alt="Project roadmap divider line." />
              <div className={`project-roadmap-info-container`}>
                <img className={`project-roadmap-icon`} src={data.meta.roadmap.launch ? "/img/project-roadmap/check-circle.svg" : "/img/project-roadmap/circle-stop.svg"} alt="Check circle image." />
                <div className={`project-info-text-container`}>
                  <p className={`project-roadmap-info-label`}>Launch</p>
                  <p className={`project-info-alt`}>{data.meta.roadmap.launch && data.meta.roadmap.launch.time_range}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="project-roadmap-details-container">
            <div>
              <h4 className={`project-roadmap-info-label-two`}>Objective</h4>
              <hr className="project-roadmap-info-line-top" />
            <p className="project-paragraph-alt">
              {data.meta.roadmap.objective}
            </p>
            <h4 className={`project-roadmap-info-label-two`}>Comments</h4>
              <hr className="project-roadmap-info-line-top" />
            <p className="project-paragraph-alt">
              {data.meta.roadmap.comments}
            </p>
            <h4 className={`project-roadmap-info-label-two`}>Outcome</h4>
              <hr className="project-roadmap-info-line-top" />
            <p className="project-paragraph-alt">
              {data.meta.roadmap.outcome}
            </p>
            </div>
          </div>         
        </div>
      </section>
  );
}
