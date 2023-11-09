export default function AboutSectionCollage() {
    return (
        <section className={`about-light-section`}>
        <div className={`about-grid-container`}>
          <img
            src="/img/about/towerbridgeside.png"
            alt="Tower bridge"
            className={`full-width-item`}
          />
          <img
            src="/img/about/tablet.png"
            alt="Tablet"
            className={`grid-item`}
          />
          <img
            src="/img/about/meeting.png"
            alt="Meeting"
            className={`grid-item`}
          />
        </div>
      </section>
    )
  }