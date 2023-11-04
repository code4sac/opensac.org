/**
 * Home projects section.
 * @returns {JSX.Element}
 * @constructor
 */
export default function HomeSectionProjects({sectionType}) {
  return (
    <section className={`home-section-${sectionType.dark} home-projects-section`}>
      <div className={`md:container md:mx-auto`}>
        <div
          className={`home-section-${sectionType.dark}-container home-section-heading-underline underline-alt`}>
          <h1 className={`heading-section heading-section-alt`}>our projects</h1>
          <h2 className={`heading-large-section-sub`}>Driving Innovation Through Tech and Collaboration</h2>
        </div>
        <p className={`home-section-paragraph`}>
          We tackle tech projects addressing civic issues, enhancing services in Sacramento. From open data initiatives
          to government services and community platforms,
          <span className={`home-section-paragraph-bold`}>our open-source tech and collaboration drive innovation</span>
          for transparent, efficient, engaged local governance.
        </p>
        <a href="" className={`home-button home-button-alt`}>Find Projects</a>
      </div>
    </section>
  )
}

