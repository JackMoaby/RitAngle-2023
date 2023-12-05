const convertBase = (number, base) => {
    const baseArray = [];

    while (number > 0){
        const remainder = number % base;
        baseArray.unshift(remainder);
        number = Math.floor(number / base)
    }

    return baseArray
}

let max = 0;
for (let n = 0; n <= 100; n++){
    for (let m = 0; m <= 100; m++){
        if (parseInt(n, m) == parseInt(m, n)){
            console.log(n, m, parseInt(n, m), parseInt(m, n))
            let val =  n + m;
            if (max < val) max = val;
        }
        
    }
}

console.log(max)