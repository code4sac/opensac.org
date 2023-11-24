import PitchSectionLanding from './pitchSectionLanding'
import PitchSectionInstructions from './pitchSectionInstructions'
import '@/styles/pages/pitch.scss'
import '@/styles/pages/about.scss'

/**
 * Page for information about how to pitch a project.
 * @returns {JSX.Element}
 */
export default function Pitch() {
  return (
    <div className="">
      <PitchSectionLanding />
      <PitchSectionInstructions />
    </div>
  )
}
