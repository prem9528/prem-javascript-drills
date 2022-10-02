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

function map(elements, cb) {
  let x = [];
  for (let i of elements) {
    let res = cb(i);
    x.push(res)
  }
  return x;

}
let z = map(items, (element) => element)
console.log(z);
//<-------------------------------------------------------------------------------------------------->
const cb2 = (initialValue, current) => initialValue + current;

function reduce(elements, cb, startingValue) {
  let a = startingValue;
  for (let i of elements) {
    let currentValue = i;
    a = cb(a, currentValue)
  }
  return a;
}

let res = reduce(items, cb2, 0)
console.log(res)
//<-------------------------------------------------------------------------------------------------->
function cb3(a) {
  if (!a) {
    console.log(`undefined`);
  } else {
    console.log(a);
  }
}

function find(elements, cb) {
  for (let i of elements) {
    cb(i)
  }
}
find(items, cb3)

//<-------------------------------------------------------------------------------------------------->

function filter(elements, cb) {
  let a = [];
  for (let i of elements) {
    let res = cb(i);
    if (res) {
      z.push(i);
    }
  }
  return z;
}


let ans = filter(items, (element) => element % 2 == 0);
console.log(ans);

//<-------------------------------------------------------------------------------------------------->
const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'

function flatten(elements) {
  let result = []
  for (let i of elements) {
    if (Array.isArray(i)) {
      result = result.concat(flatten(i))
    }
    else {
      result.push(i)
    }
  }
  return result

}
let xy = flatten(nestedArray);
console.log(xy)
