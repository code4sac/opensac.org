import GetStartedSectionLanding from "./getStartedSectionLanding";
import GetStartedSectionInstructions from "./getStartedSectionInstructions";
import '@/styles/pages/get-started.scss'

export default function GetStarted() {
  return (
    <div className="">
        <GetStartedSectionLanding/>
        <GetStartedSectionInstructions/>
    </div>
  )
}