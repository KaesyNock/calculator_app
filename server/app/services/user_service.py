from app.models import User

def register_user_service(username):
    user_data = {'username': username}
    
    # add user validation (validate_registration don't exist yet)
    """ errors = User.validate_registration(user_data)
    if errors:
        return False, errors """
    
    # this will save user to the database
    User.save(user_data)
    return True, "User registered successfully!"

def login_user_service(username):
    login_data = {'login_username': username}

    # add login validation (validate_login don't exist yet)
    """ errors = User.validate_login(login_data)
    if errors:
        return False, errors """

    return True, "Logged in successfully!"
