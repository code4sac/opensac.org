import FaqSectionStart from "./faqSectionStart";
import FaqSectionNav from "./faqSectionNav";
import FaqAccordion from "./faqAccordion";
import faqTexts from "./faqText";

/**
 * Section type. Displays light or dark themes.
 * @type {{light: string, dark: string}}
 */
export const SectionType = {
  light: "light",
  dark: "dark",
};

/**
 * Home page. Displays light or dark themes.
 * @returns {JSX.Element}
 * @constructor
 */

const texts = JSON.parse(JSON.stringify(faqTexts));

const FaqItems = function commonItems({ texts }) {
  return (
    <div>
      {texts.map((item, key) => (
        <FaqAccordion key={key} title={item.title} text={item.text} />
      ))}
    </div>
  );
};

export default function Faq(common) {
  return (
    <main className="faq-main">
      <FaqSectionStart sectionType={SectionType.light} />
      <FaqSectionNav sectionType={SectionType.light} />
      <section className="faq-container-margins">
        <h4 className="faq-semiheader">Common Questions</h4>
        <FaqItems texts={texts.common} />
        <h4 className="faq-semiheader">Volunteer</h4>
        <FaqItems texts={texts.vol} />
      </section>
    </main>
  );
}
