const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; // use this object to test your functions

// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

function keys(obj) {
  
  return Object.keys(obj);
}

function values(obj) {
  
  return Object.keys(obj).map((key) => {
    return obj[key];
  });
}

function mapObject(obj, cb) {
  
  Object.keys(obj).forEach(key => (obj[key] = cb(obj[key])));
  return obj;
}

function pairs(obj) {
  return Object.keys(obj).map((key) => {
    return [key, obj[key]];
  });
}

/* STRETCH PROBLEMS */

function invert(obj) {
  
  Object.keys(obj).forEach((key) => {
    const newKey = obj[key];
    obj[newKey] = key;
    delete obj[key];
  });
  return obj;
}

function defaults(obj, defaultProps) {
 
  Object.keys(defaultProps).forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) return;
    obj[key] = defaultProps[key];
  });
  return obj;
}
