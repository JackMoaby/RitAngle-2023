const k = (a) => (12 * a - 23) ** 2;
const a = (k) => (23 - Math.sqrt(k)) / 12;
const b = (a) => 1 - (a/5);

function simulateFrame(pA, pB, type=5){
    if (!type % 2) return false;

    let frameWinners = {a: 0, b: 0};
    let probabilities = {a: pA, b: pB};
    let previousWinner, currentWinner, finalWinner;

    // simulate the first round
    currentWinner =  Math.floor(Math.random() * 2) === 0 ? "a" : "b";
    frameWinners[currentWinner] += 1;
    previousWinner = currentWinner;

    // simulate the rest of the rounds
    for (let i = 0; i < (type-1); i++){
        currentWinner = Math.random() < probabilities[previousWinner] ? previousWinner : 
            (previousWinner === "a" ? "b" : "a");
        frameWinners[currentWinner] += 1;
        previousWinner = currentWinner;
    }

    // Figure out who won
    finalWinner = frameWinners.a > frameWinners.b ? "a" : "b";
    return finalWinner;
}

function simulateGames(pA, pB, numberOfGames=1000, type=5){
    let gameWinners = {a: 0, b: 0};

    for (let i = 0; i < numberOfGames; i++){
        gameWinners[simulateFrame(pA, pB, type)] += 1;
    };

    let probabilities = {
        a: gameWinners.a / numberOfGames, 
        b: gameWinners.b / numberOfGames
    };

    return probabilities;
}

function targetFunction(value){
    let probabilityA = a(value);
    let probabilityB = b(probabilityA);
    let probabilities = simulateGames(probabilityA, probabilityB, 1_000_000);

    let probabilityDelta = probabilities.a - 0.5 * probabilityA;
    return probabilityDelta
}

function newtonsMethodFromAFunction(func, initial=0, iterations=10){
    const epsilon = 1;
    let current = initial;

    // Compensate for if random is used anywhere
    const randomMin = iterations - 5
    let outArray = []

    for (let i = 0; i < iterations; i++){
        let f_current = func(current);
        let p1 = {x: current - epsilon, y: func(current - epsilon)};
        let p2 = {x: current + epsilon, y: func(current + epsilon)};
        let f_prime_current = (p1.y - p2.y) / (p1.x - p2.x);
        current = current - f_current / f_prime_current;

        console.log(`[SOLVING] ${String(Math.round((i / iterations) * 100)).padEnd(2, " ")}% | ${String("█").repeat(Math.round((i / iterations) * 10)).padEnd(10, " ")}| Current Value: ${current}`)
        if (i > randomMin) outArray.push(current)
    }
    console.log(`[SOLVED] | ${Math.round(outArray.reduce((a, b) => a + b, 0) / outArray.length)}`)
    return outArray
}; 

console.time("Brute Force")
newtonsMethodFromAFunction(targetFunction, 200, 20)
console.timeEnd("Brute Force")