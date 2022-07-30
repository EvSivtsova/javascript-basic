const got = require('got');

const fetchRepositoryInfo = (path, callbackFunction) =>  {
  let url = 'https://api.github.com/repos/' + path;
  got(url).then(response => {
  const objectJS = JSON.parse(response.body);
  callbackFunction(objectJS);
});
}

// module.exports = fetchRepositoryInfo;

fetchRepositoryInfo('sinatra/sinatra', (receivedResponse) => {
  console.log(receivedResponse);
});