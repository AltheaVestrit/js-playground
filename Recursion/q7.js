function totalIntegers(array) {
  if (array.length == 0) {
    return 0;
  } else {
    let n = 0;
    array.forEach((el) => {
      if (Number.isInteger(el)) {
        n += 1;
      } else if (Array.isArray(el)) {
        n += totalIntegers(el);
      }
    });
    return n;
  }
}

var zero = totalIntegers(["bla"]);
var three = totalIntegers([[[5], 3], 0]); // 3
var seven = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // 7
console.log({ zero, three, seven });
