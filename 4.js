var conjunctions = ['the', 'of', 'and', 'or']

// Challenges:

function wordCount(string) {
  let words = string.split(' ')
  return words.length
}
// Skip conjuctions (and / or / the / of) from `wordCount` function
function nonConjunctionWordCount(string) {
  // Create a variable that splits the words in the string into an array
  let words = string.split(' ')
  // Apply the filter method to the words array so that it will only return the word if it doesn't equal a conjunction
  words = words.filter((word) => { 
    for ( var i = 0; i < conjunctions.length; i++ ) {
      return word !== conjunctions[i]
    }
  })
  // Return the count of the non-conjunction words
  return words.length
}


// Skip conjuctions (and / or / the / of) from `wordFrequencyTable` function
function wordFrequencyTable(string) {
  // Create a variable that splits the words in the string into an array
  let words = string.split(' ')
  // Create an empty object that will hold the key-value pairs of each word and it's wordcount
  let wordCounts = {}
  // Apply the filter method to the words array so that it will only return the word if it doesn't equal a conjunction
  // words = words.filter(function (word) { return word !== 'the' && word !== 'of' && word !== 'and' && word !== 'or' })
  // Iterate over each word in the array
  words.forEach((word) => {
    if (word === 'the' || word === 'of' || word === 'and' || word === 'or') {
      return //skip
    }
    // Each word and it's word count is added to the wordsCount object (wordcount is checked to see if it has a value for each word already)
    wordCounts[word] = (wordCounts[word] || 0) + 1
  })
  // Return the wordCounts object
  return wordCounts
}

// 3. Change the sentence to the "It was the best of times…" chapter 1 excerpt from here: https://en.wikiquote.org/wiki/A_Tale_of_Two_Cities
let sentence = 'the quick brown fox jumps over the lazy dog'
console.log(`There are ${wordCount(sentence)} words in: ${sentence}. If we exclude conjunctions from our word count, there are ${nonConjunctionWordCount(sentence)} words in the sentence.`)

// console.log(wordFrequencyTable(sentence))

sentence = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.'

console.log(`There are ${wordCount(sentence)} words in: ${sentence}. If we exclude conjunctions from our word count, there are ${nonConjunctionWordCount(sentence)} words in the sentence.`)

// console.log(wordFrequencyTable(sentence))


// 4. Find the five most popular words using the result of `wordFrequencyTable`
// Create a variable to hold the word frequency table for each sentence
let wordFrequency = (wordFrequencyTable(sentence))
// Create an empty array
let sortable = [];
// Loop over each word in the table
for (let words in wordFrequency) {
  // Add word to the new array
  sortable.push([words, wordFrequency[words]]);
}
// Create a variable to store sorted array in alphabetical order
let popularWords = sortable.sort(function (a, b) {
  return a[1] - b[1];
});

// Save the top five most used words
popularWords = popularWords.reverse().slice(0, 5)

function justTheWords(arr) {
  let justTheWords = []
  for (let i = 0; i < arr.length; i++) {
    justTheWords.push(arr[i][0])
  }
  return justTheWords
}


console.log('The 5 most popular words are: ', justTheWords(popularWords))
