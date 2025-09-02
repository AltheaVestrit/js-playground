function fibs(n) {
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    let array = [0,1];
    for (let i = 2; i < n; i++) {
      array.push(array[i-2]+array[i-1]);
    }
    return array;
  }
}

function fibsRec(n) {
  if (n === 2) {
    return [0, 1];
  } else {
    let prev = fibsRec(n-1);
    let l = prev.length;
    return prev.concat([prev[l-1] + prev[l-2]]);
  }
}

console.log(fibsRec(8));