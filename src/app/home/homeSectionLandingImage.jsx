import Link from "next/link";

/**
 * Home projects section.
 * @returns {JSX.Element}
 */
export default function HomeSectionLandingImage({ sectionType }) {
  return (
    <div className={'home-landing-background'}>
      <section className={`home-landing-image`}>
        <div className={`home-landing-container`}>
          <h1 className={`home-landing-heading`}>
            <span>We are</span> <br />
            Open Sacramento
          </h1>
          <p className={`home-section-paragraph`}>
            Join us to address civic challenges and enhance public services for
            Sacramento residents through technology and open data. Volunteer now for a
            better future!
          </p>
          <div className={`home-buttons-group`}>
            <Link href="/get-started" className={`home-button`}>Get Started</Link>
            <Link href="" className={`home-button home-button-alt`}>View Projects</Link>
          </div>
        </div>
      </section>
    </div>
  )
}