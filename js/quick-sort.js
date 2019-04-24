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
    let pivot = limit - 1;
    let pivotRight = 0;
    let rightStart = pivot + 1 + pivotRight;
    //calculate median
    // let sum = 0;
    // for (let i = start; i < limit; i++) {
    //   const element = array[i];
    //   //find sum
    //   sum = sum + element;
    // }
    // let numberOfElements = limit - start;
    // let median = sum / numberOfElements;
    // let closest = 100;
    // let medianElement = array[start];
    // for (let i = start; i < limit; i++) {
    //   const element = array[i];
    //   //find closest to median
    //   const closeness = Math.abs(element - median);
    //   if (closeness < closest) {
    //     // closest = closeness;
    //     medianElement = i;
    //   }
    // }
    // pivot = medianElement;
    //median end
    const pivotElement = array[pivot];
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
  2,
  10,
  15,
  18,
  23,
  53,
  22,
  19,
  25,
  15,
  3,
  2,
  5,
  4,
  6,
  7,
  3,
  2,
  8,
  9
];
let unsorted3 = [8, 7, 6, 9, 3, 0, 4, 2, 1];
let sorted = quickSortNoRand(unsorted2);
console.log(sorted);
console.log(steps);
const ranArrMaker = (length, min, max) => {
	// as u wish
	let arr = [];
	for (let i = 0; i < length; i++) {
		arr[i] = Math.floor(Math.random() * (max - min + 1) + min);
	}
	return arr;
};
// mergeSort.mergeSortExported(unsorted3);
let time = Date.now();
for (let i = 0; i < 1; i++) {
	//a = 0;
	arr = ranArrMaker(2000, -1000, 1000);
	//console.log(arr)
	//	terse(arr);
	//	rInsertionSort(arr);
	//	insertionSort(arr)
	//	console.log("sorting")
	//	console.log(arr)
	//	mergeSort(arr);
	//	rMergeSort(arr);
	//	console.log('sorted')
//	steps=0;
//	quicksort(arr,0,arrLength/2-1)
	//quickSortNoRand(arr)
}
console.log(Date.now() - time);