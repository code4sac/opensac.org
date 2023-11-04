import './page.scss'

export default function Home() {
  return (
    <>
      <section className={'home-section-dark home-landing-image'}>
        <div className={'home-landing-container'}>
          <h1 className={'home-landing-heading'}>
            <span>We are</span> <br />
            Open Sacramento
          </h1>
          <p className={'home-section-paragraph'}>
            Join us to address civic challenges and enhance public services for
            Sacramento residents through technology and open data. Volunteer now for a
            better future!
          </p>
          <div className={'home-buttons-group'}>
            <a href="" className={'home-button'}>Get Started</a>
            <a href="" className={'home-button home-button-alt'}> View Projects</a>
          </div>
        </div>
      </section>

      <section className={'home-section-light'}>
        <div className={'home-section-light-container home-section-heading-underline'}>
          <h1 className={'heading-section'}>Who we are</h1>
          <h2 className={'heading-section-sub'}>
            Building a Brighter Sacramento Through Innovation and Technology
          </h2>
        </div>

        <div className={'home-section-light-container'}>
          <p className={'home-section-paragraph'}>
            Open Sacramento is
            <span className={'home-section-paragraph-bold'}>
              a community of technologists, developers, designers, and civic-minded individuals</span>
            who come together to use technology and open data to address civic
            challenges and improve public services in the Sacramento area.
            <br /><br />
            We are passionate about fostering civic innovation and creating positive
            impact through technology and community engagement.
          </p>
        </div>
      </section>

      <section className={'home-section-dark home-section-dark-flex home-about-image'}>
        <div className={'home-about-container'}>
          <div
            className={'home-section-dark-container home-section-heading-underline underline-alt'}>
            <h1 className={'heading-section heading-section-alt'}>What we do</h1>
            <h2 className={'heading-section-sub'}>
              Building a Better Future <br />
              in Sacramento
            </h2>
          </div>
          <p className={'home-section-paragraph'}>
            Our mission is done by uniting programmers, designers, and other talents;
            we transform ideas into tangible solutions that impact lives throughout
            the Sacramento area. Together, we drive innovation forward, building a
            future where open source technology empowers citizens and uplifts our
            city.
            <span className={'home-section-paragraph-bold'}>Join us in driving innovation through open-source tech and empowering
              our community!</span>
          </p>
        </div>
        <img
          src="../img/open_data_day_curved.png"
          alt="Open Data Day"
          className={'home-section-action-image'} />
      </section>

      <section className={'home-section-dark home-services-container'}>
        <div
          className={'home-section-dark-container home-section-heading-underline underline-alt'}>
          <h1 className={'heading-section heading-section-alt'}>Our services</h1>
          <h2 className={'heading-section-sub'}>Explore Our Engagement Options</h2>
        </div>
        <div className={'home-numbered-grid'}>
          <div className={'home-numbered-container'}>
            <img src="/img/1.png" alt="Open Data Day" />
            <h2 className={'home-numbered-header'}>Engage with Our Community</h2>
            <p className={'home-numbered-paragraph'}>
              Connect with like-minded individuals, share ideas, and collaborate on
              projects at our meetups. Join us to be a part of a vibrant community
              dedicated to positive change through technology.
            </p>
            <a className={'home-button home-button-numbered" href="'}>Visit Meetup</a>
          </div>

          <div className={'home-numbered-container'}>
            <img src="/img/2.png" alt="Open Data Day" />
            <h2 className={'home-numbered-header'}>Drive Innovation with Projects</h2>
            <p className={'home-numbered-paragraph'}>
              Discover how you can contribute your skills to projects that address
              real challenges and enhance our city. Be part of a dynamic team working
              on solutions that make a difference.
            </p>
            <a className={'home-button home-button-numbered" href="'}>See Our Projects</a>
          </div>

          <div className={'home-numbered-container'}>
            <img src="/img/3.png" alt="Open Data Day" />
            <h2 className={'home-numbered-header'}>Pitch Your Vision</h2>
            <p className={'home-numbered-paragraph'}>
              Have a project idea that can benefit the community? Pitch it to us and
              join forces with our community of innovators to bring your vision to
              life, driving positive change in Sacramento.
            </p>
            <a className={'home-button home-button-numbered" href="'}>Pitch a Project</a>
          </div>
        </div>
      </section>

      <section className={'home-section-light'}>
        <div className={'home-section-light-container home-section-heading-underline'}>
          <h1 className={'heading-section'}>Why volunteer</h1>
          <h2 className={'heading-section-sub'}>
            Empower Change with <br />
            Open Sacramento
          </h2>
        </div>

        <div className={'home-section-light-container'}>
          <p className={'home-section-paragraph'}>
            <span className={'home-section-paragraph-bold'}>
              Ready to make a difference?
            </span>
            Join us at Open Sacramento and use your skills to drive positive change
            through technology and collaboration.
            <span className={'home-section-paragraph-bold'}>
              Whether you're a designer, developer, or anyone eager to volunteer,
              together we're enhancing community services, amplifying voices, and
              giving you the opportunity to improve your resume and portfolio.
            </span>
            It's a journey of innovation and empowerment waiting for you. Your impact
            starts <a href="/" className={'home-section-paragraph-anchor'}>here!</a>
          </p>
        </div>
      </section>

      <section className={'home-section-dark home-projects-section'}>
        <div className={'home-projects-info-container'}>
          <div
            className={'home-section-dark-container home-section-heading-underline underline-alt'}>
            <h1 className={'heading-section heading-section-alt'}>our projects</h1>
            <h2 className={'heading-large-section-sub'}>
              Driving Innovation Through Tech and Collaboration
            </h2>
          </div>
          <p className={'home-section-paragraph'}>
            We tackle tech projects addressing civic issues, enhancing services in
            Sacramento. From open data initiatives to government services and
            community platforms,
            <span className={'home-section-paragraph-bold'}>
              our open-source tech and collaboration drive innovation</span>
            for transparent, efficient, engaged local governance.
          </p>
          <a href="" className={'home-button home-button-alt'}>Find Projects</a>
        </div>
        <div className={'swiper mySwiper'}>
          <div className={'swiper-wrapper'}>
            <div className={'swiper-slide'}>
              <div className={'slide-content'}>
                <h2 className={'heading-section-sub'}>TrashAI</h2>
                <p className={'home-section-dark-paragraph'}>
                  Developing machine learning technology to identify trash in images.
                </p>
              </div>
              <img
                src="../img/TrashAI2.png"
                alt="Open Data Day"
                className={'home-section-project-image'} />
            </div>

            <div className={'swiper-slide'}>
              <div className={'slide-content'}>
                <h2 className={'heading-section-sub'}>TrashAI</h2>
                <p className={'home-section-dark-paragraph'}>
                  Developing machine learning technology to identify trash in images.
                </p>
              </div>
              <img
                src="../img/TrashAI2.png"
                alt="Open Data Day"
                className={'home-section-project-image'} />
            </div>

            <div className={'swiper-slide'}>
              <div className={'slide-content'}>
                <h2 className={'heading-section-sub'}>TrashAI</h2>
                <p className={'home-section-dark-paragraph'}>
                  Developing machine learning technology to identify trash in images.
                  Donations fuel our technology
                </p>
              </div>
              <img
                src="../img/TrashAI2.png"
                alt="Open Data Day"
                className={'home-section-project-image'} />
            </div>
          </div>
          <div className={'swiper-pagination'}></div>
        </div>
      </section>

      <section className={'home-section-dark donate-section'}>
        <div
          className={'home-section-dark-container home-section-heading-underline donate-section-underline'}>
          <h1 className={'heading-large-section-sub'}>Help Support Open Sacramento</h1>
        </div>
        <div className={'donate-section-paragraph-container'}>
          <p className={'home-section-dark-paragraph'}>
            <span
            >Your support, whether through donations or volunteering,</span
            >
            is instrumental in driving positive change with Open Sacramento.
            <br /><br />
            <span
            >Donations fuel our technology</span
            >-driven initiatives that address civic challenges, enhance public
            services, and amplify community voices.
            <br /><br />
            <span
            >When you volunteer, you actively contribute your skills</span
            >
            - be it coding, designing, or any other expertise - to create tangible
            solutions that make a real impact.
            <br /><br />
            Together, we shape a better future for our city, amplifying voices,
            enhancing services, and driving innovation.
            <span
            >Join us today and be a catalyst for lasting, community-driven
              transformation!</span
            >
          </p>
          <div className={'home-buttons-group'}>
            <a href="" className={'home-button home-button-numbered'}>Get Started</a>
            <a href="" className={'home-button home-button-alt'}>Donate</a>
          </div>
        </div>
      </section>
    </>
  )
}
