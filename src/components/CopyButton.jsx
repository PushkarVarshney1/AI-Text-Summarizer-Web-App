import React from "react";
import { theme } from "../styles/theme.js";

export default function CopyButton({ onClick, copied }) {
  return (
    <button type="button" onClick={onClick} style={styles.btn}>
      {copied ? "Copied ✓" : "Copy"}
    </button>
  );
}

const styles = {
  btn: {
    alignSelf: "flex-end",
    marginTop: 12,
    background: "rgba(120,170,255,0.08)",
    border: "1px solid rgba(120,170,255,0.2)",
    color: theme.color.textMid,
    fontSize: 11.5,
    padding: "5px 12px",
    borderRadius: 999,
    cursor: "pointer",
    fontFamily: theme.font.mono,
  },
};
