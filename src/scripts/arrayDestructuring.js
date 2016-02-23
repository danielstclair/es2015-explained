let easyWay = function() {
  let heros = ['superman', 'batman', 'wonder woman', 'flash', 'iron man', 'captain america', 'x-men'];
  console.log(heros);
  // part 1

  // let [a, b] = heros;
  // console.log('b ' , b);
  // console.log('a ' , a);

  // part 2

  // let [a, , b] = heros;
  // console.log('b ' , b);
  // console.log('a ' , a);

  // part 3

  // let [a, b, ...c] = heros;
  // console.log('a ' , a);
  // console.log('b ' , b);
  // console.log('c ' , c);

  // part 4 let's push to an array with the spread operator

  // let sidekicks = ['superwoman', 'robin', 'hawkeye', 'nightcrawler'];
  // heros.push(...sidekicks);
  // console.log(heros);
  // // or use array literals
  // var limbs = ['arms', 'legs'];
  // var torso = ['head', 'chest', ...limbs, 'and', 'feet'];
  // console.log(torso);

  // part 5 lets use the spread operator and rest operator to handle function arguments

  // let eightiesAnthems = ['Melt With You', 'Love Song', 'Hungry Eyes', 'She\'s Like the Wind'];

  // function realTalk(a, b, ...c){
  //   console.log('a ' , a);
  //   console.log('b ' , b);
  //   console.log('c ' , c);
  // }

  // realTalk(...eightiesAnthems);

}



let hardWay = function() {
  let heros = ['superman', 'batman', 'wonder woman', 'flash', 'iron man', 'captain america', 'x-men'];
  // console.log(heros);

  // Part 1 & 2

  // var a = heros[0];
  // console.log('a ' , a);
  // var b = heros[1];
  // console.log('b ' , b);

  // Part 3

  // var herosCopy = heros.slice();

  // var a = herosCopy.splice(0, 1);
  // console.log('a ' , a);
  // var b = herosCopy.splice(0, 1);
  // console.log('b ' , b);
  // var c = herosCopy;
  // console.log('c ' , c);
  // console.log('heros ' , heros);

  // Part 4
  // let sidekicks = ['superwoman', 'robin', 'hawkeye', 'nightcrawler'];
  // Array.prototype.push.apply(heros, sidekicks);
  // console.log(heros); 
  // // or in a specific place
  // var limbs = ['arms', 'legs'];
  // var torso = ['head', 'chest', 'and', 'feet'];
  // torso.splice(2, 0, limbs[0]);
  // torso.splice(3, 0, limbs[1]);
  // console.log(torso);

  // Part 5

  // var eightiesAnthems = ['Melt With You', 'Love Song', 'Hungry Eyes', 'She\'s Like the Wind'];

  // function realTalk(a, b, c){
  //   console.log('a ' , a);
  //   console.log('b ' , b);
  //   console.log('c ' , c);

  // }
  // var firstTwo = eightiesAnthems.splice(0, 2);
  // firstTwo.splice(2, 0, eightiesAnthems);

  // realTalk.apply(null, firstTwo);




}

export {easyWay, hardWay};