const items = [1, 2, 3, 4, 5, 5];
/*
  Complete the following functions.
  These functions only need to work with arrays.
  A few of these functions mimic the behavior of the `Built` in JavaScript Array Methods.
  The idea here is to recreate the functions from scratch BUT if you'd like,
  feel free to Re-use any of your functions you build within your other functions.
  **DONT** Use for example. .forEach() to recreate each, and .map() to recreate map etc.
  You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating
*/
function cb(a) {
  console.log(`and indexces are ${a}`)
}
function each(elements, cb) {
  for (let i = 0; i < elements.length; i++) {
    console.log(`values are  ${elements[i]}`);
    cb(i)
  }
}

each(items, cb)

//<-------------------------------------------------------------------------------------------------->
let x = [];
function cb1(a) {
  x.push(a * 10);
  console.log(x)
}
function map(elements, cb) {
  for (let i of elements) {
    cb(i)
  }
}
map(items, cb1)
//<-------------------------------------------------------------------------------------------------->
let sum = 0;
function cb2(a, b) {
  sum += b;
   console.log(sum+a);
}

function reduce(elements, cb, startingValue) {
  console.log(startingValue)
  for (let i of elements) {
    if (startingValue == 'undefined') {
      console.log(startingValue+"gjhgjhv")
      startingValue = elements[0];
      cb(0, i)
    } else {
      cb(startingValue, i)
    }
  }  
}
reduce(items, cb2)

//<-------------------------------------------------------------------------------------------------->
function find(elements, cb) {
  // Do NOT use .includes, to complete this function.
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
}

//<-------------------------------------------------------------------------------------------------->
function filter(elements, cb) {
  // Do NOT use .filter, to complete this function.
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
}

//<-------------------------------------------------------------------------------------------------->
const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'

function flatten(elements) {
  // Flattens a nested array (the nesting can be to any depth).
  // Hint: You can solve this using recursion.
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
}
