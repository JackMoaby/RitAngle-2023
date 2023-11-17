import { derivative } from "mathjs";

class MathUtils {
    static validateInput(inputFunctionString, inTermsOf) {
        if (typeof inputFunctionString !== 'string') {
            throw new Error('Input must be a string');
        }
        if (inputFunctionString.includes('log') || inputFunctionString.includes('ln')) {
            throw new Error('No logarithms (thrown from input)');
        }
        if (new RegExp(`\\d+${inTermsOf}`).test(inputFunctionString)) {
            throw new Error('You cannot do nx, use n * x instead (or without the space)');
        }
    }

    static computeDerivative(inputFunctionString, inTermsOf){
        let inputDerivative;

        try {
            inputDerivative = String(derivative(inputFunctionString, inTermsOf)).replaceAll('^', '**');
        } catch (err) {
            throw new Error(`Cannot compute the derivative because: ${err}`);
        }

        if (inputDerivative.includes('log') || inputDerivative.includes('ln')) {
            throw new Error('No logarithms (thrown from derivative)');
        }

        return inputDerivative;
    }

    static newtonsMethod(input, inputDerivative, inTermsOf, iterations, initialisation){
        let current = initialisation;
        for (let i = 0; i < iterations; i++) {
            const functionF = eval(`let ${inTermsOf} = ${current}; ${input}`);
            const functionFPrime = eval(`let ${inTermsOf} = ${current}; ${inputDerivative}`);

            // found the solution
            if (functionF === 0) return current;

            // stuck in a turning point (min or max)
            // or division by 0 kek
            if (functionFPrime === 0) return `Turning Point: ${current}`;

            current -= functionF / functionFPrime;
        }

        return current;
    }

    static bruteForceRootsFromInit(inputFunctionString, iterations=100, initialisation=0, inTermsOf='x') {
        this.validateInput(inputFunctionString, inTermsOf);

        const input = inputFunctionString.replaceAll('^', '**');
        const inputDerivative = this.computeDerivative(inputFunctionString, inTermsOf);

        // Newton's method
        return this.newtonsMethod(input, inputDerivative, inTermsOf, iterations, initialisation);
    }

    static bruteForceRoots(inputFunctionString, iterations=100, testValuesBetween={"low":100,"high":-100}, inTermsOf='x') {
        this.validateInput(inputFunctionString, inTermsOf);

        const input = inputFunctionString.replaceAll('^', '**');
        const inputDerivative = this.computeDerivative(inputFunctionString, inTermsOf);

        // Newton's method but multiple times
        const outputSet = new Set(); // remove duplicates
        for (let i = testValuesBetween["low"]; i < testValuesBetween["high"]; i++) {
            outputSet.add(this.newtonsMethod(input, inputDerivative, inTermsOf, iterations, i));
        }

        return Array.from(outputSet);
    }

    static generatePrimeArray(limit){
        let multiples =  new Set();
        let primes = new Set();
        for (let i = 2; i < (limit + 1); i++){
            if (!multiples.has(i)){
                primes.add(i);
                for (let j = i * i; j < (limit + 1); j+=i){
                    multiples.add(j)
                }
            }
        }
        return primes
    }

    static generatePrimeIterator(){
        let multiples = new Set();
        let primes = new Set();
        let currentValue = 2;
        
        const getLastOfASet = (set) => {
            let array = Array.from(set)
            return array[array.length - 1]
        }
        
        return {
            next: function(){
                while (true){
                    if (!multiples.has(currentValue)){
                        primes.add(currentValue);
                        for (let j = currentValue ** 2; j < (currentValue + 1000); j+=currentValue){
                            multiples.add(j)
                        };
                        currentValue += 1;
                        
                        return {
                            value: getLastOfASet(primes) 
                        }
                    } else {
                        currentValue += 1;
                    }
                }
            }
        }
    }
}

export default MathUtils
