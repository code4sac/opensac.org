import { upperFirst } from "@/utils/string";
import Link from "next/link";

export default function SingleProjectsResources({ sectionType, data }) {
  if (!data.meta.resources) {
    return <section id = "resources" className={`project-section-${sectionType}`}></section>
  }
  return (
    <>
      <section id="resources" className={`project-section-${sectionType}`}>
        <h2 className="project-heading-section">Resources</h2>
        <p className="project-section-paragraph">
          Explore our resources section on the project page to discover a wealth
          of design assets, tutorials, and tools that will inspire and empower
          your creative journey.
        </p>
        <p>Documentation</p>{" "}
        {(() => {
          if (data.meta.resources.documentation) {
            <Link href={data.meta.resources.documentation}>Download</Link>;
          }
        })()}
        {(() => {
          if (data.meta.resources.tutorials) {
            let tutorialCounter = 1;
            data.meta.resources.tutorials.map((link) => (
              <>
                <p>Tutorial {tutorialCounter++}</p>
                <Link key={link} href={link}>
                  Download
                </Link>
              </>
            ));
          }
        })()}
        <p>Meeting Times</p>
        <p>{data.meta.resources.meeting_times}</p>
        <p>Office Hours</p>
        <p>{data.meta.resources.office_hours}</p>
      </section>
    </>
  );
}
