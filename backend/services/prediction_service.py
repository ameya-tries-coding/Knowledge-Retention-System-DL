from model.predict import model_predict
from utils.preprocess import preprocess_input
import numpy as np

def predict_retention(data):
    # Preprocess input
    processed = preprocess_input(data)

    # Model prediction
    retention_score = model_predict(processed)

    # Risk classification
    if retention_score > 0.7:
        risk = "Low"
    elif retention_score > 0.4:
        risk = "Medium"
    else:
        risk = "High"

    # Simple revision logic
    if risk == "Low":
        next_review = "5 days"
    elif risk == "Medium":
        next_review = "2 days"
    else:
        next_review = "1 day"

    return {
        "retention_score": float(retention_score),
        "forgetting_risk": risk,
        "next_review": next_review
    }