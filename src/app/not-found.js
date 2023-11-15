import Link from 'next/link'
import '@/styles/pages/not-found.scss'

export default function notFound() {
  return (
    <section className="not-found-container">
      <div className="not-found-content">
        <h1>Oops!</h1>
        <h4>404 Page Not Found</h4>
        <p>
          Looks like this page hasn't been developed yet.
          <br />
          Would you like to join and be a part of creating it?
          <br />
          <Link
            href="https://github.com/code4sac/opensac.org"
            className="not-found-link"
            target="_blank"
          >
            Get Started
          </Link>
        </p>
        <p>Explore our site using the menu above.</p>
      </div>
    </section>
  )
}
