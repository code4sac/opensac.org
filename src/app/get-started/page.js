import LandingSection from "@/components/ui/LandingSection";
import HeaderUnderline from "@/components/content/HeaderUnderline";
import SidebarSection from "@/components/ui/SidebarSection";
import Steps from "@/components/content/Steps";
import instructionData from "./instructions.json";

/**
 * Section type. Displays light or dark themes.
 * @type {{light: string, dark: string}}
 */
export const SectionType = {
  light: 'light', dark: 'dark',
}

/**
 * Get started page.
 */
export default function GetStartedPage() {
  return (
    <div className="">
      <LandingSection sectionType={SectionType.light}>
        <HeaderUnderline sectionType={SectionType.light} title="Get started"
                         description="Ready to Volunteer with Open Sacramento"
                         large={true} className={'split-section-content-container'}/>
        <div className={`section-${SectionType.light} landing-section-paragraph-large`}>
          We&apos;re thrilled that you&apos;re eager to join our community of civic-minded individuals and make a
          positive impact on Sacramento. Volunteering with Open Sacramento is a rewarding experience that allows you to
          use your skills for the betterment of our city. <span className={`paragraph-bold`}>Whether you&apos;re a designer, developer, or anyone else passionate about civic tech,</span> you&apos;ll
          find step-by-step instructions below to help you get started on your journey of civic tech and community
          empowerment.
        </div>
      </LandingSection>
      <SidebarSection sectionType={SectionType.dark}>
        <div className={`sidebar-info-container`}>
          <HeaderUnderline className={'split-section-content-container'} sectionType={SectionType.dark}
                           title="Getting started" description="Steps to Volunteer">
            Discover how you can become a valued volunteer at Open Sacramento.
            Follow these simple steps to join our community of technologists, developers,
            and civic-minded individuals dedicated to driving positive change through technology and collaboration.
          </HeaderUnderline>
        </div>
        <Steps sectionType={SectionType.dark} steps={instructionData}></Steps>
      </SidebarSection>
    </div>
  )
}
