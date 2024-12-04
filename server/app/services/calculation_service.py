import math
from ..models import Calculation

def perform_calculation(expression):
    try:
        # this is just temporary until i figure out how to do it manually
        result = eval(expression)
        return result
    except Exception as e:
        return f"Error performing calculation: {str(e)}"

def get_user_calculations(user_id):
    return Calculation.get_all_for_user(user_id)
