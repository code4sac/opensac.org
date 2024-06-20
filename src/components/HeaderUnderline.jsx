/**
 * Header with underline styling.
 * @returns {JSX.Element}
 */
export default function HeaderUnderline({children, sectionType, title, description, large}) {
  return (
    <div className={`general-section-${sectionType}-container heading-underline`}>
      <h1 className={`general-heading-section`}>{title}</h1>
      <h2 className={`${large ? 'sub-heading-large' : 'sub-heading'}`}>{description}</h2>
      {children}
    </div>
  )
}
