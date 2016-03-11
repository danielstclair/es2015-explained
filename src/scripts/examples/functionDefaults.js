// es2015 way

function autoAssign(a, b = 'Rosemary') {
  console.log(a, b);
  // console.log(typeof e);
}

// es5 way

function manualAssign(a, b) {
  var b = typeof b !== 'undefined' ? b : 'Rosemary';
  console.log(a, b);
}

export {autoAssign, manualAssign};