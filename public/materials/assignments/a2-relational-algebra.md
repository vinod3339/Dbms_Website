# Assignment 2 — Relational algebra and integrity constraints

**Unit II · CO2**

Write expressions with named operators (σ, π, ρ, ∪, ∩, −, ⋈, ÷). Submit as the department instructs.

## Schema

- `Student(sid, name, programme)`
- `Course(cid, title, credits)`
- `Enroll(sid, cid, grade)`

`Student.sid`, `Course.cid`, and `(Enroll.sid, Enroll.cid)` are primary keys. `Enroll.sid` references `Student.sid`. `Enroll.cid` references `Course.cid`. `grade` may be null while a course is in progress.

## Questions

1. Names of students whose programme is CSE.
2. Titles of courses in which student `23` is enrolled.
3. Names of students who are enrolled in both a course titled `DBMS` and a course titled `OS`.
4. `sid` values of students who are not enrolled in any course.
5. `sid` values of students enrolled in every course that has `credits = 3`. Say which operator expresses the “every”.
6. Give one inserted row that violates a key constraint, and one inserted row that violates referential integrity. Use the schema above. Do not use a row that violates both at once.
7. Two algebra expressions can return the same result. Write a selection pushed below a join, and the same query with the selection written after the join. State why an optimizer would prefer the first form. One sentence is enough.
