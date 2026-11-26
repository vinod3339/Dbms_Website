-- 23IT304 laboratory 1
-- Run student.sql first if this database is empty, or run this script alone.
-- Each script recreates the tables it needs.
-- PostgreSQL and MySQL both accept this file.

DROP VIEW IF EXISTS result_sheet;
DROP TABLE IF EXISTS enrollment;
DROP TABLE IF EXISTS course;
DROP TABLE IF EXISTS students;

CREATE TABLE students (
    student_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    date_of_birth DATE,
    email VARCHAR(100) UNIQUE,
    enrollment_date DATE
);

INSERT INTO students (student_id, first_name, last_name, date_of_birth, email, enrollment_date) VALUES
(23001, 'Asha', 'Rao', '2005-04-12', 'asha.rao@example.edu', '2023-08-01'),
(23002, 'Rohan', 'Mehta', '2004-11-03', 'rohan.mehta@example.edu', '2023-08-01'),
(23003, 'Meera', 'Iyer', '2005-01-19', 'meera.iyer@example.edu', '2023-08-01'),
(23004, 'Vikram', 'Shah', '2004-07-30', 'vikram.shah@example.edu', '2022-08-01'),
(23005, 'Nisha', 'Khan', '2005-09-09', 'nisha.khan@example.edu', '2023-08-01'),
(23006, 'Arjun', 'Das', '2003-12-22', 'arjun.das@example.edu', '2022-08-01');

SELECT first_name, last_name, email
FROM students;

SELECT student_id, first_name, last_name
FROM students
WHERE enrollment_date >= '2023-08-01'
ORDER BY last_name;

-- Task: insert a second row with student_id 23001 and record the constraint error.
-- INSERT INTO students (student_id, first_name, last_name, date_of_birth, email, enrollment_date)
-- VALUES (23001, 'Duplicate', 'Key', '2005-01-01', 'duplicate@example.edu', '2024-01-01');
