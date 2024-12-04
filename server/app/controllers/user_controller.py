from flask import jsonify, request
from ..services.user_service import register_user_service, login_user_service

# this will register route
def register_user():
    data = request.get_json()
    username = data.get('username')
    success, message = register_user_service(username)
    if success:
        return jsonify({"message": message}), 201
    else:
        return jsonify({"errors": message}), 400

# this will login route
def login_user():
    data = request.get_json()
    username = data.get('username')
    success, message = login_user_service(username)
    if success:
        return jsonify({"message": message}), 200
    else:
        return jsonify({"errors": message}), 400
