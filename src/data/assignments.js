import { publicUrl } from "../utils/publicUrl";

export const assignments = [
  {
    id: "A1",
    slug: "er-modelling",
    title: "ER modelling for a student-club database",
    unit: 1,
    outcomes: ["CO1"],
    href: publicUrl("/materials/assignments/a1-er-modelling.md"),
    brief: "Draw an ER diagram from a short requirements note, mark keys and participation, and map the diagram to relations.",
  },
  {
    id: "A2",
    slug: "relational-algebra",
    title: "Relational algebra and integrity constraints",
    unit: 2,
    outcomes: ["CO2"],
    href: publicUrl("/materials/assignments/a2-relational-algebra.md"),
    brief: "Write algebra expressions for a student–course schema and state the keys and foreign keys.",
  },
  {
    id: "A3",
    slug: "sql",
    title: "SQL queries",
    unit: 2,
    outcomes: ["CO3"],
    href: publicUrl("/materials/assignments/a3-sql.md"),
    brief: "Write SQL for selection, joins, grouping, subqueries, an outer join, and a view on the laboratory schema.",
  },
  {
    id: "A4",
    slug: "normalization-and-transactions",
    title: "Normalization, schedules, and serializability",
    unit: 3,
    outcomes: ["CO4", "CO5"],
    href: publicUrl("/materials/assignments/a4-normalization-and-transactions.md"),
    brief: "Compute an attribute closure, test a normal form, and decide whether a schedule is conflict serializable.",
  },
];

export function assignmentBySlug(slug) {
  return assignments.find((item) => item.slug === slug);
}
