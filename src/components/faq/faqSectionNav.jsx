import "@/styles/pages/faq.scss";
import Link from "next/link";

/**
 * Home page default section 2.
 * @returns {JSX.Element}
 * @constructor
 */

export default function faqSectionNav({ sectionType }) {
  return (
    <section className="faq-container">
      <nav className={`faq-nav faq-nav-${sectionType}`}>
        <Link className="nav-link" href="#common-questions">
          Common Questions
        </Link>
        <Link className="nav-link" href="#volunteer">
          Volunteer
        </Link>
        <Link className="nav-link" href="#working-on-projects">
          Working on Projects
        </Link>
        <Link className="nav-link" href="#pitching-a-project">
          Pitching a Project
        </Link>
        <Link className="nav-link" href="#contact">
          Contact
        </Link>
        <Link className="nav-link" href="#rules">
          Rules
        </Link>
      </nav>
    </section>
  );
}
