import React from 'react'
import '@/styles/components/dropdown-menu.scss'
import Link from 'next/link'

/**
 * Dropdown menu for navbar.
 * @returns {JSX.Element}
 */
const DropdownMenu = (visible = false) => {
  function hide() {
    visible = false
  }                           
  return (
    <div className="dropdown-menu" style={visible ? {} : { display: 'none' }}>
      <div className="section-item">
        <div className="text-wrapper-2">Get Started</div>
        <p className="section-content">
          Get started today and volunteer with us to drive positive change through technology, making a meaningful
          impact in your community!
        </p>
        <Link href="get-started" className="dropdown-button" onClick={hide}>Get Started</Link>
      </div>
      <div className="section-item">
        <div className="text-wrapper-2">Project</div>
        <p className="section-content">
          Explore our projects and discover how you can contribute your skills to drive innovation and create positive
          change.
        </p>
        <Link href="projects" className="dropdown-button">See Projects</Link>
      </div>
      <div className="section-item">
        <div className="text-wrapper-2">Pitch a Project</div>
        <p className="section-content">
          Get the latest information and guidance for anyone who want to propose new projects or ideas to the Open
          Sacramento community.
        </p>
        <Link href="pitch" className="dropdown-button">Pitch a Project</Link>
      </div>
      <div className="section-item">
        <div className="text-wrapper-2">Community</div>
        <p className="section-content-2">
          Join us for our weekly meetings on <Link href="#" className="text-wrapper-3">meetup</Link>.
        </p>
        <p className="section-content-2">
          For any questions, visit our <Link href="/faq" className="text-wrapper-3">FAQs</Link>.
        </p>
      </div>
    </div>
  )
}

export default DropdownMenu
