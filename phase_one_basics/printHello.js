const printHello = () => {
  console.log('Hello');
}

const executeAfterDelay = (seconds, printFunction) => {
  setTimeout(printFunction, seconds*1000);
}

executeAfterDelay(5, printHello)