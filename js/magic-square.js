function magicSquare(arr) {
    let sum = 0;
    let numElements = arr.length * arr.length;
    for (let i = 1; i < numElements + 1; i++) {
        sum = sum + i;
    }
    let rowSum = (sum / numElements) * 3;
    // console.log(rowSum);

    let r1 = arr[0][0] + arr[0][1] + arr[0][2];
    let r2 = arr[1][0] + arr[1][1] + arr[1][2];
    let r3 = arr[2][0] + arr[2][1] + arr[2][2];
    let c1 = arr[0][0] + arr[1][0] + arr[2][0];
    let c2 = arr[0][1] + arr[1][1] + arr[2][1];
    let c3 = arr[0][2] + arr[1][2] + arr[2][2];
    let d1 = arr[0][0] + arr[1][1] + arr[2][2];
    let d2 = arr[0][2] + arr[1][1] + arr[2][0];

    function updateSums() {
        r1 = arr[0][0] + arr[0][1] + arr[0][2];
        r2 = arr[1][0] + arr[1][1] + arr[1][2];
        r3 = arr[2][0] + arr[2][1] + arr[2][2];
        c1 = arr[0][0] + arr[1][0] + arr[2][0];
        c2 = arr[0][1] + arr[1][1] + arr[2][1];
        c3 = arr[0][2] + arr[1][2] + arr[2][2];
        d1 = arr[0][0] + arr[1][1] + arr[2][2];
        d2 = arr[0][2] + arr[1][1] + arr[2][0];
    }

    
    while (
        r1 !== 15 &&
        r2 !== 15 &&
        r3 !== 15 &&
        c1 !== 15 &&
        c2 !== 15 &&
        c3 !== 15 &&
        d1 !== 15 &&
        d2 !== 15
    ) {

        while (r2 < 15 && c2 < 15 && d1 < 15 && d2 < 15) {
            arr[1][1]++;
            moves++;
            updateSums();
        }
        while (r2 > 15 && c2 > 15 && d1 > 15 && d2 > 15) {
            arr[1][1]--;
            moves++;
            updateSums();
        }

        while (r1 < 15 && c1 < 15 && d1 < 15) {
            arr[0][0]++;
            moves++;
            updateSums();
        }
        while (r1 > 15 && c1 > 15 && d1 > 15) {
            arr[0][0]--;
            moves++;
            updateSums();
        }
        while (r1 < 15 && c2 < 15) {
            arr[0][1]++;
            moves++;
            updateSums();
        }
        while (r1 > 15 && c2 > 15) {
            arr[0][1]--;
            moves++;
            updateSums();
        }
        while (r1 < 15 && c3 < 15) {
            arr[0][2]++;
            moves++;
            updateSums();
        }
        while (r1 > 15 && c3 > 15) {
            arr[0][2]--;
            moves++;
            updateSums();
        }

        while (r2 < 15 && c1 < 15) {
            arr[1][0]++;
            moves++;
            updateSums();
        }
        while (r1 > 15 && c3 > 15) {
            arr[1][0]--;
            moves++;
            updateSums();
        }

        while (r2 < 15 && c3 < 15) {
            arr[1][2]++;
            moves++;
            updateSums();
        }
        while (r2 > 15 && c3 > 15) {
            arr[1][2]--;
            moves++;
            updateSums();
        }

        while (r3 < 15 && c1 < 15) {
            arr[2][0]++;
            moves++;
            updateSums();
        }
        while (r3 > 15 && c1 > 15) {
            arr[2][0]--;
            moves++;
            updateSums();
        }
        while (r3 < 15 && c2 < 15) {
            arr[2][1]++;
            moves++;
            updateSums();
        }
        while (r3 > 15 && c2 > 15) {
            arr[2][1]--;
            moves++;
            updateSums();
        }
        while (r3 < 15 && c3 < 15) {
            arr[2][2]++;
            moves++;
            updateSums();
        }
        while (r3 > 15 && c3 > 15) {
            arr[2][2]--;
            moves++;
            updateSums();
        }
        updateSums();
    }



    console.log(moves);
    console.log(arr);
    
}
let array = [[1, 1, 1], [1, 2, 1], [3, 1, 4]];
magicSquare(array);
