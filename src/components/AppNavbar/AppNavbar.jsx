'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import DropdownMenu from './DropdownMenu'

/**
 * Set toolbar opacity. Based on the scroll y axis.
 * @param {number} currentScrollHeight 
 * @returns {number} opacity Ranges from 0 to 1.
 */
function setOpacity(currentScrollHeight) {
  return Math.max(Math.min(currentScrollHeight / 500, 1), .15)
}

/**
 * Default application navigation bar.
 * @param {boolean} [extended=false] Fade on scroll.
 * @param {fadeLayout} [fadeLayout=false] Fade on scroll.
 * @returns {JSX.Element}
 */
export default function AppNavbar({ extended = false, fade = false }) {
  const [extendedMenuVisible, showExtendedMenu] = useState(false)
  const [previousURL, setPreviousURL] = useState('/')
  const [fadeLayout, setFadeLayout] = useState(fade)
  const [currentScrollHeight, setCurrentScrollHeight] = useState(9999)
  const onClickExtendMenu = () => showExtendedMenu(!extendedMenuVisible)
  const backgroundOpacity = setOpacity(currentScrollHeight)
  const websiteURL = usePathname()

  if (extendedMenuVisible == true && fadeLayout == true) {
    setFadeLayout(false)
  } else {
    switch (websiteURL) {
      case '/':
        if (fadeLayout == false && extendedMenuVisible == false) {
          setFadeLayout(true)
        }
        break
      default:
        if (fadeLayout == true && extendedMenuVisible == false) setFadeLayout(false)
    }
  }

  if (websiteURL !== previousURL) {
    showExtendedMenu(false)
    setPreviousURL(websiteURL)
  }

  useEffect(() => {
    if (currentScrollHeight == 9999) setCurrentScrollHeight(window.scrollY)
    if (fadeLayout) {
      const onScroll = () => { setCurrentScrollHeight(window.scrollY) }
      window.removeEventListener('scroll', onScroll)
      window.addEventListener('scroll', onScroll, { passive: true })
      return () => window.removeEventListener('scroll', onScroll)
    } else {

    }
  }, [])

  return (
    <div className='navbar-background'>
      <nav className={`navbar-toolbar`} style={fadeLayout ? { backgroundColor: `rgba(0,0,0, ${backgroundOpacity})` } : { backgroundColor: 'inherit' }}>
        <div className={'navbar-toolbar-main'}>
          <div className={'navbar-toolbar-content'}>
            <div className={'navbar-left-container'}>
              <Link className={'navbar-left-section'} href="/">
                <img src="/img/Open Sac - Black Logo.png" alt="Open Sacramento logo" height="60" width="200" />
              </Link>
            </div>

            <div className={'navbar-middle-container'}>
              < ul className={'navbar-middle-section'}>
                < li className={`navbar-link ${websiteURL === '/' ? 'navbar-link-selected one' : ''}`}>
                  <Link href="/">Home</Link>
                </li>
                <li className={`navbar-link ${websiteURL === '/about' ? 'navbar-link-selected two' : ''}`}>
                  <Link href="/about">About</Link>
                </li>
                <li className={`navbar-link ${websiteURL === '/contact' ? 'navbar-link-selected three' : ''}`}>
                  <Link href="/contact">Contact</Link>
                </li>
                <li className={`navbar-link`}>
                  <Link href="#">Donate</Link>
                </li>
                <hr className={'navbar-underline'} />
              </ul>
            </div>

            <div className={`navbar-right-container  ${extendedMenuVisible ? 'navbar-extend-background-active' : 'navbar-extend-background-inactive'}`} >
              <div className={`navbar-right-section`} >
                <div className={`navbar-nested-parent-link`} >
                  <button type="button" onClick={onClickExtendMenu}>
                    Get Involved
                  </button>
                </div>
              </div >
            </div >
          </div >
        </div >
        {
          extendedMenuVisible ?
            <div className={'navbar-toolbar-extended'}>
              < DropdownMenu visible={extendedMenuVisible} />
            </div >
            : null
        }
      </nav >
    </div>
  )
}