"use client";
import { jsonResponse } from "@/utils/response";
import useSWR from "swr";
import { fetchGithubSingleProject } from "../github";

import SingleProjectsSectionStart from "./singleProjectsSectionStart";
import SingleProjectsBrief from "./singleProjectsBrief";
import SingleProjectsScreenshots from "./singleProjectsScreenshots";
import SingleProjectsRoadmap from "./singleProjectsRoadmap";
import SingleProjectsContribute from "./singleProjectsContribute";
import SingleProjectsDeveloper from "./singleProjectsDeveloper";
import SingleProjectsResources from "./singleProjectsResources";
import SingleProjectsVolunteer from "./singleProjectsVolunteer";
import Link from "next/link";

/**
 * Section type. Displays light or dark themes.
 * @type {{light: string, dark: string}}
 */
export const SectionType = {
  light: "light",
  dark: "dark",
};

const fetcher = (...args) =>
  fetch(...args)
    .then(jsonResponse)
    .then(fetchGithubSingleProject);

/**
 * Page for displaying a single project
 *
 * @returns {JSX.Element}
 */
export default function SingleProject({ githubFullName }) {
  const { data, error, isLoading } = useSWR(
    `https://api.github.com/repos/${githubFullName}`,
    fetcher,
    { shouldRetryOnError: false } // Auto retries quickly exhaust unauthenticated api requests to github, which breaks the page
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.dir(data); // TODO use this data to populate ProjectCards once the component is created.  Remove this log once it is hooked up.
  
  return (
    <>
      <div className="projects-main">
        <SingleProjectsSectionStart
          sectionType={SectionType.dark}
          data={data}
        ></SingleProjectsSectionStart>
      </div>

      <div className={`project-section-${SectionType.dark}-headings`}>
        <Link href="#project-brief">Project Brief</Link>
        <Link href="#screenshots">Screenshots</Link>
        <Link href="#roadmap">Roadmap</Link>
        <Link href="#how-to-contribute">How to Contribute</Link>
        <Link href="#developer">Developer</Link>
        <Link href="#resources">Resources</Link>
        <Link href="#how-to-volunteer">How to Volunteer</Link>
      </div>
      <SingleProjectsBrief
        sectionType={SectionType.dark}
        data={data}
      ></SingleProjectsBrief>
      <SingleProjectsScreenshots
        sectionType={SectionType.dark}
        data={data}
      ></SingleProjectsScreenshots>
      <SingleProjectsRoadmap
        sectionType={SectionType.dark}
        data={data}
      ></SingleProjectsRoadmap>
      <SingleProjectsContribute
        sectionType={SectionType.dark}
        data={data}
      ></SingleProjectsContribute>
      <SingleProjectsDeveloper
      sectionType={SectionType.dark}
      data={data}
      ></SingleProjectsDeveloper>
      <SingleProjectsResources
        sectionType={SectionType.dark}
        data={data}
      ></SingleProjectsResources>
      <SingleProjectsVolunteer
        sectionType={SectionType.dark}
        data={data}
      ></SingleProjectsVolunteer>
    </>
  );
}
