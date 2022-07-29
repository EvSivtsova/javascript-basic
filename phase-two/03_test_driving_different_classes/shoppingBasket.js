class ShoppingBasket {
  constructor() {
    this.basket = [];
    this.discount = 0;
  }

  addItem(item) {
    this.basket.push(item);
  }

  applyDiscount(discount) {
    this.discount = discount;
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.basket.map((item) => totalPrice += item.getPrice());
    return totalPrice - this.discount;
  }
}

module.exports = ShoppingBasket