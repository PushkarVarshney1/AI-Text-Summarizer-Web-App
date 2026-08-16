import React from "react";
import ResultCard from "./ResultCard.jsx";
import CopyButton from "./CopyButton.jsx";
import { panelIcons } from "./Icons.jsx";
import { useIsNarrow } from "../hooks/useIsNarrow.js";

export default function ResultsSection({
  loading,
  hasResult,
  summary,
  bullets,
  copiedField,
  onCopy,
}) {
  const isNarrow = useIsNarrow();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: isNarrow ? "1fr" : "1fr 1fr",
        gap: 18,
        marginTop: 28,
      }}
    >
      <ResultCard
        accent="#38e8e0"
        title="Executive Summary"
        subtitle="Concise paragraph analysis"
        icon={panelIcons.summary}
        empty={!hasResult && !loading}
        loading={loading}
        emptyText="Your paragraph summary will appear here…"
      >
        {hasResult && (
          <>
            <p style={styles.summaryText}>{summary}</p>
            <CopyButton onClick={() => onCopy(summary, "summary")} copied={copiedField === "summary"} />
          </>
        )}
      </ResultCard>

      <ResultCard
        accent="#4f8cff"
        title="Key Takeaways"
        subtitle="3–5 actionable points"
        icon={panelIcons.list}
        empty={!hasResult && !loading}
        loading={loading}
        emptyText="Your bulleted list will appear here…"
      >
        {hasResult && (
          <>
            <ol style={styles.bulletList}>
              {bullets.map((b, i) => (
                <li key={i} style={styles.bulletItem}>
                  {b}
                </li>
              ))}
            </ol>
            <CopyButton
              onClick={() => onCopy(bullets.map((b, i) => `${i + 1}. ${b}`).join("\n"), "bullets")}
              copied={copiedField === "bullets"}
            />
          </>
        )}
      </ResultCard>
    </div>
  );
}

const styles = {
  summaryText: { color: "#dbe4f7", fontSize: 14.5, lineHeight: 1.7, margin: 0, flex: 1 },
  bulletList: { margin: 0, paddingLeft: 20, flex: 1, color: "#dbe4f7", fontSize: 14, lineHeight: 1.6 },
  bulletItem: { marginBottom: 10, paddingLeft: 4 },
};
