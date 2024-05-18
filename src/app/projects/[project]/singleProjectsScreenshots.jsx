export default function SingleProjectsScreenshots({ sectionType, data }) {
  let shownImages = data.meta.screenshots.map((screenshot) => (
            <img className = "project-screenshot" key = {data.full_name.concat(screenshot)}
            src={`https://raw.githubusercontent.com/${data.full_name}/main/${screenshot}`}></img>
          ));
  for (let i = shownImages.length; i < 6; i++) {
    shownImages.push(<div className = "project-blank-screenshot" key = {data.full_name + i}></div>);
  }


  return (
    <>
      <section id="screenshots" className="project-screenshots-container">
        <div className="project-main-heading-container projects-main-heading-underline">
          <h2 className="project-heading project-heading-underline">Screenshots</h2>
        </div>  
        <p className="project-paragraph">
          Explore our project through screenshots, providing visual insights
          into its design and functionality.
        </p>
        <div className="project-screenshot-container">
          {shownImages}
        </div>
      </section>
    </>
  );
}
