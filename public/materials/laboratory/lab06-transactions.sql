-- 23IT304 laboratory 6
-- Rollback restores the row. The sample data is unchanged at the end.
-- START TRANSACTION is accepted by PostgreSQL and MySQL.

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
(23003, 'Meera', 'Iyer', '2005-01-19', 'meera.iyer@example.edu', '2023-08-01');

SELECT enrollment_date AS before_change
FROM students
WHERE student_id = 23001;

START TRANSACTION;

UPDATE students
SET enrollment_date = '2024-08-01'
WHERE student_id = 23001;

SELECT enrollment_date AS during_transaction
FROM students
WHERE student_id = 23001;

ROLLBACK;

SELECT enrollment_date AS after_rollback
FROM students
WHERE student_id = 23001;

-- Second exercise, left for you to run:
-- START TRANSACTION;
-- INSERT INTO students (student_id, first_name, last_name, date_of_birth, email, enrollment_date)
-- VALUES (23099, 'Temporary', 'Row', '2005-05-05', 'temporary.row@example.edu', '2024-01-01');
-- COMMIT;
-- START TRANSACTION;
-- DELETE FROM students WHERE student_id = 23099;
-- COMMIT;
--
-- Atomicity is the property the ROLLBACK demonstration is about:
-- the update does not remain after the transaction is abandoned.
