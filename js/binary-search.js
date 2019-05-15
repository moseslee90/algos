function binarySearch(arr, element) {
    //  search through the array non-recursively for the element
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found
}

//first start is 0, first end is arr.length-1

function recursiveBinarySearch(arr, element) {

    function recursion(start, end) {

        if (start === end) {
            //only one element
            if (arr[start] === element) {
                //found at last entry
                console.log(start);
                return start;
            } else {
                //element not found
                if (element > arr[start]) {
                    //element should be at this position (negative value -1)
                    let position = -(start + 1) - 1;
                    console.log(position);
                    return position;
                } else {
                    let position = -(start) - 1;
                    console.log(position);
                    return position;
                }
            }
        }


        let halfPosition = Math.floor((start + end) / 2);

        //check element at this position
        if (element === arr[halfPosition]) {
            //we found it
            console.log(halfPosition);
            return halfPosition;
        } else if (element > arr[halfPosition]) {
            //search towards right
            //get new array
            newStart = halfPosition + 1;
            newEnd = end;
            recursion(newStart, newEnd);
        } else {
            //element is less than element at half position, seach left
            newStart = start;
            newEnd = halfPosition - 1;
            if (newEnd < 0) {
                newEnd = 0;
            }
            recursion(newStart, newEnd);
        }
    }

    recursion(0, arr.length - 1);
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found
}

array1 = [1, 3, 5, 7, 9]
recursiveBinarySearch(array1, 3);