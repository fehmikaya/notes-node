const fs = require('fs');

const notesFile = 'notes-data.json';

var fetchNotes = () => {
    try{
        var notesString = fs.readFileSync(notesFile);
        return JSON.parse(notesString);
    }catch(e){
        return [];
    }
};

var saveNotes = (notes) => {
    try{
        fs.writeFileSync(notesFile, JSON.stringify(notes));
    }catch(e){
        console.log('Error saving notes', notesFile, e);
    }
};

var addNote = (title, body) => {
    var notes = fetchNotes();

    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((x) => {return x.title === title});

    if(duplicateNotes.length === 0)
    {
        notes.push(note);
        saveNotes(notes);
        return note;
    }

};

var getAll = () => {
    return fetchNotes();
};

var getNote = (title) => {
    var notes = fetchNotes();
    var note = notes.filter((x) => {return x.title === title})
    return note[0];
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((x) => {return x.title !== title});
    saveNotes(filteredNotes);
    return filteredNotes.length !== notes.length;
};

var logNote = (note) => {
    if(note){
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    }else{
        console.log("Null");
    }
    
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};
