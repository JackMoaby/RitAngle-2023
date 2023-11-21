// Solved by looking at the intersection
// point of the curves on desmos

// 2 = ac(c^{2} - a^{2})
// a^{3} * c^{3} = 2(c^{2} - a^{2})
// ab^{2}c = 2

console.time(`[Question 2]: [TIME]`);

const result = 1.5127 + 0.9349 + 2 ** ( 1 / 4 );

console.timeEnd(`[Question 2]: [TIME]`);
console.log(`[Question 2]: [OUTP]: ${result.toPrecision(3)}`);
