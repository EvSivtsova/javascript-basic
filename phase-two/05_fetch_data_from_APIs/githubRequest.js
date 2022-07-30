const got = require('got');

const url = 'https://api.github.com/repos/sinatra/sinatra';

got(url)
.then((response) => {
    const githubObject = JSON.parse(response.body);
    console.log(githubObject);
});