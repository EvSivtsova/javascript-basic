const Candy = require('./candy');

describe('Candy', () => {
  it("constructs a Candy object and returns it's name and price", () => {
    const candy = new Candy('Mars', 4.99);
    expect(candy.getName()).toEqual('Mars');
    expect(candy.getPrice()).toEqual(4.99);
  });
});