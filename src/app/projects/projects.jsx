"use client";
import ProjectsSectionStart from "@/app/projects/projectsSectionStart";
import useSWR from "swr";
import * as yaml from "yaml";

/**
 * Section type. Displays light or dark themes.
 * @type {{light: string, dark: string}}
 */
export const SectionType = {
  light: "light",
  dark: "dark",
};

/**
 * Page for information about how to pitch a project.
 * @returns {JSX.Element}
 */
export default function Projects() {
  const { data, error, isLoading } = useSWR(
    "https://api.github.com/orgs/code4sac/repos?per_page=20&sort=updated&direction=desc",
    fetchGithubProjectData,
    { shouldRetryOnError: false } // Auto retries quickly exhause unauthenticated api requests to github, which breaks the page
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.dir(data); // TODO use this data to populate ProjectCards once the component is created.  Remove this log once it is hooked up.

  return (
    <>
      <div className="faq-main">
        <ProjectsSectionStart
          sectionType={SectionType.light}
        ></ProjectsSectionStart>
      </div>
    </>
  );
}

/**
 * Fetches project data from github
 *
 * This will look through each repository for a meta.yml file
 * If the project has this file, it will gather all project information
 * needed to populate the ProjectCard component
 *
 * Note: Github has a rate limit (at time of writing) of 60 requests per hour per ip address
 * for unauthenticated requests.  This means there's a chance that this page will not load properly
 * If the user is refreshing frequently.
 *
 * It may be useful to cache this data and only re-fetch on longer intervals if this becomes a frequent issue.
 * See https://swr.vercel.app/docs/advanced/cache#localstorage-based-persistent-cache
 *
 * @param  fetch args
 * @returns array of data needed for project cards
 */
const fetchGithubProjectData = async (...args) => {
  const ghFullResponses = await fetchJson(...args);
  const data = await Promise.all(
    ghFullResponses.map(async (ghResponse) => {
      const ghData = mapGhData(ghResponse);
      const meta = await fetchMetaFile(ghData.full_name);
      return meta
        ? {
            ...ghData,
            meta,
          }
        : null;
    })
  );

  // Filter projects without a meta file
  return data.filter((d) => d !== null);
};

// Response format here: https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28
const mapGhData = (ghResponse) => ({
  id: ghResponse.id,
  homepage: ghResponse.homepage,
  full_name: ghResponse.full_name,
  html_url: ghResponse.html_url,
  api_url: ghResponse.url,
  created_at: ghResponse.created_at,
  updated_at: ghResponse.updated_at,
});

const metaFile = "meta.yml";

// Response contents are base64 encoded https://docs.github.com/en/rest/repos/contents?apiVersion=2022-11-28
const fetchMetaFile = async (ghFullName) => {
  const metaResponse = await fetch(
    `https://raw.githubusercontent.com/${ghFullName}/main/${metaFile}`
  );
  if (metaResponse.status === 404) {
    return null;
  } else if (!metaResponse.ok) {
    throw new Error(`Error fetching meta file: ${metaResponse.text()}`);
  }
  const textReponse = await metaResponse.text();

  return yaml.parse(textReponse);
};
