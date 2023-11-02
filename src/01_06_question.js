const modEval = (equation, variable, value) => {
    equationArray = equation.split(" + ");
    
    output = 0;
    for (let equation of equationArray){
        equation = equation.replaceAll("|", "");
        signedValue = eval(`let ${variable} = ${value}; ${equation}`);
        output += signedValue < 0 ? signedValue * -1 : signedValue;
    }

    return output;    
}

const generateEquation = (i) => Array.from({ length: i }, (_, j) => `|x+${j + 1}|`).join(" + ");


function solveForTurningPoint(equation){
    let variable = "x";
    let arbitraralyLargeValue = 10;
    let guess = -1 * arbitraralyLargeValue;
    let targetYValue = modEval(equation, variable, arbitraralyLargeValue)

    let step = 1;
    let tolerace = 0.01

    let guessValue = modEval(equation, variable, guess)
    let signedDeltaValue = guessValue - targetYValue
    let deltaValue = signedDeltaValue < 0 ? -1 * signedDeltaValue : signedDeltaValue
    
    while (deltaValue > tolerace){
        if (signedDeltaValue < 0){
            guess -= step;
            guessValue = modEval(equation, variable, guess)
            signedDeltaValue = guessValue - targetYValue
            deltaValue = signedDeltaValue < 0 ? -1 * signedDeltaValue : signedDeltaValue
        } else {
            guess += step;
            step = step / 10;
        }
    }

    turningPointX = arbitraralyLargeValue - (arbitraralyLargeValue - guess) / 2
    return {x: turningPointX, y: modEval(equation, variable, turningPointX)}
}


function testEquation(equation){
    console.log(solveForTurningPoint(equation));
    turningPoint = solveForTurningPoint(equation);
    product = Math.abs(turningPoint.x * turningPoint.y);
    if (product > 100){return true};
    return false;
}

console.time("Brute Force")

let i = 0;
while (!testEquation(generateEquation(i))){i++}
const solution = solveForTurningPoint(generateEquation(i));

console.timeEnd("Brute Force")
console.log(`Equation: ${generateEquation(i)}`)
console.log(`Solution: ${Math.abs(solution.x * solution.y)}`);