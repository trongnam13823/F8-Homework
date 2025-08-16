CREATE TABLE customer (
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    address TEXT,
    city VARCHAR(50),
    country VARCHAR(50),
    postal_code VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP
);

CREATE TABLE product (
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INTEGER NOT NULL,
    category VARCHAR(50),
    supplier VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE "order" (
    order_id SERIAL PRIMARY KEY,
    customer_id INTEGER NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) NOT NULL,
    total_amount DECIMAL(12, 2) NOT NULL,
    shipping_address TEXT,
    shipping_city VARCHAR(50),
    shipping_country VARCHAR(50),
    shipping_postal_code VARCHAR(20),
    payment_method VARCHAR(50),
    tracking_number VARCHAR(100)
);

CREATE TABLE order_item (
    order_item_id SERIAL PRIMARY KEY,
    order_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    unit_price DECIMAL(10, 2) NOT NULL,
    discount DECIMAL(5, 2) DEFAULT 0,
    total_price DECIMAL(10, 2) NOT NULL
);

-- Tạo dữ liệu mẫu cho bảng customer (500,000 bản ghi)
INSERT INTO
    customer (
        first_name,
        last_name,
        email,
        phone,
        address,
        city,
        country,
        postal_code,
        created_at,
        last_login
    )
SELECT
    'FirstName' || i AS first_name,
    'LastName' || i AS last_name,
    'user' || i || '@example.com' AS email,
    '123-456-' || LPAD(i::TEXT, 4, '0') AS phone,
    'Address ' || i AS address,
    (
        ARRAY[
            'Hanoi',
            'Ho Chi Minh',
            'Da Nang',
            'Can Tho',
            'Hai Phong'
        ]
    ) [1 + i % 5] AS city,
    (
        ARRAY[
            'Vietnam',
            'USA',
            'Japan',
            'Singapore',
            'Thailand'
        ]
    ) [1 + i % 5] AS country,
    LPAD((i % 99999)::TEXT, 5, '0') AS postal_code,
    TIMESTAMP '2020-01-01' + (i % 1000) * INTERVAL '1 day' AS created_at,
    TIMESTAMP '2020-01-01' + (i % 1000) * INTERVAL '1 day' + (i % 24) * INTERVAL '1 hour' AS last_login
FROM generate_series(1, 500000) AS i;

-- Tạo dữ liệu mẫu cho bảng product (1,000,000 bản ghi)
INSERT INTO
    product (
        name,
        description,
        price,
        stock_quantity,
        category,
        supplier,
        created_at,
        updated_at
    )
SELECT
    'Product ' || i AS name,
    'Description for product ' || i AS description,
    (random() * 1000)::DECIMAL(10, 2) AS price,
    (random() * 1000)::INTEGER AS stock_quantity,
    (
        ARRAY[
            'Electronics',
            'Clothing',
            'Books',
            'Home',
            'Sports',
            'Toys',
            'Food',
            'Health'
        ]
    ) [1 + i % 8] AS category,
    'Supplier ' || (i % 100) AS supplier,
    TIMESTAMP '2020-01-01' + (i % 1000) * INTERVAL '1 day' AS created_at,
    TIMESTAMP '2020-01-01' + (i % 1000) * INTERVAL '1 day' + (i % 100) * INTERVAL '1 hour' AS updated_at
FROM generate_series(1, 1000000) AS i;

-- Tạo dữ liệu mẫu cho bảng order (5,000,000 bản ghi)
INSERT INTO
    "order" (
        customer_id,
        order_date,
        status,
        total_amount,
        shipping_address,
        shipping_city,
        shipping_country,
        shipping_postal_code,
        payment_method,
        tracking_number
    )
SELECT (random() * 500000 + 1)::INTEGER AS customer_id,
    TIMESTAMP '2020-01-01' + (i % 1095) * INTERVAL '1 day' + (i % 24) * INTERVAL '1 hour' AS order_date,
    (
        ARRAY[
            'Pending',
            'Processing',
            'Shipped',
            'Delivered',
            'Cancelled'
        ]
    ) [1 + i % 5] AS status,
    (random() * 5000)::DECIMAL(12, 2) AS total_amount,
    'Shipping Address ' || i AS shipping_address,
    (
        ARRAY[
            'Hanoi',
            'Ho Chi Minh',
            'Da Nang',
            'Can Tho',
            'Hai Phong'
        ]
    ) [1 + i % 5] AS shipping_city,
    (
        ARRAY[
            'Vietnam',
            'USA',
            'Japan',
            'Singapore',
            'Thailand'
        ]
    ) [1 + i % 5] AS shipping_country,
    LPAD((i % 99999)::TEXT, 5, '0') AS shipping_postal_code,
    (
        ARRAY[
            'Credit Card',
            'PayPal',
            'Bank Transfer',
            'Cash on Delivery'
        ]
    ) [1 + i % 4] AS payment_method,
    'TRK' || LPAD(i::TEXT, 10, '0') AS tracking_number
FROM generate_series(1, 5000000) AS i;

-- Tạo dữ liệu mẫu cho bảng order_item (20,000,000 bản ghi)
INSERT INTO
    order_item (
        order_id,
        product_id,
        quantity,
        unit_price,
        discount,
        total_price
    )
SELECT (i / 4) + 1 AS order_id,
    (random() * 1000000 + 1)::INTEGER AS product_id,
    (random() * 10 + 1)::INTEGER AS quantity,
    (random() * 1000)::DECIMAL(10, 2) AS unit_price,
    (random() * 0.5)::DECIMAL(5, 2) AS discount,
    (random() * 10 + 1) * (random() * 1000) * (1 - random() * 0.5)::DECIMAL(10, 2) AS total_price
FROM generate_series(1, 20000000) AS i;

--Bài 1: Tìm Hiểu Sequential Scan: Truy xuất thông tin của tất cả khách hàng ở thành phố "Ho Chi Minh".
-- 1. Viết truy vấn lấy khách hàng ở thành phố "Ho Chi Minh"
DROP INDEX idx_customer_city;

SELECT * FROM customer WHERE city = 'Ho Chi Minh';
-- 2. Sử dụng EXPLAIN để xem kế hoạch thực thi
EXPLAIN ANALYZE SELECT * FROM customer WHERE city = 'Ho Chi Minh';
-- 3. Giải thích tại sao PostgreSQL sử dụng Sequential Scan
-- Cột city chưa có index hỗ trợ

-- 4. Đề xuất cách tối ưu truy vấn này
CREATE INDEX idx_customer_city ON customer (city);

SELECT * FROM customer WHERE city = 'Ho Chi Minh';

EXPLAIN ANALYZE SELECT * FROM customer WHERE city = 'Ho Chi Minh';

-- Bài 2: Tạo Index Đơn Giản : Tìm kiếm sản phẩm theo tên.
-- 1. Viết truy vấn tìm sản phẩm có tên chứa "Product 5000"
DROP INDEX idx_product_name;

SELECT * FROM product WHERE name = 'Product 5000';
-- 2. Chạy EXPLAIN ANALYZE để đo thời gian thực thi (trước khi tạo index)
EXPLAIN
ANALYZE
SELECT *
FROM product
WHERE
    name = 'Product 5000';
-- 3. Tạo B-tree index cho cột name
CREATE INDEX idx_product_name ON product (name);
-- 4. Chạy lại truy vấn với EXPLAIN ANALYZE
EXPLAIN ANALYZE SELECT * FROM product WHERE name = 'Product 5000';

--  Bài 3: Tìm Hiểu Index Scan : Cần tìm đơn hàng có order_id cụ thể.
-- 1. Viết truy vấn tìm đơn hàng có order_id = 100000
SELECT * FROM "order" WHERE order_id = 100000;
-- 2. Sử dụng EXPLAIN để xem kế hoạch thực thi
EXPLAIN ANALYZE SELECT * FROM "order" WHERE order_id = 100000;
-- 3. Giải thích tại sao PostgreSQL sử dụng Index Scan
-- order_id là PRIMARY KEY, PostgreSQL tự động tạo B-tree index trên cột này.
-- 4. Phân tích các thông số trong kết quả EXPLAIN
-- Index Scan using order_pkey on "order" Cho biết PostgreSQL dùng Index Scan trên index order_pkey (index tự động tạo khi khai báo PRIMARY KEY).
-- cost=0.29..8.31,  0.29: Chi phí bắt đầu (không đọc nhiều dữ liệu). 8.31: Tổng chi phí dự kiến khi truy vấn xong.
-- rows=1: PostgreSQL ước lượng sẽ trả về 1 bản ghi (do order_id là khóa chính).
-- width=102: Kích thước trung bình (bytes) của bản ghi được trả về.
-- Index Cond: (order_id = 100000): Điều kiện lọc trên index được áp dụng.
-- Planning Time: Thời gian PostgreSQL lập kế hoạch truy vấn
-- Execution Time: Thời gian thực thi truy vấn thực tế.

--  Bài 4: So Sánh Hiệu Suất Trước và Sau Khi Thêm Index : Cần tìm kiếm đơn hàng theo trạng thái.
-- 1. Viết truy vấn tìm tất cả đơn hàng có status = 'Delivered'
SELECT * FROM "order" WHERE status = 'Delivered';
-- 2. Sử dụng EXPLAIN ANALYZE để đo thời gian thực thi (trước khi tạo index)
EXPLAIN ANALYZE SELECT * FROM "order" WHERE status = 'Delivered';
-- 3. Tạo B-tree index cho cột status
CREATE INDEX idx_order_status ON "order" (status);

DROP INDEX idx_order_status;
-- 4. Chạy lại truy vấn với EXPLAIN ANALYZE (sau khi tạo index)
EXPLAIN ANALYZE SELECT * FROM "order" WHERE status = 'Delivered';
-- 5. Giải thích liệu index có cải thiện hiệu suất không và tại sao
-- không nhanh hơn nhiều vì Tỷ lệ dữ liệu khớp quá cao status = 'Delivered' chiếm phần lớn bảng
-- Cột status có tính lặp cao chỉ có vài giá trị (“Pending”, “Shipped”, “Delivered”…),

-- Bài 6: Tìm Hiểu Index Only Scan : Cần đếm số lượng sản phẩm trong mỗi danh mục.
-- Viết truy vấn đếm số lượng sản phẩm theo category
SELECT category, COUNT(*) AS product_count
FROM product
GROUP BY
    category
    -- Kiểm tra kế hoạch thực thi (EXPLAIN)
EXPLAIN
SELECT category, COUNT(*) AS product_count
FROM product
GROUP BY
    category
    -- Bước 3: Tạo index cho cột category
CREATE INDEX idx_product_category ON product (category);

DROP INDEX idx_product_category;
-- Bước 4: Chạy lại truy vấn với EXPLAIN
EXPLAIN
SELECT category, COUNT(*) AS product_count
FROM product
GROUP BY
    category

-- Bài 7: Tìm Hiểu Bitmap Index Scan : Cần tìm tất cả sản phẩm có giá từ 100 đến 200.

-- Viết truy vấn tìm sản phẩm có price từ 100 đến 200
SELECT * FROM product WHERE price BETWEEN 100 AND 200;

-- Kiểm tra kế hoạch thực thi (EXPLAIN)
EXPLAIN SELECT * FROM product WHERE price BETWEEN 100 AND 200;

-- Bước 3: Tạo index cho cột price
CREATE INDEX idx_product_price ON product (price);

-- Chạy lại truy vấn với EXPLAIN để xem PostgreSQL có sử dụng Bitmap Index Scan không
EXPLAIN SELECT * FROM product WHERE price BETWEEN 100 AND 200;

-- Giải thích:
-- 1. PostgreSQL có thể chọn Bitmap Index Scan khi phạm vi dữ liệu lớn hơn so với Index Scan nhưng vẫn nhỏ hơn Seq Scan.
-- 2. Bitmap Index Scan hiệu quả cho các truy vấn WHERE với range hoặc nhiều điều kiện kết hợp AND/OR.
-- 3. Index Scan thường được chọn khi phạm vi tìm kiếm nhỏ (ví dụ chỉ một vài giá trị cụ thể).
-- 4. Bitmap Index Scan xây dựng bitmap các row matching, sau đó truy cập heap một lần → giảm I/O.

-- Bài 8: Phân Tích Cost trong EXPLAIN : Cần hiểu các thông số cost trong kết quả EXPLAIN

-- Viết truy vấn tìm tất cả khách hàng ở "Vietnam"
SELECT * FROM customer WHERE country = 'Vietnam';

-- Kiểm tra kế hoạch thực thi (EXPLAIN)
EXPLAIN SELECT * FROM customer WHERE country = 'Vietnam';

-- Giải thích các thông số:
-- cost=xxx..yyy
--   - xxx: estimated startup cost (chi phí khởi động, tính bằng đơn vị thời gian)
--   - yyy: estimated total cost (chi phí dự kiến để đọc toàn bộ dữ liệu kết quả)
-- rows=zzz: số dòng dự kiến trả về
-- width=ww: kích thước trung bình mỗi row (tính theo byte)
-- Lưu ý: đây là ước lượng, không phải số lượng thực tế

-- Bước 3: Tạo index cho cột country
CREATE INDEX idx_customer_country ON customer (country);

-- Chạy lại truy vấn với EXPLAIN
EXPLAIN SELECT * FROM customer WHERE country = 'Vietnam';

-- So sánh cost trước và sau khi thêm index:
-- 1. Trước khi tạo index: PostgreSQL thường dùng Seq Scan → cost cao, phải đọc toàn bộ bảng
-- 2. Sau khi tạo index: PostgreSQL có thể dùng Index Scan → cost giảm đáng kể, chỉ đọc các row matching
-- 3. Index giúp giảm I/O, đặc biệt hữu ích với bảng lớn như customer (500,000 dòng)

-- Bài 9: Tìm Hiểu Actual Time trong EXPLAIN ANALYZE : Cần đánh giá thời gian thực tế của một truy vấn phức tạp

-- Viết truy vấn tìm 10 khách hàng có tổng giá trị đơn hàng cao nhất
SELECT c.customer_id, c.first_name, c.last_name, SUM(o.total_amount) AS total_spent
FROM customer c
    JOIN "order" o ON c.customer_id = o.customer_id
GROUP BY
    c.customer_id,
    c.first_name,
    c.last_name
ORDER BY total_spent DESC
LIMIT 10;

-- Sử dụng EXPLAIN ANALYZE để đo thời gian thực thi
EXPLAIN
ANALYZE
SELECT c.customer_id, c.first_name, c.last_name, SUM(o.total_amount) AS total_spent
FROM customer c
    JOIN "order" o ON c.customer_id = o.customer_id
GROUP BY
    c.customer_id,
    c.first_name,
    c.last_name
ORDER BY total_spent DESC
LIMIT 10;

-- Phân tích các thông số:
-- actual time=xx..yy ms : thời gian thực tế bắt đầu và kết thúc bước đó
-- rows=zzz : số dòng thực tế được xử lý ở bước đó
-- loops=n : số lần bước đó được lặp lại (ví dụ trong nested loop)
-- total query time : tổng thời gian thực thi truy vấn
-- Các thông số này giúp so sánh với cost dự kiến và xác định bottleneck

-- Đề xuất cách tối ưu truy vấn:
-- 1. Tạo index trên "order".customer_id để join nhanh hơn
CREATE INDEX idx_order_customer_id ON "order" (customer_id);

-- 2. Nếu truy vấn thường dùng GROUP BY customer_id, có thể tạo index kèm INCLUDE total_amount:
-- CREATE INDEX idx_order_customer_id_include_amount ON "order"(customer_id) INCLUDE (total_amount);

-- 3. Có thể giảm thiểu đọc cột không cần thiết (SELECT chỉ lấy cột cần dùng)
-- 4. Sử dụng EXPLAIN ANALYZE lại sau khi tạo index để kiểm tra cải thiện actual time

-- Bài 10: Tối Ưu Truy Vấn JOIN với Index : Cần hiển thị danh sách đơn hàng kèm thông tin khách hàng

-- Viết truy vấn JOIN giữa bảng order và customer để lấy thông tin đơn hàng và tên khách hàng
SELECT o.order_id, o.order_date, o.total_amount, c.first_name, c.last_name, c.email
FROM "order" o
    JOIN customer c ON o.customer_id = c.customer_id
ORDER BY o.order_date DESC
LIMIT 20;

-- Sử dụng EXPLAIN ANALYZE để đo thời gian thực thi
EXPLAIN
ANALYZE
SELECT o.order_id, o.order_date, o.total_amount, c.first_name, c.last_name, c.email
FROM "order" o
    JOIN customer c ON o.customer_id = c.customer_id
ORDER BY o.order_date DESC
LIMIT 20;

-- Phân tích loại scan:
-- 1. Nếu chưa có index: PostgreSQL thường dùng Seq Scan cho cả "order" và customer → chi phí cao
-- 2. Loại JOIN: Nested Loop hoặc Hash Join tùy kích thước bảng và thống kê

-- Bước 3: Tạo index phù hợp để tối ưu truy vấn JOIN
-- Tạo index trên "order".customer_id để join nhanh
CREATE INDEX idx_order_customer_id ON "order" (customer_id);

-- Tạo index trên customer.customer_id nếu chưa có (thường đã là PK)
-- CREATE INDEX idx_customer_id ON customer(customer_id);

-- Chạy lại truy vấn với EXPLAIN ANALYZE để kiểm tra hiệu suất
EXPLAIN
ANALYZE
SELECT o.order_id, o.order_date, o.total_amount, c.first_name, c.last_name, c.email
FROM "order" o
    JOIN customer c ON o.customer_id = c.customer_id
ORDER BY o.order_date DESC
LIMIT 20;

-- So sánh hiệu suất:
-- 1. Sau khi thêm index, PostgreSQL có thể dùng Index Scan hoặc Bitmap Index Scan → giảm thời gian thực thi
-- 2. Hash Join hoặc Merge Join hiệu quả hơn Nested Loop khi số lượng row lớn
-- 3. Index trên cột join giúp giảm I/O và tăng tốc JOIN đáng kể cho bảng lớn như "order" (5 triệu dòng)

-- Bài 11: So Sánh Index Scan và Bitmap Index Scan
-- Tạo B-tree index cho cột price trong bảng product
CREATE INDEX idx_product_price ON product (price);

-- Truy vấn tìm sản phẩm có price = 500
SELECT * FROM product WHERE price = 500;

-- Truy vấn tìm sản phẩm có price từ 400 đến 600
SELECT * FROM product WHERE price BETWEEN 400 AND 600;

-- Sử dụng EXPLAIN cho cả hai truy vấn
EXPLAIN SELECT * FROM product WHERE price = 500;

EXPLAIN SELECT * FROM product WHERE price BETWEEN 400 AND 600;

-- Giải thích:
-- 1. PostgreSQL chọn Index Scan khi phạm vi tìm kiếm hẹp, số row nhỏ
-- 2. Bitmap Index Scan được chọn khi phạm vi lớn hơn, nhiều row → tạo bitmap để giảm I/O
-- 3. Bitmap Index Scan hiệu quả hơn khi nhiều giá trị match hoặc kết hợp nhiều điều kiện

-- Bài 12: Tối Ưu Truy Vấn ORDER BY với Index
-- Viết truy vấn lấy 100 sản phẩm đầu tiên sắp xếp theo price giảm dần
SELECT * FROM product ORDER BY price DESC LIMIT 100;

-- EXPLAIN ANALYZE để đo thời gian thực thi
EXPLAIN ANALYZE SELECT * FROM product ORDER BY price DESC LIMIT 100;

-- Tạo index để tối ưu ORDER BY
CREATE INDEX idx_product_price_desc ON product (price DESC);

-- Chạy lại truy vấn với EXPLAIN ANALYZE
EXPLAIN ANALYZE SELECT * FROM product ORDER BY price DESC LIMIT 100;

-- Giải thích:
-- Index giúp PostgreSQL đọc trực tiếp theo thứ tự giảm dần mà không cần sort
-- Giảm thời gian thực thi đáng kể cho LIMIT lớn trên bảng nhiều dòng

-- Bài 13: Tìm Hiểu Index Only Scan với Composite Index
-- Truy vấn chỉ lấy category và price từ bảng product
SELECT category, price FROM product;

-- EXPLAIN để xem kế hoạch thực thi
EXPLAIN SELECT category, price FROM product;

-- Tạo composite index (category + price)
CREATE INDEX idx_product_category_price ON product (category, price);

-- Chạy lại truy vấn với EXPLAIN
EXPLAIN SELECT category, price FROM product;

-- Giải thích lợi ích:
-- Index Only Scan cho phép đọc dữ liệu trực tiếp từ index mà không cần truy cập bảng gốc
-- Giảm I/O và tăng tốc truy vấn khi chỉ lấy cột có trong index

-- Bài 14: Phân Tích Hiệu Suất Truy Vấn GROUP BY
-- Truy vấn JOIN order_item và product để tính tổng doanh số theo category
SELECT p.category, SUM(oi.total_price) AS total_sales
FROM order_item oi
    JOIN product p ON oi.product_id = p.product_id
GROUP BY
    p.category
ORDER BY total_sales DESC;

-- EXPLAIN ANALYZE để đo thời gian thực thi
EXPLAIN
ANALYZE
SELECT p.category, SUM(oi.total_price) AS total_sales
FROM order_item oi
    JOIN product p ON oi.product_id = p.product_id
GROUP BY
    p.category
ORDER BY total_sales DESC;

-- Tạo index để tối ưu JOIN và GROUP BY
CREATE INDEX idx_order_item_product_id ON order_item (product_id);

CREATE INDEX idx_product_category ON product (category);

-- Chạy lại truy vấn và so sánh hiệu suất
EXPLAIN
ANALYZE
SELECT p.category, SUM(oi.total_price) AS total_sales
FROM order_item oi
    JOIN product p ON oi.product_id = p.product_id
GROUP BY
    p.category
ORDER BY total_sales DESC;

-- Giải thích:
-- Index trên product_id và category giúp JOIN nhanh hơn và giảm thời gian scan
-- PostgreSQL có thể chọn Hash Join kết hợp Index Scan/Bitmap Index Scan để tối ưu GROUP BY

-- Bài 15: Tối Ưu Truy Vấn với Điều Kiện Phức Tạp
-- Truy vấn tìm đơn hàng có status = 'Shipped', payment_method = 'Credit Card' và total_amount > 1000
SELECT *
FROM "order"
WHERE
    status = 'Shipped'
    AND payment_method = 'Credit Card'
    AND total_amount > 1000;

-- Sử dụng EXPLAIN ANALYZE để đo thời gian thực thi
EXPLAIN
ANALYZE
SELECT *
FROM "order"
WHERE
    status = 'Shipped'
    AND payment_method = 'Credit Card'
    AND total_amount > 1000;

-- Phân tích loại scan:
-- PostgreSQL có thể dùng Seq Scan nếu không có index, hoặc Bitmap Index Scan khi index phù hợp

-- Tạo index phù hợp (composite) để tối ưu truy vấn
CREATE INDEX idx_order_status_payment_amount ON "order" (status, payment_method) INCLUDE (total_amount);

-- Chạy lại truy vấn với EXPLAIN ANALYZE
EXPLAIN
ANALYZE
SELECT *
FROM "order"
WHERE
    status = 'Shipped'
    AND payment_method = 'Credit Card'
    AND total_amount > 1000;

-- Giải thích:
-- Composite index giúp lọc nhanh nhiều điều kiện cùng lúc, giảm I/O và tăng tốc truy vấn

------------------------------------------------------------

-- Bài 16: Tìm Hiểu Bitmap Index Scan và Bitmap Heap Scan
-- Tạo index cho cột category trong bảng product
CREATE INDEX idx_product_category ON product (category);

-- Truy vấn tìm sản phẩm thuộc category 'Electronics' hoặc 'Clothing'
SELECT * FROM product WHERE category IN ('Electronics', 'Clothing');

-- EXPLAIN để xem kế hoạch thực thi
EXPLAIN
SELECT *
FROM product
WHERE
    category IN ('Electronics', 'Clothing');

-- Giải thích:
-- Bitmap Index Scan: tạo bitmap đánh dấu các row matching trong index
-- Bitmap Heap Scan: sử dụng bitmap để truy cập table heap thực tế, giảm I/O khi nhiều row cần đọc
-- Bitmap Index Scan + Bitmap Heap Scan thường đi cùng nhau khi truy vấn nhiều giá trị hoặc nhiều điều kiện OR

------------------------------------------------------------

-- Bài 17: Tối Ưu Truy Vấn LIMIT với Index
-- Truy vấn lấy 20 đơn hàng mới nhất (order_date giảm dần)
SELECT * FROM "order" ORDER BY order_date DESC LIMIT 20;

-- EXPLAIN ANALYZE để đo thời gian thực thi
EXPLAIN
ANALYZE
SELECT *
FROM "order"
ORDER BY order_date DESC
LIMIT 20;

-- Tạo index để tối ưu truy vấn LIMIT
CREATE INDEX idx_order_order_date_desc ON "order" (order_date DESC);

-- Chạy lại truy vấn với EXPLAIN ANALYZE
EXPLAIN
ANALYZE
SELECT *
FROM "order"
ORDER BY order_date DESC
LIMIT 20;

-- Giải thích:
-- Index cho phép PostgreSQL đọc trực tiếp theo thứ tự giảm dần, tránh sort toàn bộ bảng → tăng tốc truy vấn

------------------------------------------------------------

-- Bài 18: Phân Tích Hiệu Suất Truy Vấn Subquery
-- Truy vấn sử dụng subquery để tìm khách hàng có đơn hàng với total_amount lớn nhất
SELECT *
FROM customer c
WHERE
    c.customer_id = (
        SELECT o.customer_id
        FROM "order" o
        ORDER BY o.total_amount DESC
        LIMIT 1
    );

-- EXPLAIN ANALYZE để đo thời gian thực thi
EXPLAIN
ANALYZE
SELECT *
FROM customer c
WHERE
    c.customer_id = (
        SELECT o.customer_id
        FROM "order" o
        ORDER BY o.total_amount DESC
        LIMIT 1
    );

-- Tạo index phù hợp để tối ưu subquery
CREATE INDEX idx_order_total_amount ON "order" (total_amount DESC);

-- Chạy lại truy vấn với EXPLAIN ANALYZE
EXPLAIN
ANALYZE
SELECT *
FROM customer c
WHERE
    c.customer_id = (
        SELECT o.customer_id
        FROM "order" o
        ORDER BY o.total_amount DESC
        LIMIT 1
    );

-- Giải thích:
-- Index trên total_amount giúp subquery tìm max(total_amount) nhanh chóng
-- PostgreSQL thực hiện subquery trước (LIMIT 1) → join với customer
-- Giảm thời gian thực thi đáng kể so với Seq Scan trên toàn bộ bảng order