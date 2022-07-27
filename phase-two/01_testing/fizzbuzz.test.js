const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
  it('returns "Fizz" when the number equals to 3', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
  })
  
  it('returns "Buzz" when the number equals to 5', () => {
    expect(fizzbuzz(5)).toBe('Buzz');
  })

  it('returns number when the number equals to 8', () => {
    expect(fizzbuzz(8)).toBe(8);
  })
  
  it('returns "FizzBuzz" when the number equals to 15', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
  })

  it('returns "Fizz" when the number equals to 18', () => {
    expect(fizzbuzz(18)).toBe('Fizz');
  })

  it('returns "Buzz" when the number equals to 20', () => {
    expect(fizzbuzz(20)).toBe('Buzz');
  })
});