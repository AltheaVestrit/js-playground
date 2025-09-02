console.log(replicate(3, 5)) // [5, 5, 5]
console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // []

function replicate(rep, arg) {
  if (rep <= 0) {
    return [];
  } else {
    return [arg].concat(replicate(rep - 1, arg));
  }
}