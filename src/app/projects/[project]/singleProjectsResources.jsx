import { upperFirst } from "@/utils/string";
import Link from "next/link";

export default function SingleProjectsResources({ sectionType, data }) {
  if (!data.meta.resources) {
    return <section id="resources" className={``}></section>;
  }
  return (
    <>
      <section id="resources" className={``}>
        <h2 className="project-heading project-heading-underline">Resources</h2>
        <p className="project-section-paragraph">
          Explore our resources section on the project page to discover a wealth
          of design assets, tutorials, and tools that will inspire and empower
          your creative journey.
        </p>
        <div className="project-info-container project-info-line-top">
          <p className="project-info-label">Documentation</p>{" "}
          {(() => {
            if (data.meta.resources.documentation) {
              return (
                <Link
                  className="project-paragraph"
                  href={data.meta.resources.documentation}
                >
                  Download
                </Link>
              );
            }
          })()}
        </div>
        {(() => {
          if (data.meta.resources.tutorials) {
            let tutorialCounter = 1;
            return data.meta.resources.tutorials.map((link) => (
              <div className="project-info-container project-info-line-top">
                <p className="project-info-label">
                  Tutorial {tutorialCounter++}
                </p>
                <Link className="project-paragraph" key={link} href={link}>
                  Download
                </Link>
              </div>
            ));
          }
        })()}
        <div className="project-info-line-top">
          <div className="project-info-container">
            <p className="project-info-label">Meeting Times</p>
            <p className="project-paragraph">
              {data.meta.resources.meeting_times}
            </p>
          </div>
          <div className="project-info-container project-info-line-top">
            <p className="project-info-label">Office Hours</p>
            <p className="project-paragraph">
              {data.meta.resources.office_hours}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
