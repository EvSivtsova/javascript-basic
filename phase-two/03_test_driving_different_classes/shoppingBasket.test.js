const ShoppingBasket = require('./shoppingBasket')

describe('ShoppingBasket', () => {
  it('adds items to the shopping basket and updates the total price accordingly', () => {
    let basket = new ShoppingBasket();
    const fakeMars = { name: 'Mars', price: 4.99, getName: () => 'Mars', getPrice: () => 4.99};
    const fakeSkittle = { name: 'Skittle', price: 3.99, getName: () => 'Skittle', getPrice: () => 3.99};
    expect(basket.getTotalPrice()).toEqual(0);
    expect(basket.addItem(fakeMars)).toBeUndefined();
    expect(basket.getTotalPrice()).toEqual(4.99);
    expect(basket.addItem(fakeSkittle)).toBeUndefined();
    expect(basket.addItem(fakeSkittle)).toBeUndefined();
    expect(basket.getTotalPrice()).toEqual(12.97);
  });

  it('it applies discount and updates the total price accordingly', () => {
    let basket = new ShoppingBasket();
    const fakeMars = { name: 'Mars', price: 4.99, getName: () => 'Mars', getPrice: () => 4.99};
    const fakeSkittle = { name: 'Skittle', price: 3.99, getName: () => 'Skittle', getPrice: () => 3.99};
    expect(basket.addItem(fakeMars)).toBeUndefined();
    expect(basket.addItem(fakeSkittle)).toBeUndefined();
    expect(basket.addItem(fakeSkittle)).toBeUndefined();
    expect(basket.getTotalPrice()).toEqual(12.97);
    basket.applyDiscount(1);
    expect(basket.getTotalPrice()).toEqual(11.97);
  });
});