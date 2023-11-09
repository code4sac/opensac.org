export default function AboutSectionMission() {
    return (
        <section className={`about-section-dark about-section-mission`}>
        <div className={`mission-container`}>
          <div
            className={`about-dark-heading-container about-heading-underline underline-alt`}
          >
            <h1 className={`about-heading-section about-heading-section-alt`}>OUR MISSION</h1>
            <h2 className={`about-heading-section-sub`}>
              Driving Civic Innovation through Technology
            </h2>
          </div>
          <p className={`about-section-paragraph`}>
            At Open Sacramento, we roll up our sleeves and dive into a wide range of technology-driven projects. 
            From open data initiatives and government service enhancements to 
            community engagement platforms and education campaigns, <span className={`about-section-paragraph-bold`}>
              we're dedicated to creating innovative solutions that empower citizens and make our city a better place to live.
            </span>
          </p>
        </div>
        <img
          src="/img/open_data_day_curved.png"
          alt="Open Data Day"
          className={`about-action-image`}
        />
      </section>
    )
  }