function mergeSort(arr) {
    let lengthHalf = Math.floor((arr.length) / 2);
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
        if (arr1[0] <= arr2[0]) {
            result.push(arr1.shift());
        } else {
            result.push(arr2.shift());
        }
    }

    return result.concat(arr1, arr2);
}
const bug =
`     ,--.       ,---. 
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
const bug2 =
`       .--.       .--.
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

console.log(bug2);
