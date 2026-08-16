import React from "react";
import { theme } from "../styles/theme.js";
import { BrandMarkIcon } from "./Icons.jsx";

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.brand}>
        <div style={styles.brandMark}>
          <BrandMarkIcon />
        </div>
        <span style={styles.brandName}>Syntex AI</span>
      </div>
      
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 12,
    marginBottom: 40,
  },
  brand: { display: "flex", alignItems: "center", gap: 10 },
  brandMark: {
    width: 32,
    height: 32,
    borderRadius: 9,
    display: "grid",
    placeItems: "center",
    background: "linear-gradient(135deg, rgba(56,232,224,0.25), rgba(79,140,255,0.15))",
    border: "1px solid rgba(56,232,224,0.35)",
  },
  brandName: {
    fontFamily: theme.font.display,
    fontWeight: 700,
    fontSize: 18,
    letterSpacing: "0.14em",
    color: theme.color.textHi,
  },
  headerBadge: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontFamily: theme.font.mono,
    fontSize: 11,
    letterSpacing: "0.06em",
    color: theme.color.textMid,
    padding: "6px 12px",
    borderRadius: 999,
    border: "1px solid rgba(120,170,255,0.18)",
    background: "rgba(13,20,36,0.5)",
  },
  dotLive: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: theme.color.cyan,
    boxShadow: `0 0 8px ${theme.color.cyan}`,
  },
};
