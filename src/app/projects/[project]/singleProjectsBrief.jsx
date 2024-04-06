import { upperFirst } from "@/utils/string";

export default function SingleProjectsBrief({ sectionType, data }) {
  return (
    <>
      <section className={`project-section-${sectionType}`}>
        <div className="single-projects-info-container">
          <p>Status</p> <p>{upperFirst(data.meta.project_status)}</p>
        </div>
        <div className="single-projects-info-container">
          <p>Description</p> <p>{data.meta.description}</p>
        </div>
        <div className="single-projects-info-container">
          <p>Comments</p> <p>{upperFirst(data.meta.project_status)}</p>
        </div>
        <div className="single-projects-info-container">
          <p>Communications</p> <p>{data.meta.communications}</p>
          <p>Channels</p>
          <p>{data.meta.channels}</p>
        </div>
        <div className="single-projects-info-container">
          <p>Project Partner</p> <p>{data.meta.project_partner}</p>
        </div>
        <div className="single-projects-info-container">
          <p>Project Lead</p> <p>{data.meta.technical_lead}</p>
        </div>
        <div className="single-projects-info-container">
          <p>Technical Lead</p> <p>{data.meta.technical_lead}</p>
        </div>
        <div className="single-projects-info-container">
          <p>Lead Designer</p> <p>{data.meta.lead_designer}</p>
        </div>
      </section>
    </>
  );
}
// const data: {
//     meta: any;
//     id: any;
//     homepage: any;
//     name: any;
//     full_name: any;
//     html_url: any;
//     api_url: any;
//     created_at: any;
//     updated_at: any;
// }
// Project Brief
//           status
//           Description
//           comments
//           communications
//           channels
//           project partner
//           project lead
//           lead designer
