import { githubOwner } from "@/constants";
import "@/styles/pages/about.scss";
import "@/styles/pages/faq.scss";
import "@/styles/pages/projects.scss";
import Projects from "./projects";

export default function Page() {
  return (
    <>
      <Projects githubOwner={githubOwner}></Projects>
    </>
  );
}
