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

console.log("\n\nBài 1: Lấy ra danh sách nhân viên đang làm việc\n");
const ouputEx01 = employees.filter((e) => e.status === "working");
console.log(ouputEx01);

console.log("\n\nBài 2: Lấy ra nhân viên lớn tuổi nhất\n");
function ouputEx02() {
    let ageMax = employees[0].age;
    employees.forEach((e) => {
        if (e.age > ageMax) ageMax = e.age;
    });

    return employees.filter((e) => e.age === ageMax);
}
console.log(ouputEx02());

console.log("\n\nBài 3: Lấy ra sản phẩm giá rẻ nhất\n");
function ouputEx03() {
    let priceMin = products[0].price;
    products.forEach((p) => {
        if (p.price < priceMin) priceMin = p.price;
    });

    return products.filter((e) => e.price === priceMin);
}
console.log(ouputEx03());

console.log("\n\nBài 4: Tìm ra các sản phẩm bán được số lượng nhiều nhất\n");
function ouputEx04() {
    let result = [];
    let objQuantity = {};
    let quantityMax = 0;
    orders.forEach((o) => {
        if (objQuantity[o.productId] === undefined) {
            objQuantity[o.productId] = o.quantity;
        } else {
            objQuantity[o.productId] += o.quantity;
        }

        if (objQuantity[o.productId] > quantityMax) {
            quantityMax = objQuantity[o.productId];
        }
    });

    for (key of Object.keys(objQuantity)) {
        if (objQuantity[key] === quantityMax) {
            result.push(productsMap[key]);
        }
    }

    console.log("objQuantity ", objQuantity);
    console.log("quantityMax ", quantityMax);
    return result;
}
console.log(ouputEx04());

console.log("\n\nBài 5: Tìm ra sản phẩm bán được nhiều tiền nhất\n");
function ouputEx05() {
    let result = [];
    let objRevenue = {};
    let revenueMax = 0;
    orders.forEach((o) => {
        const total = o.quantity * productsMap[o.productId].price;

        if (objRevenue[o.productId] === undefined) {
            objRevenue[o.productId] = total;
        } else {
            objRevenue[o.productId] += total;
        }

        if (objRevenue[o.productId] > revenueMax) {
            revenueMax = objRevenue[o.productId];
        }
    });

    for (key of Object.keys(objRevenue)) {
        if (objRevenue[key] === revenueMax) {
            result.push(productsMap[key]);
        }
    }

    console.log("objRevenue ", objRevenue);
    console.log("revenueMax ", revenueMax);
    return result;
}
console.log(ouputEx05());

console.log("\n\nBài 6: Tìm ra nhân viên bán được nhiều hàng nhất\n");
function ouputEx06() {
    let result = [];
    let objQuantity = {};
    let quantityMax = 0;
    orders.forEach((o) => {
        if (objQuantity[o.employeeId] === undefined) {
            objQuantity[o.employeeId] = o.quantity;
        } else {
            objQuantity[o.employeeId] += o.quantity;
        }

        if (objQuantity[o.employeeId] > quantityMax) {
            quantityMax = objQuantity[o.employeeId];
        }
    });

    for (key of Object.keys(objQuantity)) {
        if (objQuantity[key] === quantityMax) {
            result.push(employeesMap[key]);
        }
    }

    console.log("objQuantity ", objQuantity);
    console.log("quantityMax ", quantityMax);
    return result;
}
console.log(ouputEx06());

console.log("\n\nBài 7: Tìm ra nhân viên bán được nhiều tiền nhất\n");
function ouputEx07() {
    let result = [];
    let objRevenue = {};
    let revenueMax = 0;
    orders.forEach((o) => {
        const total = o.quantity * productsMap[o.productId].price;

        if (objRevenue[o.employeeId] === undefined) {
            objRevenue[o.employeeId] = total;
        } else {
            objRevenue[o.employeeId] += total;
        }

        if (objRevenue[o.employeeId] > revenueMax) {
            revenueMax = objRevenue[o.employeeId];
        }
    });

    for (key of Object.keys(objRevenue)) {
        if (objRevenue[key] === revenueMax) {
            result.push(employeesMap[key]);
        }
    }

    console.log("objRevenue ", objRevenue);
    console.log("revenueMax ", revenueMax);
    return result;
}
console.log(ouputEx07());

console.log("\n\nBài 8: Tìm ra sản phẩm có doanh thu cao nhất của mỗi nhân viên\n");
function ouputEx08() {
    let result = [];
    let objEmployee = {};
    orders.forEach((o) => {
        const total = o.quantity * productsMap[o.productId].price;

        if (objEmployee[o.employeeId] === undefined) {
            objEmployee[o.employeeId] = {};
        }

        if (objEmployee[o.employeeId][o.productId] === undefined) {
            objEmployee[o.employeeId][o.productId] = total;
        } else {
            objEmployee[o.employeeId][o.productId] += total;
        }
    });

    for (key of Object.keys(objEmployee)) {
        const products = objEmployee[key];

        let productIdAmountMax = Object.keys(products)[0];

        for (id of Object.keys(products)) {
            if (products[id] > products[productIdAmountMax]) {
                productIdAmountMax = id;
            }
        }

        result.push({ employeeId: key, productId: productIdAmountMax });
    }

    console.log("objEmployee ", objEmployee);
    return result;
}
console.log(ouputEx08());

console.log("\n\nBài 9: Tính hoa hồng của mỗi nhân viên là 3%\n");
function ouputEx09() {
    let result = [];
    let objRevenue = {};
    orders.forEach((o) => {
        const total = o.quantity * productsMap[o.productId].price;

        if (objRevenue[o.employeeId] === undefined) {
            objRevenue[o.employeeId] = total;
        } else {
            objRevenue[o.employeeId] += total;
        }
    });

    for (key of Object.keys(objRevenue)) {
        result.push({
            employeeId: key,
            commissionMoney: objRevenue[key] * 0.03,
        });
    }

    console.log("objRevenue ", objRevenue);
    return result;
}
console.log(ouputEx09());

// Bài 10: sắp xếp nhân viên thứ tự giảm dần theo doanh thu
console.log("\n\nBài 10: sắp xếp nhân viên thứ tự giảm dần theo doanh thu\n");
function ouputEx10() {
    let result = [];
    let objRevenue = {};
    orders.forEach((o) => {
        const total = o.quantity * productsMap[o.productId].price;

        if (objRevenue[o.employeeId] === undefined) {
            objRevenue[o.employeeId] = total;
        } else {
            objRevenue[o.employeeId] += total;
        }
    });

    for (key of Object.keys(objRevenue)) {
        result.push({
            employeeId: key,
            revenue: objRevenue[key],
        });
    }

    result = result.sort((a, b) => {
        return b.revenue - a.revenue;
    });

    console.log("objRevenue ", objRevenue);
    return result;
}
console.log(ouputEx10());
