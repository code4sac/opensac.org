import LandingSection from "@/components/ui/LandingSection";
import HeaderUnderline from "@/components/content/HeaderUnderline";
import SidebarSection from "@/components/ui/SidebarSection";
import Instructions from "@/components/content/Instructions";

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
          We're thrilled that you're eager to join our community of civic-minded individuals and make a positive impact
          on Sacramento. Volunteering with Open Sacramento is a rewarding experience that allows you to use your
          skills for the betterment of our city. <span className={`paragraph-bold`}>Whether you're a designer, developer,
        or anyone else passionate about civic tech,</span> you'll
          find step-by-step instructions below to help you get started
          on your journey of civic tech and community empowerment.
        </div>
      </LandingSection>
      <SidebarSection sectionType={SectionType.dark}>
        <Instructions sectionType={SectionType.dark}></Instructions>
      </SidebarSection>
    </div>
  )
}
