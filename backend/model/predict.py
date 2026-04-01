import os
import numpy as np
from tensorflow.keras.models import load_model

# 🔹 Get absolute path to project root
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(__file__)))

# 🔹 Model path
MODEL_PATH = os.path.join(BASE_DIR, "ml_model", "saved_models", "model.h5")

print("📦 Loading model from:", MODEL_PATH)

# 🔹 Load model safely (fix for keras error)
model = load_model(MODEL_PATH, compile=False)


def model_predict(features):
    """
    features: list or numpy array of shape (n_features,)
    """

    features = np.array(features).reshape(1, -1)

    prediction = model.predict(features)[0][0]

    return float(prediction)