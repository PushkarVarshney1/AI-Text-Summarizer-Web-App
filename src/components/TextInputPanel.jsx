import React from "react";
import { theme } from "../styles/theme.js";
import { LightningIcon } from "./Icons.jsx";
import { SAMPLE_TEXT } from "../utils/text.js";

export default function TextInputPanel({ text, setText, wordCount, loading, onSubmit }) {
  const handleKeyDown = (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <>
      <div style={styles.head}>
            <label htmlFor="syntex-input" style={styles.label}>
          Paste your text
        </label>
        <button type="button" onClick={() => setText(SAMPLE_TEXT)} style={styles.sampleBtn}>
          Use sample text
        </button>
      </div>

      <textarea
        id="syntex-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        rows={8}
        placeholder="Paste an article, essay, or long document here…"
        style={styles.textarea}
      />

      <div style={styles.footer}>
        <span>
          {wordCount.toLocaleString()} {wordCount === 1 ? "word" : "words"}
        </span>
        <span>⌘ / Ctrl + Enter to summarize</span>
      </div>

      <button
        type="button"
        onClick={onSubmit}
        disabled={loading}
        className="glow-hover"
        style={{ ...styles.submitBtn, ...(loading ? styles.submitBtnDisabled : {}) }}
      >
        {loading ? (
          <>
            <span style={styles.spinner} />
            Summarizing…
          </>
        ) : (
          <>
            <LightningIcon />
            Summarize &amp; Analyze
          </>
        )}
      </button>
    </>
  );
}

const styles = {
  head: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    flexWrap: "wrap",
    gap: 8,
  },
  label: { fontSize: 15, fontWeight: 600, color: "#c7d2e8" },
  sampleBtn: {
    background: "transparent",
    border: "1px solid rgba(120,170,255,0.25)",
    color: theme.color.textMid,
    fontSize: 12.5,
    padding: "6px 12px",
    borderRadius: 999,
    cursor: "pointer",
    fontFamily: theme.font.body,
  },
  textarea: {
    width: "100%",
    boxSizing: "border-box",
    background: "rgba(6,10,20,0.65)",
    border: "1px solid rgba(120,170,255,0.16)",
    borderRadius: 16,
    padding: "16px 18px",
    color: theme.color.textHi,
    fontSize: 15,
    lineHeight: 1.6,
    resize: "vertical",
    outline: "none",
    fontFamily: theme.font.body,
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 12,
    color: theme.color.textLow,
    margin: "8px 2px 20px",
    fontFamily: theme.font.mono,
  },
  submitBtn: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: "16px",
    borderRadius: 16,
    border: "1px solid rgba(56,232,224,0.4)",
    background: "linear-gradient(90deg, #1aa39c, #3f74d6)",
    color: "#ffffff",
    fontSize: 16,
    fontWeight: 700,
    letterSpacing: "0.01em",
    cursor: "pointer",
    boxShadow: "0 0 24px rgba(56,232,224,0.22)",
    fontFamily: theme.font.display,
  },
  submitBtnDisabled: { opacity: 0.75, cursor: "wait" },
  spinner: {
    width: 16,
    height: 16,
    borderRadius: "50%",
    border: "2px solid rgba(255,255,255,0.35)",
    borderTopColor: "#fff",
    animation: "syntex-spin 0.8s linear infinite",
    display: "inline-block",
  },
};
