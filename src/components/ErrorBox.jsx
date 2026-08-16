import React from "react";

export default function ErrorBox({ message }) {
  if (!message) return null;
  return <div style={styles.box}>{message}</div>;
}

const styles = {
  box: {
    marginTop: 16,
    padding: "12px 16px",
    borderRadius: 12,
    background: "rgba(255,90,90,0.08)",
    border: "1px solid rgba(255,90,90,0.28)",
    color: "#ff9a9a",
    fontSize: 13.5,
  },
};
