export const labs = [
  {
    id: "L1",
    slug: "students",
    title: "The students table",
    session: "Session 20",
    outcomes: ["CO3"],
    href: "/materials/laboratory/lab01-students.sql",
    starter: "/materials/laboratory/student.sql",
    summary: "Create the starter students table, load six sample rows, and run selection and projection queries.",
    tasks: [
      "Run student.sql, then lab01-students.sql.",
      "List the email addresses of students who enrolled on or after 1 August 2023.",
      "Show first name, last name, and date of birth, ordered by date of birth.",
      "Try to insert a second row with student_id 23001 and record the constraint that fails.",
    ],
  },
  {
    id: "L2",
    slug: "schema",
    title: "Courses and enrollments",
    session: "Sessions 19–20",
    outcomes: ["CO2", "CO3"],
    href: "/materials/laboratory/lab02-schema.sql",
    summary: "Extend the database with course and enrollment tables, primary keys, and foreign keys.",
    tasks: [
      "Name the primary key and the foreign keys of enrollment.",
      "Insert one enrollment that references a missing course and record the error.",
      "List the titles of courses together with their credit values.",
    ],
  },
  {
    id: "L3",
    slug: "joins",
    title: "Inner and outer joins",
    session: "Session 24",
    outcomes: ["CO3"],
    href: "/materials/laboratory/lab03-joins.sql",
    summary: "Join students to the courses they take, and keep students who have no enrollment.",
    tasks: [
      "List each student’s name beside each course title they are enrolled in.",
      "Include the grade. Leave the grade blank in the result when it is NULL, using COALESCE.",
      "Produce a left outer join that still shows students with no rows in enrollment.",
      "Write the portable full-outer pattern (left join UNION right join) and explain which rows the inner join dropped.",
    ],
  },
  {
    id: "L4",
    slug: "grouping",
    title: "Aggregates, GROUP BY, and HAVING",
    session: "Sessions 21 and 23",
    outcomes: ["CO3"],
    href: "/materials/laboratory/lab04-grouping.sql",
    summary: "Count enrollments, average nothing yet, and filter groups with HAVING.",
    tasks: [
      "Count how many courses each student is enrolled in. Keep students with zero enrollments.",
      "List course titles that have at least two enrolled students.",
      "Count grades that are not null, per course, and explain why COUNT(grade) and COUNT(*) can differ.",
    ],
  },
  {
    id: "L5",
    slug: "views",
    title: "Views and constraints",
    session: "Sessions 19 and 24",
    outcomes: ["CO2", "CO3"],
    href: "/materials/laboratory/lab05-views.sql",
    summary: "Define a view for CSE-relevant queries and test a foreign-key violation.",
    tasks: [
      "Create a view that exposes student name, course title, and grade.",
      "Select from the view with a WHERE clause on grade.",
      "Attempt an enrollment whose student_id does not exist.",
      "State whether the view stores rows or only the query.",
    ],
  },
  {
    id: "L6",
    slug: "transactions",
    title: "Commit and rollback",
    session: "Sessions 33–34",
    outcomes: ["CO5"],
    href: "/materials/laboratory/lab06-transactions.sql",
    summary: "Change a row inside a transaction, roll it back, and confirm the original value.",
    tasks: [
      "Run the rollback demo and write down the enrollment_date before and after.",
      "In a second transaction, insert a student and commit, then delete that student and commit so the sample data is unchanged.",
      "Explain which ACID property the ROLLBACK demonstration is about.",
    ],
  },
];

export function labBySlug(slug) {
  return labs.find((lab) => lab.slug === slug);
}
