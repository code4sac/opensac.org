import "@/styles/pages/faq.scss";
import Link from "next/link";

/**
 * Home page default section 2.
 * @returns {JSX.Element}
 * @constructor
 */

export default function faqSectionNav({ sectionType, topics }) {
  return (
    <section className="faq-container">
      <nav className={`faq-nav faq-nav-${sectionType}`}>
        {topics.map((item, key) => (
          <Link key={key} className="nav-link" href={`#${item.url}`}>
            {item.topic}
          </Link>
        ))}
      </nav>
    </section>
  );
}
