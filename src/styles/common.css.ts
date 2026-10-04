import { style, keyframes } from "@vanilla-extract/css";
import {
  BG_DARK,
  CARD_BG,
  ACCENT_CYAN,
  ACCENT_GRAY,
  TEXT_WHITE,
} from "../constants/colors";

export const pulseGlow = keyframes({
  "0%": { boxShadow: `0 0 15px ${ACCENT_CYAN}40, 0 0 30px ${ACCENT_CYAN}20` },
  "50%": { boxShadow: `0 0 25px ${ACCENT_CYAN}80, 0 0 50px ${ACCENT_CYAN}40` },
  "100%": { boxShadow: `0 0 15px ${ACCENT_CYAN}40, 0 0 30px ${ACCENT_CYAN}20` },
});

export const glowingAvatar = style({
  width: "280px",
  height: "280px",
  borderRadius: "50%",
  objectFit: "cover",
  border: `3px solid ${ACCENT_CYAN}`,
  boxShadow: `0 0 25px ${ACCENT_CYAN}80, 0 0 50px ${ACCENT_CYAN}30`,
  animation: `${pulseGlow} 4s infinite ease-in-out`,
  transition: "all 0.3s ease",
  selectors: {
    "&:hover": {
      transform: "scale(1.03)",
      boxShadow: `0 0 35px ${ACCENT_CYAN}aa, 0 0 60px ${ACCENT_CYAN}50`,
    },
  },
});

export const darkCard = style({
  backgroundColor: CARD_BG,
  border: `1px solid ${ACCENT_GRAY}33`,
  borderRadius: "14px",
  padding: "24px",
  transition: "all 0.3s ease",
  selectors: {
    "&:hover": {
      borderColor: `${ACCENT_CYAN}88`,
      boxShadow: `0 8px 30px ${BG_DARK}bb, 0 0 15px ${ACCENT_CYAN}22`,
      transform: "translateY(-2px)",
    },
  },
});

export const cyanButton = style({
  backgroundColor: ACCENT_CYAN,
  color: BG_DARK,
  fontWeight: 700,
  fontSize: "14px",
  letterSpacing: "0.5px",
  borderRadius: "8px",
  padding: "10px 24px",
  border: "none",
  cursor: "pointer",
  transition: "all 0.25s ease",
  boxShadow: `0 0 12px ${ACCENT_CYAN}66`,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  textDecoration: "none",
  selectors: {
    "&:hover": {
      backgroundColor: "#33e2f7",
      boxShadow: `0 0 22px ${ACCENT_CYAN}aa`,
      transform: "translateY(-1px)",
      color: BG_DARK,
    },
  },
});

export const outlineButton = style({
  backgroundColor: "transparent",
  color: TEXT_WHITE,
  fontWeight: 600,
  fontSize: "14px",
  letterSpacing: "0.5px",
  borderRadius: "8px",
  padding: "10px 24px",
  border: `1px solid ${ACCENT_GRAY}`,
  cursor: "pointer",
  transition: "all 0.25s ease",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  textDecoration: "none",
  selectors: {
    "&:hover": {
      borderColor: ACCENT_CYAN,
      color: ACCENT_CYAN,
      boxShadow: `0 0 12px ${ACCENT_CYAN}44`,
      backgroundColor: `${ACCENT_CYAN}10`,
      transform: "translateY(-1px)",
    },
  },
});

export const techBadge = style({
  backgroundColor: CARD_BG,
  border: `1px solid ${ACCENT_GRAY}44`,
  borderRadius: "8px",
  padding: "6px 14px",
  fontSize: "13px",
  fontWeight: 500,
  color: TEXT_WHITE,
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  transition: "all 0.2s ease",
  selectors: {
    "&:hover": {
      borderColor: ACCENT_CYAN,
      color: ACCENT_CYAN,
      boxShadow: `0 0 10px ${ACCENT_CYAN}33`,
    },
  },
});

export const deviceMockupLaptop = style({
  backgroundColor: "#09111e",
  borderRadius: "12px",
  border: `1px solid ${ACCENT_GRAY}44`,
  overflow: "hidden",
  width: "100%",
  boxShadow: `0 10px 25px rgba(0,0,0,0.5)`,
});

export const deviceMockupTopBar = style({
  backgroundColor: "#132033",
  padding: "8px 12px",
  display: "flex",
  alignItems: "center",
  gap: "6px",
  borderBottom: `1px solid ${ACCENT_GRAY}22`,
});

export const dotRed = style({
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  backgroundColor: "#ff5f56",
});

export const dotYellow = style({
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  backgroundColor: "#ffbd2e",
});

export const dotGreen = style({
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  backgroundColor: "#27c93f",
});

export const navLink = style({
  color: ACCENT_GRAY,
  fontWeight: 500,
  fontSize: "14px",
  letterSpacing: "0.5px",
  textTransform: "uppercase",
  transition: "all 0.2s ease",
  position: "relative",
  padding: "6px 0",
  textDecoration: "none",
  selectors: {
    "&:hover": {
      color: ACCENT_CYAN,
    },
  },
});

export const sectionTitleAccent = style({
  color: ACCENT_CYAN,
  textTransform: "uppercase",
  letterSpacing: "2px",
  fontSize: "14px",
  fontWeight: 700,
  marginBottom: "8px",
  textAlign: "center",
});
