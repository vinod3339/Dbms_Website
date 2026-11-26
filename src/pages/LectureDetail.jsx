import { Link, useParams } from "react-router-dom";
import { lectureBySlug, lectures } from "../data/lectures";
import { unitById } from "../data/syllabus";
import { usePageTitle } from "../hooks/usePageTitle";

export default function LectureDetail() {
  const { slug } = useParams();
  const lecture = lectureBySlug(slug);
  usePageTitle(lecture ? `Session ${lecture.number}` : "Session");

  if (!lecture) {
    return (
      <div className="page">
        <h1>Session not found</h1>
        <p>
          <Link to="/lectures">Back to the session plan</Link>
        </p>
      </div>
    );
  }

  const unit = unitById(lecture.unit);
  const index = lectures.findIndex((item) => item.slug === lecture.slug);
  const previous = lectures[index - 1];
  const next = lectures[index + 1];

  return (
    <div className="page narrow">
      <p className="kicker">
        <Link to="/lectures">Sessions</Link> · Unit {unit.numeral} · {lecture.co}
      </p>
      <h1>
        Session {lecture.number}. {lecture.title}
      </h1>
      <dl className="fact-sheet inline">
        <div>
          <dt>Method</dt>
          <dd>{lecture.method}</dd>
        </div>
        <div>
          <dt>Reference</dt>
          <dd>{lecture.reference}</dd>
        </div>
        <div>
          <dt>Outcome</dt>
          <dd>{lecture.co}</dd>
        </div>
      </dl>
      <p className="lede">{lecture.summary}</p>
      <p>
        <Link className="btn" to={`/study/${unit.id}`}>
          Unit {unit.numeral} study note
        </Link>
      </p>
      <nav className="pager" aria-label="Adjacent sessions">
        {previous ? (
          <Link to={`/lectures/${previous.slug}`}>← Session {previous.number}</Link>
        ) : (
          <span />
        )}
        {next ? <Link to={`/lectures/${next.slug}`}>Session {next.number} →</Link> : <span />}
      </nav>
    </div>
  );
}
