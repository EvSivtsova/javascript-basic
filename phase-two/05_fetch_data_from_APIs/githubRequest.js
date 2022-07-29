const got = require('got');

const url = 'https://api.github.com/repos/sinatra/sinatra';

// VERSION 1:

got(url)
.then((response) => {
    console.log(JSON.parse(response.body));
});

// VERSION 2:

// const handleReceivedResponse = (response) => {
//   console.log(JSON.parse(response.body));
// }

// got(url).then(handleReceivedResponse);