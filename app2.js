console.log('Starting app2.js');

//const fs = require('fs');
//const _ = require('lodash');

const yargs = require('yargs'); // makes process of parsing arguments much easier
const notes = require('./notes2.js');

//console.log(process.argv); // arguments array. All of the arguments passed in
// node app2.js add/remove/list
const argv = yargs.argv;

var command = argv._[0]; // process.argv[2];
console.log('Command: ', command);
//console.log('Process', process.argv);
console.log('Yargs', argv); // node app2.js add --title=secrets
console.log(argv.title); // node app2.js add --title=secrets --body="This is my secret"

if (command === 'add') {
	notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
	notes.getAll();
} else if (command === 'read') {
	notes.getNote(argv.title);
} else if (command === 'remove') {
	notes.removeNote(argv.title);
} else {
	console.log('Command not recognized');
}

// yargs is better for validating input
