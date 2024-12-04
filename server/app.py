from flask import Flask
from app.routes.user_routes import user_bp
from app.routes.calculation_routes import calculation_bp

app = Flask(__name__)

app.register_blueprint(user_bp, url_prefix='/api/user')
app.register_blueprint(calculation_bp, url_prefix='/api/math')

if __name__ == '__main__':
    app.run(debug=True)
