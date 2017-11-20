console.log('When is Christmas?')

var xmasDay = 25
var xmasMonth = 'December'

console.log(`Christmas is on ${xmasDay} of ${xmasMonth}`)

/*

Challenges:
1. Create variables for Anzac Day, and output them
2. Change your code to use the Date class — hint: `new Date(…)`

*/

var anzacDay = 25
var anzacMonth = 'April'

console.log(`Anzac Day is on ${anzacDay} of ${anzacMonth}`)

var anzacDate = new Date(2018, 04, 25)
var day = anzacDate.getDate()
var month = anzacDate.getMonth()

console.log(`Anzac Day is on ${day}/${month}`)