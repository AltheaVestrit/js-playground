function contains(obj, val) {
  for (var key in obj) {
    if (typeof obj[key] === "object") {
      return contains(obj[key], val);
    }
    if (obj[key] === val) {
      return true;
    }
  }
  return false;
}

var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false

console.log({ hasIt, doesntHaveIt });
