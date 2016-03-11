// es2015 way

function testLet() {
  let x = 7;
  let y;
  if (x === 7) {
    y = 2;
  }
  else {
    y = 4;
  }
  return x * y;
}

function testVar() {
  var x = 7;
  if (x === 7) {
    var y = 2;
  }
  else {
    var y = 4;
  }
  return x * y;
}

export {testLet, testVar};