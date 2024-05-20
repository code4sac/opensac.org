import { upperFirst } from "@/utils/string";

export default function SingleProjectsBrief({ sectionType, data }) {
  return (
    <>
      <section id="project-brief" className="project-brief-container">
        <div className="project-main-heading-container projects-main-heading-underline">
          <h2 className="project-heading">
            Project Brief
          </h2>
        </div>
        <hr className="project-brief-info-line-top-first"/>
        <div className="project-info-container project-info-line-top">
          <p className="project-info-label">Status</p>{" "}
          <p className=".project-info-text project-brief-status">
            {upperFirst(data.meta.project_status)}
          </p>
        </div>
        <hr className="project-brief-info-line-top"/>
        <div className="project-info-container project-info-line-top">
          <p className="project-info-label">Description</p>{" "}
          <p className="project-paragraph-alt">{data.meta.description}</p>
        </div>
        <hr className="project-brief-info-line-top"/>
        <div className="project-info-container project-info-line-top">
          <p className="project-info-label">Comments</p>
          <p className="project-paragraph-alt">{upperFirst(data.meta.project_status)}</p>
        </div>
        <hr className="project-brief-info-line-top"/>
        <div className="project-info-container">
          <p className="project-info-label">Communications</p>
          <p className="project-info-text project-brief-paragraph-communications">{data.meta.communications}</p>
          <p className="project-info-label project-info-label-channels">Channels</p>
          
        </div>
        <hr className="project-brief-info-line-top"/>
        <div className="project-info-container project-info-line-top">
          <p className="project-info-label">Project Partner</p>{" "}
          <p className="project-info-text">{data.meta.project_partner}</p>
        </div>
        <hr className="project-brief-info-line-top"/>
        <div className="project-info-container project-info-line-top">
          <p className="project-info-label">Project Lead</p>{" "}
          <p className="project-info-text">{data.meta.technical_lead}</p>
        </div>
        <hr className="project-brief-info-line-top"/>
        <div className="project-info-container project-info-line-top">
          <p className="project-info-label">Technical Lead</p>{" "}
          <p className="project-info-text">{data.meta.technical_lead}</p>
        </div>
        <hr className="project-brief-info-line-top"/>
        <div className="project-info-container project-info-line-top">
          <p className="project-info-label">Lead Designer</p>{" "}
          <p className="project-info-text">{data.meta.lead_designer}</p>
        </div>
      </section>
    </>
  );
}
