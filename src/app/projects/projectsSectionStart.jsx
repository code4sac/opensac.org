/**
 * Projects start section.
 * @returns {JSX.Element}
 */
export default function ProjectsSectionStart({ sectionType }) {
  return (
    // TODO fix styling classes to represent the projects page?
    <section className={`projects-section-${sectionType}`}>
      <div
        className={`projects-section-${sectionType}-container projects-section-heading-underline`}
      >
        <h1 className="projects-heading-section">PROJECTS</h1>
        <h2 className="projects-heading-section-sub">
          Building a Better Community
        </h2>
      </div>

      <div className={`projects-section-${sectionType}-container`}>
        <p className="projects-section-paragraph">
          Discover the diverse range of projects at Open Sacramento, where we're
          using technology and collaboration to tackle civic challenges and
          enhance public services. Join our dedicated team of designers,
          developers, and passionate individuals to make a lasting impact on our
          community through innovative solutions.
        </p>
      </div>
    </section>
  );
}
