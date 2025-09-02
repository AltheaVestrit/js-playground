function mergeSort(array) {
  let l = array.length;
  if (l <= 1) {
    return array;
  } else {
    // split array in two and sort
    let arr1 = mergeSort(array.slice(0, Math.ceil(l / 2)));
    let arr2 = mergeSort(array.slice(Math.ceil(l / 2)));
    // new empty array
    let newArr = [];
    let toAdd;
    // merge sorted arrays
    while (arr1.length > 0 && arr2.length > 0) {
      if (arr1[0] < arr2[0]) {
        toAdd = arr1.splice(0, 1);
      } else {
        toAdd = arr2.splice(0, 1);
      }
      newArr.push(...toAdd);
    }
    if (arr1.length === 0) {
      newArr.push(...arr2);
    } else {
      newArr.push(...arr1);
    }
    // return merged array
    return newArr;
  }
}

const first = mergeSort([3, 2, 1, 13, 8, 5, 0, 1]);
const second = mergeSort([105, 79, 100, 110]);
console.log({ first, second });
