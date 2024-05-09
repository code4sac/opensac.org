import ConductSectionLanding from './conductSectionLanding'
import ConductSectionBullets from './conductSectionBullets'
import ConductSectionPolicies from './conductSectionPolicies'
import ConductSectionEmail from './conductSectionEmail'

export default function Conduct() {
  return (
    <div className="">
      <ConductSectionLanding/>
      <ConductSectionBullets/>
      <ConductSectionPolicies/>
      <ConductSectionEmail/>
    </div>
  )
}
