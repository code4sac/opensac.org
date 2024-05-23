
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
          <button className = {`project-button ${contributeAs === 'developer' && 'project-button-alt'}`} onClick={() => setContributeAs("developer")}>Developer</button>
          <button className={`project-button ${contributeAs === 'designer' && 'project-button-alt'}`} onClick={() => setContributeAs("designer")}>Designer</button>
          <button className={`project-button ${contributeAs === 'other' && 'project-button-alt'}`} onClick={() => setContributeAs("other")}>Other</button>
        </div>
      </section>
    </>
  );
}
