function largestRange(array) {
    //sort the array
    let sorted = [];
    sorted.push(array[0]);
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        //iterate here and sort the array
        for (let j = sorted.length - 1; j > -1; j--) {
            const sortedElement = sorted[j];
            if (element >= sortedElement) {
                sorted.splice(j + 1, 0, element);
                break;
            } else if (j === 0) {
                sorted.splice(j, 0, element);
                break;
            }
        }
    }
    console.log(sorted);

    //array should be sorted
    //now we iterate through sorted and find longest
    let result = [0, 0];
    let longestLength = 0;
    let startElement = 0;
    let endElement = 0;
    let length = 0;
    for (let i = 0; i < sorted.length; i++) {
        const element = sorted[i];
        //depth search
        if (i < sorted.length - 1) {
            console.log(sorted[i + 1] - sorted[i]);

            if (sorted[i + 1] - sorted[i] === 1) {
                //continuos thing found
                //add to chain
                if (length === 0) {
                    //tag the start to this element
                    startElement = element;
                    length = 1;
                }
                endElement = sorted[i + 1];
                length++;
            } else if (sorted[i + 1] - sorted[i] === 0) {
                //continuos but same number
                if (length === 0) {
                    //tag the start to this element
                    startElement = element;
                    length = 1;
                }
                endElement = sorted[i + 1];
            } else {
                length = 0;
            }
        }
        if (length > longestLength) {
            longestLength = length;
            result = [startElement, endElement];
        }
    }
    console.log(result);
}
let array = [3, 4, 2, 7, 11, 13, 12, 5, 6];
largestRange(array);
