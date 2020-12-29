console.log('Starting nodes.js');

//console.log(module); // This is available in all of our files
// exports is an object of module property.

module.exports.age = 27;

/* module.exports.addNote = function () {
} */

module.exports.addNote = () => {
	console.log('addNote');
	return 'New note';
};

module.exports.add = (a, b) => {
	console.log('add');
	return a + b;
};

// npm init        == questions about project
// lodash makes programming in node.js a lot easier
// npm install lodash --save       save will save in package.json
