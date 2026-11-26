import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PageIntro from "../components/PageIntro";
import { lectures } from "../data/lectures";
import { units } from "../data/syllabus";

export default function Lectures() {
  const [params, setParams] = useSearchParams();
  const unitParam = params.get("unit") ?? "all";
  const [query, setQuery] = useState("");
  const officialUnits = units.filter((unit) => unit.official);

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return lectures.filter((lecture) => {
      const unitOk = unitParam === "all" || lecture.unit === Number(unitParam);
      const haystack = `${lecture.number} ${lecture.title} ${lecture.summary} ${lecture.co}`.toLowerCase();
      return unitOk && haystack.includes(needle);
    });
  }, [query, unitParam]);

  function chooseUnit(value) {
    if (value === "all") setParams({});
    else setParams({ unit: value });
  }

  return (
    <div className="page">
      <PageIntro
        kicker="Detailed session plan"
        title="Sessions"
        lede="Forty-seven sessions from the course handout, grouped into the four official units. Unit IV is allocated 12 hours and numbered as sessions 37–47."
      />

      <div className="filters">
        <button type="button" className={unitParam === "all" ? "on" : undefined} onClick={() => chooseUnit("all")}>
          All
        </button>
        {officialUnits.map((unit) => (
          <button
            key={unit.id}
            type="button"
            className={unitParam === String(unit.id) ? "on" : undefined}
            onClick={() => chooseUnit(String(unit.id))}
          >
            Unit {unit.numeral}
          </button>
        ))}
        <label className="search">
          <span className="sr-only">Search sessions</span>
          <input
            type="search"
            value={query}
            placeholder="Search title or outcome"
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
      </div>
      <p className="muted" aria-live="polite">
        {visible.length} session{visible.length === 1 ? "" : "s"}
      </p>

      {officialUnits.map((unit) => {
        const rows = visible.filter((lecture) => lecture.unit === unit.id);
        if (rows.length === 0) return null;
        return (
          <section key={unit.id}>
            <div className="section-head">
              <h2>
                Unit {unit.numeral} · {unit.title}
              </h2>
              <Link to={`/study/${unit.id}`}>Study note</Link>
            </div>
            <div className="matrix-wrap">
              <table className="sessions">
                <caption>Sessions for Unit {unit.numeral}.</caption>
                <thead>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Topic</th>
                    <th scope="col">CO</th>
                    <th scope="col">Method</th>
                    <th scope="col">Reference</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((lecture) => (
                    <tr key={lecture.slug}>
                      <td>{lecture.number}</td>
                      <th scope="row">
                        <Link to={`/lectures/${lecture.slug}`}>{lecture.title}</Link>
                      </th>
                      <td>{lecture.co}</td>
                      <td>{lecture.method}</td>
                      <td>{lecture.reference}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        );
      })}

      {visible.length === 0 && <p>No session matches that filter.</p>}
    </div>
  );
}
