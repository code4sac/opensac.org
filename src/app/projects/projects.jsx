"use client";
import { useState, useEffect } from "react";
import ProjectsCardsContainer from "@/app/projects/projectsCardsContainer";
import ProjectsSectionStart from "@/app/projects/projectsSectionStart";
import ProjectSearch from "@/app/projects/projectSearch";
import { jsonResponse } from "@/utils/response";
import useSWR from "swr";
import { fetchGithubProjectData } from "./github";

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
  const [projectsData, setProjectsData] = useState([]);

  const { data, error, isLoading } = useSWR(
    `https://api.github.com/orgs/${githubOwner}/repos?per_page=20&sort=updated&direction=desc`,
    fetcher,
    { shouldRetryOnError: false } // Auto retries quickly exhaust unauthenticated api requests to github, which breaks the page
  );

  useEffect(() => {
    if (data) setProjectsData(data);
  },[data]);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.dir(data); // TODO use this data to populate ProjectCards once the component is created.  Remove this log once it is hooked up.
  return (
    <>
      <div className="projects-main">
        <ProjectsSectionStart sectionType={SectionType.light}/>
        <ProjectSearch data={data} setProjectsData={setProjectsData} />
        <ProjectsCardsContainer projectsData={projectsData} sectionType={SectionType.light} />
      </div>
    </>
  );
}
