import React from "react";
import { theme } from "../styles/theme.js";

export default function ResultCard({ accent, title, subtitle, icon, children, empty, loading, emptyText }) {
  return (
    <div style={{ ...styles.card, borderColor: `${accent}33` }}>
      <div style={{ ...styles.stripe, background: accent }} />
      <div style={styles.head}>
        <div style={{ ...styles.iconWrap, background: `${accent}1a`, color: accent }}>{icon}</div>
        <div>
          <div style={styles.title}>{title}</div>
          <div style={{ ...styles.subtitle, color: `${accent}b3` }}>{subtitle}</div>
        </div>
      </div>
      <div style={styles.body}>
        {loading ? (
          <div style={styles.skeletonWrap}>
            <div style={styles.skeletonLine} />
            <div style={{ ...styles.skeletonLine, width: "88%" }} />
            <div style={{ ...styles.skeletonLine, width: "64%" }} />
          </div>
        ) : empty ? (
          <p style={styles.emptyText}>{emptyText}</p>
        ) : (
          children
        )}
      </div>
    </div>
  );
}

const styles = {
  card: {
    position: "relative",
    overflow: "hidden",
    background: "rgba(6,10,20,0.55)",
    border: "1px solid",
    borderRadius: 18,
    padding: "20px 20px 18px",
    minHeight: 180,
    display: "flex",
    flexDirection: "column",
  },
  stripe: { position: "absolute", top: 0, left: 0, width: 3, height: "100%" },
  head: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    paddingBottom: 14,
    marginBottom: 14,
    borderBottom: "1px solid rgba(120,170,255,0.12)",
  },
  iconWrap: {
    width: 34,
    height: 34,
    borderRadius: 10,
    display: "grid",
    placeItems: "center",
    flexShrink: 0,
  },
  title: {
    fontFamily: theme.font.display,
    fontWeight: 700,
    fontSize: 14.5,
    letterSpacing: "0.03em",
    color: theme.color.textHi,
  },
  subtitle: {
    fontFamily: theme.font.mono,
    fontSize: 10,
    letterSpacing: "0.08em",
    marginTop: 3,
  },
  body: { flex: 1, display: "flex", flexDirection: "column" },
  emptyText: { color: theme.color.textLow, fontSize: 14, fontStyle: "italic" },
  skeletonWrap: { display: "flex", flexDirection: "column", gap: 10 },
  skeletonLine: {
    height: 12,
    borderRadius: 6,
    background:
      "linear-gradient(90deg, rgba(120,170,255,0.08), rgba(120,170,255,0.18), rgba(120,170,255,0.08))",
  },
};
