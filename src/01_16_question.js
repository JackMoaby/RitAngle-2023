console.time(`[Question 16]: [TIME]`);

const endingNumberOfZeros = (number) => {
    const array = number.split("");
    return array.reduce((accumulator, currentValue) => {
        if (currentValue == 0) accumulator += 1;
        else accumulator = 0;
        
        return accumulator;
    }, 0)
}

let result = 0;
for (let currentNumber = 0; currentNumber <= 13; currentNumber++){
    for (let base = 2; base <= 13; base++){
        const currentNumberInBase = currentNumber.toString(base);
        const numberOfZeros = endingNumberOfZeros(String(currentNumberInBase));
        
        if (numberOfZeros <= 0) continue;
        else if (currentNumber + base + numberOfZeros === 13){
            result += currentNumber * base * numberOfZeros;
        }
    }   
};

console.timeEnd(`[Question 16]: [TIME]`);
console.log(`[Question 16]: [OUTP]: ${result}`);
