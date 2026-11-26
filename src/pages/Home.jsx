import { Link } from "react-router-dom";
import { course } from "../data/course";
import { usePageTitle } from "../hooks/usePageTitle";

export default function Home() {
  usePageTitle("");

  return (
    <>
      <section className="course-hero">
        <div className="wrap">
          <span className="term-badge">
            {course.institution} / {course.semester} / AY {course.year}
          </span>
          <h1>
            {course.code}: {course.title}
          </h1>
          <p>{course.description}</p>
        </div>
      </section>

      <section className="band grey">
        <div className="wrap">
          <blockquote className="course-quote">
            <p>{course.industry}</p>
            <cite>— Course handout, {course.handoutDate}</cite>
          </blockquote>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <h2 className="section-title">Course Staff</h2>
          <div className="staff-grid">
            <article className="staff-card">
              <p className="role">Instructor</p>
              <h3>{course.instructor}</h3>
              <p className="muted">The department will publish the name and email on this page.</p>
            </article>
            <article className="staff-card">
              <p className="role">Course coordinator</p>
              <h3>{course.coordinator}</h3>
              <p className="muted">Named by the department in the course handout.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="band grey">
        <div className="wrap split">
          <div>
            <h2 className="section-title">Logistics</h2>
            <ul className="plain-list">
              <li>
                <strong>Lectures:</strong> {course.lectureHours} hours per week. L–T–P–C {course.ltpc}.
                The weekly timetable is issued by the department.
              </li>
              <li>
                <strong>Office hours:</strong> {course.consultation}, {course.consultationVenue}.
              </li>
              <li>
                <strong>Materials:</strong> The session plan, unit notes, SQL scripts, and practice
                sets are on this site. Slide files will be linked from the schedule when they are posted.
              </li>
              <li>
                <strong>Contact:</strong> {course.notices}. Assessment dates are announced by the
                department.
              </li>
            </ul>
          </div>
          <aside className="info-sidebar">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/schedule">Full schedule</Link>
              </li>
              <li>
                <Link to="/study/1">Unit notes</Link>
              </li>
              <li>
                <Link to="/assignments">Assignments</Link>
              </li>
              <li>
                <Link to="/laboratory">SQL laboratory</Link>
              </li>
              <li>
                <Link to="/info">Course info and policies</Link>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <h2 className="section-title">What is this course about?</h2>
          <p>
            You will move from file systems and data models to ER design, relational algebra, SQL,
            normalization, transactions, concurrency control, recovery, and indexing. The four units
            follow the {course.code} handout for Academic Regulation 2023.
          </p>
          <p>
            Lectures, practice assignments, and a design project are how the outcomes are exercised.
            Unit notes and SQL scripts are already posted. Slide decks and any change to the weekly
            plan will be added on the schedule page.
          </p>
          <p>These notes are here for anyone in the course to use.</p>
        </div>
      </section>
    </>
  );
}
