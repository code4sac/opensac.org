import PitchSectionLanding from './pitchSectionLanding'
import PitchSectionInstructions from './pitchSectionInstructions'

/**
 * Section type. Displays light or dark themes.
 * @type {{light: string, dark: string}}
 */
export const SectionType = {
  light: 'light', 
  dark: 'dark',
}

/**
 * Page for information about how to pitch a project.
 * @returns {JSX.Element}
 */
export default function Pitch() {
  return (
    <div className="">
      <PitchSectionLanding sectionType={SectionType.light}/>
      <PitchSectionInstructions sectionType={SectionType.dark}/>
    </div>
  )
}
