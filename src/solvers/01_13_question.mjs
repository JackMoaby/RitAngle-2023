class Question {
    solve() {
        const findNumberOfFactors = (number) => {
            let numberOfFactors = 0;
            const sqrt = Math.sqrt(number);
        
            for (let i = 1; i <= sqrt; i++) {
                if (number % i === 0) numberOfFactors += (i === sqrt) ? 1 : 2;
            }
        
            return numberOfFactors;
        };
        
        const numbersWith6Factors = [];
        for (let i = 1; i < 100; i++) {
            if (findNumberOfFactors(i) === 6) numbersWith6Factors.push(i);
        };
        
        const factorPossibilities = new Set();
        for (let i = 0; i < numbersWith6Factors.length; i++) {
            for (let j = 0; j < numbersWith6Factors.length; j++) {
                const numberOfFactors = findNumberOfFactors(numbersWith6Factors[i] * numbersWith6Factors[j]);
                factorPossibilities.add(numberOfFactors);
            }
        }

        return [...factorPossibilities].reduce((accumulator, value) => accumulator + value, 0);
    }
}

export default Question;
