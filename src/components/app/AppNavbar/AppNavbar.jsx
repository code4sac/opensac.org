'use client'

import {useEffect, useState} from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import ExtendedNavbarMenu from './ExtendedNavbarMenu'

/**
 * Set toolbar opacity. Based on the scroll y-axis.
 * @param {number} currentScrollHeight
 * @returns {number} opacity Ranges from 0 to 1.
 */
function setOpacity(currentScrollHeight) {
  return Math.max(Math.min(currentScrollHeight / 500, 1), .15)
}

/**
 * Set the navbar to fade on scroll.
 * Note: This method, its arguments, and the fact that you need to return it in use effect, is confusing and could be refactored. It is extracted as a function so that it can be reused if any other routes need a fading navbar.
 * @param setFadeLayout
 * @param setCurrentScrollHeight
 * @returns {function(): void} Make sure to return a function removing the event listener in use effect. I don't know why.
 */
function registerNavbarFadeLayout(setFadeLayout, setCurrentScrollHeight) {
  setFadeLayout(true)
  const onScroll = () => {
    setCurrentScrollHeight(window.scrollY)
  }
  window.removeEventListener('scroll', onScroll)
  window.addEventListener('scroll', onScroll, {passive: true})
  return () => window.removeEventListener('scroll', onScroll)
}

/**
 * Default application navigation bar. Links animate on page change. Extended menu that shows more text underneath the navbar.
 * - Desktop: Multiple navigation links in the center. Link on the right side to show extended menu.
 * - Mobile: All menu items are in collapsable menu.
 * @returns {JSX.Element}
 */
export default function AppNavbar() {
  const [extendedMenuVisible, showExtendedMenu] = useState(false)
  const [fadeLayout, setFadeLayout] = useState(false)
  const [currentScrollHeight, setCurrentScrollHeight] = useState(0)
  const backgroundOpacity = setOpacity(currentScrollHeight)
  const websiteURL = usePathname()
  useEffect(() => {
    showExtendedMenu(false)
    if (currentScrollHeight === 0) setCurrentScrollHeight(window.scrollY)
    switch (websiteURL) {
      case '/':
        return registerNavbarFadeLayout(setFadeLayout, setCurrentScrollHeight)
      default:
        setFadeLayout(false)
    }
  }, [websiteURL])
  return (
    <div className='navbar-background'>
      <nav className={`navbar-toolbar`}
           style={fadeLayout && !extendedMenuVisible ? {backgroundColor: `rgba(0,0,0, ${backgroundOpacity})`} : {backgroundColor: 'inherit'}}>
        <div className={'navbar-toolbar-main'}>
          <div className={'navbar-toolbar-content container-xxl'}>
            <div className={'navbar-left-container'}>
              <Link className={'navbar-left-section'} href="/public">
                <img src="/img/logo_opensac_black_transparent_2.png" alt="Open Sacramento logo" height="60"
                     width="200"/>
              </Link>
            </div>

            <div className={'navbar-middle-container'}>
              <ul className={'navbar-middle-section'}>
                <li className={`navbar-link ${websiteURL === '/' ? 'navbar-link-selected one' : ''}`}>
                  <Link href="/public">Home</Link>
                </li>
                <li className={`navbar-link ${websiteURL === '/about' ? 'navbar-link-selected two' : ''}`}>
                  <Link href="/about">About</Link>
                </li>
                <li className={`navbar-link ${websiteURL === '/contact' ? 'navbar-link-selected three' : ''}`}>
                  <Link href="/contact">Contact</Link>
                </li>
                <li className={`navbar-link`}>
                  <Link href="/donate">Donate</Link>
                </li>
                <hr className={'navbar-underline'}/>
              </ul>
            </div>

            <div
              className={`navbar-right-container ${extendedMenuVisible ? 'navbar-extend-background-active' : 'navbar-extend-background-inactive'}`}>
              <div className={`navbar-right-section`} onClick={() => {
                showExtendedMenu(!extendedMenuVisible)
              }}>
                <div className={`navbar-nested-parent-link`}>
                  <div
                    className={`${extendedMenuVisible ? 'navbar-toggle-extend-button-extended' : 'navbar-toggle-extend-button'}`}>
                    <span
                      className={`navbar-extend-button-text ${extendedMenuVisible ? 'navbar-extend-button-text-extended' : null}`}>Get Involved</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          extendedMenuVisible ?
            <div className={'navbar-toolbar-extended'}>
              <ExtendedNavbarMenu visible={extendedMenuVisible}/>
            </div>
            : null
        }
      </nav>
    </div>
  )
}