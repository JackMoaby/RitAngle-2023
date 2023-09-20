const ArrayUtils = require("../utils/arrayUtils")
const { GPU } = require('gpu.js');
const gpu = new GPU({});

let outArray = [];

const iterations = 1_000;
const globalIterations = 1000;
const gpuThreads = 100_000;

const bag = [3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 0];

const runSimulation = gpu.createKernel(function(iterations, bag) {
    let output = 0;
    for (let i = 0; i < iterations; i++){
        let array = [0, 0, 0];
        let arrayCount = 0;
        while(arrayCount < 3){
            let targetElement = Math.floor(Math.random() * 27);
            if (array[0] == targetElement){}
            else if (array[1] == targetElement){}
            else if (array[2] == targetElement){}
            else{array[arrayCount] = targetElement; arrayCount += 1};
        }

        if ((bag[array[0]] + bag[array[1]] + bag[array[2]]) === 4) output += 1
    }

    return output;    
}).setOutput([gpuThreads])


const sumArray = (arr) => {return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)};

console.time("GPU go BRRR time")
for (let i = 0; i < globalIterations; i++){
    const output = sumArray(runSimulation(iterations, bag));
    outArray.push(output)
}
console.timeEnd("GPU go BRRR time")

console.log(`Total iterations: ${(globalIterations * gpuThreads * iterations).toLocaleString("en-US")}`)
console.log(`Total successes: ${sumArray(outArray).toLocaleString("en-US")}`)
console.log(`Final Percentage: ${sumArray(outArray) / (globalIterations * gpuThreads * iterations)}%`)
