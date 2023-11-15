'use client'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import React from 'react'
import '@/styles/pages/home.scss'

/**
 * Home projects section.
 * @returns {JSX.Element}
 */
export default function HomeSectionProjects({ sectionType }) {

  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = React.useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <section className={`home-section-${sectionType} home-projects-section`}>
      <div className={`home-projects-info-container`}>
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

      <div className="test">
        <div className="navigation-wrapper">
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide">
              <div className="slide-content">
                <h2 className="heading-section-sub">TrashAI</h2>
                <p className="home-section-dark-paragraph">
                  Developing machine learning technology to identify trash in images.
                </p>
              </div>
              <img
                src="https://assets-global.website-files.com/64760069e93084646c9ee428/64776faa0c1419b8475edd51_www.awwwards.com_%20(1).jpg"
                alt="Open Data Day"
                className="home-section-project-image"
              />
            </div>
            <div className="keen-slider__slide">
              <div className="slide-content">
                <h2 className="heading-section-sub">TrashAI</h2>
                <p className="home-section-dark-paragraph">
                  Developing machine learning technology to identify trash in images.
                </p>
              </div>
              <img
                src="/img/TrashAI2.png"
                alt="Open Data Day"
                className="home-section-project-image"
              />
            </div>
            <div className="keen-slider__slide">
              <div className="slide-content">
                <h2 className="heading-section-sub">TrashAI</h2>
                <p className="home-section-dark-paragraph">
                  Developing machine learning technology to identify trash in images.
                </p>
              </div>
              <img
                src="https://assets.awwwards.com/awards/sites_of_the_day/2019/10/rogue-studio-website-design.jpg"
                alt="Open Data Day"
                className="home-section-project-image"
              />
            </div>
          </div>
        </div>
        {loaded && instanceRef.current && (
          <div className="dots">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx)
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                ></button>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

