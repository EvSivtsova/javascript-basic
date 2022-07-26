// exercise 1: 

const names = ['Ev', 'Joe', 'Paris', 'Irina'];

console.log(names.length);
console.log(names[1]);

const newNames = names.concat('Dana');

console.log(newNames);

// exercise 2: 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let total = 0

numbers.forEach((number) => {
  total += number;
});

console.log(total);