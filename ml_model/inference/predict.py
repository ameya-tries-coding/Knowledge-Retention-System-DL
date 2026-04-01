import numpy as np
from tensorflow.keras.models import load_model

# Load model once
model = load_model("../saved_models/model.h5")


def predict_retention(features):
    """
    features = [time_gap, correct, attempts]
    """

    features = np.array(features)

    # Normalize (same as training)
    features = features / np.array([100.0, 1.0, 10.0])

    features = features.reshape(1, -1)

    prediction = model.predict(features)[0][0]

    return float(prediction)