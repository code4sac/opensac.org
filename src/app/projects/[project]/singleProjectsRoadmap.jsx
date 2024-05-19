export default function SingleProjectsRoadmap({ sectionType, data }) {
  return (
    <>
      <section id="roadmap" className="project-roadmap-container">
        <div className="project-main-heading-container projects-main-heading-underline">
          <h2 className="project-heading project-heading-underline">Roadmap</h2>
        </div>  
        <p className="project-section-paragraph">
          Know the current progress, scope, and stage of project
        </p>
        <div className="project-info-container-alt">
            <div className="project-roadmap-info-container">
              <img className="project-roadmap-icon" src="/img/project-roadmap/check-circle.svg" alt="Check circle image." />
              <div className="project-info-text-container">
                <p className="project-roadmap-info-label">Research</p>
            <p className = "project-info-alt">{
            (()=> {if(data.meta.roadmap.research)
                    return data.meta.roadmap.research.time_range;
                  else
                    return null;})()}</p>
              </div>
            </div>
            <img className="project-roadmap-icon-line" src="/img/project-roadmap/line-4.svg" alt="Line yellow." />
            <div className="project-roadmap-info-container">
              <img className="project-roadmap-icon" src="/img/project-roadmap/check-circle.svg" alt="Check circle image." />
              <div className="project-info-text-container">
                <p className="project-roadmap-info-label">Design</p>
                <p className = "project-info-alt">{(()=> {if(data.meta.roadmap.design)
                    return data.meta.roadmap.design.time_range;
                  else
                    return null;})()}</p>
              </div>
            </div>
            <img className="project-roadmap-icon-line" src="/img/project-roadmap/line-4.svg" alt="Line yellow." />
            <div className="project-roadmap-info-container">
              <img className="project-roadmap-icon" src="/img/project-roadmap/arrow-circle-right.svg" alt="Check circle image." />
              <div className="project-info-text-container">
                <p className="project-roadmap-info-label">Development</p>
                <p className = "project-info-alt">{(()=> {if(data.meta.roadmap.development)
                    return data.meta.roadmap.development.time_range;
                  else
                    return null;})()}</p>
              </div>
            </div>
            <img className="project-roadmap-icon-line" src="/img/project-roadmap/line-5.svg" alt="Line yellow." />
            <div className="project-roadmap-info-container">
              <img className="project-roadmap-icon" src="/img/project-roadmap/arrow-circle-right.svg" alt="Check circle image." />
              <div className="project-info-text-container">
                <p className="project-roadmap-info-label">Deployment</p>
                <p className = "project-info-alt">{(()=> {if(data.meta.roadmap.deployment)
                    return data.meta.roadmap.deployment.time_range;
                  else
                    return null;})()}</p>
              </div>
            </div>
            <img className="project-roadmap-icon-line" src="/img/project-roadmap/line-5.svg" alt="Line yellow." />        
            <div className="project-roadmap-info-container">
              <img className="project-roadmap-icon" src="/img/project-roadmap/arrow-circle-right.svg" alt="Check circle image." />
              <div className="project-info-text-container">
                <p className="project-roadmap-info-label">Launch</p>
                <p className = "project-info-alt">{(()=> {if(data.meta.roadmap.launch)
                    return data.meta.roadmap.launch.time_range;
                  else
                    return null;})()}</p>
              </div>
            </div>         
          </div>
          <div>
            <h4 className="project-roadmap-info-label-two">Objective</h4>
              <hr className="project-roadmap-info-line-top" />
            <p className="project-paragraph-alt">
              {data.meta.roadmap.objective}
            </p>

            <h4 className="project-roadmap-info-label-two">Comments</h4>
              <hr className="project-roadmap-info-line-top" />
            <p className="project-paragraph-alt">
              {data.meta.roadmap.comments}
            </p>

            <h4 className="project-roadmap-info-label-two">Outcome</h4>
              <hr className="project-roadmap-info-line-top" />
            <p className="project-paragraph-alt">
              {data.meta.roadmap.outcome}
            </p>
        </div>
      </section>
    </>
  );
}
