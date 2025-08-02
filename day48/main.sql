CREATE DATABASE hotel_management;

CREATE SEQUENCE guest_id_seq;

CREATE TABLE guests (
  guest_id INTEGER PRIMARY KEY DEFAULT nextval('guest_id_seq'),
  first_name TEXT,
  last_name TEXT,
  email TEXT,
  phone TEXT,
  address TEXT,
  date_of_birth DATE,
  nationality TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE SEQUENCE room_id_seq;

CREATE TABLE rooms (
  room_id INTEGER PRIMARY KEY DEFAULT nextval('room_id_seq'),
  room_number TEXT,
  room_type TEXT,
  price_per_night DECIMAL(10,2),
  max_occupancy INTEGER,
  is_available BOOLEAN,
  floor INTEGER,
  description TEXT
);

CREATE SEQUENCE booking_id_seq;

CREATE TABLE bookings (
  booking_id INTEGER PRIMARY KEY DEFAULT nextval('booking_id_seq'),
  guest_id INTEGER REFERENCES guests(guest_id),
  room_id INTEGER REFERENCES rooms(room_id),
  check_in_date DATE,
  check_out_date DATE,
  total_price DECIMAL(10,2),
  booking_status TEXT,
  payment_status TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 5. Thêm loyalty_points vào guests
ALTER TABLE guests ADD COLUMN loyalty_points INTEGER;

-- 6. Thêm special_requests vào bookings
ALTER TABLE bookings ADD COLUMN special_requests TEXT;

-- 7. Thêm amenities kiểu mảng text vào rooms
ALTER TABLE rooms ADD COLUMN amenities TEXT[];

-- 8. Thêm last_updated timestamp vào rooms
ALTER TABLE rooms ADD COLUMN last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

-- 9. Thêm discount_percentage vào bookings
ALTER TABLE bookings ADD COLUMN discount_percentage DECIMAL(5,2);

INSERT INTO guests (first_name, last_name, email, phone, address, date_of_birth, nationality, created_at)
VALUES 
('MinMin', 'Nguyen', 'minminnyen@email.com', '0123456789', '123 Tran Duy Hung, Ha Noi', '2002-03-15', 'VN', CURRENT_TIMESTAMP),
('An', 'Tran', 'antran@email.com', '0987654321', '456 Nguyen Trai, HCM', '1999-06-20', 'VN', CURRENT_TIMESTAMP),
('Linh', 'Pham', 'linhpham@email.com', '0112233445', '789 Le Loi, Da Nang', '1987-12-01', 'VN', CURRENT_TIMESTAMP),
('Nam', 'Do', 'namdo@email.com', '0888999777', '12 Kim Ma, Ha Noi', '1995-04-05', 'VN', CURRENT_TIMESTAMP),
('Huong', 'Vo', 'huongvo@email.com', '0999888777', '98 Vo Van Tan, Hue', '2000-09-12', 'VN', CURRENT_TIMESTAMP);

INSERT INTO rooms (room_number, room_type, price_per_night, max_occupancy, is_available, floor, description)
VALUES
('101', 'standard', 89.99, 2, true, 1, 'Comfortable standard room with queen bed'),
('102', 'deluxe', 120.00, 3, true, 1, 'Deluxe room with king bed and balcony'),
('201', 'suite', 200.00, 4, true, 2, 'Suite with living room and great view'),
('202', 'standard', 79.99, 2, true, 2, 'Standard room with two single beds'),
('301', 'deluxe', 150.00, 3, true, 3, 'Spacious deluxe room with bathtub'),
('302', 'suite', 250.00, 4, false, 3, 'Luxury suite with private jacuzzi'),
('103', 'standard', 69.99, 2, true, 1, 'Economy room with basic amenities'),
('203', 'standard', 95.00, 2, false, 2, 'Standard room with garden view'),
('303', 'deluxe', 130.00, 3, true, 3, 'Deluxe room with modern furniture'),
('304', 'suite', 300.00, 5, true, 3, 'Presidential suite with luxury services');

INSERT INTO bookings (guest_id, room_id, check_in_date, check_out_date, total_price, booking_status, payment_status, created_at)
VALUES
(1, 1, '2023-07-15', '2023-07-18', 269.97, 'completed', 'paid', '2023-06-20 10:30:00'),
(2, 2, '2023-08-01', '2023-08-05', 480.00, 'confirmed', 'unpaid', '2023-07-20 09:00:00'),
(3, 3, '2023-09-10', '2023-09-12', 400.00, 'cancelled', 'refunded', '2023-08-15 14:45:00'),
(1, 4, '2023-10-01', '2023-10-03', 159.98, 'checked_in', 'paid', '2023-09-20 08:00:00'),
(4, 5, '2023-10-15', '2023-10-18', 450.00, 'completed', 'paid', '2023-09-30 17:30:00'),
(2, 6, '2023-11-01', '2023-11-04', 750.00, 'confirmed', 'unpaid', '2023-10-10 11:15:00'),
(5, 7, '2023-12-20', '2023-12-25', 349.95, 'checked_in', 'paid', '2023-12-10 13:00:00'),
(3, 8, '2024-01-05', '2024-01-10', 475.00, 'completed', 'paid', '2023-12-25 09:45:00');

-- 13
SELECT * FROM guests;

-- 14
SELECT * FROM rooms WHERE price_per_night < 100;

-- 15
SELECT * FROM bookings WHERE booking_status IN ('confirmed', 'checked_in');

-- 16
SELECT b.*, g.* FROM bookings b INNER JOIN guests g ON b.guest_id = g.guest_id;

-- 17
SELECT b.*, r.* FROM bookings b INNER JOIN rooms r ON b.room_id = r.room_id;

-- 18
SELECT b.*, g.*, r.* 
FROM bookings b
INNER JOIN guests g ON b.guest_id = g.guest_id
INNER JOIN rooms r ON b.room_id = r.room_id;

-- 19
SELECT g.*, b.* FROM guests g LEFT JOIN bookings b ON g.guest_id = b.guest_id;

-- 20
SELECT r.*, b.* FROM rooms r LEFT JOIN bookings b ON r.room_id = b.room_id;

-- 21
SELECT b.*, g.* FROM bookings b RIGHT JOIN guests g ON b.guest_id = g.guest_id;

-- 22
SELECT b.*, r.* FROM bookings b RIGHT JOIN rooms r ON b.room_id = r.room_id;

-- 23
SELECT g.* FROM guests g LEFT JOIN bookings b ON g.guest_id = b.guest_id WHERE b.booking_id IS NULL;

-- 24
SELECT r.* FROM rooms r LEFT JOIN bookings b ON r.room_id = b.room_id WHERE b.booking_id IS NULL;

-- 25
SELECT DISTINCT g.* 
FROM guests g
INNER JOIN bookings b ON g.guest_id = b.guest_id
WHERE EXTRACT(MONTH FROM b.check_in_date) = EXTRACT(MONTH FROM CURRENT_DATE)
  AND EXTRACT(YEAR FROM b.check_in_date) = EXTRACT(YEAR FROM CURRENT_DATE);

-- 26
SELECT DISTINCT r.*
FROM rooms r
INNER JOIN bookings b ON r.room_id = b.room_id
WHERE DATE_PART('week', b.check_in_date) = DATE_PART('week', CURRENT_DATE)
  AND DATE_PART('year', b.check_in_date) = DATE_PART('year', CURRENT_DATE);

-- 27
SELECT g.*
FROM guests g
LEFT JOIN bookings b ON g.guest_id = b.guest_id
GROUP BY g.guest_id
HAVING COUNT(b.booking_id) > 2;

-- 28
SELECT r.*
FROM rooms r
RIGHT JOIN bookings b ON r.room_id = b.room_id
WHERE r.price_per_night > 200;
