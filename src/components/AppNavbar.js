'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { DropdownMenu } from '@/components/DropdownMenu'
import '@/styles/components/navigation-bar.scss'

/**
 * Default application navigation bar.
 * @returns {JSX.Element}
 */
export default function AppNavbar() {
  const [currentScrollHeight, setCurrentScrollHeight] = useState(0)
  const [extendedMenuVisible, toggleExtendedMenu] = useState(false)
  const onClick = () => toggleExtendedMenu(!extendedMenuVisible)
  const path = usePathname()
  const opacity = Math.min(currentScrollHeight / 500, 1)
  const navbarColor = '#000000'

  useEffect(() => {
    const onScroll = () => {
      setCurrentScrollHeight(window.scrollY)
    }
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])


  return (
    <>
      <nav className={'navbar-toolbar'} style={{ backgroundColor: `rgba(0,0,0, ${opacity})` }}>
        <div className={'navbar-toolbar-main'}>
          <div className={'navbar-toolbar-content'}>
            <div className={'navbar-left-container'}>
              <Link className={'navbar-left-section'} href="/">
                <img src="/img/Open Sac - Black Logo.png" alt="Open Sacramento logo" height="60" width="200" />
              </Link>
            </div>

            <div className={'navbar-middle-container'}>
              < ul className={'navbar-middle-section'}>
                < li className={`navbar-link ${path === '/' ? 'navbar-link-selected one' : ''}`}>
                  <Link href="/">Home</Link>
                </li>
                <li className={`navbar-link ${path === '/about' ? 'navbar-link-selected two' : ''}`}>
                  <Link href="/about">About</Link>
                </li>
                <li className={`navbar-link ${path === '/contact' ? 'navbar-link-selected three' : ''}`}>
                  <Link href="/contact">Contact</Link>
                </li>
                <li className={`navbar-link`}>
                  <Link href="#">Donate</Link>
                </li>
                <hr className={'navbar-underline'} />
              </ul>
            </div>

            <div className={'navbar-right-container'} >
              <div className={'navbar-right-section'} >
                <div className={'navbar-nested-parent-link'} >
                  <button type="button" onClick={onClick}>
                    Get Involved
                    <img className={'navbar-nested-parent-link-image'} src="/img/chevron-down.png" width="16"
                      height="16" alt="Get involved navigation links" />
                  </button>
                </div>
              </div >
            </div >
          </div >
        </div >
        {
          extendedMenuVisible ?
            <div className={'navbar-toolbar-extended'}>
              < DropdownMenu />
            </div >
            : null
        }
      </nav >
    </>
  )
}