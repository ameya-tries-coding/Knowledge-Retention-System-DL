# 📚 Knowledge Retention Prediction System

A Deep Learning-based system that predicts how well a student remembers a concept and recommends the optimal time for revision.

---

## 🚀 Features

* Predict student retention score using neural network
* Classify forgetting risk (Low / Medium / High)
* Suggest next revision time
* Full-stack system (Flask + React)

---

## 🧠 How It Works

The system takes:

* ⏱ Time since last study
* ✅ Previous response accuracy
* 🔁 Number of attempts

It outputs:

* 📊 Retention Score
* ⚠️ Forgetting Risk
* 📅 Recommended Review Time

---

## 🏗️ Project Structure

backend/ → Flask API + Model Integration
frontend/ → React Dashboard UI
ml_model/ → Model Training & Preprocessing
database/ → Schema

---

## ⚙️ Setup Instructions

### 🔹 Backend

cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py

---

### 🔹 Frontend

cd frontend
npm install
npm start

---

## 📊 Example Output

Retention Score: 0.74
Risk: Low
Next Review: 5 days

---

## 🎯 Use Case

This system helps optimize learning by predicting when a student is likely to forget and suggesting timely revision.

---

## 🛠 Tech Stack

* Python (TensorFlow, Pandas)
* Flask (Backend)
* React (Frontend)

---

## 📌 Note

Model file is not included due to size. Run training script to generate it.

---

## 👨‍💻 Author

Ameya
