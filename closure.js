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
  return (...a) => {
    if (callCount === n) return null;
    callCount++;
    return cb(...a);
  };
}


//<---------------------------------------------------------------------------------------->


function cacheFunction(cb) { 
  let cache = {};
  return (a) => {
    if (Object.prototype.hasOwnProperty.call(cache, a)) return cache[a];
    cache[a] = cb(a);
    return cache[a];
  };

}
