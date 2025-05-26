export default class Order {
    #id;
    #customer;
    #products;
    #orderDate;

    constructor(id, customer, orderDate) {
        this.#id = id;
        this.#customer = customer;
        this.#products = [];
        this.#orderDate = orderDate;
    }

    getId() {
        return this.#id;
    }

    getCustomer() {
        return this.#customer;
    }

    getProducts() {
        return this.#products;
    }

    getOrderDate() {
        return this.#orderDate;
    }

    addProduct(product) {
        this.#products.push(product);
    }

    removeProduct(productId) {
        this.#products = this.#products.filter(product => product.getId() !== productId);
    }

    calculateTotal() {
        return this.#products.reduce((total, product) => total + product.getPrice(), 0);
    }

    toString() {
        return `Đơn hàng #${this.#id}, khách hàng: ${this.#customer.getName()}, ngày đặt: ${this.#orderDate.toLocaleDateString('vi-VN')}`;
    }
}