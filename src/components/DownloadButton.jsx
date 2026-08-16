import React from "react";
import { theme } from "../styles/theme.js";
import { DownloadIcon } from "./Icons.jsx";

export default function DownloadButton({ onClick }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
      <button type="button" onClick={onClick} style={styles.btn}>
        <DownloadIcon />
        <span>
          <div style={styles.title}>Download Summary</div>
          <div style={styles.sub}>Input + analysis, as .txt</div>
        </span>
      </button>
    </div>
  );
}

const styles = {
  btn: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "14px 26px",
    borderRadius: 14,
    border: "1px solid rgba(56,232,224,0.25)",
    background: "linear-gradient(180deg, rgba(30,41,59,0.7), rgba(15,23,42,0.85))",
    color: theme.color.textHi,
    cursor: "pointer",
  },
  title: { fontFamily: theme.font.display, fontWeight: 700, fontSize: 13.5, textAlign: "left" },
  sub: { fontSize: 11, color: theme.color.textMid, textAlign: "left" },
};
