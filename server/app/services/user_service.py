from app.models import User
from app.utils import create_token

def register_user_service(username):
    user_data = {'username': username}
    User.save(user_data)
    token = create_token(user_data['username'], user_data['username'])
    
    return True, "User registered successfully!", {"username": user_data['username'], "token": token}

def login_user_service(user_id):
    user = User.get_user({"id": user_id})
    if not user:
        return False, f"User with the ID {user_id} was not found. Please register first", user_id

    token = create_token(user.id, user.username)
    return True, "User logged in successfully!", {
        "id": user.id,
        "username": user.username,
        "token": token
    }
