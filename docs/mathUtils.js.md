# mathUtils Documentation
These methods can be tempremental and require precision to use. All equations must be in of the form of 1 variable. e.g. y = x^2 + x + 23. AND the goal of the equation must be to solve for = 0. Rearrange the equation before using the below functions.

## Table of Contents
- [How to](#how-to-initialise)
- [`bruteForceRootsFromInit()`](#bruteforcerootsfrominitinputfunctionstring-iterations100-initialisation0-intermsofx)
- [`bruteForceRoots()`](#bruteforcerootsinputfunctionstring-iterations100-testvaluesbetweenlow100high-100-intermsofx)

---

## How to initialise
For use within the src filetree use

```Javascript
import MathUtils from "../utils/JS/mathUtils.js"
```

## `bruteForceRootsFromInit(inputFunctionString, iterations=100, initialisation=0, inTermsOf='x')`

This function will use the initialisation value as a starting point for Newton's Method for solving for the roots.

> **Warning**
> If a log(), ln() is generated then the program will fail.
> If a trig function is used / generated then the program may have tempremental results (really large or missing values)

### Parameters:

| Parameter | Description |
| --- | --- |
| `inputFunctionString` (string) | The mathematical function in string format. |
| `iterations` (number, optional) | The maximum number of iterations for Newton's method (default is 100). |
| `initialisation` (number, optional) | The initial guess for the root (default is 0). |
| `inTermsOf` (string, optional) | The variable in terms of which the function is defined (default is 'x'). |

### Usage Example:

> **Note**
> The use of 2 * x instead of 2x is intentional, the program will throw errors

```Javascript
const inputFunction = "x ^ 2 + 2 * x - 10"; // Replace with your own function
const iterations = 1000; // The more iterations, the more accurate (although 100 -> 1000 tends to be enough)
const initial = 0; // Replace with your own initial value
const roots = MathUtils.bruteForceRootsFromInit(inputFunction, iterations, initial);
console.log(roots); // 2.3166247903554
```

## `bruteForceRoots(inputFunctionString, iterations=100, testValuesBetween={"low":100,"high":-100}, inTermsOf='x')`

This function will use every integer within `testValuesBetween{"low": n, "high", m}` as a starting point for Newton's Method for solving for the roots.

> **Warning**
> If a log(), ln() is generated then the program will fail.
> If a trig function is used / generated then the program may have tempremental results (really large or missing values)

| Parameter | Description |
| --- | --- |
| `inputFunctionString` (string) | The mathematical function in string format. |
| `iterations` (number, optional) | The maximum number of iterations for Newton's method (default is 100). |
| `testValuesBetween` (object, optional) | An object specifying the range of initial values to test (default is `{"low": 100, "high": -100}`). |
| `inTermsOf` (string, optional) | The variable in terms of which the function is defined (default is 'x'). |

> **Note**
> The use of 2 * x instead of 2x is intentional, the program will throw errors

### Usage Example:
```Javascript
const inputFunction = "x ^ 2 + 2 * x - 10"; // Replace with your own function
const iterations = 1000; // The more iterations, the more accurate (although 100 -> 1000 tends to be enough)
const testValuesRange = {"low":-5,"high":5}; // Replace with your own range
const roots = MathUtils.bruteForceRoots(inputFunction, iterations, testValuesRange);
console.log(roots); // [ -4.3166247903554, 'Turning Point: -1', 2.3166247903554 ]
```
