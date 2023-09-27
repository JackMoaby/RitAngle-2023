# Ritangle Question 1

import os
import sys

module_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "utils", "PYTHON")
sys.path.append(module_path)


from mathUtils import MathUtils


input_function = "x ^ 2 + 2 * x - 10";
iterations = 1000;
test_values_between = {"low":-5,"high":5};
result = MathUtils.brute_force_roots(input_function, iterations, test_values_between);
print(result); # [ -4.3166247903554, 'Turning Point: -1', 2.3166247903554 ]