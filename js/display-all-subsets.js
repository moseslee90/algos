let array = [1,2,3,4,5,6];
let indexStart = -1;
let objStart = [];

function findSubsets(add, index, obj) {
    let newObj = JSON.parse(JSON.stringify(obj))
    if (add === true) {
        newObj.push(array[index]);
    }

    if (index === array.length-1) {
        console.log(newObj);
        return;
    }

    index++;

    return findSubsets(true, index, newObj), findSubsets(false, index, newObj);
}

findSubsets(false, indexStart, objStart);