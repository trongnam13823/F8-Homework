const employees = [
    { id: 1, name: "Alice", age: 23, status: "working" },
    { id: 2, name: "Bob", age: 25, status: "working" },
    { id: 3, name: "Charlie", age: 27, status: "working" },
    { id: 4, name: "David", age: 23, status: "quited" },
    { id: 5, name: "Eve", age: 20, status: "working" },
];

const products = [
    { id: 1, name: "Phone", price: 1200 },
    { id: 2, name: "Laptop", price: 3000 },
    { id: 3, name: "Tab", price: 2000 },
    { id: 4, name: "PC", price: 800 },
    { id: 5, name: "Monitor", price: 1500 },
];

const orders = [
    { id: 1, employeeId: 1, productId: 4, quantity: 1 },
    { id: 2, employeeId: 2, productId: 2, quantity: 4 },
    { id: 3, employeeId: 1, productId: 5, quantity: 1 },
    { id: 4, employeeId: 3, productId: 1, quantity: 2 },
    { id: 5, employeeId: 2, productId: 5, quantity: 3 },
    { id: 6, employeeId: 4, productId: 1, quantity: 1 },
    { id: 7, employeeId: 5, productId: 3, quantity: 2 },
];

const employeesMap = employees.reduce((acc, curr) => {
    acc[curr.id] = curr;
    return acc;
}, {});

console.log("employeesMap ", employeesMap);

const productsMap = products.reduce((acc, curr) => {
    acc[curr.id] = curr;
    return acc;
}, {});

console.log("productsMap ", productsMap);

// Bài 1: Lấy ra danh sách nhân viên đang làm việc
let ex1 = employees.filter((e) => e.status === "working");
console.log("ex1 ", ex1);

// Bài 2: Lấy ra nhân viên lớn tuổi nhất
let ex2 = employees[0];
employees.forEach((e) => {
    if (e.age > ex2.age) ex2 = e;
});
console.log("ex2 ", ex2);

// Bài 3: Lấy ra sản phẩm giá rẻ nhất
let ex3 = products[0];
products.forEach((p) => {
    if (p.price < ex3.price) ex3 = p;
});
console.log("ex3 ", ex3);

// Bài 4: Tìm ra các sản phẩm bán được số lượng nhiều nhất
let ex4 = [];
let ex4ObjQuantity = {};
let ex4QuantityMax = 0;
orders.forEach((o) => {
    if (ex4ObjQuantity[o.productId] === undefined) {
        ex4ObjQuantity[o.productId] = o.quantity;
    } else {
        ex4ObjQuantity[o.productId] += o.quantity;
    }

    if (ex4ObjQuantity[o.productId] > ex4QuantityMax) {
        ex4QuantityMax = ex4ObjQuantity[o.productId];
    }
});

for (key of Object.keys(ex4ObjQuantity)) {
    if (ex4ObjQuantity[key] === ex4QuantityMax) {
        ex4.push(productsMap[key]);
    }
}

console.log("ex4ObjQuantity ", ex4ObjQuantity);
console.log("ex4QuantityMax ", ex4QuantityMax);
console.log("ex4 ", ex4);

// Bài 5: Tìm ra sản phẩm bán được nhiều tiền nhất
let ex5 = [];
let ex5ObjRevenue = {};
let ex5RevenueMax = 0;
orders.forEach((o) => {
    const total = o.quantity * productsMap[o.productId].price;

    if (ex5ObjRevenue[o.productId] === undefined) {
        ex5ObjRevenue[o.productId] = total;
    } else {
        ex5ObjRevenue[o.productId] += total;
    }

    if (ex5ObjRevenue[o.productId] > ex5RevenueMax) {
        ex5RevenueMax = ex5ObjRevenue[o.productId];
    }
});

for (key of Object.keys(ex5ObjRevenue)) {
    if (ex5ObjRevenue[key] === ex5RevenueMax) {
        ex5.push(productsMap[key]);
    }
}

console.log("ex5ObjRevenue ", ex5ObjRevenue);
console.log("ex5RevenueMax ", ex5RevenueMax);
console.log("ex5 ", ex5);

// Bài 6: Tìm ra nhân viên bán được nhiều hàng nhất
let ex6 = [];
let ex6ObjQuantity = {};
let ex6QuantityMax = 0;
orders.forEach((o) => {
    if (ex6ObjQuantity[o.employeeId] === undefined) {
        ex6ObjQuantity[o.employeeId] = o.quantity;
    } else {
        ex6ObjQuantity[o.employeeId] += o.quantity;
    }

    if (ex6ObjQuantity[o.employeeId] > ex6QuantityMax) {
        ex6QuantityMax = ex6ObjQuantity[o.employeeId];
    }
});

for (key of Object.keys(ex6ObjQuantity)) {
    if (ex6ObjQuantity[key] === ex6QuantityMax) {
        ex6.push(employeesMap[key]);
    }
}

console.log("ex6ObjQuantity ", ex6ObjQuantity);
console.log("ex6QuantityMax ", ex6QuantityMax);
console.log("ex6 ", ex6);

// Bài 7: Tìm ra nhân viên bán được nhiều tiền nhất
let ex7 = [];
let ex7ObjRevenue = {};
let ex7RevenueMax = 0;
orders.forEach((o) => {
    const total = o.quantity * productsMap[o.productId].price;

    if (ex7ObjRevenue[o.employeeId] === undefined) {
        ex7ObjRevenue[o.employeeId] = total;
    } else {
        ex7ObjRevenue[o.employeeId] += total;
    }

    if (ex7ObjRevenue[o.employeeId] > ex7RevenueMax) {
        ex7RevenueMax = ex7ObjRevenue[o.employeeId];
    }
});

for (key of Object.keys(ex7ObjRevenue)) {
    if (ex7ObjRevenue[key] === ex7RevenueMax) {
        ex7.push(employeesMap[key]);
    }
}

console.log("ex7ObjRevenue ", ex7ObjRevenue);
console.log("ex7RevenueMax ", ex7RevenueMax);
console.log("ex7 ", ex7);

// Bài 8: Tìm ra sản phẩm có doanh thu cao nhất của mỗi nhân viên
let ex8 = [];
let ex8ObjEmployee = {};
orders.forEach((o) => {
    const total = o.quantity * productsMap[o.productId].price;

    if (ex8ObjEmployee[o.employeeId] === undefined) {
        ex8ObjEmployee[o.employeeId] = {};
    }

    if (ex8ObjEmployee[o.employeeId][o.productId] === undefined) {
        ex8ObjEmployee[o.employeeId][o.productId] = total;
    } else {
        ex8ObjEmployee[o.employeeId][o.productId] += total;
    }
});

for (key of Object.keys(ex8ObjEmployee)) {
    const products = ex8ObjEmployee[key];

    let productIdAmountMax = Object.keys(products)[0];

    for (id of Object.keys(products)) {
        if (products[id] > products[productIdAmountMax]) {
            productIdAmountMax = id;
        }
    }

    ex8.push({ employeeId: key, productId: productIdAmountMax });
}

console.log("ex8ObjEmployee ", ex8ObjEmployee);
console.log("ex8 ", ex8);

// Bài 9: Tính hoa hồng của mỗi nhân viên là 3%
let ex9 = [];
let ex9ObjRevenue = {};
orders.forEach((o) => {
    const total = o.quantity * productsMap[o.productId].price;

    if (ex9ObjRevenue[o.employeeId] === undefined) {
        ex9ObjRevenue[o.employeeId] = total;
    } else {
        ex9ObjRevenue[o.employeeId] += total;
    }
});

for (key of Object.keys(ex9ObjRevenue)) {
    ex9.push({
        employeeId: key,
        commissionMoney: ex9ObjRevenue[key] * 0.3,
    });
}

console.log("ex9ObjRevenue ", ex9ObjRevenue);
console.log("ex9 ", ex9);

// Bài 10: sắp xếp nhân viên thứ tự giảm dần theo doanh thu
let ex10 = [];
let ex10ObjRevenue = {};
orders.forEach((o) => {
    const total = o.quantity * productsMap[o.productId].price;

    if (ex10ObjRevenue[o.employeeId] === undefined) {
        ex10ObjRevenue[o.employeeId] = total;
    } else {
        ex10ObjRevenue[o.employeeId] += total;
    }
});

for (key of Object.keys(ex10ObjRevenue)) {
    ex10.push({
        employeeId: key,
        revenue: ex10ObjRevenue[key],
    });
}

ex10 = ex10.sort((a, b) => {
    return b.revenue - a.revenue;
});

console.log("ex10ObjRevenue ", ex10ObjRevenue);
console.log("ex10 ", ex10);
