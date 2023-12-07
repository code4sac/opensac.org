import Link from 'next/link'

/**
 * Frequently-asked questions navigation section.
 * @returns {JSX.Element}
 */
export default function FaqSectionNav({ sectionType, topics }) {
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
  )
}
