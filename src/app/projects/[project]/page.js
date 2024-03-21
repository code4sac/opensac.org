import { githubOwner } from "@/constants";
import "@/styles/pages/about.scss";
import "@/styles/pages/faq.scss";
import "@/styles/pages/projects.scss";
import SingleProject from "./singleProject";

// See https://nextjs.org/docs/app/api-reference/functions/generate-static-params
export async function generateStaticParams() {
  const ghResponses = await fetch(
    `https://api.github.com/orgs/${githubOwner}/repos?per_page=20&sort=updated&direction=desc`
  ).then((res) => res.json());

  return ghResponses.map((ghResponse) => ({
    project: ghResponse.name,
  }));
}

export default function Page({ params }) {
  return (
    <>
      <SingleProject
        githubFullName={`${githubOwner}/${params.project}`}
      ></SingleProject>
    </>
  );
}