"use client";
import DonateSectionLanding from "./nameChangeLanding";

/**
 * Section type. Displays light or dark themes.
 * @type {{light: string, dark: string}}
 */
export const SectionType = {
  light: "light",
  dark: "dark",
};

/**
 * About page.
 * @returns {JSX.Element}
 */
export default function Contact() {
  return (
    <div className="">
      <DonateSectionLanding sectionType={SectionType.light} />
    </div>
  );
}
