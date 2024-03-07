import ProjectsSectionStart from "./projectsSectionStart";
import ProjectCard from "./projectCard";
import fs from "fs";
import { MDXRemote } from "next-mdx-remote/rsc";
import path from "path";
import MDXComponents from "./MDXComponents";

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
    headers.push({ text, slug });
  }
  return headers;
}

const rootDir = path.join(process.cwd(), "src", "app", "projects");

function fetchMdx() {
  const filePath = path.join(rootDir, "projectsMDXTexts.mdx");
  const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });
  const tableOfContents = extractToc(fileContent);
  return { fileContent, tableOfContents };
}

/**
 * Page for information about how to pitch a project.
 * @returns {JSX.Element}
 */
export default function Projects() {
  const { fileContent, tableOfContents } = fetchMdx();

  const tags = [{
    id:1,
    url:'',
    text:'html'
  }, {
    id:1,
    url:'',
    text:'html'
  }]

  return (
    <>
      <div className="projects-main">
        <ProjectsSectionStart
          sectionType={SectionType.light}
        ></ProjectsSectionStart>
        <ProjectCard
          sectionType={SectionType.light}
          projectTitle='OpenSac.org'
          projectText='Website for Open Sac'
          imgUrl=''
          pageUrl=''
          githubUrl='https://github.com/code4sac/opensac.org'
          tags={tags}
          lastUpdatedTimestamp='Thu Sept 21, 8:00pm'
        ></ProjectCard>
        <section className="projects-container-margins">
          <MDXRemote source={fileContent} components={MDXComponents} />
        </section>
      </div>
    </>
  );
}
