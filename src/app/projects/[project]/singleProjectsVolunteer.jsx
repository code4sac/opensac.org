export default function SingleProjectsVolunteer({ sectionType, data }) {
  return (
    <>
      <section id="how-to-volunteer" className={`project-info-container-alt`}>
        <div className={``}>
            <p className={`project-heading-alt`}>Volunteer</p>
            <h2 className={`project-heading project-heading-underline`}>Why Join Open Sacramento?</h2>
          <p className={`project-paragraph`}>
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
            <a href={data.html_url}>Get Started</a>
          </p>
        </div>
      </section>
    </>
  );
}
