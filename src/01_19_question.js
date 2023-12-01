// This is a question where we are not ment to brute force due to n being in the x10 ^ 16 range
// However, by a small test of using u_1 = 1 and u_2 = 2, I found that the system converged at
// around a small numbe rof values before oscillating between them

let u_1 = 12**3;
let u_2 = 45**6;
let phi = (1 + Math.sqrt(5)) / 2;

const getNextTerm = (u_n, u_n_1) => phi * u_n - u_n_1;
const terms = new Set();
terms.add(u_1.toPrecision(3));
terms.add(u_2.toPrecision(3));

let u_n_1 = u_1;
let u_n = u_2;

for (let i = 0; i < 1000000; i++){
    let temp = u_n;
    u_n = getNextTerm(u_n, u_n_1);
    u_n_1 = temp;
    
    terms.add(u_n.toPrecision(3));
}

console.log(terms)
const output = new Array(...terms).forEach(element => { 
    console.log(
        Number(element.toLocaleString('fullwide', { useGrouping: false }))
    )
});
