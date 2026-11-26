import PageIntro from "../components/PageIntro";
import { announcements } from "../data/announcements";
import { course } from "../data/course";

export default function Announcements() {
  return (
    <div className="page narrow">
      <PageIntro
        kicker="Department notice board remains the official channel"
        title="Notices"
        lede={`Consultation is ${course.consultation.toLowerCase()} in ${course.consultationVenue}. Assessment dates are announced by the department.`}
      />
      <div className="stack">
        {announcements.map((item) => (
          <article className="card" key={item.id}>
            <p className="kicker">{item.date}</p>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
