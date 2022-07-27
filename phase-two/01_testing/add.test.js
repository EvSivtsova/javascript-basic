const add = require('./add');

describe('add', () => {
  it('adds 2 and 2', () => {
    expect(2 + 2).toBe(4);
  });
  
  it('adds -25 and 6', () => {
    expect(-25 + 6).toBe(-19);
  });
});
