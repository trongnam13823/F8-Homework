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