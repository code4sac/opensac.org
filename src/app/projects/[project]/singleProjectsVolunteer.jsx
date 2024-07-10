import Link from "next/link";

/**
 * Instructions for project page.
 * @returns {JSX.Element}
 */
export default function SingleProjectsVolunteer({ sectionType }) {
  return (
    <section id="how-to-volunteer" className={`project-volunteer-container`}>
      <div className={`project-volunteer-info-container`}>
        <p className={`project-type`}>Volunteer</p>
        <div className={`project-main-heading-container projects-main-heading-underline`}>
          <h2 className={`project-heading project-heading-underline`}>Why Join Open Sacramento?</h2>
        </div>
        <p className={`project-paragraph`}>
            Join us at Open Sacramento to collaborate on impactful civic tech projects and connect with a diverse
            community of like-minded individuals. It&apos;s a rewarding way to make a 
            meaningful difference in our city.
        </p>
        </div>
        <div className={`project-volunteer-image-container`}>
          <img className={`project-volunteer-image`} src="/img/about/rectangle.png" alt="rectangle"/>
          <p className={`project-volunteer-anchor`}>
            Not a volunteer yet?
            <br />
            <Link className={`project-volunteer-link`} href="/get-started">Get Started</Link>
          </p>
      </div>
    </section>  
  );
}
