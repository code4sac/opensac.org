import PitchSectionInstructions from './pitchSectionInstructions'
import HeaderUnderline from "@/components/HeaderUnderline";
import LandingSection from "@/components/PageSection/LandingSection";

/**
 * Section type. Displays light or dark themes.
 * @type {{light: string, dark: string}}
 */
export const SectionType = {
  light: 'light',
  dark: 'dark',
}

/**
 * Page for information about how to pitch a project.
 * @returns {JSX.Element}
 */
export default function Pitch() {
  return (
    <div className="">
      <LandingSection sectionType={SectionType.light}>
        <HeaderUnderline sectionType={SectionType.light} title="Pitch a project"
                         description="Contribute Your Project Idea"/>
        <div className={`section-${SectionType.light} landing-section-paragraph`}>
          Share your innovative ideas and collaborate with our community to turn them into reality.
          Pitch your project to make a positive impact on Sacramento using technology and civic engagement.
        </div>
      </LandingSection>
      <PitchSectionInstructions sectionType={SectionType.dark}/>
    </div>
  )
}
