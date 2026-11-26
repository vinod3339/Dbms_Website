import { course } from "../data/course";

export default function Footer() {
  return (
    <footer className="course-footer">
      <div className="wrap">
        <div>
          <strong>
            {course.code} — {course.title}
          </strong>
          <p>
            {course.institution} / AY {course.year}
          </p>
        </div>
        <p>
          Chamber consultation: {course.consultation}, {course.consultationVenue}. Official notices
          are also posted on the {course.notices.toLowerCase()}.
        </p>
      </div>
    </footer>
  );
}
