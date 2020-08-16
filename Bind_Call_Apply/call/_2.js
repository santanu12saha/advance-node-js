// Using call to chain constructors for an object

function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'Food';
}

function Toy(name, price) {
    Product.call(this, name, price);
    this.category = 'Toy';
}

const cheese = new Food('feta', 50);
const fun = new Toy('robot', 40);

console.log(cheese.name);
console.log(fun.name);