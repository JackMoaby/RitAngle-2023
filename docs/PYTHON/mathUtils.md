# mathUtils Documentation
These methods can be tempremental and require precision to use. All equations must be in of the form of 1 variable. e.g. y = x^2 + x + 23. AND the goal of the equation must be to solve for = 0. Rearrange the equation before using the below functions.

## Table of Contents
- [How to Initialize](#how-to-initialise)
- [`brute_force_roots_from_init()`](#brute_force_roots_from_initinput_function_string-iterations10-initialization0-in_terms_ofx)
- [`brute_force_roots()`](#brute_force_rootsinput_function_string-iterations10-test_values_betweenlow-100-high--100-in_terms_ofx)

---

## How to initialise
For use within the src filetree, use

```Python
import os
import sys

# No simple import as the filepaths are a bit cursed
module_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "utils", "PYTHON")
sys.path.append(module_path)

from mathUtils import MathUtils
```

## `brute_force_roots_from_init(input_function_string, iterations=10, initialization=0, in_terms_of='x')`

This function will use the initialisation value as a starting point for Newton's Method for solving for the roots.

> **Warning**
> If a log(), ln() is generated then the program will fail.
> If a trig function is used / generated then the program may have tempremental results (really large or missing values)

| Parameter | Description |
| --- | --- |
| `input_function_string` (string) | The mathematical function in string format. |
| `iterations` (number, optional) | The maximum number of iterations for Newton's method (default is 100). |
| `initialisation` (number, optional) | The initial guess for the root (default is 0). |
| `in_terms_of` (string, optional) | The variable in terms of which the function is defined (default is 'x'). |

### Usage Example:

> **Note**
> The use of 2 * x instead of 2x is intentional, the program will throw errors

```Python
input_function = "x ^ 2 + 2 * x - 10"
iterations = 100 # python is a bit slow
initial = 0
result = MathUtils.brute_force_roots_from_init(input_function, iterations, initial)
print(result) # 2.3166247903554
```

## `brute_force_roots(input_function_string, iterations=10, test_values_between={"low": 100, "high": -100}, in_terms_of='x')`

This function will use every integer within `test_values_between{"low": n, "high", m}` as a starting point for Newton's Method for solving for the roots.

> **Warning**
> If a log(), ln() is generated then the program will fail.
> If a trig function is used / generated then the program may have tempremental results (really large or missing values)

| Parameter | Description |
| --- | --- |
| `input_function_string` (string) | The mathematical function in string format. |
| `iterations` (number, optional) | The maximum number of iterations for Newton's method (default is 100). |
| `test_values_between` (object, optional) | An object specifying the range of initial values to test (default is `{"low": 100, "high": -100}`). |
| `in_terms_of` (string, optional) | The variable in terms of which the function is defined (default is 'x'). |

> **Note**
> The use of 2 * x instead of 2x is intentional, the program will throw errors

### Usage Example:
```Python
input_function = "x ^ 2 + 2 * x - 10";
iterations = 1000;
test_values_between = {"low":-5,"high":5};
result = MathUtils.brute_force_roots(input_function, iterations, test_values_between);
print(result); # [2.3166247903554, -4.3166247903554, 'Turning Point: -1']
```