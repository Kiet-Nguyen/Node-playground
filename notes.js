console.log('Starting notes.js');

const addNote = (title, body) => {
  console.log('Adding note', title, body);
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
