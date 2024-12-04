from flask import jsonify, request
from ..services.calculation_service import perform_calculation, get_user_calculations

def calculate_expression():
    data = request.get_json()
    expression = data.get('expression')
    result = perform_calculation(expression)
    return jsonify({"result": result}), 200

def get_calculations_for_user():
    user_id = request.args.get('user_id')
    if not user_id:
        return jsonify({"error": "user_id is required"}), 400
    calculations = get_user_calculations(user_id)
    return jsonify({"calculations": [calc.__dict__ for calc in calculations]}), 200

