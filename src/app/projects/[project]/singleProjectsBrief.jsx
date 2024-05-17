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
        <div className="project-info-container project-info-container-first project-info-line-top">
          <p className="project-info-label">Status</p>{" "}
          <p className="project-brief-status">
            {upperFirst(data.meta.project_status)}
          </p>
        </div>
        <div className="project-info-container project-info-line-top">
          <p className="project-info-label">Description</p>{" "}
          <p className="project-brief-paragraph">{data.meta.description}</p>
        </div>
        <div className="project-info-container project-info-line-top">
          <p className="project-info-label">Comments</p>
          <p className="project-brief-paragraph">{upperFirst(data.meta.project_status)}</p>
        </div>
        <div className="project-info-container">
          <p className="project-info-label">Communications</p>
          <p className="project-info-label project-info-label-channels">Channels</p>
          <p className="project-brief-paragraph project-brief-paragraph-communications">{data.meta.communications}</p>
        </div>
        <div className="project-info-container project-info-line-top">
          <p className="project-info-label">Project Partner</p>{" "}
          <p className="project-brief-paragraph">{data.meta.project_partner}</p>
        </div>
        <div className="project-info-container project-info-line-top">
          <p className="project-info-label">Project Lead</p>{" "}
          <p className="project-brief-paragraph">{data.meta.technical_lead}</p>
        </div>
        <div className="project-info-container project-info-line-top">
          <p className="project-info-label">Technical Lead</p>{" "}
          <p className="project-brief-paragraph">{data.meta.technical_lead}</p>
        </div>
        <div className="project-info-container project-info-line-top">
          <p className="project-info-label">Lead Designer</p>{" "}
          <p className="project-brief-paragraph">{data.meta.lead_designer}</p>
        </div>
      </section>
    </>
  );
}
