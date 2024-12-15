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
                   VALUES (%(username)s);"""
        return MySQLConnection("calculator_db").query_db(query, data)

class Calculation:
    def __init__(self, data):
        self.id = data['id']
        self.expression = data['expression']
        self.result = data['result']
        self.user_id = data['user_id']

    def to_dict(self):
        return {
            "id": self.id,
            "expression": self.expression,
            "result": self.result,
            "user_id": self.user_id
        }

    @staticmethod
    def save(data):
        query = """INSERT INTO expressions (expression, result, user_id)
                    VALUES (%(expression)s, %(result)s, %(user_id)s)"""
        return MySQLConnection("calculator_db").query_db(query, data)

    @classmethod
    def get_by_user_id(cls, data):
        query = "SELECT * FROM expressions WHERE user_id = %(user_id)s ORDER BY created_at;"
        results = MySQLConnection("calculator_db").query_db(query, data)
        expressions = [cls(result) for result in results]
        return expressions
