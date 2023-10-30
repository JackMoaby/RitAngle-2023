import sympy as sp

def find_min_dist_to_curve(point, equation_string, precision=10):
    # Determine the dimensionality of the equation and point
    variables = list(point.keys())
    symbols = [*[sp.symbols(var) for var in variables], sp.symbols("L")]
    terms_dict = {symbol:"" for symbol in symbols }
    
    # Formulate lagrangian equations
    distance_expression = " + ".join([f"({var} - {point[var]}) ** 2" for var in variables])
    lagrange_expression = f"{distance_expression} + L * ({equation_string})"    
    expression = sp.sympify(lagrange_expression).expand()
    for term in expression.args:
        for variable in terms_dict.keys():
            if term.has(variable):
                if len(terms_dict[variable]) == 0:
                    terms_dict[variable] += str(term)
                else:
                    terms_dict[variable] += "+" + str(term)
    
    # Formulate differential equations
    equations = []
    term_vars = []
    for term, expression in terms_dict.items():
        expression = sp.sympify(expression)
        derivative = sp.diff(expression, term)
        equations.append(derivative)
        term_vars.append(term)    

    # abuse sympy to solve the differential equations 
    try:
        solution = sp.nsolve(equations, term_vars, [*point.values(), 0], prec=precision, dict=True)
        return tuple(list(solution[0].values())[:-1])
    except Exception as Err:
        # fail quietly for utility in other functions
        # print(f"fq {Err}")
        return tuple(point.values())
    
        
# def test_point_generation(step, range_limit):
#     for x in range(-range_limit, range_limit + 1):
#         for y in range(-range_limit, range_limit + 1):
#             for z in range(-range_limit, range_limit + 1):
#                 a = x * step
#                 b = y * step
#                 c = z * step
#                 print(f"({a:.1f}, {b:.1f}, {c:.1f})")
#                 print(f"{find_min_dist_to_curve({'x': a, 'y': b, 'z': c},'5 - x ** 2 - 2 * y ** 2 + z ** 2', 10)}")
#                 print("(0, 0, 0)")
#                 print("(0, 0, 0)")
#                 print("(0, 0, 0)")

# if __name__ == "__main__":
#     step_size = 0.5
#     range_limit = 1
#     test_point_generation(step_size, range_limit)

# def test_point_generation(step, range_limit):
#     for x in range(-range_limit, range_limit + 1):
#         for y in range(-range_limit, range_limit + 1):
#                 a = x * step
#                 b = y * step
#                 print(f"({a:.1f}, {b:.1f})")
#                 print(f"{find_min_dist_to_curve({'x': a, 'y': b},'tan(x*y)-1', 10)}")

# if __name__ == "__main__":
#     step_size = 0.5
#     range_limit = 8
#     test_point_generation(step_size, range_limit)