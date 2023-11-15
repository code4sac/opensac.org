export default function FaqSectionStart({ sectionType }) {
  return (
    <section className={`faq-section-${sectionType}`}>
      <div
        className={`faq-section-${sectionType}-container faq-section-heading-underline`}
      >
        <h1 className="faq-heading-section">FAQ</h1>
        <h2 className="faq-heading-section-sub">Frequently Asked Questions</h2>
      </div>

      <div className={`faq-section-${sectionType}-container`}>
        <p className="faq-section-paragraph">
          Find answers to common queries about Code for Sacramento, our
          initiatives, and how you can get involved. If you have any additional
          questions, feel free to contact us for more information.
        </p>
      </div>
    </section>
  )
}
