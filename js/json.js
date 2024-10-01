const user = {name: 'jahid hasan', id: 5, job: 'amar kaj gumay thaka'};
const stringified = JSON.stringify(user);
const parse = JSON.parse(stringified)
console.log(user)
console.log(stringified);
console.log(parse)
