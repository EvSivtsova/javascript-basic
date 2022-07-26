const fizzBuzz = (number) => {
  if ( number % 15 === 0 ) {
    return 'FizzBuzz';
  } else if ( number % 3 === 0) {
    return 'Fizz';
  } else if ( number % 5 === 0) {
    return 'Buzz';
  } else {
    return number;
  }
}

const fizzBuzzUntil = (number) => {
  let i = 1;
  while (i <= number) {
    const fizzBuz = fizzBuzz(i);
    console.log(`${fizzBuz}`);
    i += 1;
  }
}
  
module.exports = fizzBuzzUntil;