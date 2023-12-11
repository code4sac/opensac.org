import HomeSectionDonate from './homeSectionDonate'
import HomeSectionProjects from './homeSectionProjects'
import HomeSectionDefault from './homeSectionDefault'
import HomeSectionServices from './homeSectionServices'
import HomeSectionDefault2 from './homeSectionDefault2'
import HomeSectionAboutImage from './homeSectionAboutImage'
import HomeSectionLandingImage from './homeSectionLandingImage'
import HomeSectionPartnership from './homeSectionPartnerships'

/**
 * Section type. Displays light or dark themes.
 * @type {{light: string, dark: string}}
 */
export const SectionType = {
  light: 'light', dark: 'dark',
  grey: 'grey',

}

/**
 * Home page. Displays light or dark themes.
 * @returns {JSX.Element}
 */
export default function Home() {
  return (
    <div className="home-page-container">
    <HomeSectionLandingImage sectionType={SectionType.dark}></HomeSectionLandingImage>
    <HomeSectionDefault2 sectionType={SectionType.light}></HomeSectionDefault2>
    <HomeSectionAboutImage sectionType={SectionType.dark}></HomeSectionAboutImage>
    <HomeSectionServices sectionType={SectionType.dark}></HomeSectionServices>
    <HomeSectionDefault sectionType={SectionType.light}></HomeSectionDefault>
    <HomeSectionProjects sectionType={SectionType.dark}></HomeSectionProjects>
    <HomeSectionPartnership sectionType={SectionType.grey}></HomeSectionPartnership>
    <HomeSectionDonate sectionType={SectionType.dark}></HomeSectionDonate>
  </div>)
}
