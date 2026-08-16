import React, { useState, useCallback } from "react";
import "./styles/global.css";

import NetworkCanvas from "./components/NetworkCanvas.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import FeatureStrip from "./components/FeatureStrip.jsx";
import TextInputPanel from "./components/TextInputPanel.jsx";
import ErrorBox from "./components/ErrorBox.jsx";
import ResultsSection from "./components/ResultsSection.jsx";
import StatsBar from "./components/StatsBar.jsx";
import DownloadButton from "./components/DownloadButton.jsx";
import Footer from "./components/Footer.jsx";

import { countWords } from "./utils/text.js";
import { summarizeText } from "./utils/api.js";

export default function App() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [summary, setSummary] = useState("");
  const [bullets, setBullets] = useState([]);
  const [hasResult, setHasResult] = useState(false);
  const [copiedField, setCopiedField] = useState("");

  const wordCount = countWords(text);
  const summaryWordCount = countWords(summary);
  const reduction =
    wordCount > 0 && summaryWordCount > 0
      ? Math.max(0, Math.round((1 - summaryWordCount / wordCount) * 100))
      : null;

  const handleSummarize = useCallback(async () => {
    const trimmed = text.trim();
    setError("");
    if (!trimmed) {
      setError("Paste some text first — there's nothing to summarize yet.");
      return;
    }
    setLoading(true);
    setHasResult(false);
    try {
      const { summary: newSummary, bullets: newBullets } = await summarizeText(trimmed);
      setSummary(newSummary || "No summary was generated.");
      setBullets(newBullets || []);
      setHasResult(true);
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong while summarizing.");
    } finally {
      setLoading(false);
    }
  }, [text]);

  const handleDownload = () => {
    const bulletText = bullets.map((b, i) => `${i + 1}. ${b}`).join("\n");
    const out = `Syntex AI — AI SUMMARY\n${"=".repeat(30)}\n\nEXECUTIVE SUMMARY\n${summary}\n\nKEY TAKEAWAYS\n${bulletText}\n\n${"-".repeat(
      30
    )}\nORIGINAL TEXT\n${"-".repeat(30)}\n${text}\n`;
    const blob = new Blob([out], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "syntexai-summary.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopy = async (value, field) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(""), 1600);
    } catch {
    }
  };

  return (
    <div style={styles.page}>
      <NetworkCanvas />
      <div style={styles.vignette} />
      <div style={styles.content}>
        <Header />
        <Hero />
        <FeatureStrip />
        <main style={styles.card}>
          <TextInputPanel
            text={text}
            setText={setText}
            wordCount={wordCount}
            loading={loading}
            onSubmit={handleSummarize}
          />
          <ErrorBox message={error} />
          <ResultsSection
            loading={loading}
            hasResult={hasResult}
            summary={summary}
            bullets={bullets}
            copiedField={copiedField}
            onCopy={handleCopy}
          />
          {hasResult && (
            <StatsBar wordCount={wordCount} summaryWordCount={summaryWordCount} reduction={reduction} />
          )}
          {hasResult && <DownloadButton onClick={handleDownload} />}
        </main>
        <Footer />
      </div>
    </div>
  );
}

const styles = {
  page: {
    position: "relative",
    minHeight: "100vh",
    width: "100%",
    background: "radial-gradient(ellipse at top, #0b1120 0%, #060a14 60%)",
    color: "#eef3ff",
    fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
    overflowX: "hidden",
  },
  vignette: {
    position: "fixed",
    inset: 0,
    zIndex: 0,
    pointerEvents: "none",
    background: "radial-gradient(ellipse at center, rgba(6,10,20,0) 40%, rgba(6,10,20,0.85) 100%)",
  },
  content: {
    position: "relative",
    zIndex: 1,
    maxWidth: 980,
    margin: "0 auto",
    padding: "28px 20px 64px",
  },
  card: {
    background: "rgba(13,20,36,0.72)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid rgba(120,170,255,0.16)",
    borderRadius: 26,
    padding: "28px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
  },
};
