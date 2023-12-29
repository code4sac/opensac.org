/**
 * contact landing section.
 * @returns {JSX.Element}
 */
export default function ContactSectionLanding() {
  return (
    <section className={`contact-section-landing`}>
      <div className={`contact-section-light-container contact-heading-underline`}>
        <h1 className={`contact-heading-section`}>Contact Us</h1>
        <h2 className={`contact-sub-heading`}>
          Contact<br></br> Open Sacramento
        </h2>
      </div>

      <div className={`contact-section-light-container`}>
        <p className={`contact-section-paragraph`}>
          Get in touch with us through our contact page for questions, ideas, or just to say hello. <span
          className={`contact-section-paragraph-bold`}>
            We welcome inquiries about volunteering, projects, collaborations, or anything related to our mission of using technology for positive change.
          </span> Your feedback and engagement are crucial to our progress. We're eager to hear from you and build a
          better future for our community!
        </p>
      </div>
    </section>
  )
}