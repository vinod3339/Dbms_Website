-- 23IT304 laboratory 4
-- GROUP BY and HAVING. Same sample data as lab 2.

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

-- Enrollments per student, including students who have none.
SELECT s.student_id, s.first_name, COUNT(e.course_id) AS course_count
FROM students AS s
LEFT JOIN enrollment AS e ON s.student_id = e.student_id
GROUP BY s.student_id, s.first_name
ORDER BY s.student_id;

-- Courses with at least two enrollment rows.
SELECT c.title, COUNT(*) AS seats
FROM course AS c
JOIN enrollment AS e ON c.course_id = e.course_id
GROUP BY c.course_id, c.title
HAVING COUNT(*) >= 2;

-- COUNT(grade) skips NULL grades. COUNT(*) does not.
SELECT c.title, COUNT(*) AS rows_in_group, COUNT(e.grade) AS grades_present
FROM course AS c
JOIN enrollment AS e ON c.course_id = e.course_id
GROUP BY c.course_id, c.title
ORDER BY c.title;
