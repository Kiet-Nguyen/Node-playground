// const obj = {
//   name: 'Kian',
// };

// const stringObj = JSON.stringify(obj);
// console.log('Type of stringObj', typeof stringObj);
// console.log('stringObj', stringObj);

// const personString = '{ "name": "Kian", "age": 34 }';
// const person = JSON.parse(personString);
// console.log('Type of person', typeof person);
// console.log('person', person);

const fs = require('fs');

const originalNote = {
  title: 'Some title',
  body: 'Some body',
};

// originalNoteString
const originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

const noteString = fs.readFileSync('notes.json');
const note = JSON.parse(noteString);
// note
console.log(typeof note);
console.log(note.title);

