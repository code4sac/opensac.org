export default function SingleProjectsScreenshots({ sectionType, data }) {
  return (
    <>
      <section id="screenshots" className={`project-section-${sectionType}`}>
        <h2 className="project-heading-section">Screenshots</h2>
        <p className="project-section-paragraph">
          Explore our project through screenshots, providing visual insights
          into its design and functionality.
        </p>
        <div className="project-screenshot-container">
          {data.meta.screenshots.map((screenshot) => (
            <img key = {data.full_name.concat(screenshot)}
            src={`https://raw.githubusercontent.com/${data.full_name}/main/${screenshot}`}></img>
          ))}
          
        </div>
      </section>
    </>
  );
}
