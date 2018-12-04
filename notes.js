console.log('Starting notes.js');

const fs = require('fs');

const addNote = (title, body) => {
  let notes = [];
  const note = {
    title,
    body,
  };

  // Prevent the app crash in case there is no notes-data.json file or the data inside this file is corrupted.
  try {
    // Avoid removing the previous note when add a new note
    const notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (error) {}

  // Prevent note with duplicate title
  const duplicateNotes = notes.filter(note => note.title === title);
  if (duplicateNotes.length === 0) {
    // Add new note to notes and turn it into a JSON string
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }

};

const getAll = () => {
  console.log('Getting all notes');
};

const getNote = title => {
  console.log('Getting the note', title);
};

const deleteNote = title => {
  console.log('Deleting note', title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  deleteNote,
};
