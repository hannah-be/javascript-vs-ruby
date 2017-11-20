// The Node.js file system module allow you to work with the file system on your computer
const FS = require('fs')
// The path module provides utilities for working with file and directory paths
const Path = require('path')

// Log timestamp
console.log('Now:', new Date())
// Convert timestamp to a datestring and log
console.log('Today:', new Date().toDateString())

// The toISOString() method converts a Date object into a string, using the ISO standard. The standard is called ISO - 8601 and the format is: YYYY - MM - DDTHH: mm: ss.sssZ
now = (new Date()).toISOString()
// Create a variable called filepath that instantiates filepath directory called /timestamp.txt
const filePath = Path.join(__dirname, 'timestamp.txt')
// Write the contents of 'now' to a file to the filepath directory 
FS.writeFileSync(filePath, now)

/*
Challenges:
1. Work out the date in 100 days, and display it
2. Work out the date 1000 days ago in the past, and display it
*/

// Create a function for days in the future
const futureDays = (date, days) => {
  // Store the new date in a variable called futureDate
  var futureDate = new Date(date);
  // set the date of futureDate at a date that is X days ahead
  futureDate.setDate(futureDate.getDate() + days);
  return futureDate;
};

// Create a function for days in the past
const pastDays = (date, days) => {
  // Store the new date in a variable called pastDate
  var pastDate = new Date(date);
  // set the date of pastDate at a date that is X days behind
  pastDate.setDate(pastDate.getDate() - days);
  return pastDate;
};

// Call the futureDays function on newDate (this will be now) plus 100 days
console.log('In 100 days it will be:', futureDays(new Date(), 100).toDateString());
// Call the pastDays function on newDate (now) less 1000 days
console.log('1000 days ago it was:', pastDays(new Date(), 1000).toDateString());