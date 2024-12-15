from functools import wraps
from flask import request, jsonify
from ..utils import decode_and_verify_token

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        auth_header = request.headers.get('Authorization')
        if not auth_header:
            return jsonify({"error": "Token is missing"}), 401

        token = auth_header.split(" ")[1] if " " in auth_header else auth_header
        success, response = decode_and_verify_token(token)

        if not success:
            return jsonify({"error": response}), 401
        request.user = response
        return f(*args, **kwargs)
    return decorated
