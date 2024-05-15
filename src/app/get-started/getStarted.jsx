import GetStartedSectionLanding from './getStartedSectionLanding'
import GetStartedSectionInstructions from './getStartedSectionInstructions'

/**
 * Section type. Displays light or dark themes.
 * @type {{light: string, dark: string}}
 */
export const SectionType = {
  light: 'light', 
  dark: 'dark',
}

/**
 * Get started page.
 * @returns {JSX.Element}
 */
export default function GetStarted() {
  return (
    <div className="">
      <GetStartedSectionLanding sectionType={SectionType.light}/>
      <GetStartedSectionInstructions sectionType={SectionType.dark}/>
    </div>
  )
}