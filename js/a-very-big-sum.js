function aVeryBigSum(ar) {
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
        const element = ar[i];
        sum = element + sum;
    }
    return sum;
}