import pandas as pd
import numpy as np


def load_and_process_data(path):
    df = pd.read_csv(path, encoding='latin1')

    # Sort by user and time
    df = df.sort_values(by=["user_id", "ms_first_response"])

    # Compute time gap (difference between attempts per student)
    df["time_gap"] = df.groupby("user_id")["ms_first_response"].diff().fillna(0)

    # Convert ms → seconds
    df["time_gap"] = df["time_gap"] / 1000.0

    # Select features
    df = df[["time_gap", "correct", "attempt_count"]]

    # Create retention proxy (target)
    df["retention"] = df["correct"] * 0.7 + (1 / (1 + df["time_gap"])) * 0.3

    # Split features and target
    X = df[["time_gap", "correct", "attempt_count"]].values
    y = df["retention"].values

    return X, y


def normalize(X):
    # Normalize features
    return X / np.array([100.0, 1.0, 10.0])