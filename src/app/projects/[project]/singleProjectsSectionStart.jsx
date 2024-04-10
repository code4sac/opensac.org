import { upperFirst } from "@/utils/string";
import Link from "next/link";


/**
 * Single project start section.
 *
 * @returns {JSX.Element}
 */
export default function SingleProjectsSectionStart({ sectionType, data }) {
  return (
    <section className={`project-section-${sectionType}`}>
      <div className = {'list-horizontal-container'}>
      <div className = {`project-section-${sectionType}-container`}>
      <div
        className={`project-section-${sectionType}-container project-heading-section-underline`}
      >
        <h2 className="project-heading-section project-heading-section-alt">
          {data.meta.project_type.toUpperCase()}
        </h2>
        <h1 className="project-heading-section">{data.meta.title}</h1>
      </div>

      <div className={`project-section-${sectionType}-container`}>
        <div className={`project-section-${sectionType}-status-label`}>
          Project Status: {upperFirst(data.meta.project_status)}
        </div>
        <p className="project-section-paragraph">{data.meta.description}</p>
        <p className="project-section-paragraph">{data.updated_at}</p>
        <div className={`home-buttons-group`}>
          <Link
            href={data.html_url} // source code
            target="_blank"
            className={`home-button home-button-alt`}
          >
            View Source Code
          </Link>
          <Link href="" className={`home-button home-button-alt`}>
            Get Started
          </Link>
        </div>
      </div>
      </div>
      <img 
          className='single-project-image' 
          src = {`https://raw.githubusercontent.com/${data.full_name}/main/${data.meta.image_url}`}>
      </img>
      </div>
    </section>
  );
}
