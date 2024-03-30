import { githubOwner } from "@/constants";
import "@/styles/pages/projects.scss";
import Projects from "./projects";

export default function Page() {
  return (
    <>
      <Projects githubOwner={githubOwner}></Projects>
    </>
  );
}
