function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element > 0) {
            positive++;
        }
        if (element < 0) {
            negative++;
        }
        if (element === 0) {
            zero++;
        }
    }
    let posF = positive / arr.length;
    let negF = negative / arr.length;
    let zeroF = zero / arr.length;
    console.log(posF);
    console.log(negF);
    console.log(zeroF);
}
