const fishLengthsFeet = [2, 3.4, 1.2, 0.4, 0.9, 2.9]
const minLengthFeet = 1.5
let legalFishInFeet = []

fishLengthsFeet.forEach((lengthFeet) => {
  if (lengthFeet < minLengthFeet) {
    console.log(`This ${lengthFeet}ft long fish is too short`)
  }
  else {
    console.log(`This ${lengthFeet}ft long fish is good`)
    legalFishInFeet.push(lengthFeet)
  }
})

console.log(`There are ${legalFishInFeet.length} legal fish`)

legalFishInCentimetres = legalFishInFeet.map((lengthFeet) => (
  lengthFeet * 30.48
))

console.log('Legal fish in cm:', legalFishInCentimetres)

/*

Challenges:
1. Convert the lengths to yards, and output them
2. Find the longest fish, and output it
3. Create a sorted copy of the centimetre lengths array, and output it

*/
console.log('The longest fish caught in feet:', Math.max(...fishLengthsFeet));

// Alternative
let longestInCM = 0
legalFishInCentimetres.forEach((cm) => {
  if (cm > longestInCM) {
    // New longest fish record
    longestInCM = cm
  }
})

console.log('longest in cm', longestInCM)

// Convert to yards

// let fishLengthsYards = []
// fishLengthsFeet.forEach(lengthFeet) => {
//   // Create a new variable called yards
//   const yards = length / 3
//   // Push each item onto the fishLengthsYards array
//   fishLengthsYards.push(yards)
// }

// Alternative
// let fishLengthsYards2 = fishLengthsFeet.map(lengthFeet) => {
//   // Create a new variable called yards
//   return lengthFeet / 3
// }

// legalFishInYards = legalFishInFeet.map((lengthFeet) => (
//   (lengthFeet / 3).toFixed(2)
// ))

// console.log('Legal fish in yards: ', legalFishInYards)


// function compareNumbers(a, b) {
//   return a - b;
// }

// var sortedFishInCms = legalFishInCentimetres.sort(compareNumbers)
// console.log("Sorted fish lengths in cms: ", sortedFishInCms)

// Alternative
let copy = legalFishInCentimetres.slice()
let sortedCms = copy.sort((a,b) => {
  if (a < b) {
    return -1
  } else if (a > b) {
    return 1
  } else {
    return 0
  }
})

console.log('sorted in centimetres', sortedCms)

// find average
let totalCm = 0
legalFishInCentimetres.forEach((cm) => {
  totalCm += cm
})

console.log('Average fish length in cm', (totalCm / legalFishInCentimetres.length))