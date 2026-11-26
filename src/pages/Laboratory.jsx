import { Link } from "react-router-dom";
import PageIntro from "../components/PageIntro";
import { course } from "../data/course";
import { labs } from "../data/labs";
import { publicUrl } from "../utils/publicUrl";

export default function Laboratory() {
  return (
    <div className="page">
      <PageIntro
        kicker="SQL practice"
        title="Laboratory"
        lede="Scripts for the SQL sessions in Unit II and a short transaction demo for Unit III. The course is credited as 3–0–0–3, so this work supports those sessions. It is not a separate practical credit."
      />
      <p>
        Use PostgreSQL ({course.web[0].label}) or MySQL ({course.web[1].label}). Each script can be
        run on its own. The original starter table is in{" "}
        <a href={publicUrl("/materials/laboratory/student.sql")} download>
          student.sql
        </a>
        .
      </p>
      <div className="stack">
        {labs.map((lab) => (
          <article className="card" key={lab.id}>
            <p className="kicker">
              {lab.id} · {lab.session} · {lab.outcomes.join(", ")}
            </p>
            <h2>
              <Link to={`/laboratory/${lab.slug}`}>{lab.title}</Link>
            </h2>
            <p>{lab.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
