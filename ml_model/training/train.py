import os
import numpy as np
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Input
from tensorflow.keras.optimizers import Adam

from preprocessing.preprocess import load_and_process_data, normalize

# 🔹 Base directory (ml_model folder)
BASE_DIR = os.path.dirname(os.path.dirname(__file__))

# 🔹 Paths
DATA_PATH = os.path.join(BASE_DIR, "data", "your_dataset.csv")
MODEL_SAVE_PATH = os.path.join(BASE_DIR, "saved_models", "model.h5")


def build_model(input_dim):
    model = Sequential([
        Input(shape=(input_dim,)),
        Dense(64, activation="relu"),
        Dense(32, activation="relu"),
        Dense(1, activation="sigmoid")
    ])

    model.compile(
        optimizer=Adam(learning_rate=0.001),
        loss="mse",
        metrics=["mae"]
    )

    return model


def main():
    print("📥 Loading data...")
    X, y = load_and_process_data(DATA_PATH)

    print("🔧 Normalizing...")
    X = normalize(X)

    print("🧠 Building model...")
    model = build_model(X.shape[1])

    print("🚀 Training...")
    model.fit(X, y, epochs=20, batch_size=32, verbose=1)

    print("💾 Saving model...")

    # Ensure folder exists
    os.makedirs(os.path.dirname(MODEL_SAVE_PATH), exist_ok=True)

    model.save(MODEL_SAVE_PATH)

    print(f"✅ Model saved at: {MODEL_SAVE_PATH}")


if __name__ == "__main__":
    main()