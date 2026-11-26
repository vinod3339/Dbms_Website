import { Fragment } from "react";
import { Link } from "react-router-dom";
import { lectures } from "../data/lectures";
import { unitById } from "../data/syllabus";
import { usePageTitle } from "../hooks/usePageTitle";

function practiceFor(sessions) {
  const numbers = new Set(sessions.map((session) => session.number));
  const links = [];
  if ([...numbers].some((number) => number >= 20 && number <= 24)) {
    links.push({ to: "/laboratory", label: "SQL scripts" });
  }
  if (numbers.has(12)) links.push({ to: "/assignments/er-modelling", label: "Assignment 1" });
  if (numbers.has(18)) links.push({ to: "/assignments/relational-algebra", label: "Assignment 2" });
  if (numbers.has(24)) links.push({ to: "/assignments/sql", label: "Assignment 3" });
  if (numbers.has(36)) links.push({ to: "/assignments/normalization-and-transactions", label: "Assignment 4" });
  if (numbers.has(47)) links.push({ to: "/projects", label: "Design project" });
  return links;
}

export default function Schedule() {
  usePageTitle("Schedule");
  const weeks = [];
  for (let index = 0; index < lectures.length; index += 3) {
    weeks.push(lectures.slice(index, index + 3));
  }

  let shownUnit = 0;

  return (
    <div className="page">
      <h1>Course Schedule</h1>
      <p className="lede">
        Forty-seven sessions from the course handout, in groups of three. Open a session for the
        class note, or the unit sheet for the full study page. Dates for continuous assessment and
        the end-semester examination are announced by the department.
      </p>
      <p>
        <Link to="/lectures">Search the session list</Link>
        {" · "}
        <Link to="/study/5">Supplementary topics</Link>
      </p>

      <div className="matrix-wrap">
        <table className="schedule-table">
          <caption>Week-by-week plan for 23IT304.</caption>
          <thead>
            <tr>
              <th scope="col">Sessions</th>
              <th scope="col">Description</th>
              <th scope="col">Course materials</th>
              <th scope="col">Practice</th>
              <th scope="col">Deadlines</th>
            </tr>
          </thead>
          <tbody>
            {weeks.map((sessions, index) => {
              const unit = unitById(sessions[0].unit);
              const showUnit = unit.id !== shownUnit;
              shownUnit = unit.id;
              const practice = practiceFor(sessions);
              const first = sessions[0].number;
              const last = sessions[sessions.length - 1].number;
              return (
                <Fragment key={`week-${index + 1}`}>
                  {showUnit && (
                    <tr className="week-header">
                      <td colSpan={5}>
                        Unit {unit.numeral} · {unit.title}
                      </td>
                    </tr>
                  )}
                  <tr>
                    <td>
                      Week {index + 1}
                      <br />
                      {first}–{last}
                    </td>
                    <td>{sessions.map((session) => session.title).join("; ")}</td>
                    <td>
                      <Link className="material-link" to={`/study/${unit.id}`}>
                        Unit {unit.numeral} notes
                      </Link>
                      {sessions.map((session) => (
                        <Link key={session.slug} className="material-link" to={`/lectures/${session.slug}`}>
                          Session {session.number}
                        </Link>
                      ))}
                    </td>
                    <td>
                      {practice.map((item) => (
                        <Link key={item.to} className="material-link assignment" to={item.to}>
                          {item.label}
                        </Link>
                      ))}
                    </td>
                    <td>
                      {practice.length > 0 ? (
                        <span className="deadline-badge">Date to be announced</span>
                      ) : (
                        "—"
                      )}
                    </td>
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
