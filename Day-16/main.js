// 1. Chuyển đổi arr của customers và products sang Obj
// dễ dàng truy vấn không cần tìm kiếm quá nhiều lần
// │
// ▼

// 2. Tạo customerOrders là Obj
// dễ dàng gom nhóm những order của 1 khách hàng
// │
// ▼

// 3. Duyệt orders và xử lý dữ liệu

// │
// │
// ├─► 3.1 Lấy các thông tin cần thiết từ order và customer
// │
// │
// │
// ├─► 3.2 Khởi tạo khách nếu chưa tồn tại, gom nhóm các order cho customer
// │
// │
// │
// ├─► 3.3 Lặp các items từ order của khách khàng
// │  │
// │  │
// │  │
// │  ├─► 3.3.1 Lấy cách thông tin cần thiết từ items và product
// │  │
// │  │
// │  │
// │  ├─► 3.3.2 Khởi tạo product nếu chưa tồn tại, gom nhóm product từ các order
// │  │
// │  │
// │  │
// │  └─► 3.3.3 Tính toán số lượng và tổng tiền
// │
// ▼

// 4. Chuyển đổi thành array cho đúng yêu cầu đề bài

const customers = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com" },
    { id: 4, name: "Bob Brown", email: "bob@example.com" },
    { id: 5, name: "Charlie Green", email: "charlie@example.com" },
];

const products = [
    { id: 101, name: "Laptop", price: 1200 },
    { id: 102, name: "Phone", price: 800 },
    { id: 103, name: "Tablet", price: 500 },
    { id: 104, name: "Smartwatch", price: 300 },
    { id: 105, name: "Headphones", price: 150 },
];

const orders = [
    {
        id: 1001,
        customerId: 1,
        items: [
            { productId: 101, quantity: 2 },
            { productId: 102, quantity: 1 },
        ],
    },
    {
        id: 1002,
        customerId: 2,
        items: [
            { productId: 102, quantity: 1 },
            { productId: 103, quantity: 3 },
        ],
    },
    {
        id: 1003,
        customerId: 3,
        items: [
            { productId: 104, quantity: 5 },
            { productId: 105, quantity: 2 },
        ],
    },
    {
        id: 1004,
        customerId: 4,
        items: [
            { productId: 101, quantity: 1 },
            { productId: 103, quantity: 2 },
        ],
    },
    { id: 1005, customerId: 5, items: [{ productId: 105, quantity: 10 }] },
    {
        id: 1006,
        customerId: 1,
        items: [
            { productId: 101, quantity: 1 },
            { productId: 105, quantity: 3 },
        ],
    },
    {
        id: 1007,
        customerId: 2,
        items: [
            { productId: 104, quantity: 2 },
            { productId: 103, quantity: 1 },
        ],
    },
    { id: 1008, customerId: 3, items: [{ productId: 102, quantity: 2 }] },
    {
        id: 1009,
        customerId: 4,
        items: [
            { productId: 101, quantity: 1 },
            { productId: 102, quantity: 1 },
        ],
    },
    {
        id: 1010,
        customerId: 5,
        items: [
            { productId: 103, quantity: 4 },
            { productId: 104, quantity: 3 },
        ],
    },
];

// 1. Chuyển đổi arr của customers và products sang Obj dễ dàng truy vấn không cần tìm kiếm quá nhiều lần
const customersObj = {};
const productsObj = {};

for (let i = 0; i < customers.length; i++) customersObj[customers[i].id] = customers[i];
for (let i = 0; i < products.length; i++) productsObj[products[i].id] = products[i];

// 2. Tạo customerOrders là Obj dễ dàng gom nhóm những order của 1 khách hàng
const customerOrdersObj = {};

// 3. Duyệt orders và xử lý dữ liệu
for (let i = 0; i < orders.length; i++) {
    // 3.1 Lấy các thông tin cần thiết từ order và customer
    const { customerId, items } = orders[i];
    const { id, name } = customersObj[customerId];

    // 3.2 Khởi tạo khách nếu chưa tồn tại, gom nhóm các order cho customer
    const c = (customerOrdersObj[id] ??= { id, name, totalSpent: 0, products: {} });

    // 3.3 Lặp các items từ order của khách khàng
    for (let j = 0; j < items.length; j++) {
        // 3.3.1 Lấy cách thông tin cần thiết từ items và product
        const { productId, quantity } = items[j];
        const { id: pId, name: pName, price } = productsObj[productId];

        // 3.3.2 Khởi tạo product nếu chưa tồn tại, gom nhóm product từ các order
        const p = (c.products[pId] ??= { name: pName, quantity: 0, totalSpent: 0 });

        // 3.3.3 Tính toán số lượng và tổng tiền
        const total = quantity * price;
        p.quantity += quantity;
        p.totalSpent += total;
        c.totalSpent += total;
    }
}

// 4. Chuyển đổi thành array cho đúng yêu cầu đề bài
const customerOrdersArr = [];

Object.values(customerOrdersObj).forEach((customerOrder) => {
    customerOrder.products = Object.values(customerOrder.products);
    customerOrdersArr.push(customerOrder);
});

console.log(customerOrdersArr);
