function displayPerson(person) {
  const firstName = person.firstName
  const lastName = person.lastName
  console.log(`  ${firstName} ${lastName}`)
}

function displayMovie(movie) {
  const title = movie.title
  const yearReleased = movie.yearReleased
  const stars = movie.stars
  const director = movie.director

  console.log(`Title: ${title}`)
  console.log(`Year released: ${yearReleased}`)
  console.log(`Stars: `)

  stars.forEach(displayPerson)
  // alternate format
  // stars.forEach((person) => {
  //   displayPerson(person)
  // })

  console.log(`Director: ${director}`)
  console.log('-------')
}

// Object with properties
const forestGump = {
  title: 'Forest Gump',
  yearReleased: 1994,
  stars: [
    { firstName: 'Tom', lastName: 'Hanks'}, 
    { firstName: 'Robin', lastName: 'Wright'}
  ],
  director: 'Robert Zemeckis'
}

const backToTheFuture = {
  title: 'Back to the Future',
  yearReleased: 1985,
  stars: [
    { firstName: 'Michael J.', lastName: 'Fox' },
    { firstName: 'Christopher', lastName: 'Lloyd' }
  ],
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
  stars: [
    { firstName: 'Cary', lastName: 'Elwes' },
    { firstName: 'Robin', lastName: 'Wright' }
  ],
  director: 'Rob Reiner'
}
const georgeOfTheJungle = {
  title: 'George of the Jungle',
  yearReleased: 1997,
  stars: [
    { firstName: 'Brendan', lastName: 'Fraser' },
    { firstName: 'Leslie', lastName: 'Mann' }
],
  director: 'Sam Weisman'
}
const liarLiar = {
  title: 'Liar Liar',
  yearReleased: 1997,
  stars: [
    { firstName: 'Jim', lastName: 'Carey' }, 
    { firstName: 'Maura', lastName: 'Tierney'}
  ],
  director: 'Tom Shadyac',
}

displayMovie(forestGump)
displayMovie(backToTheFuture)
displayMovie(princessBride)
displayMovie(georgeOfTheJungle)
displayMovie(liarLiar)

