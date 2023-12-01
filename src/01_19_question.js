let u_1 = 12**3;
let u_2 = 45**6;
let phi = (1 + Math.sqrt(5)) / 2;

const getNextTerm = (u_n, u_n_1) => phi * u_n - u_n_1;
const terms = new Set();

let u_n_1 = u_1;
let u_n = u_2;

for (let i = 0; i < 1000000; i++){
    let temp = u_n;
    u_n = getNextTerm(u_n, u_n_1);
    u_n_1 = temp;
    
    terms.add(Math.abs(u_n.toPrecision(3)));
}

const output = new Array(...terms).forEach(element => { 
    console.log(
        Number(element.toLocaleString('fullwide', { useGrouping: false }))
    )
});
