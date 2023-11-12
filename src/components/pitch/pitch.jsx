import PitchSectionLanding from "@/components/pitch/pitchSectionLanding";
import PitchSectionInstructions from "@/components/pitch/pitchSectionInstructions";
import "@/styles/pages/pitch.scss"
import "@/styles/pages/about.scss"

export default function Pitch() {
  return (
    <div className="">
        <PitchSectionLanding/>
        <PitchSectionInstructions/>
    </div>
  )
}
