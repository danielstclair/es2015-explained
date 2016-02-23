import '../styles/main.scss';

import {greenArrow, offWhiteArrow} from './arrowFunctions.js';
import {legos, superLegos, offBrandLegos} from './objectDestructuring.js';
import {easyWay, hardWay} from './arrayDestructuring.js';

easyWay();

hardWay();

// legos.whatsMyName(legos.person);
// superLegos.whatsMyName(superLegos.person);
// offBrandLegos.whatsMyName(offBrandLegos.person);
// greenArrow.weCool();

// let obj = {
//   name: ['daniel', 'dom', 'zoe', 'stevie'],
//   isCool: 'is cool',
//   sayIt () {
//     console.log(this);
//     let {name, isCool} = this;
//     let coolName = name.map(() => {
//       console.log(this);
//     })
//     console.log(coolName);
//   },

// }

// obj.sayIt();
