"use client"

import Link from 'next/link'
import { useState } from 'react'
import '@/styles/components/navigation-bar.scss'
import { DropdownMenu } from '@/components/DropdownMenu'

/**
 * Default application navigation bar.
 * @returns {JSX.Element}
 */
export default function AppNavbar() {
  const [extendedMenuVisible, toggleExtendedMenu] = useState(false)
  const onClick = () => toggleExtendedMenu(!extendedMenuVisible)
  return (
    <nav className="navbar-toolbar">
      <div className="navbar-toolbar-main">
        <div className="navbar-toolbar-content">
          <div className="navbar-left-container">
            <Link className="navbar-left-section" href="/">
              <img src="/img/Open Sac - Black Logo.png" alt="Open Sacramento logo" height="60" width="200" />
            </Link>
          </div>

          <div className="navbar-middle-container">
            <ul className="navbar-middle-section">
              <li className="navbar-link">
                <Link href="/">Home</Link>
              </li>
              <li className="navbar-link">
                <Link href="/about">About</Link>
              </li>
              <li className="navbar-link">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="navbar-link">
                <Link href="#">Donate</Link>
              </li>
            </ul>
          </div>

          <div className="navbar-right-container">
            <div className="navbar-right-section">
              <div className="navbar-nested-parent-link">
                <button type="button" onClick={onClick}>
                  Get Involved
                  <img className="navbar-nested-parent-link-image" src="/img/chevron-down.png" width="16"
                    height="16" alt="Get involved navigation links" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {extendedMenuVisible ?
        <div className={'navbar-toolbar-extended'}>
          <DropdownMenu />
        </div>
        : null}
    </nav>
  )
}