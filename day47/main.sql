CREATE DATABASE day47 

CREATE TABLE Book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(200),
    author VARCHAR(100),
    publish_year INT,
    publisher VARCHAR(100),
    category VARCHAR(50),
    page_count INT,
    price NUMERIC(10,2),
    stock INT,
    import_date DATE
);

ALTER TABLE Book ADD COLUMN status VARCHAR(20);
ALTER TABLE Book ADD COLUMN language VARCHAR(30);
ALTER TABLE Book ADD COLUMN shelf_position VARCHAR(20);

INSERT INTO Book VALUES 
(1, 'The Adventures of Cricket', 'To Hoai', 2010, 'Kim Dong', 'Literature', 150, 75000.00, 10, '2020-01-15', 'Available', 'Vietnamese', 'A1'),
(2, 'The Alchemist', 'Paulo Coelho', 2013, 'NXB Tre', 'Novel', 228, 85000.00, 7, '2020-02-20', 'Available', 'Vietnamese', 'A2'),
(3, 'How to Win Friends', 'Dale Carnegie', 2016, 'NXB Tong Hop', 'Psychology', 320, 120000.00, 5, '2020-03-10', 'Borrowed', 'Vietnamese', 'B1'),
(4, 'Mắt biếc', 'Nguyen Nhat Anh', 2019, 'NXB Tre', 'Novel', 195, 88000.00, 12, '2020-12-10', 'Available', 'Vietnamese', 'A4'),
(5, 'Vật lý đại cương', 'David Halliday', 2014, 'NXB Dai hoc Quoc gia', 'Textbook', 850, 320000.00, 3, '2021-01-20', 'Available', 'Vietnamese', 'F1'),
(6, 'Le Petit Prince', 'Antoine de Saint-Exupéry', 1998, 'Gallimard', 'Novel', 120, 150000.00, 0, '2021-02-15', 'Removed', 'French', 'B3'),
(7, 'Blockchain cơ bản', 'Satoshi Nakamoto', 2021, 'NXB Cong nghe', 'Technology', 320, 220000.00, 5, '2021-03-10', 'Available', 'English', 'D3'),
(8, 'Data Science 101', 'Jane Doe', 2022, 'Tech Press', 'Science', 340, 180000.00, 6, '2022-06-10', 'Available', 'English', 'C1'),
(9, 'Deep Work', 'Cal Newport', 2018, 'Grand Central', 'Productivity', 304, 160000.00, 2, '2022-03-01', 'Borrowed', 'English', 'C2'),
(10, 'Đắc nhân tâm', 'Dale Carnegie', 2000, 'NXB Tre', 'Psychology', 250, 110000.00, 0, '2020-01-05', 'Removed', NULL, 'B1'),
(11, 'Clean Code', 'Robert C. Martin', 2008, 'Prentice Hall', 'Technology', 464, 270000.00, 8, '2022-10-10', 'Available', 'English', 'D4'),
(12, 'Thinking, Fast and Slow', 'Daniel Kahneman', 2011, 'FSG', 'Science', 499, 300000.00, 4, '2023-01-01', 'Borrowed', 'English', 'C3'),
(13, 'Tôi thấy hoa vàng trên cỏ xanh', 'Nguyen Nhat Anh', 2010, 'NXB Tre', 'Literature', 180, 80000.00, 3, '2020-05-10', 'Available', 'Vietnamese', 'A5'),
(14, 'Artificial Intelligence', 'Stuart Russell', 2016, 'Pearson', 'Technology', 600, 350000.00, 1, '2023-02-20', 'Available', 'English', 'D5'),
(15, 'Sapiens', 'Yuval Noah Harari', 2014, 'Harper', 'History', 443, 290000.00, 9, '2021-07-12', 'Available', 'English', 'C4');


-- Hiển thị tất cả thông tin các cuốn sách
SELECT * FROM Book;

-- Hiển thị book_id, title, author
SELECT book_id, title, author FROM Book;

-- Các sách xuất bản năm 2010
SELECT * FROM Book WHERE publish_year = 2010;

-- Sách có price > 200,000
SELECT * FROM Book WHERE price > 200000;

-- Sách có stock > 5
SELECT * FROM Book WHERE stock > 5;

-- Sách thuộc category = 'Novel'
SELECT * FROM Book WHERE category = 'Novel';

-- Sách có status = 'Borrowed'
SELECT * FROM Book WHERE status = 'Borrowed';

-- Sách có language = 'English'
SELECT * FROM Book WHERE language = 'English';

-- Sách xuất bản trước năm 2000
SELECT * FROM Book WHERE publish_year < 2000;

-- Sách có page_count > 300
SELECT * FROM Book WHERE page_count > 300;

-- Sách thuộc category = 'Science' và price < 150000
SELECT * FROM Book WHERE category = 'Science' AND price < 150000;

-- Sách xuất bản từ 2015 đến 2022
SELECT * FROM Book WHERE publish_year BETWEEN 2015 AND 2022;

-- Sách có status = 'Available' và stock < 3
SELECT * FROM Book WHERE status = 'Available' AND stock < 3;

-- Sách của 'Nguyen Nhat Anh' hoặc 'To Hoai'
SELECT * FROM Book WHERE author IN ('Nguyen Nhat Anh', 'To Hoai');

-- Sách của publisher = 'Kim Dong' hoặc 'NXB Tre'
SELECT * FROM Book WHERE publisher IN ('Kim Dong', 'NXB Tre');

-- Sách có language = 'Vietnamese' và page_count < 200
SELECT * FROM Book WHERE language = 'Vietnamese' AND page_count < 200;

-- Sách category = 'Technology' hoặc 'Science' và publish_year > 2010
SELECT * FROM Book WHERE category IN ('Technology', 'Science') AND publish_year > 2010;

-- Sách có shelf_position = 'A1', 'A2' hoặc 'A3'
SELECT * FROM Book WHERE shelf_position IN ('A1', 'A2', 'A3');

-- Sách có price từ 100000 đến 300000 và status = 'Available'
SELECT * FROM Book WHERE price BETWEEN 100000 AND 300000 AND status = 'Available';

-- Sách của Paulo Coelho hoặc Dale Carnegie và stock > 0
SELECT * FROM Book WHERE author IN ('Paulo Coelho', 'Dale Carnegie') AND stock > 0;

-- Cập nhật status thành 'Borrowed' cho sách có book_id = 5
UPDATE Book SET status = 'Borrowed' WHERE book_id = 5;

-- Cập nhật stock = 0 cho sách có status = 'Removed'
UPDATE Book SET stock = 0 WHERE status = 'Removed';

-- Tăng price thêm 10,000 cho category = 'Novel'
UPDATE Book SET price = price + 10000 WHERE category = 'Novel';

-- Cập nhật shelf_position thành 'B5' cho author = 'Nguyen Nhat Anh'
UPDATE Book SET shelf_position = 'B5' WHERE author = 'Nguyen Nhat Anh';

-- Cập nhật status = 'Available' cho sách có status = 'Borrowed' và stock > 5
UPDATE Book SET status = 'Available' WHERE status = 'Borrowed' AND stock > 5;

-- Cập nhật language = 'Vietnamese' cho sách của 'Kim Dong' có language IS NULL
UPDATE Book SET language = 'Vietnamese' WHERE publisher = 'Kim Dong' AND language IS NULL;

-- Giảm stock đi 1 cho sách có book_id = 8
UPDATE Book SET stock = stock - 1 WHERE book_id = 8;

-- Đổi category thành 'Literature' cho sách có category = 'Novel' và xuất bản trước năm 2000
UPDATE Book SET category = 'Literature' WHERE category = 'Novel' AND publish_year < 2000;

-- Cập nhật publisher = 'NXB Giao Duc' cho sách của 'NXB Dai hoc Quoc gia' và category = 'Textbook'
UPDATE Book SET publisher = 'NXB Giao Duc' WHERE publisher = 'NXB Dai hoc Quoc gia' AND category = 'Textbook';

-- Cập nhật page_count = 0 cho sách có status = 'Removed' và stock = 0
UPDATE Book SET page_count = 0 WHERE status = 'Removed' AND stock = 0;
