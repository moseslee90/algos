function insertionSort(array) {
    // Loop through each element
    let sortedArray = [];
    sortedArray.push(array[0]);
    let steps = 0;

    for (let i = 1; i < array.length; i++) {
        //inspect sorted array
        const elementToSort = array[i];
        const sortedLength = sortedArray.length;
        for (let j = sortedLength - 1; j > -1; j--) {
            steps++;
            if (sortedArray[j - 1] === undefined) {
                //only compare with sortedArray[j]
                if (sortedArray[j] > elementToSort) {
                    //put this element behind sortedArray[j]
                    sortedArray.splice(j, 0, elementToSort);
                    break;
                } else {
                    sortedArray.splice(j + 1, 0, elementToSort);
                    break;
                }
            } else if (
                sortedArray[j] > elementToSort &&
                sortedArray[j - 1] < elementToSort
            ) {
                sortedArray.splice(j, 0, elementToSort);
                break;
            } else if (
                sortedArray[j + 1] === undefined &&
                sortedArray[j] < elementToSort
            ) {
                sortedArray.push(elementToSort);
                break;
            }
        }
    }

    
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//recursion
/*
    function recursion(sortedArray, elementToSort, index){
        //use sortedLength for first recursion
        steps++;
        let found = false;
        if (sortedArray[index - 1] === undefined) {
            //only compare with sortedArray[index]
            if (sortedArray[index] > elementToSort) {
                //put this element behind sortedArray[index]
                sortedArray.splice(index, 0, elementToSort);
                found = true;
            } else {
                sortedArray.splice(index + 1, 0, elementToSort);
                found = true;
            }
        } else if (
            sortedArray[index] > elementToSort &&
            sortedArray[index - 1] < elementToSort
        ) {
            sortedArray.splice(index, 0, elementToSort);
            found = true;
        } else if (
            sortedArray[index + 1] === undefined &&
            sortedArray[index] < elementToSort
        ) {
            sortedArray.push(elementToSort);
            found = true;
        }
        index--;
        if(index<0 || found===true){
            return sortedArray;
        } else {
            recursion(sortedArray, elementToSort, index);
        }
    }

    for (let i = 1; i < array.length; i++) {
        //inspect sorted array
        const elementToSort = array[i];
        const sortedLength = sortedArray.length;
        recursion(sortedArray,elementToSort,sortedLength-1);
    }
    */
    console.log(sortedArray);
    console.log(steps);
    
    return sortedArray;
}

let unsorted = [3,1,6,8,4,2,0,-1];
insertionSort(unsorted);