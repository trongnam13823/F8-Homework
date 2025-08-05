CREATE TABLE school (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  address TEXT,
  founding_year INT,
  principal_name TEXT,
  phone TEXT,
  email TEXT,
  website TEXT,
  status TEXT
);

CREATE TABLE class (
  id SERIAL PRIMARY KEY,
  school_id INT REFERENCES school(id),
  name TEXT,
  grade_level TEXT,
  homeroom_teacher TEXT,
  capacity INT,
  room_number TEXT,
  academic_year TEXT,
  is_active BOOLEAN
);

CREATE TABLE student (
  id SERIAL PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  date_of_birth DATE,
  gender TEXT,
  address TEXT,
  phone TEXT,
  email TEXT,
  enrollment_date DATE,
  parent_name TEXT,
  parent_contact TEXT
);

CREATE TABLE class_student (
  id SERIAL PRIMARY KEY,
  class_id INT REFERENCES class(id),
  student_id INT REFERENCES student(id),
  enrollment_date DATE,
  status TEXT,
  grade FLOAT
);

ALTER TABLE school ADD COLUMN description TEXT;
ALTER TABLE student ADD COLUMN special_needs BOOLEAN DEFAULT FALSE;
ALTER TABLE class_student ADD COLUMN attendance_rate FLOAT;


-- Thêm 5 trường học
INSERT INTO school (name, address, founding_year, principal_name, phone, email, website, status, description) VALUES
('Krajcik, Hammes and Bauch', 'USS Hayes\nPSC 0883, Box 0067\nFPO AE 79651', 1999, 'Joseph Pruitt', '(144)016-2224x710', 'hansonrobert@example.org', 'https://roberts.com', 'active', 'Synergistic optimizing software'),
('Rogahn Group', '61855 Tricia Flats Suite 063\nBeahanburgh, DE 22456', 1991, 'Justin Weiss', '875.810.8384x527', 'gwen30@example.com', 'https://gerlach.com', 'inactive', 'Balanced maximized migration'),
('Stiedemann-Cormier', '70630 Daugherty Isle Apt. 941\nPort Ronniestad, HI 23630', 1996, 'Shane Sullivan', '001-618-764-7969x4377', 'carrollrobin@example.net', 'https://morissette.com', 'inactive', 'Optimized impactful customer loyalty'),
('Kuhic Inc', '346 Mitchell Ranch Apt. 820\nNorth Katelyn, MA 95752', 2004, 'Jason Barrett', '(661)224-7082', 'smithtara@example.net', 'https://kirlin.com', 'inactive', 'Synergized reciprocal analyzer'),
('Schulist-Schultz', '229 Erika Mountains Suite 183\nPort Susanland, LA 97419', 1987, 'Travis Martin', '001-660-275-4239x66000', 'michael39@example.org', 'https://wiza.com', 'active', 'Open-source zero tolerance structure');


-- Thêm 10 lớp học (chọn school_id tương ứng)
INSERT INTO class (school_id, name, grade_level, homeroom_teacher, capacity, room_number, academic_year, is_active) VALUES
(1, '11A1', '11', 'Julie Miller', 42, '100', '2022-2029', true),
(2, '12A2', '12', 'Dr. Danielle Hall', 33, '101', '2020-2029', false),
(5, '11A3', '11', 'Wendy Kim', 44, '102', '2022-2028', false),
(1, '11A4', '11', 'John Harris', 33, '103', '2024-2030', true),
(3, '11A5', '11', 'Scott Gonzalez', 33, '104', '2023-2028', true),
(3, '11A6', '11', 'Misty Diaz', 35, '105', '2024-2026', false),
(3, '10A7', '10', 'Laura Smith', 38, '106', '2024-2030', true),
(2, '10A8', '10', 'Jennifer Bryant', 43, '107', '2022-2026', true),
(3, '11A9', '11', 'Jason Brown', 43, '108', '2024-2030', true),
(1, '10A10', '10', 'Justin Odom', 44, '109', '2022-2029', true);


-- Thêm 20 học sinh
INSERT INTO student (id, name, date_of_birth, gender, phone, email, address, enrollment_date) VALUES
(1, 'Nguyen Van A', '2003-05-12', 'Male', '0901234567', 'vana@example.com', '123 Lê Lợi, Hà Nội', '2021-09-01'),
(2, 'Tran Thi B', '2002-08-20', 'Female', '0912345678', 'thib@example.com', '456 Nguyễn Huệ, Đà Nẵng', '2021-09-01'),
(3, 'Le Van C', '2004-01-10', 'Male', '0923456789', 'vanc@example.com', '789 Trần Phú, TP.HCM', '2022-01-15'),
(4, 'Pham Thi D', '2003-03-18', 'Female', '0934567890', 'thid@example.com', '321 Lý Thường Kiệt, Cần Thơ', '2022-02-01'),
(5, 'Hoang Van E', '2001-12-30', 'Male', '0945678901', 'vane@example.com', '111 Trần Hưng Đạo, Hải Phòng', '2020-09-05'),
(6, 'Nguyen Thi F', '2002-06-22', 'Female', '0956789012', 'thif@example.com', '222 Phan Đình Phùng, Huế', '2021-10-01'),
(7, 'Vo Van G', '2003-11-15', 'Male', '0967890123', 'vang@example.com', '333 Lê Duẩn, Đà Nẵng', '2022-03-10'),
(8, 'Do Thi H', '2004-04-05', 'Female', '0978901234', 'thih@example.com', '444 Hai Bà Trưng, Hà Nội', '2023-01-01'),
(9, 'Bui Van I', '2003-07-09', 'Male', '0989012345', 'vani@example.com', '555 Quang Trung, Huế', '2021-09-01'),
(10, 'Ngo Thi J', '2002-09-25', 'Female', '0990123456', 'thij@example.com', '666 Trần Cao Vân, Đà Lạt', '2020-09-10'),
(11, 'Nguyen Van K', '2001-10-02', 'Male', '0902345678', 'vank@example.com', '777 Hùng Vương, Nha Trang', '2021-01-15'),
(12, 'Tran Thi L', '2004-02-17', 'Female', '0913456789', 'thil@example.com', '888 Nguyễn Văn Cừ, Vũng Tàu', '2023-02-05'),
(13, 'Le Van M', '2003-05-28', 'Male', '0924567890', 'vanm@example.com', '999 Nguyễn Trãi, Hà Nội', '2021-09-01'),
(14, 'Pham Thi N', '2002-10-30', 'Female', '0935678901', 'thin@example.com', '123 Cách Mạng, TP.HCM', '2020-10-01'),
(15, 'Hoang Van O', '2003-12-01', 'Male', '0946789012', 'vano@example.com', '234 3/2, Cần Thơ', '2022-01-01'),
(16, 'Nguyen Thi P', '2001-11-20', 'Female', '0957890123', 'thip@example.com', '345 Nguyễn Thị Minh Khai, Huế', '2020-09-01'),
(17, 'Vo Van Q', '2002-03-09', 'Male', '0968901234', 'vanq@example.com', '456 Điện Biên Phủ, Hải Phòng', '2021-03-01'),
(18, 'Do Thi R', '2004-06-12', 'Female', '0979012345', 'thir@example.com', '567 Lê Quý Đôn, Đà Nẵng', '2023-03-01'),
(19, 'Bui Van S', '2003-08-14', 'Male', '0980123456', 'vans@example.com', '678 Hoàng Diệu, TP.HCM', '2022-04-01'),
(20, 'Ngo Thi T', '2002-07-07', 'Female', '0991234567', 'thit@example.com', '789 Phan Chu Trinh, Đà Lạt', '2020-09-01');


-- Gán học sinh vào lớp (ít nhất 2 lớp mỗi học sinh)
INSERT INTO class_student (student_id, class_id, enrollment_date) VALUES
(1, 1, '2021-09-01'),
(1, 2, '2022-01-10'),
(2, 1, '2021-09-01'),
(2, 3, '2022-02-05'),
(3, 4, '2022-03-01'),
(3, 5, '2022-09-15'),
(4, 1, '2022-04-01'),
(4, 2, '2023-01-01'),
(5, 6, '2021-01-01'),
(5, 7, '2021-03-01'),
(6, 2, '2022-09-01'),
(6, 3, '2023-01-01'),
(7, 4, '2022-03-15'),
(7, 8, '2023-02-01'),
(8, 1, '2023-01-01'),
(8, 9, '2023-04-01'),
(9, 5, '2021-09-01'),
(9, 10, '2022-09-01'),
(10, 6, '2020-09-10'),
(10, 7, '2021-01-01'),
(11, 8, '2021-02-01'),
(11, 3, '2021-09-01'),
(12, 2, '2023-02-05'),
(12, 4, '2023-04-01'),
(13, 1, '2021-09-01'),
(13, 5, '2022-09-01'),
(14, 6, '2020-10-01'),
(14, 9, '2021-02-01'),
(15, 1, '2022-01-01'),
(15, 2, '2022-03-01'),
(16, 10, '2020-09-01'),
(16, 7, '2021-01-01'),
(17, 3, '2021-03-01'),
(17, 8, '2021-05-01'),
(18, 4, '2023-03-01'),
(18, 6, '2023-04-01'),
(19, 1, '2022-04-01'),
(19, 10, '2022-06-01'),
(20, 5, '2020-09-01'),
(20, 9, '2021-01-01');


-- Cập nhật tên hiệu trưởng
UPDATE school SET principal_name = 'Nguyễn Thị Mới' WHERE id = 1;

-- Cập nhật trạng thái hoạt động của lớp học thuộc trường có id = 1
UPDATE class SET is_active = FALSE WHERE school_id = 1;

-- Cập nhật điểm số
UPDATE class_student SET grade = 9.5 WHERE class_id = 1 AND student_id = 1;

-- Cập nhật liên hệ học sinh sinh trước 2010
UPDATE student SET phone = '0000000000', email = 'updated@student.vn' 
WHERE date_of_birth < '2010-01-01';


-- Câu 16
SELECT * FROM school ORDER BY founding_year ASC;

-- Câu 17
SELECT * FROM class WHERE school_id = 1 AND is_active = TRUE;

-- Câu 18
SELECT * FROM student 
WHERE date_of_birth BETWEEN '2005-01-01' AND '2010-12-31'
ORDER BY date_of_birth ASC;

-- Câu 19
SELECT c.name AS class_name, s.name AS school_name 
FROM class c 
INNER JOIN school s ON c.school_id = s.id;

-- Câu 20
SELECT s.name, COUNT(c.id) AS class_count 
FROM school s 
LEFT JOIN class c ON s.id = c.school_id 
GROUP BY s.id;

-- Câu 21
SELECT s.first_name || ' ' || s.last_name AS student_name, c.name AS class_name
FROM student s
INNER JOIN class_student cs ON s.id = cs.student_id
INNER JOIN class c ON c.id = cs.class_id;

-- Câu 22
SELECT c.name, COUNT(cs.student_id) AS student_count
FROM class c
JOIN class_student cs ON c.id = cs.class_id
GROUP BY c.id
HAVING COUNT(cs.student_id) > 5
ORDER BY student_count DESC;

-- Câu 23
SELECT c.name, AVG(cs.grade) AS avg_grade
FROM class c
JOIN class_student cs ON c.id = cs.class_id
GROUP BY c.id
HAVING AVG(cs.grade) > 7.5
ORDER BY avg_grade DESC;

-- Câu 24
SELECT s.name, COUNT(c.id) AS class_count
FROM school s
JOIN class c ON s.id = c.school_id
GROUP BY s.id
HAVING COUNT(c.id) >= 3
ORDER BY class_count DESC;

-- Câu 25
SELECT s.name, JSON_AGG(c.name) AS classes
FROM school s
LEFT JOIN class c ON s.id = c.school_id
GROUP BY s.id;

-- Câu 26
SELECT c.name, JSON_AGG(s.first_name || ' ' || s.last_name) AS students
FROM class c
JOIN class_student cs ON c.id = cs.class_id
JOIN student s ON s.id = cs.student_id
GROUP BY c.id;

-- Câu 27
SELECT s.name AS school_name,
  JSON_AGG(
    JSON_BUILD_OBJECT(
      'class_name', c.name,
      'students', (
        SELECT JSON_AGG(s2.first_name || ' ' || s2.last_name)
        FROM class_student cs2
        JOIN student s2 ON s2.id = cs2.student_id
        WHERE cs2.class_id = c.id
      )
    )
  ) AS class_students
FROM school s
JOIN class c ON s.id = c.school_id
GROUP BY s.id;

-- Câu 28
SELECT s.first_name || ' ' || s.last_name AS student_name, COUNT(cs.class_id) AS class_count
FROM student s
JOIN class_student cs ON s.id = cs.student_id
GROUP BY s.id
HAVING COUNT(cs.class_id) >= 3
ORDER BY class_count DESC;

-- Câu 29
SELECT s.name AS school_name, c.name AS class_name, AVG(cs.grade) AS avg_grade
FROM school s
JOIN class c ON s.id = c.school_id
JOIN class_student cs ON c.id = cs.class_id
GROUP BY s.id, c.id
HAVING AVG(cs.grade) = (
  SELECT MAX(avg_grade)
  FROM (
    SELECT AVG(cs2.grade) AS avg_grade
    FROM class c2
    JOIN class_student cs2 ON c2.id = cs2.class_id
    WHERE c2.school_id = s.id
    GROUP BY c2.id
  ) sub
);

-- Câu 30
SELECT s.first_name || ' ' || s.last_name AS student_name,
       COUNT(cs.class_id) AS class_count,
       AVG(cs.grade) AS avg_grade
FROM student s
JOIN class_student cs ON s.id = cs.student_id
GROUP BY s.id
ORDER BY avg_grade DESC
LIMIT 5;
