import Base from "./Base";

export default class Product extends Base {
    #price;

    constructor(id, name, price) {
        super(id, name);
        this.#price = price;
    }

    getPrice() {
        return this.#price;
    }

    setPrice(price) {
        this.#price = price;
    }

    toString() {
        return `Sản phẩm: ${this.getName()}, giá: ${this.#price.toLocaleString('vi-VN')} VNĐ`;
    }
}