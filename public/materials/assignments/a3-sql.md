# Assignment 3 — SQL

**Unit II · CO3**

Use the schema created by `lab02-schema.sql` in the laboratory: `students`, `course`, and `enrollment`. Write one statement per question. Submit as the department instructs.

## Questions

1. List `first_name`, `last_name`, and `email` for every student, ordered by `last_name`.
2. List students whose `enrollment_date` is on or after `2023-08-01`.
3. List each enrolled student’s full name beside the course `title` and `grade`. Drop students who have no enrollment.
4. Repeat question 3 so that students with no enrollment still appear, with null title and grade.
5. For each course, show the title and the number of enrollment rows. Include a course that has no students, with a count of zero.
6. Show titles of courses that have at least two enrollment rows.
7. Show the names of students who have at least one null `grade`. Use a subquery.
8. Create a view `result_sheet` with columns `student_name`, `title`, and `grade`. Then select the rows of the view where `grade` is not null.

In a short note under question 5, say why `COUNT(*)` and `COUNT(grade)` can differ.
