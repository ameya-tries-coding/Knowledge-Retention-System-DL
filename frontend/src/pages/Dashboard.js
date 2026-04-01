import React, { useState } from "react";
import PredictForm from "../components/PredictForm";
import ResultCard from "../components/ResultCard";
import { predictRetention } from "../services/api";
import "./Dashboard.css";

export default function Dashboard() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (formData) => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const data = await predictRetention(formData);
      setResult(data);
    } catch (err) {
      setError(
        err?.response?.data?.error ||
          "Could not reach the prediction server. Make sure Flask is running at http://127.0.0.1:5000."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dash-header">
        <div className="header-inner">
          <div className="logo-mark">KR</div>
          <div>
            <h1 className="dash-title">Knowledge Retention</h1>
            <p className="dash-subtitle">Deep Learning · Prediction System</p>
          </div>
          <div className="header-badge">v1.0</div>
        </div>
      </header>

      {/* Main layout */}
      <main className="dash-main">
        {/* Left: form card */}
        <section className="panel panel-form">
          <div className="panel-dot dot-blue" />
          <PredictForm onSubmit={handleSubmit} loading={loading} />
        </section>

        {/* Right: result area */}
        <section className="panel panel-result">
          <div className="panel-dot dot-purple" />
          {error && (
            <div className="error-box">
              <span className="error-icon">⚠</span>
              <p>{error}</p>
            </div>
          )}
          {!result && !error && !loading && (
            <div className="empty-state">
              <div className="empty-icon">◎</div>
              <p className="empty-text">Enter parameters and run a prediction to see results here.</p>
            </div>
          )}
          {loading && (
            <div className="empty-state">
              <div className="pulse-ring" />
              <p className="empty-text">Running inference…</p>
            </div>
          )}
          {result && !loading && <ResultCard result={result} />}
        </section>
      </main>

      {/* Footer */}
      <footer className="dash-footer">
        <span>Powered by Flask · React · Deep Learning</span>
      </footer>
    </div>
  );
}
