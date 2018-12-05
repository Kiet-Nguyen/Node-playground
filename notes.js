const fs = require('fs');

const fetchNotes = () => {
  // Prevent the app crash in case there is no notes-data.json file or the data inside this file is corrupted.
  try {
    // Avoid removing previous notes when add a new note
    const notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (error) {
    return [];
  }
};

const saveNote = notes => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
  let notes = fetchNotes();
  const note = {
    title,
    body,
  };
  // Prevent note with duplicate title
  const duplicateNotes = notes.filter(note => note.title === title);
  if (duplicateNotes.length === 0) {
    // Add new note to notes and turn it into a JSON string
    notes.push(note);
    saveNote(notes);

    return note;
  }
};

const getAll = () => {
  return fetchNotes();
};

const getNote = title => {
  const notes = fetchNotes();
  const selectedNotes = notes.filter(note => note.title === title);

  return selectedNotes[0];
};

const deleteNote = title => {
  const notes = fetchNotes();
  const updatedNotes = notes.filter(note => note.title !== title);
  saveNote(updatedNotes);

  return notes.length !== updatedNotes.length;
};

const logNote = note => {
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
  console.log('--');
}

module.exports = {
  addNote,
  getAll,
  getNote,
  deleteNote,
  logNote,
};
