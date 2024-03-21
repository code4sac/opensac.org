"use client";
import { jsonResponse } from "@/utils/response";
import useSWR from "swr";
import { fetchGithubSingleProject } from "../github";
import SingleProjectsSectionStart from "./singleProjectsSectionStart";

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
    </>
  );
}
