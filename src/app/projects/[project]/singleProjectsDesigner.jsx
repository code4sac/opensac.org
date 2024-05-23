import { upperFirst } from "@/utils/string";

export default function SingleProjectsDesigner({ sectionType, data }) {
  return (
      <section id="designer" className={`project-contributor-container`}>
        <div className={`project-main-heading-container projects-main-heading-underline`}>
          <h2 className={`project-heading project-heading-underline`}>Designer</h2>
        </div>
        <p className={`project-section-paragraph`}>
          Designers can actively contribute to the project by creating content, updating Figma files, and more.
        </p>
        <hr className={`project-info-line-top-2`}/>
        <div className={`project-info-container project-info-line-top`}>
          <p className={`project-info-label`}>Difficulty</p>
          <p className={`project-info-text`}>
            {upperFirst(data.meta.contributing.designer.difficulty)}
          </p>
        </div>
        <hr className={`project-info-line-top-2`}/>
        <div className={`project-info-container project-info-line-top`}>
          <p className={`project-info-label`}>Prototyping Tool</p>
          <p className={`project-info-text`}>
            Figma
          </p>
        </div>
        <hr className={`project-info-line-top-2`}/>
        <div className={`project-info-container project-info-line-top`}>
          <p className={`project-info-label`}>Version</p>
          <p className={`project-info-text`}>
            2
          </p>
        </div>
        <hr className={`project-info-line-top-2`}/>
        <div className={`project-info-container project-info-line-top`}>
          <p className={`project-info-label`}>Technologies</p>
          <p className={`project-info-text`}>
            {data.meta.contributing.designer.technologies}
          </p>
        </div>
        <hr className={`project-info-line-top-2`}/>
        <div className={`project-info-line-top`}>
          <div className={`project-info-container`}>
            <p className={`project-info-label`}>Version Control</p>
            <p className={`project-info-text`}>
              {data.meta.contributing.developer.version_control}
            </p>
            <p className={`project-info-label`}>Repo</p>
            <p className={`project-info-text`}>
              {data.meta.contributing.developer.repo}
            </p>
          </div>
        </div>
        <hr className={`project-info-line-top-2`}/>
        <div className={`project-info-container project-info-line-top project-info-line-bottom`}>
          <p className={`project-info-label`}>Ways to Contribute</p>
          <p className={`project-info-text`}>
            {data.meta.contributing.designer.ways_to_contribute}
          </p>
        </div>
        <hr className={`project-info-line-top-2`}/>
      </section>
  );
}
