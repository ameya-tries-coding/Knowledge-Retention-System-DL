from flask import Blueprint, request, jsonify
from services.prediction_service import predict_retention

prediction_bp = Blueprint("prediction", __name__)

@prediction_bp.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()

    if not data:
        return jsonify({"error": "No input data"}), 400

    try:
        result = predict_retention(data)
        return jsonify(result)

    except Exception as e:
        return jsonify({"error": str(e)}), 500