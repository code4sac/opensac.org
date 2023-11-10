export default function AboutSectionOpportunities() {
    return (
        <section className={`about-section-dark about-join-container`}>
        <div className={`opportunities-container`}>
          <div className={`opportunities-intro-container`}>
            <div
              className={`about-dark-heading-container about-heading-underline about-underline-alt`}
            >
              <h1 className={`about-heading-section about-heading-section-alt`}>opportunities</h1>
              <h2 className={`about-heading-section-sub`}>
                Join Our Team
              </h2>
            </div>
            <p className={`opportunities-intro-paragraph`}>
              <span className={`about-section-paragraph-bold`}>
                Are you passionate about civic tech leadership?
              </span> Open Sacramento invites you to join our Core Team, organizing events, fostering partnerships, 
              and driving community impact. 
              Shape Sacramento's civic innovation future – connect with us and explore joining our dedicated team.
            </p>
          </div>
          <div className={`opportunities-get-started`}>
            <img src="/img/about/rectangle.png" alt="rectangle"/>
            <p className={`opportunities-anchor`}>
              Not a volunteer yet?
              <br/>
              <a href="">Get Started</a>
            </p>
          </div>
        </div>
      
        <h3 className={`positions-heading`}>Open Positions within Our Team</h3>
      
        <div className={`positions-grid`}>
          <div className={`positions-container`}>
            <div className={`position-header`}>
              Community
            </div>
            <ul className={`positions-list`}>
              <li className={`position`}>Director of Fundraising</li>
              <li className={`position`}>Director of Community Engagement</li>
              <li className={`position`}>Director of Recruitment</li>
            </ul>
          </div>
      
          <div className={`positions-container`}>
            <div className={`position-header`}>
              Communications
            </div>
            <ul className={`positions-list`}>
              <li className={`position`}>Director of Product Management</li>
              <li className={`position`}>Director of Marketing & Engagement</li>
              <li className={`position`}>Director of Event Management</li>
            </ul>
          </div>
        </div>
      
        <div className={`positions-grid`}>
          <div className={`positions-container`}>
            <div className={`position-header`}>
              Product
            </div>
            <ul className={`positions-list`}>
              <li className={`position`}>Director of Frontend Engineering</li>
              <li className={`position`}>Director of Design & Usability</li>
            </ul>
          </div>
      
          <div className={`positions-container`}>
            <div className={`position-header`}>
              Platform
            </div>
            <ul className={`positions-list`}>
              <li className={`position`}>Director of Backend Engineering</li>
              <li className={`position`}>Director of Data Science</li>
            </ul>
          </div>
        </div>
      
        <div className={`get-started-bottom`}>
          <img src="/img/about/rectangle.png" alt="rectangle"/>
          <p className={`opportunities-anchor-bottom`}>
            Not a volunteer yet?
            <br/>
            <a href="">Get Started</a>
          </p>
        </div>
      </section>
    )
  }