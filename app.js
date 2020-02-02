const chalk = require('chalk');
const notes = require('./notes.js');
const log = console.log;
const yargs = require('yargs'); // npm parser module
yargs.version('1.1.0');




// add functionality via yargs
// here argument to yargs.command() is a JS obj
yargs.command({
	command: 'add',
	describe: 'to add a new note',
	builder: {
		title: {
			describe: 'title of the note to be added',
			demandOption: true,
			type: 'string'
		}, // an option for the cmd add
		body: {
			describe: 'body of the note',
			demandOption: true,
			type: 'string'	
		}// another option
	},
	handler(argv) {
		// log(yargs.argv);
		// log('adding a new note...' + '\ntitle: ' + argv.title);
		// log('body: ' + argv.body);
		notes.addNote(argv.title, argv.body);
	}
});




// remove functionality via yargs
yargs.command({
	command: 'remove',
	describe: 'to remove a note',
	builder: {
		title: {
			describe: 'title of the note to be deleted',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {
		notes.removeNote(argv.title);
	}
});



// listing notes via yargs
yargs.command({
	command: 'list',
	describe: 'to list all your notes',
	handler(argv) {
		notes.listNotes();
	}
});



// introducing read cmd via yargs
yargs.command({
	command: 'read',
	describe: 'to read a note',
	builder: {
		title: {
			describe: 'title of the note to be read',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {
		notes.readNote(argv.title);
	}
});



// log(yargs.argv); // returns a javaScript object
 yargs.parse(); //alternative of above
 // log(yargs.argv);
// a call to the parser must be initiated.













// const cmd = process.argv[2]; // process.argv returns an array
// if(cmd === 'add') {
// 	log('adding a note!');
// } else if(cmd === 'remove') {
// 	log('removing note!');
// } else {
// 	log('fcuk off!');
// }






// log(chalk.blue.bgBlue.bold.underline('Hello World!', 'Fcuk all!'));
// log(chalk.rgb(200, 0, 0)('Hello World!', 'Fcuk all!'));
// log(chalk.inverse('Yo!, this is me'));
// const validator = require('validator');
// console.log(validator.isEmail('sid@gmail.com'))
// const getNotes = require('./notes.js');
// const fs = require('fs');
// fs.writeFileSync("notes.txt", "This is created using Node.js");
// fs.appendFileSync("notes.txt", "\nFcuk!, I did it.");
// console.log("This is app.js");
// console.log("" + sum(2, 3));
// console.log(getNotes());
// console.log(validator.isURL('https://www.npmjs.com/package/validator'))