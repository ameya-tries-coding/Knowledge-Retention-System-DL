# 📚 Knowledge Retention Prediction System (Deep Learning)

A full-stack **AI-powered system** that predicts how well a student retains knowledge and recommends the optimal time for revision.

---

## 🚀 Features

* 🧠 Predict **Retention Score** using a neural network
* ⚠️ Classify **Forgetting Risk** (Low / Medium / High)
* 📅 Recommend **Next Review Time**
* ⚡ Real-time predictions via API
* 🎨 Interactive dashboard (React)

---

## 🧠 Problem Statement

Students tend to forget concepts over time, and traditional study methods do not adapt to individual learning behavior.

This project solves that by:

* Modeling student learning patterns
* Predicting retention levels
* Suggesting personalized revision timing

---

## 💡 Solution Overview

The system takes:

* ⏱ Time gap since last study
* ✅ Previous answer correctness
* 🔁 Number of attempts

And outputs:

* 📊 Retention Score (0–1)
* ⚠️ Forgetting Risk
* 📅 Recommended Review Interval

---

## 🏗️ Project Structure

Knowledge-Retention-System/

├── backend/        # Flask API + Model Integration
├── frontend/       # React UI Dashboard
├── ml_model/       # Model Training & Preprocessing
├── database/       # Schema (optional)
└── README.md

---

## ⚙️ Installation & Setup

### 🔹 1. Clone Repository

git clone https://github.com/ameya-tries-coding/Knowledge-Retention-System.git
cd Knowledge-Retention-System

---

### 🔹 2. Backend Setup

cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py

Backend runs at:
http://127.0.0.1:5000

---

### 🔹 3. Frontend Setup

cd frontend
npm install
npm start

Frontend runs at:
http://localhost:3000

---

### 🔹 4. Model (if not included)

cd ml_model
python training/train.py

---

## 📊 Example Output

Retention Score: 0.74
Forgetting Risk: Low
Next Review: 5 days

---

## 🛠️ Tech Stack

### 🔹 Machine Learning

* TensorFlow / Keras
* NumPy, Pandas

### 🔹 Backend

* Flask
* REST API

### 🔹 Frontend

* React.js
* CSS

---

## 📸 UI Preview

(Add your screenshot here)

![Dashboard](images/dashboard.png)

---

## 🎯 Use Cases

* Personalized learning systems
* EdTech platforms
* Smart revision planners
* Student performance analytics

---

## ⚠️ Notes

* Model file (`model.h5`) may not be included due to size
* Run training script to generate model if missing

---

## 👨‍💻 Author

Ameya
https://github.com/ameya-tries-coding

---

## ⭐ Future Improvements

* 📈 Add performance graphs
* 👤 Track user learning history
* 🔔 Smart revision reminders
* 🧠 Use LSTM / time-series models
