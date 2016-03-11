// es2015 way

// example 1
// let firstName = 'Daniel';
// let lastName = 'St. Clair';
// let fullName = { firstName, lastName };

// example 2

function getDeepObject() {
  let obj = {
    op: 'level 1',
    lhs: {
      op: 'level 2'
    },
    rhs: ['level 3', 'we\'ll skip this one','this is getting fun']
  }
  return obj;
}

let {op: a, lhs: {op: b}, rhs: [c, , d]} = getDeepObject();

export {a, b, c, d};

// es5 way

// example 1
// var firstName = 'Daniel';
// var lastName = 'St. Clair';
// var fullName = {
//   firstName: firstName,
//   lastName: lastName
// };

// example 2

// var deepObj = getDeepObject();
// var a = deepObj.op;
// var b = deepObj.lhs.op;
// var c = deepObj.rhs[0];
// var d = deepObj.rhs[2];