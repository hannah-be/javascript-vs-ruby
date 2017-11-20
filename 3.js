function displayMovie(movie) {
  const title = movie.title
  const yearReleased = movie.yearReleased
  const stars = movie.stars
  const director = movie.director

  console.log(`Title: ${title}`)
  console.log(`Year released: ${yearReleased}`)
  console.log(`Stars: ${stars.join(', ')}`)
  console.log(`Director: ${director}`)
}

// Create a function declaration that takes movie as a parameter
function splitString(movie) {
  // Create a variable - names - and assign it the stars of each movie
  var names = movie.stars
  // Iterate over each stars' name
  names.forEach((name) => {
    // Create a variable that takes the first name/s in each string
    var firstName = name.split(' ').slice(0, -1).join(' ');
    // Create a variable that take sthe final name in each string
    var lastName = name.split(' ').slice(-1).join(' ');
    // Output 
    console.log(`First name: ${firstName}, Last name: ${lastName}`)
  })
}
  
const forestGump = {
  title: 'Forest Gump',
  yearReleased: 1994,
  stars: ['Tom Hanks', 'Robin Wright'],
  director: 'Robert Zemeckis'
}

const backToTheFuture = {
  title: 'Back to the Future',
  yearReleased: 1985,
  stars: ['Michael J. Fox', 'Christopher Lloyd'],
  director: 'Robert Zemeckis'
}
  
  /*
  Challenges:
  1. Add another three movies
  2. Add a property for director to each movie, and display it
  3. Convert people from being strings (`Tom Hanks`) to objects (with e.g. first & last name)
  
  */
const princessBride = {
  title: 'The Princess Bride',
  yearReleased: 1987,
  stars: ['Robin Wright', 'Cary Elwes'],
  director: 'Rob Reiner'
}
const georgeOfTheJungle = {
  title: 'George of the Jungle',
  yearReleased: 1997,
  stars: ['Brendan Fraser', 'Leslie Mann', 'Thomas Haden Church'],
  director: 'Sam Weisman'
}
const liarLiar = {
  title: 'Liar Liar',
  yearReleased: 1997,
  stars: ['Jim Carey', 'Maura Tierney'],
  director: 'Tom Shadyac',
}

displayMovie(forestGump)
displayMovie(backToTheFuture)
displayMovie(princessBride)
displayMovie(georgeOfTheJungle)
displayMovie(liarLiar)

// Test output of function
splitString(forestGump)
splitString(backToTheFuture)
