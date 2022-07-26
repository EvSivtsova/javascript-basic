const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const message = (name) => {
  return `Hi ${name}! 50% off our best candies for you today!`;
}

const generateMessages = names.map(message);

console.log(generateMessages);