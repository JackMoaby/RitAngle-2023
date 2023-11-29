console.time(`[Question 18]: [TIME]`);

let limit = 30;
const tolerance = 0.0001;
let solution = [];
for (let a = 1; a <= limit; a++) {
    for (let b = 1; b <= limit; b++) {
        for (let c = 1; c <= limit; c++) {
            for (let d = 1; d <= limit; d++) {
                for (let e = 1; e <= limit; e++) {
                    if (!((1 / e > 1 / d) && (1 / d > 1 / c) && (1 / c > 1 / b) && (1 / b > 1 / a))) continue;
                    const delta = 1 / b - 1 / a;
                    const tolerance = 0.0001;

                    if (
                        Math.abs(1 / c - (1 / b + delta)) <= tolerance &&
                        Math.abs(1 / d - (1 / c + delta)) <= tolerance &&
                        Math.abs(1 / e - (1 / d + delta)) <= tolerance
                    ) {
                        solution = [a, b, c, d, e];
                        break;
                    }
                }
            }
        }
    }
}

const result = solution[0] + solution[1] + solution[2] + solution[3] + solution[4];
console.timeEnd(`[Question 18]: [TIME]`);
console.log(`[Question 18]: [OUTP]: ${result}`);
