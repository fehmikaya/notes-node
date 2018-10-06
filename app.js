const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
}

const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
}

const argv = yargs
.command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
})
.command('remove', 'Remove a node', {
    title: titleOptions
})
.command('read', 'Read a node', {
    title: titleOptions
})
.command('list', 'List all nodes')
.help()
.argv;

if(argv._[0] === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log("Added Note:");
        notes.logNote(note);
    }else{
        console.log("Already added");
    }
}else if(argv._[0] === 'list'){
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach((x) => notes.logNote(x));
}else if(argv._[0] === 'read'){
    var note = notes.getNote(argv.title);
    note ? notes.logNote(note) : console.log("not found");
}else if(argv._[0] === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    console.log(`Note ${argv.title}`, noteRemoved ? "removed" : "not found");
}else{
    console.log('Not recognized');
}