var l = [1, 2, 3];
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[1, 2], 3];
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]];
console.log(SumSquares(l)); // 1 = 1

l = [10, [[10], 10], [10]];
console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400

function SumSquares(array) {
  if (array.length === 0) {
    return 0;
  } else {
    let n = 0;
    array.forEach((el) => {
      if (Number.isInteger(el)) {
        n += el * el;
      } else if (Array.isArray(el)) {
        n += SumSquares(el);
      }
    });
    return n;
  }
}
