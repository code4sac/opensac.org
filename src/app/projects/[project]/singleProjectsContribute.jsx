import Link from "next/link";

export default function SingleProjectsContribute({ sectionType, contributeAs, setContributeAs }) {
  return (
    <>
      <section id="how-to-contribute" className={`project-contribute-container`}>
        <div className={`project-main-heading-container projects-main-heading-underline`}>
          <h2 className={`project-heading project-heading-underline`}>How to Contribute</h2>
        </div>
        <p className={`project-paragraph`}>
          Open Sacramento is run by volunteers. We are always looking for help.
          Explore the various ways you can make a difference.
        </p>
        <h4 className={`project-info-label`}>Get Involved As</h4>
        <div className = {`project-button-container`}>
          <Link className = {`project-button ${contributeAs === 'developer' && 'project-button-alt'}`} href="#developer" onClick={() => setContributeAs("developer")}>Developer</Link>
          <Link className={`project-button ${contributeAs === 'designer' && 'project-button-alt'}`} href="#designer" onClick={() => setContributeAs("designer")}>Designer</Link>
          <Link className={`project-button ${contributeAs === 'other' && 'project-button-alt'}`} href="#other" onClick={() => setContributeAs("other")}>Other</Link>
        </div>
      </section>
    </>
  );
}
