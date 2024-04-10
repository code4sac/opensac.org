import Link from "next/link";

export default function SingleProjectsContribute({ sectionType, data }) {
  return (
    <>
      <section
        id="how-to-contribute"
        className={`project-section-${sectionType}`}
      >
        <h2 className="project-heading-section">How to Contribute</h2>
        <p className="project-section-paragraph">
          Open Sacramento is run by volunteers. We are always looking for help.
          Explore the various ways you can make a difference.
        </p>
        <h4 className="project-heading-section">Get Involved As</h4>
        <div>
          <Link href="">Developer</Link>
          <Link href=".">Designer</Link>
          <Link href=".">Other</Link>
        </div>
      </section>
    </>
  );
}
