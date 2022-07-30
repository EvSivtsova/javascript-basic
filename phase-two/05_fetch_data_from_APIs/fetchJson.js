const got = require('got');

const handleReceivedResponse = (response) => {
  const obj = JSON.parse(response.body);
  console.log(obj);
}

const fetchJson = (url, callbackFunction) => {
  got(url)
  .then(callbackFunction);
}

fetchJson('https://jsonplaceholder.typicode.com/todos', handleReceivedResponse);
