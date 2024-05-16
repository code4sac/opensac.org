import Link from "next/link";

/**
 * Home default section.
 * @returns {JSX.Element}
 */
export default function HomeSectionDefault({sectionType}) {
  return (
    <section className={`home-section-${sectionType}`}>
      <div className={`home-section-${sectionType}-container home-section-heading-underline`}>
        <h1 className={`heading-section`}>Why volunteer</h1>
        <h2 className={`heading-section-sub`}>
          Empower Change with <br/>
          Open Sacramento
        </h2>
      </div>

      <div className={`home-section-${sectionType}-container`}>
        <p className={`home-section-paragraph`}>
          <span className={`paragraph-bold`}>
            Ready to make a difference?
          </span>
          Join us at Open Sacramento and use your skills to drive positive change
          through technology and collaboration.
          <span className={`paragraph-bold`}> Whether you're a designer, developer, or anyone eager to volunteer,
            together we're enhancing community services, amplifying voices, and
            giving you the opportunity to improve your resume and portfolio.
          </span> It's a journey of innovation and empowerment waiting for you.
          Your impact starts <Link href="/get-started" className={`home-section-paragraph-anchor`}>
          here!
        </Link>
        </p>
      </div>
    </section>
  )
}
