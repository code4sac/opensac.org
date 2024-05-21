import { upperFirst } from "@/utils/string";
import Link from "next/link";

export default function SingleProjectsResources({ sectionType, data }) {
  const a = true;
  if (!data.meta.resources) {
    return <section id="resources" className={``}></section>;
  }
  return (
    <>
      <section id="resources" className="project-resources-container">
        <div className="project-main-heading-container projects-main-heading-underline">
          <h2 className="project-heading">Resources</h2>
        </div>
        <p className="project-paragraph">
          Explore our resources section on the project page to discover a wealth
          of design assets, tutorials, and tools that will inspire and empower
          your creative journey.
        </p>
        <hr className="project-brief-info-line-top"/>
        <div className="project-info-container project-info-line-top">
          <p className="project-info-label">Documentation</p>
          {a && <Link className="project-info-link" href="{data.meta.resources.documentation}">
                  Download
                </Link>}
          {/* {(() => {
            if (data.meta.resources.documentation) {
              return (
                <Link className="project-info-link" href={data.meta.resources.documentation}>
                  Download
                </Link>
              );
            }
          })()} */}
        </div>
        {(() => {
          if (data.meta.resources.tutorials) {
            let tutorialCounter = 1;
            return data.meta.resources.tutorials.map((link) => (
              <>
                <hr className="project-brief-info-line-top"/>
                <div className="project-info-container project-info-line-top">
                  <p className="project-info-label">
                    Tutorial {tutorialCounter++}
                  </p>
                  <Link className="project-info-link" key={link} href={link}>
                    Download
                  </Link>
                </div>
              </>
            ));
          }
        })()}
        <hr className="project-brief-info-line-top"/>
        <div className="project-info-line-top">
          <div className="project-info-container">
            <p className="project-info-label">Meeting Times</p>
            <p className="project-info-text">
              {data.meta.resources.meeting_times}
            </p>
            <p className="project-info-label">Office Hours</p>
            <p className="project-info-text">
              {data.meta.resources.office_hours}
            </p>
          </div>
        </div>
        <hr className="project-brief-info-line-top"/>
      </section>
    </>
  );
}
