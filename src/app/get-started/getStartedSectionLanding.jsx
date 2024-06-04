/**
 * Get started landing section.
 * @returns {JSX.Element}
 */
export default function GetStartedSectionLanding({sectionType}) {
  return (
    <section className={`general-section-${sectionType}`}>
      <div className={`general-section-${sectionType}-container heading-underline`}>
        <h1 className={`general-heading-section`}>GET STARTED</h1>
        <h2 className={`sub-heading`}>
          Ready to Volunteer with Open Sacramento
        </h2>
      </div>

      <div className={`general-section-${sectionType}-container`}>
        <p className={`section-paragraph`}>
          We're thrilled that you're eager to join our community of civic-minded individuals and make a positive impact
          on Sacramento. Volunteering with Open Sacramento is a rewarding experience that allows you to use your
          skills
          for the betterment of our city. <span className={`paragraph-bold`}>Whether you're a designer, developer, or anyone else passionate
            about civic tech,</span> you'll find step-by-step instructions below to help you get started
          on your journey of civic tech and community empowerment.
        </p>
      </div>
    </section>
  )
}