let steps = 0;
function quickSort(array) {
  let firstLimit = array.length;
  let firstStart = 0;
  function recursion(start, limit) {
    steps++;
    //start is either 0 or randIndex+1
    //limit is either pivot
    let pivot = Math.floor(Math.random() * limit);
    const pivotElement = array[pivot];
    let pivotRight = 0;
    let rightStart;
    for (let i = start; i < limit; i++) {
      const element = array[i];
      rightStart = pivot + pivotRight + 1;
      if (
        (element < pivotElement && i < pivot) ||
        (element > pivotElement && i > pivot)
      ) {
        //do nothing
      } else if (element < pivotElement && i > pivot) {
        array.splice(i, 1);
        array.splice(pivot, 0, element);
        pivot++;
      } else if (element > pivotElement && i < pivot) {
        array.splice(rightStart, 0, element);
        array.splice(i, 1);
        i--;
        pivot--;
      } else if (element === pivotElement && i > pivot) {
        array.splice(i, 1);
        array.splice(pivot + 1, 0, element);
        pivotRight++;
      } else if (element === pivotElement && i < pivot) {
        array.splice(pivot + 1, 0, element);
        array.splice(i, 1);
        pivotRight++;
        pivot--;
        i--;
      }
    }
    //recursion for left side
    if (pivot > 0) {
      recursion(0, pivot);
    }
    //recursion for right side
    if (limit - rightStart > 0) {
      recursion(rightStart, limit);
    }
  }
  recursion(firstStart, firstLimit);
  return array;
}
function quickSortNoRand(array) {
  let firstLimit = array.length;
  let firstStart = 0;
  function recursion(start, limit) {
    steps++;
    //start is either 0 or randIndex+1
    //limit is either pivot
    let pivot = start;
    const pivotElement = array[pivot];
    let pivotRight = 0;
    let rightStart = pivot + 1 + pivotRight;
    for (let i = start; i < limit; i++) {
      const element = array[i];
      if (
        (element < pivotElement && i < pivot) ||
        (element > pivotElement && i > pivot)
      ) {
        //do nothing
      } else if (element < pivotElement && i > pivot) {
        array.splice(i, 1);
        array.splice(pivot, 0, element);
        pivot++;
      } else if (element > pivotElement && i < pivot) {
        array.splice(rightStart, 0, element);
        array.splice(i, 1);
        i--;
        pivot--;
      } else if (element === pivotElement && i > pivot) {
        array.splice(i, 1);
        array.splice(pivot + 1, 0, element);
        pivotRight++;
      } else if (element === pivotElement && i < pivot) {
        array.splice(pivot + 1, 0, element);
        array.splice(i, 1);
        pivotRight++;
        pivot--;
        i--;
      }
      rightStart = pivot + 1 + pivotRight;
    }
    //recursion for left side
    if (pivot > 0) {
      recursion(0, pivot);
    }
    //recursion for right side
    if (limit - rightStart > 0) {
      recursion(rightStart, limit);
    }
  }
  recursion(firstStart, firstLimit);
  return array;
}
let unsorted = [
  5,
  5,
  5,
  3,
  3,
  5,
  3,
  3,
  3,
  5,
  5,
  3,
  5,
  3,
  3,
  7,
  7,
  7,
  7,
  7,
  7,
  3,
  3,
  7,
  7,
  7
];
let unsorted2 = [
  3,
  2,
  5,
  4,
  6,
  7,
  3,
  2,
  8,
  9,
  5,
  6,
  8,
  2,
  76,
  4,
  1,
  13,
  16,
  27,
  24,
  33,
  1,
  2
];
let unsorted3 = [8, 7, 6, 9, 3, 0, 4, 2, 1];
let sorted = quickSort(unsorted2);
console.log(sorted);
console.log(steps);
