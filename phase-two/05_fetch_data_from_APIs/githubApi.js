const got = require('got');

class GithubAPI {
  constructor() {
    this.endpoints = 'https://api.github.com/repos/';
  }

  fetchRepositoryData (path, callbackFunction) {
    let url = this.endpoints + path;
    got(url)
    .then((response) => {
      callbackFunction(JSON.parse(response.body));
    });
  }
}

module.exports = githubAPI;