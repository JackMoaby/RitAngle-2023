import { derivative } from "mathjs";

// removing all of the math.___ so it won't break upon eval-ing some trig
for (let name of Object.getOwnPropertyNames(Math))
    globalThis[name] = Math[name]

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

    // Finish implementing this method for cross function compatability
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
}

export default MathUtils