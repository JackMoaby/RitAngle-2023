console.time(`[Question 10]: [TIME]`);

const f = (a) => {
    return Math.ceil(
        Math.floor(
            Math.ceil(
                Math.floor(
                    a
                ) + a ** 2
            ) + a ** 3
        ) + a ** 4
    )
}

function main(){
    let values = {};
    for (let i = 0; i < 20; i += 0.0001){
        const out = f(i);
        if (out <= 11) continue;
        if (!values[out]){
            values[out] = 1;
            continue;
        };
        
        values[out] += 1;
    }
    
    for (let i = 12; i < 100; i++){
        if (!values[i]) return i;
    }
}

const result = main();

console.timeEnd(`[Question 10]: [TIME]`);
console.log(`[Question 10]: [OUTP]: ${result}`);
