import { upperFirst } from "@/utils/string";
import Link from "next/link";


/**
 * Single project start section.
 *
 * @returns {JSX.Element}
 */
export default function SingleProjectsSectionStart({ sectionType, data }) {
  return (
    <section className={`project-info-container`}>
        <div>
        <h2 className="project-heading-alt">
          {data.meta.project_type.toUpperCase()}
        </h2>
        <h1 className="project-heading project-heading-underline">{data.meta.title}</h1>
        <div className={`project-status-label`}>
          Project Status: {upperFirst(data.meta.project_status)}
        </div>
        <p className="project-paragraph">{data.meta.description}</p>
        <p className="project-paragraph">{`Last Updated: ${data.updated_at}`}</p>
        <div className={`project-button-container`}>
          <Link
            href={data.html_url} // source code
            target="_blank"
            className={`project-button project-button-alt`}
          >
            View Source Code
          </Link>
          <Link href="" className={`project-button project-button-alt`}>
            Get Started
          </Link>
        </div>
      </div>
      <img 
          className='project-main-image' 
          src = {`https://raw.githubusercontent.com/${data.full_name}/main/${data.meta.image_url}`}>
      </img>
    </section>
  );
}
