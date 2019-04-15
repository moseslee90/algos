let steps = 0;
function mergeSort(arr) {
  steps++;
  let lengthHalf = Math.floor(arr.length / 2);
  let arr1 = arr.slice(0, lengthHalf);
  let arr2 = arr.slice(lengthHalf);
  if (arr1.length !== 1) {
    arr1 = mergeSort(arr1);
  }
  if (arr2.length !== 1) {
    arr2 = mergeSort(arr2);
  }

  return merge(arr1, arr2);
}

function merge(arr1, arr2) {
  var result = [];
  while (arr1.length && arr2.length) {
      steps++;
    if (arr1[0] <= arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }

  return result.concat(arr1, arr2);
}
let unsorted = [
    3,
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
    7,
    7,
    7,
    7,
    7
  ];
  let unsorted2 = [3, 2, 5, 4, 6, 7, 3, 2, 8, 9, 5, 6, 8, 2, 76, 4,1,13,16,27,24,33,1,2];
  let unsorted3 = [8,7,6,9,3,0,4,2,1];
let sorted = mergeSort(unsorted);
console.log(sorted);
console.log(steps);
const bug = `     ,--.       ,---. 
    /    '.    /     \\ 
           \\  ; 
            \\-| 
           (o o)      (/ 
           /'v'     ,-' 
   ,------/ >< \\---' 
  /)     ;  --  : 
     ,---| ---- |--. 
    ;    | ---- |   : 
   (|  ,-| ---- |-. |) 
      | /| ---- |\\ | 
      |/ | ---- | \\| 
      \\  : ---- ;  | 
       \\  \\ -- /  / 
       ;   \\  /  : 
      /   / \\/ \\  \\ 
     /)           (\\ 
     you found a bug!`;
const bug2 = `       .--.       .--.
    _  '    \\     /    '  _
     '\\.===. \\.^./ .===./'
            \\/'"'\\/
         ,  |     |  ,
        / '\\|'-.-'|/' \\
       /    |  \\  |    \\
    .-' ,-''|   ; |''-, '-.
        |   |    \\|   | 
        |   |    ;|   |
        |   \\    //   |
        |    '._//'   |`;

// console.log(bug2);
