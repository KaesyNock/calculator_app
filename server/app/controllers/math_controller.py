from flask import jsonify, request
from ..services.math_service import perform_calculation, get_user_expressions

def calculate_expression():
    data = request.get_json()
    expression = data.get('expression')
    user_id = data.get('id')
    print("\n==============================================\n",data,"\n==============================================\n")

    if user_id and expression:
        successful, message, data = perform_calculation(data)
        print("\n==============================================\n",message,"\n==============================================\n")
        if successful:
            return jsonify({"expression": expression, "result": data, "message": message}), 200
        return jsonify({"expression": expression, "result": data, "message": message}), 400
    return jsonify({"expression": expression, "result": None, "message": "User id and the Expression are required"}), 400

def get_calculations_for_user():
    data = request.get_json()
    user_id = data.get('user_id')
    if user_id:
        successful, message, calculations = get_user_expressions({"user_id": user_id})
        if successful:
            return jsonify({"status": successful, "expressions": [calc.to_dict() for calc in calculations], "message": message}), 200
        return jsonify({"status": successful, "expressions": None, "error": message}), 200

    return jsonify({"error": "user_id is required"}), 400


