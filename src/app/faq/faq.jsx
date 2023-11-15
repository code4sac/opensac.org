import FaqSectionStart from './faqSectionStart'
import FaqSectionNav from './faqSectionNav'
import FaqAccordion from './faqAccordion'
import faqTexts from './faqText'
import '@/styles/pages/faq.scss'

/**
 * Section type. Displays light or dark themes.
 * @type {{light: string, dark: string}}
 */
export const SectionType = {
  light: 'light',
  dark: 'dark',
}

const texts = JSON.parse(JSON.stringify(faqTexts))

const FaqItems = function commonItems({ texts }) {
  return (
    <div>
      {texts.map((item, key) => (
        <FaqAccordion key={key} title={item.title} text={item.text} />
      ))}
    </div>
  )
}

const Topics = function commonItems({ texts }) {
  return (
    <div>
      {texts.map((item, key) => (
        <div key={key}>
          <h4 id={item.url} className='faq-semiheader'>
            {item.topic}
          </h4>
          <FaqItems texts={item.questions} />
        </div>
      ))}
    </div>
  )
}

/**
 * Frequently-asked questions.
 * @returns {JSX.Element}
 */
export default function Faq(common) {
  return (
    <div className="faq-main">
      <FaqSectionStart sectionType={SectionType.light} />
      <FaqSectionNav sectionType={SectionType.light} topics={texts.sections} />
      <section className="faq-container-margins">
        <Topics texts={texts.sections} />
      </section>
    </div>
  )
}
