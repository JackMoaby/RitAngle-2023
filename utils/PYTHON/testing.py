import sympy as sp
import json

def min_dist_from_point_to_eq(point, equation_string):
    """
        This is a function that cost me an evening
        it finds the closest point on an n - dimensional curve
        in relation to an initial point
    """
    
    # Determine the dimensionality of the point
    variables = list(point.keys())
    symbols = [sp.symbols(var) for var in variables]
    terms_dict = {symbol: 0 for symbol in symbols}
    
    # Create an expression for the distance between the point and the equation
    distance_expression = " + ".join([f"({var} - {point[var]}) ** 2" for var in variables])
    lagrange_expression = f"{distance_expression} + L * ({equation_string})"    
    expression = sp.sympify(lagrange_expression).expand()
    
    # Collect terms for each variable
    for term in expression.args:
        for variable in terms_dict.keys():
            if term.has(variable):
                terms_dict[variable] += term
                
    equations_dict = {}
    
    # Calculate the derivatives and set up equations
    for variable, terms in terms_dict.items():
        derivative = sp.diff(terms, variable)
        equations_dict[variable] = derivative
    
    # Include the equation from the input
    equations_dict[sp.symbols("L")] = f"{equation_string}"
        
    equations = tuple([sp.sympify(terms) for variable, terms in equations_dict.items()])
    term_vars = tuple([variable for variable, terms in equations_dict.items()])  
    
    # Solve the system of equations
    print("Solving With Sympy")
    solutions = sp.solve(equations, term_vars, dict=False, rational=False)
    print(solutions)
    
    if isinstance(solutions, dict):
        solutions = [tuple(list(solutions.values()))]
    
    # Remove the lambda value from the solutions
    solutions_without_lambda = [[*tuple[:-1],] for tuple in solutions]
    
    
    # Define a function to calculate Euclidean distance
    def euclidean_distance(target):
        return sp.sqrt(sum((a1 - a2)**2 for a1, a2 in zip(target, point.values())))
    
    # Calculate distances for all solutions
    distances = [euclidean_distance(point) if "I" not in str(point) else float('inf') for point in solutions_without_lambda]
    
    # Handle complex numbers by setting their distance to infinity
    real_distances = [point for point in distances]
    
    if len(real_distances) == 0:
        return {
            "equation": str(equation_string),
            "initial": str(tuple(point.values())),
            "closest_on_curve": None,
            "initial_closest_distance": None,
            "full_distances": distances
        }
    
    # Find the minimum distance
    best_dist = min(real_distances)
    
    return {
        "equation": str(equation_string),
        "initial": str(tuple(point.values())),
        "closest_on_curve": str(tuple(solutions_without_lambda[real_distances.index(best_dist)])),
        "initial_closest_distance": str(best_dist)
    }
    


if __name__ == "__main__":
                
    sample = min_dist_from_point_to_eq(
        {"x": 2, "y": 2, "z": 2},
        "x * (y ** 2) * z - 2",
    )
    
    formatted = json.dumps(sample, indent=4)
    print(formatted)