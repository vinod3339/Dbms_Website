import { Link, useParams } from "react-router-dom";
import SqlFile from "../components/SqlFile";
import { labBySlug } from "../data/labs";
import { usePageTitle } from "../hooks/usePageTitle";

export default function LabDetail() {
  const { slug } = useParams();
  const lab = labBySlug(slug);
  usePageTitle(lab ? lab.title : "Laboratory");

  if (!lab) {
    return (
      <div className="page">
        <h1>Laboratory script not found</h1>
        <p>
          <Link to="/laboratory">Back to the laboratory</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="page narrow">
      <p className="kicker">
        <Link to="/laboratory">Laboratory</Link> · {lab.id} · {lab.session} · {lab.outcomes.join(", ")}
      </p>
      <h1>{lab.title}</h1>
      <p className="lede">{lab.summary}</p>
      <h2>Tasks</h2>
      <ol className="plain-list">
        {lab.tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ol>
      <p className="actions">
        <a className="btn secondary" href={lab.href} download>
          Download script
        </a>
        {lab.starter && (
          <a className="btn secondary" href={lab.starter} download>
            Download student.sql
          </a>
        )}
      </p>
      <SqlFile src={lab.href} />
    </div>
  );
}
