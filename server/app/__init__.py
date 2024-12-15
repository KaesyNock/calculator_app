from flask import Flask
from app.routes.user_routes import user_bp
from app.routes.math_routes import calculation_bp

def create_app(testing=False):
    app = Flask(__name__)
    app.secret_key = "blaBlAlL/a1234 aA./HGH"
    app.register_blueprint(user_bp, url_prefix='/api/user')
    app.register_blueprint(calculation_bp, url_prefix='/api/math')

    if testing:
        app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
        app.config['TESTING'] = True
        app.config['SECRET_KEY'] = 'this_is_test_secret_key'
    else:
        app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:root@localhost/calculator_db'

    return app

