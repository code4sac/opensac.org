/**
 * Instructions for project pitches.
 * @returns {JSX.Element}
 */
export default function PitchSectionInstructions({sectionType}) {
  return (
    <section className={`section-${sectionType} section-container2`}>
      <div className={`pitch-instructions-container`}>
        <div className={`pitch-instructions-info-container`}>
          <div className={`pitch-${sectionType}-heading-container`}>
            <h1 className={`general-heading-section general-heading-section-alt`}>pitching a project</h1>
            <h2 className={`pitch-heading-section-sub`}>
              How to Start a New Project
            </h2>
          </div>
          <p className={`pitch-heading-paragraph`}>
            Ready to turn your civic tech idea into reality?
            Follow these simple steps to pitch your project idea to Open Sacramento.
          </p>
        </div>

        <div className={`pitch-instructions-steps-container`}>
          <div className={`pitch-instructions-step-container`}>
            <img src="/img/1.png" alt="Step 1" className={`pitch-step-image`}/>
            <div className={`pitch-step-container`}>
              <h3 className={`pitch-step-header`}>Check Eligibility</h3>
              <div className={`pitch-step-paragraph`}>
                Before presenting your project idea, it&apos;s crucial to verify
                its alignment with our mission and principles.
                Please review the following conditions to ensure your project falls within our scope:
                <ol>
                  <li>Open Source</li>
                  <li>Free to Distribute</li>
                  <li>Non-Profit</li>
                  <li>Community-Benefiting</li>
                </ol>
                These criteria will help ensure your project is in harmony with our mission and objectives.
              </div>
            </div>
          </div>

          <div className={`pitch-instructions-step-container`}>
            <img src="/img/2.png" alt="Step 2" className={`pitch-step-image`}/>
            <div className={`pitch-step-container`}>
              <h3 className={`pitch-step-header`}>Review our Code of Conduct</h3>
              <p className={`pitch-step-paragraph`}>
                Familiarize yourself with our Code of Conduct, which outlines the principles and expectations
                guiding our community. We value respectful and inclusive interactions to create a positive
                environment for everyone. Please read and understand <a href="/" className="pitch-step-anchor">our
                guidelines</a> for a positive experience.
              </p>
            </div>
          </div>

          <div className={`pitch-instructions-step-container`}>
            <img src="/img/3.png" alt="Step 3" className={`pitch-step-image`}/>
            <div className={`pitch-step-container`}>
              <h3 className={`pitch-step-header`}>Complete Project Form</h3>
              <p className={`pitch-step-paragraph`}>
                Fill out a <a href="/" className="pitch-step-anchor">Project Form</a> to formally propose your idea.
                After submitting, please allow 1-2 weeks for our team to review your project proposal.
                We&apos;ll carefully assess its alignment with our mission and guidelines.
                During this time, someone from our team will reach out to discuss your project further.
              </p>
            </div>
          </div>

          <div className={`pitch-instructions-step-container`}>
            <img src="/img/4.png" alt="Step 4" className={`pitch-step-image`}/>
            <div className={`pitch-step-container`}>
              <h3 className={`pitch-step-header`}>Attend Weekly Meetings (optional)</h3>
              <p className={`pitch-step-paragraph`}>
                For the fastest way to engage with our community and potentially pitch your project,
                consider attending our weekly meetings posted on Meetup. These meetings provide an excellent
                opportunity to connect with our team, discuss your project ideas,
                and explore collaborations within our community.
              </p>
            </div>
          </div>

          <div className={`pitch-instructions-step-container`}>
            <img src="/img/5.png" alt="Step 5" className={`pitch-step-image`}/>
            <div className={`pitch-step-container`}>
              <h3 className={`pitch-step-header`}>Await Decision</h3>
              <p className={`pitch-step-paragraph`}>
                After submitting your project form, please patiently wait for approval or notification of rejection.
                Once your project is approved, a team member will provide you with further directions and guidance
                to get started on your exciting journey with Open Sacramento!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`pitch-sidebar-container`}>
        <div className={`get-started`}>
          <img src="/img/about/rectangle.png" alt="rectangle"/>
          <p className={`get-started-anchor`}>
            Not a volunteer yet?
            <br/>
            <a href="/">Get Started</a>
          </p>
        </div>
        <div className={`pitch-anchors-container`}>
          <a href="/" className={`pitch-anchor`}>Code of Conduct</a>
          <a href="/" className={`pitch-anchor`}>New Member Form</a>
          <a href="/" className={`pitch-anchor`}>Meeting Link</a>
        </div>
      </div>
    </section>
  )
}