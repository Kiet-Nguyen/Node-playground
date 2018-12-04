console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
// Yargs { _: [ 'read' ], title: 'accounts', '$0': 'app.js' }
const command = argv._[0];

//const command = process.argv[2];
console.log('Command: ', command);

console.log('Yargs', argv);

if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body);
  if (_.isUndefined(note)) {
    console.log('This note title is in use!')
  } else {
    console.log(`The note with title ${note.title} is added`)
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  notes.deleteNote(argv.title);
} else {
  console.log('Command is not recognized');
}
