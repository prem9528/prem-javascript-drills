function counterFactory() {
  let a=0;
  return {
    increment:()=> (++a),
    decrement: ()=> (a - 1),
  };
}
//<----------------------------------------------------------------------------------------------->

function limitFunctionCallCount(cb, n) {
  let callCount = 0;
  return (...args) => {
    if (callCount === n) return null;
    callCount++;
    return cb(...args);
  };
}


//<---------------------------------------------------------------------------------------->


function cacheFunction(cb) {
 
  const cache = {};
  return (input) => {
    if (Object.prototype.hasOwnProperty.call(cache, input)) return cache[input];
    cache[input] = cb(input);
    return cache[input];
  };

}
