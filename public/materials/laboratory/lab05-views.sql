-- 23IT304 laboratory 5
-- A view, then a foreign-key violation you should try by hand.
-- PostgreSQL and MySQL.

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

CREATE TABLE course (
    course_id VARCHAR(10) PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    credits INT NOT NULL,
    CHECK (credits > 0)
);

CREATE TABLE enrollment (
    student_id INT NOT NULL,
    course_id VARCHAR(10) NOT NULL,
    grade VARCHAR(2),
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES students (student_id),
    FOREIGN KEY (course_id) REFERENCES course (course_id)
);

INSERT INTO students (student_id, first_name, last_name, date_of_birth, email, enrollment_date) VALUES
(23001, 'Asha', 'Rao', '2005-04-12', 'asha.rao@example.edu', '2023-08-01'),
(23002, 'Rohan', 'Mehta', '2004-11-03', 'rohan.mehta@example.edu', '2023-08-01'),
(23003, 'Meera', 'Iyer', '2005-01-19', 'meera.iyer@example.edu', '2023-08-01'),
(23004, 'Vikram', 'Shah', '2004-07-30', 'vikram.shah@example.edu', '2022-08-01'),
(23005, 'Nisha', 'Khan', '2005-09-09', 'nisha.khan@example.edu', '2023-08-01'),
(23006, 'Arjun', 'Das', '2003-12-22', 'arjun.das@example.edu', '2022-08-01');

INSERT INTO course (course_id, title, credits) VALUES
('23IT304', 'Database Management Systems', 3),
('23CS302', 'Operating Systems', 3),
('23MA201', 'Discrete Mathematics', 4),
('23CS310', 'Computer Networks', 3);

INSERT INTO enrollment (student_id, course_id, grade) VALUES
(23001, '23IT304', 'A'),
(23001, '23CS302', 'B'),
(23003, '23IT304', 'A'),
(23003, '23MA201', NULL),
(23005, '23IT304', 'B'),
(23006, '23CS302', 'A'),
(23006, '23CS310', NULL);

CREATE VIEW result_sheet AS
SELECT CONCAT(s.first_name, ' ', s.last_name) AS student_name,
       c.title,
       e.grade
FROM students AS s
JOIN enrollment AS e ON s.student_id = e.student_id
JOIN course AS c ON c.course_id = e.course_id;

SELECT student_name, title, grade
FROM result_sheet
WHERE grade IS NOT NULL
ORDER BY student_name;

-- The view stores the query, not a second copy of the rows.
-- Confirm by updating one grade, then selecting from the view again.
UPDATE enrollment
SET grade = 'A'
WHERE student_id = 23001 AND course_id = '23CS302';

SELECT student_name, title, grade
FROM result_sheet
WHERE student_name LIKE 'Asha%';

-- Task: this insert must fail referential integrity. Run it and record the message.
-- INSERT INTO enrollment (student_id, course_id, grade) VALUES (99999, '23IT304', 'B');
