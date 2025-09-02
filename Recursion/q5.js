function productOfArray(array) {
  if (array.length === 0) {
    return 1;
  } else {
    return array[0] * productOfArray(array.slice(1));
  }
}

var six = productOfArray([1, 2, 3]); // 6
var sixty = productOfArray([1, 2, 3, 10]); // 60

console.log({ six, sixty });
