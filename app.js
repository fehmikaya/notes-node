console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

console.log(_.uniq([2,1,1]));

// console.log(_.isString('Fehmi'));
// console.log(_.isString(true));
// console.log(_.isString(1));


// console.log('Result: ', notes.add(9, -2));

// var user = os.userInfo;
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! Your age ${notes.age}`);