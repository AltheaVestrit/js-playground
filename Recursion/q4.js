function all(arr, cb) {
  if (arr.length == 0) {
    return true;
  } else if (cb(arr[0]) == false) {
    return false;
  } else {
    return all(arr.slice(1), cb);
  }
}

var allAreLessThenSeven = all([], function (num) {
  return num < 7;
});

console.log(allAreLessThenSeven);
