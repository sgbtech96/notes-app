const fs = require('fs');
const chalk = require('chalk');


const readNote = (title) => {
	const notes = loadNotes();
	const reqNote = notes.find((note) => note.title === title);
	try {
		console.log('title: ' + chalk.bgGreen(reqNote.title));
		console.log('body:');
		console.log(reqNote.body);
	} catch(e) {
		console.log(chalk.bgRed('no note found with the title: ' + title));
	}
	
};


const listNotes = () => {
	const notes = loadNotes();
	notes.forEach((note) => {
		console.log(chalk.black.inverse(note.title));
	});
};


const removeNote = (title) => {
	const notes = loadNotes();
	const duplicateNotes = notes.filter((note) => note.title !== title);
	if(duplicateNotes.length === notes.length)
	{
		console.log(chalk.bgRed('no note exists with the title: ' + title));
	} else {
		saveNotes(duplicateNotes);
		console.log(chalk.bgGreen('note removed successfully!'));
	}
};


const addNote = (title, body) => {
	const notes = loadNotes();
	const duplicateNotes = notes.filter((note) => note.title === title);

	debugger; // feasible with chrome's V8 engine, cmd=node inspect app.js, chrome://inspect, restart

	if(duplicateNotes.length === 0)
	{
		notes.push({
			title: title,
			body: body
		});
		saveNotes(notes);
		console.log(chalk.bgGreen('note added successfully!'));
	} else {
		console.log(chalk.bgRed('title already exists!'));
	}
};


const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync('notes.json', dataJSON);
};


const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync('notes.json');
		const dataJSON = dataBuffer.toString();
		const data = JSON.parse(dataJSON);
		return data;
	} catch(e) {
		return [];
	}	
};



module.exports = {
	addNote: addNote,
	removeNote: removeNote,
	listNotes: listNotes,
	readNote: readNote
};



















// const getNotes = function () {
// 	return "Your notes ...";
// }
// module.exports = getNotes;

















// const add = function (x, y) {
// 	return x + y;
// }
// console.log("Hi, I got executed!");
// module.exports = add;s