import ContactSectionLanding from './contactSectionLanding'
import ContactSectionMission from './contactSectionMission'
import '@/styles/pages/contact.scss'

/**
 * About page.
 * @returns {JSX.Element}
 */
export default function Contact() {
  return (<div className="">
    <ContactSectionLanding></ContactSectionLanding>

    <ContactSectionMission/>
  </div>)
}
