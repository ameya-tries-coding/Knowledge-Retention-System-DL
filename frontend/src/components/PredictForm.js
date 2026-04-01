import React, { useState } from "react";
import "./PredictForm.css";

const defaultForm = { time_gap: "", correct: "1", attempts: "" };

export default function PredictForm({ onSubmit, loading }) {
  const [form, setForm] = useState(defaultForm);

  const handle = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form className="predict-form" onSubmit={submit}>
      <h2 className="form-title">Session Parameters</h2>

      <div className="field-group">
        <label htmlFor="time_gap">
          <span className="label-text">Time Gap</span>
          <span className="label-hint">hours since last review</span>
        </label>
        <input
          id="time_gap"
          name="time_gap"
          type="number"
          min="0"
          step="0.1"
          placeholder="e.g. 24"
          value={form.time_gap}
          onChange={handle}
          required
        />
      </div>

      <div className="field-group">
        <label htmlFor="correct">
          <span className="label-text">Last Answer</span>
          <span className="label-hint">was the last response correct?</span>
        </label>
        <select id="correct" name="correct" value={form.correct} onChange={handle}>
          <option value="1">✓ Correct</option>
          <option value="0">✗ Incorrect</option>
        </select>
      </div>

      <div className="field-group">
        <label htmlFor="attempts">
          <span className="label-text">Attempts</span>
          <span className="label-hint">total attempts on this item</span>
        </label>
        <input
          id="attempts"
          name="attempts"
          type="number"
          min="1"
          step="1"
          placeholder="e.g. 3"
          value={form.attempts}
          onChange={handle}
          required
        />
      </div>

      <button className="submit-btn" type="submit" disabled={loading}>
        {loading ? (
          <span className="btn-inner">
            <span className="spinner" /> Analyzing…
          </span>
        ) : (
          <span className="btn-inner">Run Prediction →</span>
        )}
      </button>
    </form>
  );
}
