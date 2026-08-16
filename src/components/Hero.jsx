import React from "react";
import { theme } from "../styles/theme.js";

export default function Hero() {
  return (
    <section style={styles.hero}>
      <h1 style={styles.h1}>
        Turn long text into
        <br />
        <span style={styles.h1Accent}>clarity, instantly.</span>
      </h1>
      <p style={styles.subhead}>
        Paste an article, report, or transcript. Syntex AI returns an executive summary
        and the key takeaways in seconds — nothing else to configure.
      </p>
    </section>
  );
}

const styles = {
  hero: { textAlign: "center", marginBottom: 30 },
  h1: {
    fontFamily: theme.font.display,
    fontWeight: 700,
    fontSize: "clamp(32px, 5vw, 52px)",
    lineHeight: 1.08,
    letterSpacing: "-0.02em",
    margin: "0 0 18px",
    color: theme.color.textHi,
  },
  h1Accent: {
    background: `linear-gradient(90deg, ${theme.color.cyan}, ${theme.color.blue})`,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  },
  subhead: {
    fontSize: 16,
    lineHeight: 1.6,
    color: theme.color.textMid,
    maxWidth: 560,
    margin: "0 auto",
  },
};
