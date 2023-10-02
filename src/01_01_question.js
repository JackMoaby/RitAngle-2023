import ArrayUtils from "../utils/JS/arrayUtils.js"

const array = [1, 2, 3, 4, 5, 6, 7, 8]
const permutationArray = ArrayUtils.getPermurationArray(array)

let truthyCounter = 0;
let totalCounter = 0;
for (let i = 0; i < permutationArray.length; i++){
    const arr = permutationArray[i];
    
    totalCounter += 1
    if (arr[0] * arr[1] * arr[2] * arr[3] * arr[4] < arr[5] * arr[6] * arr[7]){
        truthyCounter += 1;
    }
}

console.log(truthyCounter / totalCounter)
