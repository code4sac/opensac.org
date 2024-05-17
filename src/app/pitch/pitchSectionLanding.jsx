/**
 * Pitch landing section.
 * @returns {JSX.Element}
 */
export default function PitchSectionLanding({sectionType}) {
  return (
    <section className={`general-section-${sectionType}`}>
      <div className={`general-section-${sectionType}-container pitch-heading-underline`}>
        <h1 className={`pitch-heading-section`}>pitch a project</h1>
        <h2 className={`pitch-sub-heading`}>
          Contribute Your Project Idea
        </h2>
      </div>

      <div className={`general-section-${sectionType}-container`}>
        <p className={`pitch-section-paragraph`}>
          Share your innovative ideas and collaborate with our community to turn them into reality.
          Pitch your project to make a positive impact on Sacramento using technology and civic engagement.
        </p>
      </div>
    </section>
  )
}