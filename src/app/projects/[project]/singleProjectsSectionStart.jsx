import Link from "next/link";
import moment from "moment";

/**
 * Single project start section.
 *
 * @returns {JSX.Element}
 */
export default function SingleProjectsSectionStart({ sectionType, data }) {
  return (
    <section className={`project-section-start`}>
      <div 
        className={`project-main-image`}
        style={{backgroundImage: `url(https://raw.githubusercontent.com/${data.full_name}/main/${data.meta.image_url})`}}
      >
      </div>
      <div className={`project-main-info-container`}>
        <div className={`project-main-heading-container projects-main-heading-underline`}>
        <span className={`project-type`}>
          {data.meta.project_type}
        </span>
          <h1 className={`project-heading`}>{data.meta.title}</h1>
        </div>
        <span className={`project-status-label upper-first`}>Project Status: {data.meta.project_status}</span>
        <p className={`project-paragraph`}>{data.meta.description}</p>
        <p className={`project-paragraph`}>Last Updated: {`${moment(data.updated_at).format("ddd MMM D, H:mma")}`}</p>
        <div className={`project-button-container`}>
          <Link
            href={data.html_url} // source code
            target="_blank"
            className={`project-button project-button-alt`}
          >
            View Source Code
          </Link>
          <Link href="/get-started" className={`project-button project-button-alt`}>
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
