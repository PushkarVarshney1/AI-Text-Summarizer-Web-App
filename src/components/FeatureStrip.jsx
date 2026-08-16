import React from "react";
import { theme } from "../styles/theme.js";
import { featureIcons } from "./Icons.jsx";
import { useIsNarrow } from "../hooks/useIsNarrow.js";

const FEATURES = [
  { label: "Advanced Language Models", icon: featureIcons.model },
  { label: "Executive Synopsis", icon: featureIcons.doc },
  { label: "Key Points Filter", icon: featureIcons.filter },
];

export default function FeatureStrip() {
  const isNarrow = useIsNarrow();

  return (
    <div
      style={{
        ...styles.row,
        gridTemplateColumns: isNarrow ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
      }}
    >
      {FEATURES.map((f) => (
        <div key={f.label} style={styles.badge} className="feature-hover">
          <div style={styles.iconWrap}>{f.icon}</div>
          <span style={styles.label}>{f.label}</span>
        </div>
      ))}
    </div>
  );
}

const styles = {
  row: {
    display: "grid",
    gap: 12,
    marginBottom: 24,
  },
  badge: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    padding: "16px 10px",
    borderRadius: 14,
    background: "linear-gradient(145deg, rgba(30,41,59,0.45), rgba(15,23,42,0.6))",
    border: "1px solid rgba(120,170,255,0.14)",
    textAlign: "center",
  },
  iconWrap: { color: theme.color.cyan },
  label: {
    fontFamily: theme.font.mono,
    fontSize: 10.5,
    letterSpacing: "0.08em",
    color: theme.color.textMid,
    fontWeight: 500,
  },
};
