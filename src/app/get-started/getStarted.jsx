import GetStartedSectionLanding from './getStartedSectionLanding'
import GetStartedSectionInstructions from './getStartedSectionInstructions'

/**
 * Get started page.
 * @returns {JSX.Element}
 */
export default function GetStarted() {
  return (
    <div className="">
      <GetStartedSectionLanding />
      <GetStartedSectionInstructions />
    </div>
  )
}