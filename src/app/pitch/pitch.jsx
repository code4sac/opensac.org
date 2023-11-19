import PitchSectionLanding from './pitchSectionLanding'
import PitchSectionInstructions from './pitchSectionInstructions'
import '@/styles/pages/pitch.scss'

export default function Pitch() {
  return (
    <div className="">
      <PitchSectionLanding />
      <PitchSectionInstructions />
    </div>
  )
}
