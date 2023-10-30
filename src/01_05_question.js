const r = (a1) => Math.sqrt((1000 / a1) + 1)

function runBruteForce(lowerbound, upperbound, depth){
    let a2, a3, a4, a5
    let deviation_array = []

    for (let a1 = lowerbound; a1 <= upperbound; a1 += (upperbound - lowerbound) / 100){
        a2 = a1 * r(a1)
        a3 = a1 * r(a1) ** 2
        a4 = a1 * r(a1) ** 3
        a5 = a1 * r(a1) ** 4

        area = a1 + a2 + a3 + a4 + a5
        width = Math.sqrt(a3) + (a2 / (Math.sqrt(a3) + Math.sqrt(a1)))
        height = (a5 / (Math.sqrt(a1) + width - Math.sqrt(a3))) + (Math.sqrt(a3) + Math.sqrt(a1));
        deviation = area - (width * height)
        deviation_array.push(deviation)
    }

    deviation_array.push(0)
    deviation_array.sort((a, b) => {return a-b})

    let new_lowerbound = (deviation_array.indexOf(0) - 1) * ((upperbound - lowerbound) / 100) + lowerbound
    let new_upperbound = (deviation_array.indexOf(0) + 1) * ((upperbound - lowerbound) / 100) + lowerbound

    depth -= 1
    if (depth == 0){return [new_lowerbound, new_upperbound]};
    return runBruteForce(new_lowerbound, new_upperbound, depth)
}

console.time("Brute Force")
a1_deviation = runBruteForce(0, 1000, 9)
a1 = (a1_deviation[0] + a1_deviation[1]) / 2
console.timeEnd("Brute Force")
console.log(`Solution: ${Math.round(a1 + a1 * r(a1) + a1 * r(a1) ** 2 + a1 * r(a1) ** 3 + a1 * r(a1) ** 4)}`)