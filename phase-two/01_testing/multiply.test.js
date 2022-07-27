const multiply = require('./multiply');

describe('multiply', () => {
  it('multiplies 5 and 5', () => {
    expect(5 * 5).toBe(25);
  });

  it('multiplies 5 and -25', () => {
    expect(5 * (-25)).toBe(-125);
  });

  it('multiplies 0 and -25', () => {
    expect(0 * (800)).toBe(0);
  });

  it('multiplies 1 and 1', () => {
    expect(1 * 1).toBe(1);
  });
});