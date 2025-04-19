# Lab_11_Assignment
JavaScript Inventory Management System
A simple inventory system using JavaScript classes, inheritance, static methods, and object-oriented principles.

Features
Product Base Class
>  Properties: name, price, quantity
>  Methods: getTotalValue(), toString()

PerishableProduct Subclass
>  Inherits Product
>  Adds expirationDate
>  Overrides toString()

Static Method
>  Product.applyDiscount(products, discount): Applies percentage discount to an array of products.

Store Class
>  Manages product inventory.
>  Methods: addProduct(), getInventoryValue(), findProductByName()

Usage
>  Create multiple product instances (including perishables).
>  Add them to the store inventory.
>  Display total inventory value before/after a 15% discount.
>  Search and display a product by name.
