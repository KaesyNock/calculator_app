from flask import Blueprint
from ..controllers.calculation_controller import calculate_expression, get_calculations_for_user

calculation_bp = Blueprint('calculation', __name__)
calculation_bp.route('/calculate', methods=['POST'])(calculate_expression)
calculation_bp.route('/calculate', methods=['GET'])(get_calculations_for_user)
