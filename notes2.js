console.log('Starting notes2.js');

var addNote = (title, body) => {
	console.log('Adding note', title, body);
};

var getAll = () => {
	console.log('Getting all notes');
};

var getNote = (title) => {
	console.log('Getting title', title);
};

var removeNote = (title) => {
	console.log('Removing Note', title);
};

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote,
};
