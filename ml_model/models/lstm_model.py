from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense


def build_model(input_dim):
    model = Sequential()

    model.add(Dense(32, activation='relu', input_shape=(input_dim,)))
    model.add(Dense(16, activation='relu'))
    model.add(Dense(1, activation='sigmoid'))  # retention score

    model.compile(
        optimizer='adam',
        loss='mse',
        metrics=['mae']
    )

    return model