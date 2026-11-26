import { Link } from "react-router-dom";
import PageIntro from "../components/PageIntro";
import { assignments } from "../data/assignments";
import { unitById } from "../data/syllabus";

const extra = {
  id: "Project",
  slug: null,
  title: "Department seminar series",
  unit: 1,
  outcomes: ["CO1", "CO2", "CO3", "CO4"],
  href: "/projects",
  brief:
    "A design exercise: ER diagram, schema, normal form, ten SQL statements, and one transaction. It prepares you for the open-book assignment. It is not an extra credit.",
};

export default function Assignments() {
  const items = [
    ...assignments.map((item) => ({ ...item, href: `/assignments/${item.slug}` })),
    extra,
  ];

  return (
    <div className="page">
      <PageIntro
        title="Assignments"
        lede="Four practice sets and one design project. They follow CO1–CO5. The department announces the open-book / assignment examination. This site does not collect submissions, and it does not set due dates."
      />
      <aside className="info-sidebar">
        <h3>How to submit</h3>
        <p>
          Write the answers and hand them in as the department instructs. Discussing a problem is
          fine. The write-up you submit has to be your own. SQL scripts for Assignment 3 are in the{" "}
          <Link to="/laboratory">laboratory</Link>.
        </p>
      </aside>
      {items.map((item) => {
        const unit = unitById(item.unit);
        return (
          <article className="assignment-card" key={item.id}>
            <div className="assignment-top">
              <p className="pa-number">{item.id}</p>
              <p className="due-date">Due date to be announced</p>
            </div>
            <h2>
              <Link to={item.href}>{item.title}</Link>
            </h2>
            <p>{item.brief}</p>
            <div className="topic-row">
              {item.id !== "Project" && <span>Unit {unit.numeral}</span>}
              {item.outcomes.map((outcome) => (
                <span key={outcome}>{outcome}</span>
              ))}
            </div>
            <p>
              <Link className="btn" to={item.href}>
                Open the brief
              </Link>
            </p>
          </article>
        );
      })}
    </div>
  );
}
