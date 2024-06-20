export default function LandingSection({children, sectionType}) {
  return (
    <section className={`section-${sectionType} split-section-container`}>
      {children}
    </section>
  );
};