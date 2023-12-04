import ArrayUtils from "../utils/JAVASCRIPT/arrayUtils.js";

console.time(`[Question 20]: [TIME]`)

const password = [1, 1, 2, 2, 3, 3]
const permutationArray = ArrayUtils.getPermutationArray(password)

const twoConsecutiveDigits = (array) => {
    let lastDigit = 0;
    
    for (const number of array){
        if (lastDigit == number) return 0;
        lastDigit = number;
    }
    
    return 1;
}

// Sets don't work for arrays in javascript
let correctObject = {};
for (const permutation of permutationArray){
    if(twoConsecutiveDigits(permutation)){
        correctObject[String(permutation)] = 1;
    };
}

const result = (1 / Object.keys(correctObject).length)
console.timeEnd(`[Question 20]: [TIME]`)
console.log(`[Question 20]: [OUTP]: ${result.toPrecision(3)}`);
