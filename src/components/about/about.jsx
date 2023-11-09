import AboutSectionLanding from "@/components/about/aboutSectionLanding";
import AboutSectionCollage from "@/components/about/aboutSectionCollage";
import AboutSectionMission from "@/components/about/aboutSectionMission";
import AboutSectionTeam from "@/components/about/aboutSectionTeam";
import AboutSectionOpportunities from "@/components/about/aboutSectionOpportunities";
import "@/styles/pages/about.scss"

// export const SectionType = {
//   light: "light", dark: "dark",
// };

export default function About() {
  return (<div className="">
  <AboutSectionLanding></AboutSectionLanding>
  <AboutSectionCollage/>
  <AboutSectionMission/>
  <AboutSectionTeam/>
  <AboutSectionOpportunities/>
  </div>)
}
