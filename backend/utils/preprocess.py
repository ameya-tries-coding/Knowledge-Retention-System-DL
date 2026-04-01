import numpy as np


def preprocess_input(data):
    """
    Input JSON:
    {
        "time_gap": 2,
        "correct": 1,
        "attempts": 3
    }
    """

    time_gap = data.get("time_gap", 0)
    correct = data.get("correct", 0)
    attempts = data.get("attempts", 1)

    features = np.array([time_gap, correct, attempts], dtype=float)

    # Normalize (same as ML model)
    features = features / np.array([100.0, 1.0, 10.0])

    return features.reshape(1, -1)