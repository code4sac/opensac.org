import { githubOwner } from "@/constants";
import Projects from "./projects";

export default function Page() {
  return (
    <>
      <Projects githubOwner={githubOwner}></Projects>
    </>
  );
}
