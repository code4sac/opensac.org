"use client";
import { jsonResponse } from "@/utils/response";
import useSWR from "swr";
import { fetchGithubProjectData } from "./github";
import ProjectsSectionStart from "./projectsSectionStart";

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
    .then(fetchGithubProjectData);

/**
 * Page for information about how to pitch a project.
 * @returns {JSX.Element}
 */
export default function Projects({ githubOwner }) {
  const { data, error, isLoading } = useSWR(
    `https://api.github.com/orgs/${githubOwner}/repos?per_page=20&sort=updated&direction=desc`,
    fetcher,
    { shouldRetryOnError: false } // Auto retries quickly exhaust unauthenticated api requests to github, which breaks the page
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.dir(data); // TODO use this data to populate ProjectCards once the component is created.  Remove this log once it is hooked up.

  return (
    <>
      <div className="projects-main">
        <ProjectsSectionStart
          sectionType={SectionType.light}
        ></ProjectsSectionStart>
      </div>
    </>
  );
}
