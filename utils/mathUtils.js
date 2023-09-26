class mathUtils {
	  static newtonsMethodSolvingForRoots(inputFunctionString, initialisation, iterations) {
		    if (typeof inputFunctionString != "string") throw "Input must be a string";
		    if (inputFunctionString.includes("log") || inputFunctionString.includes("ln")) throw "No logarithms";
  
		    const input = inputFunctionString.replaceAll("^", "**");
		    const derivative = String(math.derivative(inputFunctionString, "x")).replaceAll("^", "**");

		    let current = initialisation;
		    for (let i = 0; i < iterations; i++) {
			      const f_of_x = eval(`let x = ${current}; ${input}`);
			      const f_prime_of_x = eval(`let x = ${current}; ${derivative}`);

			      if (f_prime_of_x === 0) return current;
			          current -= f_of_x / f_prime_of_x;
		    };
      
		    return current;
	  }
}

module.exports = mathUtils
