console.log('Starting app.js'); // type in terminal: node app.js

const fs = require('fs'); //Build in node module.  no need of manipulating, const.
// require loads the module.
const os = require('os'); // os = operating system functions
const notes = require('./notes.js'); // Locat require. That file will run
const _ = require('lodash'); // set of handy utilities   https://lodash.com/docs/  clrl + f  _.isString

var res = notes.add(2, -1);

console.log(`Result: ${res}`);

//console.log(_.isString('Andrew'));
var filteredArray = _.uniq([1, 2, 1, 'aa', 'aa']);
console.log(filteredArray);
//var user = os.userInfo();

// fs.appendFile('greeting.txt', 'hello'); error
/* fs.appendFile('greeting.txt', 'Hello ' + user.username, function (err) {
	if (err) {
		console.log('Unable to write to file');
	}
}); */
/*

fs.appendFileSync(
	'greeting.txt',
	`Hello ${user.username}! You are ${notes.age}.`
); */
