import '../styles/main.scss';

import {greenArrow, offWhiteArrow} from './examples/arrowFunctions.js';
import {legos, superLegos, offBrandLegos} from './examples/objectDestructuring.js';
import {easyWay, hardWay} from './examples/arrayDestructuring.js';
import {autoAssign, manualAssign} from './examples/functionDefaults';
import {constVariable, crappyConst} from './examples/const';
import {testLet, testVar} from './examples/let';
import {a, b, c, d} from './examples/objectLiterals';
import saySomething from './examples/templateLiterals';

function allTheLogs() {
  saySomething();
  console.log(a, b, c, d);
  let es6 = testLet();
  console.log('es6 ' , es6);
  let es5 = testVar();
  console.log('es5 ' , es5);

  constVariable();
  crappyConst();

  easyWay();
  hardWay();

  legos.whatsMyName(legos.person);
  superLegos.whatsMyName(superLegos.person);
  offBrandLegos.whatsMyName(offBrandLegos.person);
  greenArrow.weCool();

  autoAssign();
  autoAssign('hello');
  autoAssign("hello", 'George');
}