from .config import MySQLConnection

class User:
    def __init__(self, data):
        self.id = data['id']
        self.username = data['username']
    
    # this will get a user by their id
    @classmethod
    def get_user(cls, data):
        query = "SELECT * FROM users WHERE id = %(id)s;"
        result = MySQLConnection("calculator_db").query_db(query, data)
        if result:
            return cls(result[0])
        return None

    # this will get a user by their username
    @classmethod
    def get_by_username(cls, data):
        query = "SELECT * FROM users WHERE username = %(username)s;"
        result = MySQLConnection("calculator_db").query_db(query, data)
        if result:
            return cls(result[0])
        return None

    # and this will save a new user into the database
    @staticmethod
    def save(data):
        query = """INSERT INTO users (username) 
                    VALUES (%(username)s)"""
        return MySQLConnection("calculator_db").query_db(query, data)

class Calculation:
    def __init__(self, data):
        self.id = data['id']
        self.operation = data['operation']
        self.result = data['result']
        self.user_id = data['user_id']

    # this will save a calculation to the database
    @staticmethod
    def save(data):
        query = """INSERT INTO operations (operation, result, user_id)
                    VALUES (%(operation)s, %(result)s, %(user_id)s)"""
        return MySQLConnection("calculator_db").query_db(query, data)

    # and this will get all calculations for a user
    @classmethod
    def get_by_user_id(cls, data):
        query = "SELECT * FROM operations WHERE user_id = %(user_id)s ORDER BY created_at;"
        results = MySQLConnection("calculator_db").query_db(query, data)
        calculations = []
        for calc in results:
            calculations.append(cls(calc))
        return calculations

