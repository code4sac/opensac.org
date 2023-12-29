import Link from "next/link";

/**
 * Home donate section.
 * @returns {JSX.Element}
 */
export default function HomeSectionDonate({sectionType}) {
  return (
    <section className={`home-section-${sectionType} donate-section`}>
      <div
        className={`home-section-${sectionType}-container home-section-heading-underline donate-section-underline md:container md:mx-auto`}>
        <h1 className={`heading-large-section-sub`}>Help Support Open Sacramento</h1>
      </div>
      <div className={`donate-section-paragraph-container`}>
        <p className={`home-section-${sectionType}-paragraph`}>
          <span>Your support, whether through donations or volunteering,</span> is instrumental in driving positive
          change with Open Sacramento.<br/><br/><span>Donations fuel our technology</span>-driven initiatives that
          address civic challenges, enhance public services, and amplify community voices.<br/><br/><span> When you volunteer, you actively contribute your skills </span>-
          be it coding, designing, or any other expertise - to create tangible solutions that make a real
          impact.<br/><br/>Together, we shape a better future for our city, amplifying voices, enhancing services, and
          driving
          innovation.<span> Join us today and be a catalyst for lasting, community-driven transformation!</span>
        </p>
        <div className={`home-buttons-group`}>
          <Link href="/get-started" className={`home-button home-button-numbered`}>Get Started</Link>
          <Link href="" className={`home-button home-button-alt`}>Donate</Link>
        </div>
      </div>
    </section>
  )
}
