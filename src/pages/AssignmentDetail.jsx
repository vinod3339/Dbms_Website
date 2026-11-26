import { Link, useParams } from "react-router-dom";
import MarkdownFile from "../components/MarkdownFile";
import { assignmentBySlug } from "../data/assignments";
import { unitById } from "../data/syllabus";
import { usePageTitle } from "../hooks/usePageTitle";

export default function AssignmentDetail() {
  const { slug } = useParams();
  const assignment = assignmentBySlug(slug);
  usePageTitle(assignment ? assignment.title : "Assignment");

  if (!assignment) {
    return (
      <div className="page">
        <h1>Assignment not found</h1>
        <p>
          <Link to="/assignments">Back to assignments</Link>
        </p>
      </div>
    );
  }

  const unit = unitById(assignment.unit);

  return (
    <div className="page narrow">
      <p className="kicker">
        <Link to="/assignments">Assignments</Link> · {assignment.id} · Unit {unit.numeral} ·{" "}
        {assignment.outcomes.join(", ")}
      </p>
      <p>
        <a className="btn secondary" href={assignment.href} download>
          Download markdown
        </a>
      </p>
      <MarkdownFile src={assignment.href} />
    </div>
  );
}
