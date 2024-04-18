import { upperFirst } from "@/utils/string";

export default function SingleProjectsBrief({ sectionType, data }) {
  return (
    <>
      <section id="project-brief" className={`project-section-${sectionType}`}>
        <div className = "project-heading-underline">
        <h2 className="project-heading">
          Project Brief
        </h2>
        </div>
        <div className="project-info-container project-info-line-top">
          <p className="project-info-label">Status</p>{" "}
          <p className="project-paragraph">
            {upperFirst(data.meta.project_status)}
          </p>
        </div>
        <div className="project-info-container project-info-line-top">
          <p className="project-info-label">Description</p>{" "}
          <p className="project-paragraph">{data.meta.description}</p>
        </div>
        <div className="project-info-container project-info-line-top">
          <p className="project-info-label">Comments</p>
          <p className="project-paragraph">{upperFirst(data.meta.project_status)}</p>
        </div>
        <div className="project-info-line-top">
          <div className="project-info-container">
            <p className="project-info-label">Communications</p>
            <p className="project-paragraph">{data.meta.communications}</p>
          </div>
          <div className="project-info-container">
            <p className="project-info-label">Channels</p>
            <p className="project-paragraph">{data.meta.channels}</p>
          </div>
        </div>
        <div className="project-info-container project-info-line-top">
          <p className="project-info-label">Project Partner</p>{" "}
          <p>{data.meta.project_partner}</p>
        </div>
        <div className="project-info-container project-info-line-top">
          <p className="project-info-label">Project Lead</p>{" "}
          <p className="project-paragraph">{data.meta.technical_lead}</p>
        </div>
        <div className="project-info-container project-info-line-top">
          <p className="project-info-label">Technical Lead</p>{" "}
          <p className="project-paragraph">{data.meta.technical_lead}</p>
        </div>
        <div className="project-info-container project-info-line-top">
          <p className="project-info-label">Lead Designer</p>{" "}
          <p className="project-paragraph">{data.meta.lead_designer}</p>
        </div>
      </section>
    </>
  );
}
