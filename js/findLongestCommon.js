function findLongest(stringA, stringB) {
    let arrayA = [];
    arrayA = stringA.split("");
    // console.log(arrayA);
    let combsA = [];
    for (let k = 0; k < arrayA.length; k++) {
        const elementk = arrayA[k];
        // console.log(elementk);

        for (let j = 0 + k; j < arrayA.length; j++) {
            let elementArray = [];
            let stringResult = elementk;
            elementArray.push(elementk);
            for (let i = 1 + j; i < arrayA.length; i++) {
                const elementI = arrayA[i];
                stringResult = stringResult + elementI;
                console.log(stringResult);
                combsA.push(stringResult);
                // console.log(unwashedArray);

                // const washedArray = [...unwashedArray];
                // combs.push(washedArray);
            }
        }
    }

    let arrayB = [];
    arrayB = stringB.split("");
    // console.log(arrayB);
    let combsB = [];
    for (let k = 0; k < arrayB.length; k++) {
        const elementk = arrayB[k];
        // console.log(elementk);

        for (let j = 0 + k; j < arrayB.length; j++) {
            let elementArray = [];
            let stringResult = elementk;
            elementArray.push(elementk);
            for (let i = 1 + j; i < arrayB.length; i++) {
                const elementI = arrayB[i];
                stringResult = stringResult + elementI;
                console.log(stringResult);
                combsB.push(stringResult);
                // console.log(unwashedArray);

                // const washedArray = [...unwashedArray];
                // combs.push(washedArray);
            }
        }
    }
    let shorterCombs;
    let longerCombs;
    if (stringA.length < stringB.length) {
        //use stringA
        shorterCombs = combsA;
        longerCombs = combsB;
    } else {
        shorterCombs = combsB;
        longerCombs = combsA;
    }
    let longestMatchLength = 0;
    let currentLongestMatch = "";
    for (let i = 0; i < shorterCombs.length; i++) {
        const elementShorter = shorterCombs[i];
        let matchNotFound = true;
        let count = 0;
        while (matchNotFound && count < longerCombs.length) {
            let elementLonger = longerCombs[count];
            if (elementShorter === elementLonger) {
                matchNotFound = false;
                if (elementShorter.length > longestMatchLength) {
                    longestMatchLength = elementShorter.length;
                    currentLongestMatch = elementShorter;
                }
            }
            count++;
        }
    }
    console.log("longest match is " + currentLongestMatch);
}
findLongest("ABDCAA", "ADAAD");
