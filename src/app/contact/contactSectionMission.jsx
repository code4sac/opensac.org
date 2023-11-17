/**
 * contact mission section.
 * @returns {JSX.Element}
 */
export default function ContactSectionMission() {
  return (
    <section className={`contact-section-dark contact-section-mission`}>
      <div className={`mission-container`}>
        <div
          className={`contact-dark-heading-container contact-heading-underline contact-underline-alt`}
        >
          <h1 className={`contact-heading-section contact-heading-section-alt`}>CONTACT FORM</h1>
          <h2 className={`contact-heading-section-sub`}>
            Get In Touch
          </h2>
        </div>
        <p className={`contact-section-paragraph`}>
          <span className={`contact-section-paragraph-bold`}>
            Have questions or need assistance? 
          </span> Reach out to us using our form, and we'll get back to you as soon as possible.
          <br></br><br></br>
          Before reaching out, you might find quick answers to your queries in our <a href="/" className="contactActionLinksAnchor">Frequently Asked Questions (FAQs).</a>
          <br></br><br></br>
          Check out our weekly meetings on our <a href="/" className="contactActionLinksAnchor">meetup page.</a>
        </p>
      </div>
      {/* <img
        src="/img/open_data_day_curved.png"
        alt="Open Data Day"
        className={`contact-action-image`}
      /> */}
      <div>
        hello
      </div>
    </section>
  )
}