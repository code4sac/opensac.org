export default function SingleProjectsVolunteer({ sectionType, data }) {
  return (
    <>
      <section id="how-to-volunteer" className={`project-section-${sectionType}`}>
        <div className={`volunteer-container`}>
            <p className={`project-paragraph-alt`}>Volunteer</p>
          <div
            className={`project-dark-heading-container project-heading-underline project-underline-alt`}
          >
            <h2 className={`project-heading`}>Why Join Open Sacramento?</h2>
          </div>
          <p className={`project-section-info`}>
            Join us at Open Sacramento to collaborate on impactful civic tech projects and connect with a diverse
            community of like-minded individuals. It's a rewarding way to make a 
            meaningful difference in our city.
          </p>
        </div>
        <div className={`project-get-started`}>
          <img src="/img/about/rectangle.png" alt="rectangle" />
          <p className={`project-volunteer-anchor`}>
            Not a volunteer yet?
            <br />
            <a href="/get-started">Get Started</a>
          </p>
        </div>
      </section>
    </>
  );
}
