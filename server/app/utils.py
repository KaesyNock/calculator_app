import jwt
from datetime import datetime, timezone, timedelta

SECRET_KEY = "bla bla bla" 

# this will decode and verify token
def decode_and_verify_token(token):
    try:
        decoded_token = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        # check token expiration
        if decoded_token.get("exp") < datetime.now(tz=timezone.utc).timestamp():
            return False, "Token has expired"
        return True, decoded_token
    except jwt.ExpiredSignatureError:
        return False, "Token has expired"
    except jwt.InvalidTokenError:
        return False, "Invalid token"

# this will create a new token
def create_token(user_id, username):
    expiration_time = datetime.utcnow() + timedelta(hours=1)
    payload = {
        "id": user_id,
        "username": username,
        "exp": expiration_time
    }
    token = jwt.encode(payload, SECRET_KEY, algorithm="HS256")
    return token
