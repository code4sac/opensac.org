import '@/styles/components/footer.scss'

/**
 * Default application footer.
 * @returns {JSX.Element}
 * @constructor
 */
export default function AppFooter() {
  return (
    <footer>
      <div className="footerContainerTop">
        <div className="footerMessage">
          <h2 className="footerMessageHeader">Get Involved.</h2>
          <p className="footerMessageParagraph">Open Sacramento is a tax-deductible civic-tech community dedicated to
            using technology and open data for positive civic change in Sacramento.</p>
        </div>

        <div className="footerActionLinks">
          <p className="footerActionLinksItem">
            Join us for our weekly meetings on <a href="/" className="footerActionLinksAnchor">meetup.</a>
          </p>
          <p className="footerActionLinksItem">
            See our <a href="/" className="footerActionLinksAnchor">projects.</a>
          </p>
          <p className="footerActionLinksItem">
            For any questions, visit our <a href="/" className="footerActionLinksAnchor">FAQs.</a>
          </p>
        </div>

        <div className="footerSocialMedia">
          <a href="/" className="footerSocialMediaLink">
            <img src="/img/socialmedia/facebook.svg" alt="Facebook" className="footerSocialMediaIcon" />
          </a>
          <a href="/" className="footerSocialMediaLink">
            <img src="/img/socialmedia/twitter.svg" alt="X" className="footerSocialMediaIcon" />
          </a>
          <a href="/" className="footerSocialMediaLink">
            <img src="/img/socialmedia/youtube.svg" alt="Youtube" className="footerSocialMediaIcon" />
          </a>
        </div>
      </div>

      <div className="footerBottomContainer">
        <div className="footerBottomTitle">Open Sacramento</div>
        <div className="footerBottomLinksContainer">
          <a href="/" className="footerBottomLink">get started</a>
          <a href="/" className="footerBottomLink">our team</a>
          <a href="/" className="footerBottomLink">code of conduct</a>
        </div>
      </div>
    </footer>
  )
}