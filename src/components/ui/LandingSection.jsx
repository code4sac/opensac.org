/**
 * Page section with 50/50 split.
 * @param children
 * @param sectionType
 * @returns {JSX.Element}
 */
export default function LandingSection({children, sectionType}) {
  return (
    <section className={`section-${sectionType} split-section-container`}>
      {children}
    </section>
  );
};