import React from "react";
import { theme } from "../styles/theme.js";
import { useIsNarrow } from "../hooks/useIsNarrow.js";

function Stat({ label, value, accent }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={styles.label}>{label}</div>
      <div style={{ ...styles.value, color: accent ? theme.color.cyan : theme.color.textHi }}>{value}</div>
    </div>
  );
}

export default function StatsBar({ wordCount, summaryWordCount, reduction }) {
  const isNarrow = useIsNarrow();

  return (
    <div style={{ ...styles.bar, gap: isNarrow ? 20 : 36 }}>
      <Stat label="Original" value={`${wordCount.toLocaleString()} words`} />
      <Stat label="Summary" value={`${summaryWordCount.toLocaleString()} words`} />
      <Stat label="Reduction" value={reduction !== null ? `${reduction}%` : "—"} accent />
    </div>
  );
}

const styles = {
  bar: {
    display: "flex",
    justifyContent: "center",
    marginTop: 26,
    padding: "16px 0",
    borderTop: "1px solid rgba(120,170,255,0.12)",
  },
  label: {
    fontFamily: theme.font.mono,
    fontSize: 10,
    letterSpacing: "0.1em",
    color: theme.color.textLow,
    marginBottom: 4,
  },
  value: { fontFamily: theme.font.display, fontWeight: 700, fontSize: 17 },
};
