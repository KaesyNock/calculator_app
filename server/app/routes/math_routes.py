from flask import Blueprint
from app.controllers.math_controller import calculate_expression, get_calculations_for_user
from app.middlewares.auth_middleware import token_required

calculation_bp = Blueprint('calculation', __name__)

calculation_bp.route('/calculate', methods=['POST'])(token_required(calculate_expression))
calculation_bp.route('/calculate', methods=['GET'])(token_required(get_calculations_for_user))
