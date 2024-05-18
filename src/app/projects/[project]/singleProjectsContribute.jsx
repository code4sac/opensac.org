import Link from "next/link";

export default function SingleProjectsContribute({ sectionType, data }) {
  return (
    <>
      <section id="how-to-contribute" className="project-contribute-container">
        <div className="project-main-heading-container projects-main-heading-underline">
          <h2 className="project-heading project-heading-underline">How to Contribute</h2>
        </div>
        <p className="project-paragraph half-width">
          Open Sacramento is run by volunteers. We are always looking for help.
          Explore the various ways you can make a difference.
        </p>
        <h4 className="project-info-label">Get Involved As</h4>
        <div className = "project-button-container">
          <Link className = "project-button project-button-alt" href=".">Developer</Link> {/*TODO: FILL IN LINKS*/}
          <Link className = "project-button" href=".">Designer</Link>
          <Link className = "project-button" href=".">Other</Link>
        </div>
      </section>
    </>
  );
}
