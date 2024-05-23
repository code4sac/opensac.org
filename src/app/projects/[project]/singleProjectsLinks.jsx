import Link from "next/link";

const SingleProjectsLinks = () => {
  return (
    <section
        className={`project-info-line-top project-info-line-bottom project-link-container`}
      >
        <Link className={`project-heading-alt`} href="#project-brief">
          Project Brief
        </Link>
        <Link className={`project-heading-alt`} href="#screenshots">
          Screenshots
        </Link>
        <Link className={`project-heading-alt`} href="#roadmap">
          Roadmap
        </Link>
        <Link className={`project-heading-alt`} href="#how-to-contribute">
          How to Contribute
        </Link>
        {/* <Link className={`project-heading-alt`} href="#developer">
          Developer
        </Link> */}
        <Link className={`project-heading-alt`} href="#resources">
          Resources
        </Link>
        <Link className={`project-heading-alt`} href="#how-to-volunteer">
          How to Volunteer
        </Link>
      </section>
  )
}

export default SingleProjectsLinks