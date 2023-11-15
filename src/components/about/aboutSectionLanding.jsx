/**
 * About landing section.
 * @returns {JSX.Element}
 */
export default function AboutSectionLanding() {
  return (
    <section className={`about-section-landing`}>
      <div className={`about-section-light-container about-heading-underline`}>
        <h1 className={`about-heading-section`}>About Us</h1>
        <h2 className={`about-sub-heading`}>
          Connecting Civic-Minded Technologists
        </h2>
      </div>

      <div className={`about-section-light-container`}>
        <p className={`about-section-paragraph`}>
          <span className={`about-section-paragraph-bold`}>
            We are a passionate and diverse group of technologists, developers, designers, and
            civic-minded individuals united by a common goal:
          </span> leveraging technology and open data to address civic challenges and enhance public services in the Sacramento area.
          Our community thrives on collaboration, innovation, and a shared commitment to driving positive change.
        </p>
      </div>
    </section>
  )
}