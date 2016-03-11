// es2015 way

function constVariable() {
  const PI = 3.141593;
  console.log(PI > 3.0);
  // PI = 'tasty'; // will throw an error
}

// es5 way - only through the help of object properties and only in global context and not in a block scope

function crappyConst() {
  Object.defineProperty(typeof global === "object" ? global : window, "PI", {
      value:        3.141593,
      enumerable:   true,
      writable:     false,
      configurable: false
  })
  console.log(PI > 3.0);
}

export {constVariable, crappyConst};
