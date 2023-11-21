import ArrayUtils from "../utils/JAVASCRIPT/arrayUtils.js";

console.time(`[Question 1]: [TIME]`);

const permArr = ArrayUtils.getPermutationArray([1, 2, 3, 4, 5, 6, 7, 8]);
const result = permArr.reduce((count, arr) => (arr[0] * arr[1] * arr[2] * arr[3] * arr[4] < arr[5] * arr[6] * arr[7]) ? count + 1 : count, 0) / permArr.length;

console.timeEnd(`[Question 1]: [TIME]`);
console.log(`[Question 1]: [OUTP]: ${result.toPrecision(3)}`);