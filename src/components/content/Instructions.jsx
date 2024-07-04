import instructions from "@/app/get-started/instructions.json";
import HeaderUnderline from "@/components/content/HeaderUnderline";

/**
 * Instructions content for getting started and pitches.
 * @returns {JSX.Element}
 */
export default function Instructions({children, sectionType}) {
  return (
    <>
      <div className={`instructions-info-container`}>
        <HeaderUnderline className={'split-section-content-container'} sectionType={sectionType} title="Getting started" description="Steps to Volunteer"></HeaderUnderline>
        <p className={`heading-paragraph-large`}>
          Discover how you can become a valued volunteer at Open Sacramento.
          Follow these simple steps to join our community of technologists, developers,
          and civic-minded individuals dedicated to driving positive change through technology and collaboration.
        </p>
      </div>

      <div className={`instructions-steps-container`}>
        {instructions.map((item, index) => (
          <div className={`instructions-step-container`} key={index}>
            <img src={`/img/${item.id}.png`} alt={`Step ${item.id}`} className={`step-image`}/>
            <div className={`step-container`}>
              <h3 className={`step-header`}>{item.title}</h3>
              <p className={`step-paragraph`}>
                {item.body} {item.id === 4 && (
                <a href="/" className="step-anchor">Project Form </a>
              )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>);
}