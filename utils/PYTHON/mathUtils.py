import re
import numpy
from sympy import symbols, diff

class MathUtils:
    @staticmethod
    def validate_input(input_function_string, in_terms_of):
        if not isinstance(input_function_string, str):
            raise ValueError('Input must be a string')
        if 'log' in input_function_string or 'ln' in input_function_string:
            raise ValueError('No logarithms (thrown from input)')
        if re.search(r'\d+' + re.escape(in_terms_of), input_function_string):
            raise ValueError('You cannot do nx, use n * x instead (or without the space)')

    @staticmethod
    def compute_derivative(input_function_string, in_terms_of):
        x = symbols(in_terms_of)
        try:
            derivative_expr = diff(input_function_string, x)
        except Exception as err:
            raise ValueError(f'Cannot compute the derivative because: {err}')

        if 'log' in str(derivative_expr) or 'ln' in str(derivative_expr):
            raise ValueError('No logarithms (thrown from derivative)')

        return derivative_expr

    @staticmethod
    def newtons_method(input_function, input_derivative, in_terms_of, iterations, initialization):
        current_value = initialization
        
        for i in range(iterations):
            exec(f"{in_terms_of} = current_value")
            function_f = eval(str(input_function))
            function_f_prime = eval(str(input_derivative))
                        
            # found the solution
            if function_f == 0:
                return current_value

            # stuck in a turning point (min or max)
            # or division by 0
            if function_f_prime == 0:
                return f'Turning Point: {current_value}'

            current_value -= function_f / function_f_prime

        return current_value

    @staticmethod
    def brute_force_roots_from_init(input_function_string, iterations=10, initialization=0, in_terms_of='x'):
        MathUtils.validate_input(input_function_string, in_terms_of)

        input_expr = input_function_string.replace('^', '**')
        input_derivative = MathUtils.compute_derivative(input_expr, in_terms_of)

        # Newton's method
        return MathUtils.newtons_method(input_expr, input_derivative, in_terms_of, iterations, initialization)

    @staticmethod
    def brute_force_roots(input_function_string, iterations=10, test_values_between={"low": 100, "high": -100}, in_terms_of='x'):
        MathUtils.validate_input(input_function_string, in_terms_of)

        input_expr = input_function_string.replace('^', '**')
        input_derivative = MathUtils.compute_derivative(input_expr, in_terms_of)

        # Newton's method but multiple times
        output_set = set()  # remove duplicates
        for i in range(test_values_between["low"], test_values_between["high"]):
            output_set.add(MathUtils.newtons_method(input_expr, input_derivative, in_terms_of, iterations, i))

        return list(output_set)