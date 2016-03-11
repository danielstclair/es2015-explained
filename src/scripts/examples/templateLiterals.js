export default function saySomething() {
  let person = {
    firstName: 'Daniel',
    lastName: 'St. Clair',
    likes: ['music', 'movies', 'food'],
    dislikes: ['broccoli', 'traffic', 'jerks']
  }

  // es2015 way
  console.log(`Hi my name is ${person.firstName} ${person.lastName} and I like ${person.likes}. I don't like ${person.dislikes}.`);

  // even better when we use object destructuring

  let {firstName, lastName, likes, dislikes} = person;
  // we can get fancy with our arrays too
  let like = likes.map((item, i) => {
    let newLike = i + 1 === likes.length ? `and ${item}` : `${item}, `;
    return newLike;
  });
  let dislike = dislikes.map((item, i) => {
    let newDislike = i + 1 === dislikes.length ? `and ${item}` : `${item}, `;
    return newDislike;
  });
  console.log(`Hi my name is ${firstName} ${lastName} and I like ${like.join('')}. I don't like ${dislike.join('')}.`);

  // es5 way

  console.log('Hi my name is ' + person.firstName + ' ' + person.lastName + ' and I like ' + person.likes + '. I don\'t like ' + person.dislikes + '.');
}