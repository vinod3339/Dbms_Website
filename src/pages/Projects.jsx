import { Link } from "react-router-dom";
import MarkdownFile from "../components/MarkdownFile";
import { usePageTitle } from "../hooks/usePageTitle";

export default function Projects() {
  usePageTitle("Design project");

  return (
    <div className="page narrow">
      <p className="kicker">
        <Link to="/">Overview</Link> · Practice · CO1–CO4
      </p>
      <p>
        <a className="btn secondary" href="/materials/projects/seminar-series.md" download>
          Download brief
        </a>
      </p>
      <MarkdownFile src="/materials/projects/seminar-series.md" />
    </div>
  );
}
