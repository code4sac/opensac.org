import fs from "fs";
import path from "path";
import MDXComponents from "./MDXComponents";
import {MDXRemote} from "next-mdx-remote/rsc";
import ProjectsSectionStart from "@/app/projects/projectsSectionStart";
import FaqSectionStart from "@/app/faq/faqSectionStart";

/**
 * Section type. Displays light or dark themes.
 * @type {{light: string, dark: string}}
 */
export const SectionType = {
  light: "light",
  dark: "dark",
};

function extractToc(content) {
  const headers = [];
  const headerRegex = /^###\s+(.+)$/gm;
  let match;
  while ((match = headerRegex.exec(content)) !== null) {
    const text = match[1];
    const slug = text.toLowerCase().replace(/\s/g, "_");
    headers.push({text, slug});
  }
  return headers;
}

const rootDir = path.join(process.cwd(), "src", "app", "faq");

function fetchMdx() {
  const filePath = path.join(rootDir, "faqMDXTexts.mdx");
  const fileContent = fs.readFileSync(filePath, {encoding: "utf-8"});
  const tableOfContents = extractToc(fileContent);
  return {fileContent, tableOfContents};
}

/**
 * Page for information about how to pitch a project.
 * @returns {JSX.Element}
 */
export default function Projects() {
  const {fileContent, tableOfContents} = fetchMdx();

  return (
    <>
      <div className="faq-main">
        <ProjectsSectionStart sectionType={SectionType.light}></ProjectsSectionStart>
        <section className="faq-container-margins">
          <MDXRemote source={fileContent} components={MDXComponents}/>
        </section>
      </div>
    </>
  )
}
