/**
 * Frequently-asked questions start section.
 * @returns {JSX.Element}
 */
export default function ProjectsSectionStart({sectionType}) {
  return (
    <section className={`faq-section-${sectionType}`}>
      <div
        className={`faq-section-${sectionType}-container faq-section-heading-underline`}
      >
        <h1 className="faq-heading-section">PROJECTS</h1>
        <h2 className="faq-heading-section-sub">Building a Better Community</h2>
      </div>

      <div className={`faq-section-${sectionType}-container`}>
        <p className="faq-section-paragraph">
          Discover the diverse range of projects at Open Sacramento, where we're using technology and collaboration to
          tackle civic challenges and enhance public services. Join our dedicated team of designers, developers, and
          passionate individuals to make a lasting impact on our community through innovative solutions.
        </p>
      </div>
    </section>
  );
}
