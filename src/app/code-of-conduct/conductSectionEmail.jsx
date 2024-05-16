export default function conductSectionBullets({sectionType}) {
  return (
    <section className={`conduct-${sectionType}-theme`}>
      <div className={`conduct-email-header-container`}>
        <div className={`conduct-section-heading-container conduct-heading-underline underline-alt`}>
          <h1 className={`conduct-heading-section conduct-heading-section-alt`}>anti-harassment reporting</h1>
          <h2 className={`conduct-sub-h1-heading`}>
            Email Template
          </h2>
        </div>
      </div>

      <div className={`conduct-email-template-container`}>
        <p className={`conduct-item-paragraph`}>
          SUBJECT: Safe Space alert at [EVENT NAME]
        </p>
        <p className={`conduct-item-paragraph`}>
          I am writing because of harassment at a Open Sacramento Communities event, (NAME, PLACE, DATE OF EVENT).
        </p>
        <p className={`conduct-item-paragraph`}>
          You can reach me at (CONTACT INFO). Thank you.
        </p>
      </div>
    </section>
  )
}