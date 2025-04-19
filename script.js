
// BASE CLASS FOR PRODUCTS

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
    // STATIC METHOD TO APPLY DISCOUNT
    static applyDiscount(product, discount) {
        product.forEach(product => {
            product.price = product.price * (1 - discount);
        });
    }
}
//SUBCLASS FOR PREISHABLE PRODUCTS
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
//CREATE STORE INSTANCES
const myStore = new Store();

//CREATE PRODUCTS

const product1 = new ProductProperties("Notebook", 3.50, 40);
const product2 = new ProductProperties("Pen", 1.00, 100);
const product3 = new ProductProperties("Stapler", 5.25, 15);
//CREATE PREISHABLE PRODUCTS

const perishable1 = new PerishableProductProperties("Milk", 2.50, 10, "2025-04-27");
const perishable2 = new PerishableProductProperties("Cheese", 4.0, 5, "2025-04-28");

//ADD PRODUCTS TO STORE
myStore.addProduct(product1);
myStore.addProduct(product2);
myStore.addProduct(product3);
myStore.addProduct(perishable1);
myStore.addProduct(perishable2);

//PRINT TOTAL INVENTORY VALUE FOR DISCOUNT
console.log(" Inventory Value Before Discount: $" + myStore.getInventoryValue().toFixed(2));

//APPLY 15% DISCOUNT
ProductProperties.applyDiscount(myStore.inventory, 0.15);

//PRINT TOTAL INVENTORY VALUE AFTER DISCOUNT
console.log(" Inventory Value After 15% Discount: $" + myStore.getInventoryValue().toFixed(2));

//FIND A PRODUCT BY NAME
const searchedProduct = myStore.findProductByName("Milk");
if (searchedProduct) {
    console.log ("Product Found: " + searchedProduct.toString());
} else {
    console.log(" Product not found. ");
}