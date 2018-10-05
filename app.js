console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;

if(argv._[0] === 'add'){
    notes.addNote(argv.title, argv.body);
}else if(argv._[0] === 'list'){
    notes.getAll()
}else if(argv._[0] === 'read'){
    notes.readNote(argv.title);
}else if(argv._[0] === 'remove'){
    notes.removeNote(argv.title);
}else{
    console.log('Not recognized');
}