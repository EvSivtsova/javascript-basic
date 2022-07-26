class Candy {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  
  getName() {
    return this.name;
  }
  
  getPrice() {
    return this.price;
  }
}

class ShoppingBasket {
  constructor() {
    this.basket = [];
  }

  addItem(candy){
    this.basket.push(candy);
  }

  getTotalPrice() {
    let total = 0;
    this.basket.map((candy) => total += candy.getPrice());
    return total;
  }
}

// module.exports = ShoppingBasket;

const candy = new Candy('Mars', 4.99);

console.log(candy.getName());
console.log(candy.getPrice());

const basket = new ShoppingBasket();

console.log(basket);
console.log(basket.getTotalPrice());

console.log(basket.addItem(candy));
console.log(basket);
console.log(basket.getTotalPrice());

console.log(basket.addItem(new Candy('Skittle', 3.99)));
console.log(basket.addItem(new Candy('Skittle', 3.99)));
console.log(basket);
console.log(basket.getTotalPrice());