import React from "react";
import { theme } from "../styles/theme.js";

export default function Footer() {
  return <footer style={styles.footer}>Syntex AI · summarize anything, keep what matters</footer>;
}

const styles = {
  footer: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 12,
    color: "#3f4c68",
    fontFamily: theme.font.mono,
    letterSpacing: "0.04em",
  },
};
