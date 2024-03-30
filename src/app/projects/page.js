import { githubOwner } from "@/constants";
import "@/styles/pages/projects.scss";
import Projects from "./projects";
// import '@/styles/pages/faq.scss'

export default function Page() {
  return (
    <>
      <Projects githubOwner={githubOwner}></Projects>
    </>
  );
}
