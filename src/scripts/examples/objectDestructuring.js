// ES2015 way:
let legos = {
  person: {
    firstName: 'daniel',
    lastName: 'st. clair',
    occupation: 'developer',
    currentBook: 'Harry Potter and the Half Blood Prince'
  },
  whatsMyName (person) {
    let {firstName, lastName, occupation, currentBook} = person;
    console.log(`My name is ${firstName} ${lastName}. I work as a ${occupation} and am half way through ${currentBook}. This is so much easier.`);
  }
}

let superLegos = {
  person: {
    firstName: 'daniel',
    lastName: 'st. clair'
  },
  whatsMyName ({firstName, lastName}) {
    console.log(`My name is ${firstName} ${lastName}. This way is awesome for small stuff.`);
  }
}

// ES5 way:
let offBrandLegos = {
  person: {
    firstName: 'daniel',
    lastName: 'st. clair',
    occupation: 'developer',
    currentBook: 'Harry Potter and the Half Blood Prince'
  },
  whatsMyName: function(person) {
    var firstName = person.firstName;
    var lastName = person.lastName;
    var occupation = person.occupation;
    var currentBook = person.currentBook; 
    console.log('My name is ' + firstName + ' ' + lastName + '. I\'m a ' + occupation + ' and am half way through ' + currentBook + '. This way sucks.');
  }
}

export {legos, superLegos, offBrandLegos};