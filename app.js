const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");

const titleOptions = {
  describe: "Title of note",
  demand: true,
  alias: "t"
};

const bodyOptions = {
  describe: "Body of note",
  demand: true,
  alias: "b"
};

const argv = yargs
  .command("add", "Add a new note", {
    title: titleOptions,
    body: bodyOptions,
  })
  .command("list", "List all notes")
  .command("read", "Read a note", {
    title: titleOptions,
  })
  .command('remove', 'Remove a note', {
    title: titleOptions,
  })
  .help().argv;
// Yargs { _: [ 'read' ], title: 'accounts', '$0': 'app.js' }
const command = argv._[0];

//const command = process.argv[2];
// console.log('Command: ', command);
// console.log('Yargs', argv);

if (command === "add") {
  const note = notes.addNote(argv.title, argv.body);
  if (_.isUndefined(note)) {
    console.log("This note title is in use!");
  } else {
    notes.logNote(note);
  }
} else if (command === "list") {
  const allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`);
  allNotes.forEach(note => notes.logNote(note));
} else if (command === "read") {
  const selectedNote = notes.getNote(argv.title);
  if (selectedNote) {
    console.log("Selected note");
    notes.logNote(selectedNote);
  } else {
    console.log("Note not found");
  }
} else if (command === "remove") {
  const noteRemoved = notes.deleteNote(argv.title);
  let message = noteRemoved ? "Note was removed" : "Note not found";
  console.log("Message: ", message);
} else {
  console.log("Command is not recognized");
}
