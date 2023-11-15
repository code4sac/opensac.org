import HomeSectionDonate from '@/components/home/homeSectionDonate'
import HomeSectionProjects from '@/components/home/homeSectionProjects'
import HomeSectionDefault from '@/components/home/homeSectionDefault'
import HomeSectionServices from '@/components/home/homeSectionServices'
import HomeSectionDefault2 from '@/components/home/homeSectionDefault2'
import HomeSectionAboutImage from '@/components/home/homeSectionAboutImage'
import HomeSectionLandingImage from '@/components/home/homeSectionLandingImage'
import '@/styles/pages/home.scss'

/**
 * Section type. Displays light or dark themes.
 * @type {{light: string, dark: string}}
 */
export const SectionType = {
  light: 'light', dark: 'dark',
}

/**
 * Home page. Displays light or dark themes.
 * @returns {JSX.Element}
 */
export default function Home() {
  return (<div className="home-page-container">
    <HomeSectionLandingImage sectionType={SectionType.dark}></HomeSectionLandingImage>
    <HomeSectionDefault2 sectionType={SectionType.light}></HomeSectionDefault2>
    <HomeSectionAboutImage sectionType={SectionType.dark}></HomeSectionAboutImage>
    <HomeSectionServices sectionType={SectionType.dark}></HomeSectionServices>
    <HomeSectionDefault sectionType={SectionType.light}></HomeSectionDefault>
    <HomeSectionProjects sectionType={SectionType.dark}></HomeSectionProjects>
    <HomeSectionDonate sectionType={SectionType.dark}></HomeSectionDonate>
  </div>)
}
