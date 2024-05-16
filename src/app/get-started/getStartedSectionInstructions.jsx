import instructions from './instructions.json'
import Link from 'next/link'

/**
 * Get started instructions section.
 * @returns {JSX.Element}
 */
export default function GetStartedSectionInstructions() {
  return (
    <section className={`section-dark`}>
      <div className={`instructions-container`}>
        <div className={`instructions-info-container`}>
          <div className={`dark-heading-container`}>
            <h1 className={`heading-section heading-section-alt`}>GETTING STARTED</h1>
            <h2 className={`heading-section-sub`}>
              Steps to Volunteer
            </h2>
          </div>
          <p className={`heading-paragraph`}>
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
      </div>

      <div className={`sidebar-container`}>
        <div className={`get-started`}>
          <img src="/img/about/rectangle.png" alt="rectangle"/>
          <p className={`get-started-anchor`}>
            Not a volunteer yet?
            <br/>
            <a href="/">Get Started</a>
          </p>
        </div>
        <div className={`anchors-container`}>
          <Link href="/code-of-conduct" className={`anchor`}>Code of Conduct</Link>
          <a href="/" className={`anchor`}>New Member Form</a>
          <a className={`anchor`} href="https://www.meetup.com/code4sac/" target="_blank" rel="noopener noreferrer" aria-label="Link to Meetup.">Meeting Link</a>
        </div>
      </div>
    </section>
  )
}