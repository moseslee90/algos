function riverSizes(matrix) {
    //use for loops to iterate through river
    //matrix[x][y] x is x-axis, y is y-axis
    //0 is land, 1 is water, 3 is water found
    let sizes = [];
    function checkAdjacent(size, x, y) {
        //recursive function that will constantly check
        //adjacent squares for water bodies
        //only starts running when water body is found
        let newX;
        let newY;
        let matched = false;
        if (!(matrix[x + 1][y] === undefined)) {
            if (matrix[x + 1][y] === 1) {
                //water on right adjacent
                matched = true;
                size++;
                newX = x + 1;
                newY = y;
                matrix[newX].splice(newY, 1, 3);
                size = checkAdjacent(size, newX, newY);
            }
        }
        if (!(matrix[x - 1][y] === undefined)) {
            if (matrix[x - 1][y] === 1) {
                //water on right adjacent
                matched = true;
                size++;
                newX = x - 1;
                newY = y;
                matrix[newX].splice(newY, 1, 3);
                size = checkAdjacent(size, newX, newY);
            }
        }
        if (!(matrix[x][y + 1] === undefined)) {
            if (matrix[x][y + 1] === 1) {
                //water on right adjacent
                matched = true;
                size++;
                newX = x;
                newY = y + 1;
                matrix[newX].splice(newY, 1, 3);
                size = checkAdjacent(size, newX, newY);
            }
        }
        if (!(matrix[x][y - 1] === undefined)) {
            if (matrix[x][y - 1] === 1) {
                //water on right adjacent
                matched = true;
                size++;
                newX = x;
                newY = y - 1;
                matrix[newX].splice(newY, 1, 3);
                size = checkAdjacent(size, newX, newY);
            }
        }
        if (matched === false) {
            return size;
        }
    }

    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++) {
            //find water body
            //declare size = 0 before moving on to next
            if (matrix[i][j] === 1) {
                //water body found
                matrix[i].splice(j, 1, 3);
                let size = checkAdjacent(1, i, j);
                sizes.push(size);
            }
        }
    }
    return sizes;
}

function riverSizes2(matrix) {
    //use for loops to iterate through river
    //matrix[x][y] x is x-axis, y is y-axis
    //0 is land, 1 is water, 3 is water found
    let sizes = [];
    function checkAdjacent(size, x, y) {
        //recursive function that will constantly check
        //adjacent squares for water bodies
        //only starts running when water body is found
        let newX;
        let newY;
        let matched = false;
        if (x + 1 < matrix.length) {
            if (matrix[x + 1][y] === 1) {
                //water on right adjacent
                matched = true;
                size++;
                newX = x + 1;
                newY = y;
                matrix[newX].splice(newY, 1, 3);
                size = checkAdjacent(size, newX, newY);
            }
        }
        if (x - 1 > -1) {
            if (matrix[x - 1][y] === 1) {
                //water on right adjacent
                matched = true;
                size++;
                newX = x - 1;
                newY = y;
                matrix[newX].splice(newY, 1, 3);
                size = checkAdjacent(size, newX, newY);
            }
        }
        if (y + 1 < matrix[x].length) {
            if (matrix[x][y + 1] === 1) {
                //water on right adjacent
                matched = true;
                size++;
                newX = x;
                newY = y + 1;
                matrix[newX].splice(newY, 1, 3);
                size = checkAdjacent(size, newX, newY);
            }
        }
        if (y - 1 > -1) {
            if (matrix[x][y - 1] === 1) {
                //water on right adjacent
                matched = true;
                size++;
                newX = x;
                newY = y - 1;
                matrix[newX].splice(newY, 1, 3);
                size = checkAdjacent(size, newX, newY);
            }
        }

        return size;
    }
    const height = matrix[0].length;
    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < height; j++) {
            //find water body
            //declare size = 0 before moving on to next
            if (matrix[i][j] === 1) {
                //water body found
                matrix[i].splice(j, 1, 3);
                let size = checkAdjacent(1, i, j);
                sizes.push(size);
            }
        }
    }

    //we need to wash the array
    for (i = 0; i < sizes.length; i++) {
        if (sizes[i] === undefined) {
            sizes.slice(i, 1);
        }
    }
    console.log(sizes);

    return sizes;
}
let array = [[1, 1, 1], [1, 0, 0], [1, 1, 1]];
riverSizes2(array);
