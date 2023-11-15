import '@/styles/components/navigation-bar.scss'
import {DropdownMenu} from '@/components/DropdownMenu'

/**
 * Default application navigation bar.
 * @returns {JSX.Element}
 * @constructor
 */
export default function AppNavbar() {
  return (
    <nav className="navbar-toolbar">
      <div className="navbar-toolbar-main">
        <div className="navbar-toolbar-content">
          <div className="navbar-left-container">
            <a className="navbar-left-section" href="/">
              <img src="/img/Open Sac - Black Logo.png" alt="Open Sacramento logo" height="60" width="200" />
            </a>
          </div>

          <div className="navbar-middle-container">
            <ul className="navbar-middle-section">
              <li className="navbar-link">
                <a href="/">Home</a>
              </li>
              <li className="navbar-link">
                <a href="/about">About</a>
              </li>
              <li className="navbar-link">
                <a href="/contact">Contact</a>
              </li>
              <li className="navbar-link">
                <a href="#">Donate</a>
              </li>
            </ul>
          </div>

          <div className="navbar-right-container">
            <div className="navbar-right-section">
              <div className="navbar-nested-parent-link">
                <a href="#">
                  Get Involved
                  <img className="navbar-nested-parent-link-image" src="/img/chevron-down.png" width="16"
                    height="16" alt="Get involved navigation links" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
          <div className={'navbar-toolbar-extended'}>
              <DropdownMenu></DropdownMenu>
          </div>
    </nav>
  )
}