/**
 * Frequently-asked questions start section.
 * @returns {JSX.Element}
 */
export default function FaqSectionStart({sectionType}) {
  return (
    <section className={`general-section-${sectionType}`}>
      <div
        className={`general-section-${sectionType}-container faq-section-heading-underline`}
      >
        <h1 className="general-heading-section">FAQ</h1>
        <h2 className="sub-heading faq-heading-section-sub">Frequently Asked Questions</h2>
      </div>

      <div className={`general-section-${sectionType}-container`}>
        <p className="faq-section-paragraph">
          Welcome to our FAQ page, designed to provide you with quick and
          informative answers to commonly asked questions about Open Sacramento.
          Whether you're curious about volunteering, projects, collaborations,
          or more, we've compiled a list of queries to guide you through our
          mission, initiatives, and how you can get involved. Browse through the
          questions to find the information you need and embark on a journey of
          civic engagement, innovation, and community empowerment.
        </p>
      </div>
    </section>
  );
}
