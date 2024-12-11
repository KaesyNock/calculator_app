import math
from ..models import Calculation

def perform_calculation(data):
    try:
        # this is just temporary until i figure out how to do it manually
        expression = data.get('expression')
        user_id = data.get('id')
        result = eval(expression)
        Calculation.save({"user_id": user_id, "expression": expression, "result": result})
        return True, "Calculation performed successfully", result
    except Exception as e:
        return False, "Error performing calculation", e

def get_user_expressions(data):
    try:
        result = Calculation.get_by_user_id(data)
        return True, "Expressions Fetched successfully", result
    except Exception as e:
        return False, "Error Fetching Expressions", e 
