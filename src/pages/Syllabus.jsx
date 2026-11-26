import { Link } from "react-router-dom";
import PageIntro from "../components/PageIntro";
import { coMatrix, course } from "../data/course";
import { units } from "../data/syllabus";

export default function Syllabus() {
  const officialUnits = units.filter((unit) => unit.official);
  const supplementary = units.find((unit) => !unit.official);

  return (
    <div className="page">
      <PageIntro
        kicker={`${course.code} · ${course.semester} · AY ${course.year}`}
        title="Course Information"
        lede={course.description}
      >
        <p className="meta-line">
          Handout dated {course.handoutDate} · {course.regulation} · L–T–P–C {course.ltpc} ·{" "}
          {course.totalHours} hours
        </p>
      </PageIntro>

      <section id="objectives">
        <h2>Objectives</h2>
        <ul className="plain-list">
          {course.objectives.map((objective) => (
            <li key={objective}>{objective}</li>
          ))}
        </ul>
      </section>

      <section id="outcomes">
        <h2>Outcomes</h2>
        <ol className="co-list">
          {course.outcomes.map((outcome) => (
            <li key={outcome.id}>
              <span>{outcome.id}</span>
              <p>{outcome.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="units">
        <h2>Units</h2>
        <div className="stack">
          {officialUnits.map((unit) => (
            <article className="card" key={unit.id} id={`unit-${unit.id}`}>
              <p className="kicker">
                Unit {unit.numeral} · {unit.hours} hours · Sessions {unit.sessions[0]}–
                {unit.sessions[1]} · {unit.outcomes.join(", ")}
              </p>
              <h3>{unit.title}</h3>
              <ul className="plain-list">
                {unit.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
              {unit.additional.length > 0 && (
                <p>
                  <strong>Additional topics: </strong>
                  {unit.additional.join("; ")}.
                </p>
              )}
              <p>
                <Link to={`/study/${unit.id}`}>Study note</Link>
                {" · "}
                <Link to={`/lectures?unit=${unit.id}`}>Sessions</Link>
              </p>
            </article>
          ))}
        </div>
        <p className="muted">
          {supplementary.noteText}{" "}
          <Link to={`/study/${supplementary.id}`}>Open the supplementary note</Link>.
        </p>
      </section>

      <section id="matrix">
        <h2>CO–PO / PSO mapping</h2>
        <p className="muted">{course.mappingScale}</p>
        <div className="matrix-wrap">
          <table className="matrix">
            <caption>Course articulation matrix from the 23IT304 handout.</caption>
            <thead>
              <tr>
                <th scope="col">CO</th>
                {course.programOutcomes.map(([code, label]) => (
                  <th key={code} scope="col" title={label}>
                    {code}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {course.outcomes.map((outcome) => (
                <tr key={outcome.id}>
                  <th scope="row">{outcome.id}</th>
                  {coMatrix[outcome.id].map((value, index) => (
                    <td key={course.programOutcomes[index][0]}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="legend">
          {course.programOutcomes.map(([code, label]) => (
            <li key={code}>
              <strong>{code}</strong> {label}
            </li>
          ))}
        </ul>
        <p className="muted">
          PSO1 and PSO2 are recorded in the handout. Their programme-specific wording is defined by
          the CSE programme and is not expanded in the handout.
        </p>
      </section>

      <section id="books">
        <h2>Books and web resources</h2>
        <h3>Textbooks</h3>
        <ul className="plain-list">
          {course.textbooks.map((book) => (
            <li key={book.id}>
              <strong>{book.id}.</strong> {book.citation}
            </li>
          ))}
        </ul>
        <h3>References</h3>
        <ul className="plain-list">
          {course.references.map((book) => (
            <li key={book.id}>
              <strong>{book.id}.</strong> {book.citation}
            </li>
          ))}
        </ul>
        <h3>Web resources</h3>
        <ul className="plain-list">
          {course.web.map((item) => (
            <li key={item.id}>
              <strong>{item.id}.</strong>{" "}
              <a href={item.href} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section id="assessment">
        <h2>Assessment</h2>
        <p>
          Duration, marks, and detailed weightage follow {course.regulation} and departmental
          instructions. Dates are to be announced. Venue: {course.assessmentVenue}.
        </p>
        <div className="matrix-wrap">
          <table>
            <caption>Assessment components recorded in the course handout.</caption>
            <thead>
              <tr>
                <th scope="col">Component</th>
                <th scope="col">Weightage</th>
                <th scope="col">Date</th>
                <th scope="col">Venue</th>
              </tr>
            </thead>
            <tbody>
              {course.assessment.map((row) => (
                <tr key={row.component}>
                  <th scope="row">{row.component}</th>
                  <td>{row.weight}</td>
                  <td>{row.when}</td>
                  <td>{row.venue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="people">
        <h2>Consultation</h2>
        <dl className="fact-sheet inline">
          <div>
            <dt>Instructor</dt>
            <dd>{course.instructor}</dd>
          </div>
          <div>
            <dt>Course coordinator</dt>
            <dd>{course.coordinator}</dd>
          </div>
          <div>
            <dt>Chamber hour</dt>
            <dd>{course.consultation}</dd>
          </div>
          <div>
            <dt>Venue</dt>
            <dd>{course.consultationVenue}</dd>
          </div>
        </dl>
        <p className="muted">Notices: {course.notices}.</p>
        <p>
          {course.documents.map((document) => (
            <a key={document.href} className="btn secondary" href={document.href} download>
              {document.label}
            </a>
          ))}
        </p>
      </section>
    </div>
  );
}
