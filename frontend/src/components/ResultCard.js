import React from "react";
import "./ResultCard.css";

const RISK_CONFIG = {
  Low:    { color: "var(--risk-low)",    bg: "var(--risk-low-bg)",    icon: "◉", label: "Low Risk" },
  Medium: { color: "var(--risk-med)",    bg: "var(--risk-med-bg)",    icon: "◈", label: "Moderate Risk" },
  High:   { color: "var(--risk-high)",   bg: "var(--risk-high-bg)",   icon: "◆", label: "High Risk" },
};

function RetentionArc({ score }) {
  const pct = Math.max(0, Math.min(100, score));
  const r = 54;
  const cx = 70;
  const cy = 70;
  const circumference = 2 * Math.PI * r;
  const dashOffset = circumference * (1 - pct / 100);

  return (
    <svg className="arc-svg" viewBox="0 0 140 140" width="140" height="140">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--border)" strokeWidth="10" />
      <circle
        cx={cx} cy={cy} r={r}
        fill="none"
        stroke="url(#arcGrad)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={dashOffset}
        transform="rotate(-90 70 70)"
        style={{ transition: "stroke-dashoffset 1s cubic-bezier(.4,0,.2,1)" }}
      />
      <defs>
        <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--accent-2)" />
          <stop offset="100%" stopColor="var(--accent)" />
        </linearGradient>
      </defs>
      <text x={cx} y={cy - 6} textAnchor="middle" className="arc-pct">
        {pct.toFixed(0)}%
      </text>
      <text x={cx} y={cy + 14} textAnchor="middle" className="arc-label">
        retention
      </text>
    </svg>
  );
}

export default function ResultCard({ result }) {
  const { retention_score, forgetting_risk, next_review } = result;
  const risk = RISK_CONFIG[forgetting_risk] || RISK_CONFIG.Medium;
  const pct = (retention_score * 100).toFixed(1);

  return (
    <div className="result-card">
      <div className="result-header">
        <span className="result-title-label">Prediction Output</span>
      </div>

      {/* Arc gauge */}
      <div className="arc-wrapper">
        <RetentionArc score={parseFloat(pct)} />
      </div>

      {/* Stats row */}
      <div className="stats-row">
        {/* Risk badge */}
        <div
          className="stat-tile risk-tile"
          style={{ background: risk.bg, borderColor: risk.color + "55" }}
        >
          <span className="tile-icon" style={{ color: risk.color }}>{risk.icon}</span>
          <span className="tile-value" style={{ color: risk.color }}>{forgetting_risk}</span>
          <span className="tile-key">Forgetting Risk</span>
        </div>

        {/* Next review */}
        <div className="stat-tile review-tile">
          <span className="tile-icon">⏱</span>
          <span className="tile-value review-val">{next_review}</span>
          <span className="tile-key">Next Review</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="prog-section">
        <div className="prog-meta">
          <span>Memory Strength</span>
          <span>{pct}%</span>
        </div>
        <div className="prog-track">
          <div
            className="prog-fill"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
    </div>
  );
}
