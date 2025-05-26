export function listOrdersByCustomer(customers, orders) {
    const ordersByCustomer = {};

    customers.forEach(customer => {
        ordersByCustomer[customer.getId()] = {
            customer,
            orders: [],
            totalOrders: 0,
            totalValue: 0
        };
    });

    orders.forEach(order => {
        const customerId = order.getCustomer().getId();
        if (ordersByCustomer[customerId]) {
            ordersByCustomer[customerId].orders.push(order);
            ordersByCustomer[customerId].totalOrders++;
            ordersByCustomer[customerId].totalValue += order.calculateTotal();
        }
    });

    return ordersByCustomer;
}

export function displayOrdersByCustomer(ordersByCustomer) {
    for (const { customer, orders, totalOrders, totalValue } of Object.values(ordersByCustomer)) {
        console.log(`\nKhách hàng: ${customer.getName()}`);
        console.log(`Tổng số đơn hàng: ${totalOrders}`);
        console.log(`Tổng giá trị: ${totalValue.toLocaleString('vi-VN')} VNĐ`);
        console.log("Danh sách đơn hàng:");

        orders.forEach((order, index) => {
            console.log(`${index + 1}. ${order.toString()}`);
            console.log("   Sản phẩm:");
            order.getProducts().forEach((product, idx) => {
                console.log(`   ${idx + 1}. ${product.toString()}`);
            });
            console.log(`   Tổng giá trị: ${order.calculateTotal().toLocaleString('vi-VN')} VNĐ`);
        });
    }
}

export function findHighestValueOrder(orders) {
    if (orders.length === 0) return null;

    return orders.reduce((highest, order) => {
        return order.calculateTotal() > highest.calculateTotal() ? order : highest;
    }, orders[0]);
}