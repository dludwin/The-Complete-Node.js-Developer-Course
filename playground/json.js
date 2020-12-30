var obj = {
	name: 'Dominik',
};

var stringObj = JSON.stringify(obj); // takes object and returns JSON stringified object

console.log(typeof stringObj); // JSON is a string
console.log(stringObj); // {"name":"Dominik"}

var personString = '{"name": "Dominik", "age": 27}';

var person = JSON.parse(personString); // change string to JSON object

console.log(person); // values don't have double quotes
console.log(typeof person);
