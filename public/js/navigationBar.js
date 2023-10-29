

/**
 * Initialize navigation bar scripts.
 * Usage:
 * ```js
 * initNavigationBar()
 * ```
 */
const initNavigationBar = () => {
  const [linkChangeFrom, linkChangeTo] = getLinkDestination()
  listenForNavbarLinkChange(linkChangeFrom, linkChangeTo)
}

/**
 * Handle navigation bar link changes.
 * Toggle selected class.
 */
function handleNavbarChange(event) {
  setLinkDestination()
}

/**
 * Listen for navigation bar link changes.
 */
function listenForNavbarLinkChange(linkChangeFrom, linkChangeTo) {
  const links = document.querySelectorAll('.navbar-link')
  links.forEach(element => element.addEventListener('click', handleNavbarChange))
}

function getLinkDestination() {
  const storageFrom = localStorage.getItem('navbarLinkChangeFrom')
  const storageTo = localStorage.getItem('navbarLinkChangeTo')
  const linkChangeFrom = storageFrom ? storageFrom : 'home'
  const linkChangeTo = storageTo ? storageTo : ''
  return [linkChangeFrom, linkChangeTo]
}

function setLinkDestination() {
  const linkNumber = links.length
  element.classList.toggle('navbar-link-selected')
}

export default initNavigationBar