class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    getTotalValue() {
        return this.price * this.quantity;
    }
    toString() {
        return `Product: ${this.name},  Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }

    static applyDiscount(product, discount) {
        product.forEach(product => {
            product.price = product.price * (1 - discount);
        });
    }
}

class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }
    toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
    }
}

class Store {
    constructor() {
        this.inventory = [];
    }
    addProduct(product) {
        this.inventory.push(product);
    }
    getInventoryValue() {
        return this.inventory.reduce((total, product) => total + product.getTotalValue(), 0);
    }
    findProductByName(name) {
        return this.inventory.find(product => product.name.toLowerCase() === name.toLowerCase())
    }
}

const myStore = new Store();

const product1 = new ProductProperties("Notebook", 3.50, 40);
const product2 = new ProductProperties("Pen", 1.00, 100);
const product3 = new ProductProperties("Stapler", 5.25, 15);

const perishable1 = new PerishableProductProperties("Milk", 2.50, 10, "2025-04-27");
const perishable2 = new PerishableProductProperties("Cheese", 4.0, 5, "2025-04-28");

myStore.addProduct(product1);
myStore.addProduct(product2);
myStore.addProduct(product3);
myStore.addProduct(perishable1);
myStore.addProduct(perishable2);

console.log(" Inventory Value Before Discount: $" + myStore.getInventoryValue().toFixed(2));

ProductProperties.applyDiscount(myStore.inventory, 0.15);

console.log(" Inventory Value After 15% Discount: $" + myStore.getInventoryValue().toFixed(2));

const searchedProduct = myStore.findProductByName("Milk");
if (searchedProduct) {
    console.log ("Product Found: " + searchedProduct.toString());
} else {
    console.log(" Product not found. ");
}