import Link from "next/link";

/**
 * Get started instructions section.
 * @returns {JSX.Element}
 */
export default function SidebarSection({children, sectionType}) {
  return (
    <section className={`section-${sectionType} section-container2`}>
      <div className={`instructions-container`}>
        {children}
      </div>
      <div className={`sidebar-container`}>
        <div className={`get-started`}>
          <img src="/img/about/rectangle.png" alt="rectangle"/>
          <p className={`get-started-anchor`}>
            Not a volunteer yet?
            <br/>
            <Link href="/get-started">Get Started</Link>
          </p>
        </div>
        <div className={`anchors-container`}>
          <Link href="/code-of-conduct" className={`anchor`}>Code of Conduct</Link>
          <Link
            className={`anchor`}
            href="https://docs.google.com/forms/d/e/1FAIpQLSfvzzvz8lCwUD8TEDiPt7ZmN34AB0dhG61590KM_scxYoZf5w/viewform"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to new member form.">New Member Form</Link>
          <Link
            className={`anchor`}
            href="https://www.meetup.com/code4sac/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to Meetup.">Meeting Link</Link>
        </div>
      </div>
    </section>
  );
};