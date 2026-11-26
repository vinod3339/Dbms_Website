import { Link, useParams } from "react-router-dom";
import MarkdownFile from "../components/MarkdownFile";
import { unitById, units } from "../data/syllabus";
import { usePageTitle } from "../hooks/usePageTitle";

export default function StudyNote() {
  const { unitId } = useParams();
  const unit = unitById(unitId);
  usePageTitle(unit ? unit.title : "Study note");

  if (!unit) {
    return (
      <div className="page">
        <h1>Note not found</h1>
        <p>
          <Link to="/syllabus">Back to the syllabus</Link>
        </p>
      </div>
    );
  }

  const index = units.findIndex((item) => item.id === unit.id);
  const previous = units[index - 1];
  const next = units[index + 1];

  return (
    <div className="page narrow">
      <p className="kicker">
        {unit.official ? `Unit ${unit.numeral} study note` : "Supplementary note"}
        {unit.hours ? ` · ${unit.hours} hours` : ""}
      </p>
      <p className="actions">
        <a className="btn secondary" href={unit.note} download>
          Download markdown
        </a>
        {unit.official && (
          <Link className="btn secondary" to={`/lectures?unit=${unit.id}`}>
            Sessions {unit.sessions[0]}–{unit.sessions[1]}
          </Link>
        )}
      </p>
      <MarkdownFile src={unit.note} />
      <nav className="pager" aria-label="Adjacent notes">
        {previous ? <Link to={`/study/${previous.id}`}>← {previous.title}</Link> : <span />}
        {next ? <Link to={`/study/${next.id}`}>{next.title} →</Link> : <span />}
      </nav>
    </div>
  );
}
