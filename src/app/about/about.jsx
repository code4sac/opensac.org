import AboutSectionLanding from './aboutSectionLanding'
import AboutSectionCollage from './aboutSectionCollage'
import AboutSectionMission from './aboutSectionMission'
import AboutSectionTeam from './aboutSectionTeam'
import AboutSectionOpportunities from './aboutSectionOpportunities'

/**
 * About page.
 * @returns {JSX.Element}
 */
export default function About() {
  return (<div className="">
    <AboutSectionLanding></AboutSectionLanding>
    <AboutSectionCollage />
    <AboutSectionMission />
    <AboutSectionTeam />
    <AboutSectionOpportunities />
  </div>)
}
