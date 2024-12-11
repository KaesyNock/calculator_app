from flask import jsonify, request
from ..services.user_service import register_user_service, login_user_service

# this will register route
def register_user():
    data = request.get_json()
    username = data.get('username')
    if not username:
        return jsonify({"errors": "Username is required."}), 400

    success, message, response_data = register_user_service(username)
    if success:
        return jsonify({"message": message, "data": response_data}), 201
    else:
        return jsonify({"errors": message}), 400

# this will login route
def login_user():
    data = request.get_json()
    user_id = data.get('id')
    if not user_id:
        return jsonify({"errors": "User ID is required."}), 400

    success, message ,response_data = login_user_service(user_id)
    if success:
        return jsonify({"message": message, "data": response_data}), 200
    else:
        return jsonify({"error": message, "id": response_data}), 400
