/**
 * Name change landing section.
 * @returns {JSX.Element}
 */
export default function NameChangeSectionLanding({ sectionType }) {
  return (
    <section className={`general-section-${sectionType}`}>
      <div
        className={`general-section-${sectionType}-container contact-heading-underline`}
      >
        <h1 className={`general-heading-section`}>Introducing</h1>
        <h2 className={`contact-sub-heading`}>Open Sacramento!</h2>
      </div>

      <div className={`general-section-${sectionType}-container`}>
        <p className={`contact-section-paragraph`}>
          We're thrilled to announce that{" "}
          <span className={`paragraph-bold`}>
            Code for Sacramento is now Open Sacramento!
          </span>{" "}
          While our name has changed, we're still the same passionate,
          volunteer-driven community of technologists, developers, designers,
          and civic-minded individuals dedicated to improving public services
          and solving civic challenges in the Sacramento area.
        </p>
        <br />
        <p className={`contact-section-paragraph`}>
          This rebrand comes in response to the{" "}
          <a href="https://codeforamerica.org/news/reflections-on-the-brigade-networks-next-chapter/">
            end of Code for America's Brigade program
          </a>
          , but it's also a reflection of who we've become.{" "}
          <span className={`paragraph-bold`}>Open Sacramento</span> better
          captures the incredible diversity of talents within our community.
          Yes, coding is still a big part of what we do, but our impact
          stretches beyond just writing lines of code— it's about collaboration,
          innovation, and using technology in all its forms to create real
          change. While our name has changed, we're still the same passionate,
          volunteer-driven community of technologists, developers, designers,
          and civic-minded individuals dedicated to improving public services
          and solving civic challenges in the Sacramento area.
        </p>
        <br />
        <p className={`contact-section-paragraph`}>
          From data analysis to design thinking, coding to project management,
          our volunteers bring a wide range of skills to the table. That's what
          makes us special, and that's why we believe this new name truly
          represents the heart of our mission. We're more excited than ever to
          continue this journey and invite you to be part of it! Let's keep
          making Sacramento better—together, under our new banner:{" "}
          <span className={`paragraph-bold`}>Open Sacramento</span>! Get started{" "}
          <a href="https://opensac.org/get-started">here</a>.
        </p>
        <br />
      </div>
    </section>
  );
}
