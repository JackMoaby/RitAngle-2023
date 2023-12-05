const fibonacci = n => Array.from({ length: n }).reduce((acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i), []);
const fibonacciToN = fibonacci(1000);

for (let n = 0; n < (fibonacciToN.length - 2) / 2; n++){
    const triangleSides = [
        fibonacciToN[n + 2],
        Math.sqrt(fibonacciToN[2 * n + 1]),
        fibonacciToN[n + 1] + Math.sqrt(fibonacciToN[2 * n + 2])
    ];


    let semiPermiter = 1/2 * (triangleSides[0] + triangleSides[1] + triangleSides[2])

    let area = Math.sqrt(
        semiPermiter * (semiPermiter - triangleSides[0]) * (semiPermiter - triangleSides[1]) * (semiPermiter - triangleSides[2])
    )

    const tolerance = 0.000001

    if (Math.abs(area - Math.round(area)) <= tolerance && area !== 0){
        console.log(n)
        console.log(area)
        break;
    }
}