import { style, keyframes } from "@vanilla-extract/css";
import {
  BG_DARK,
  CARD_BG,
  ACCENT_CYAN,
  ACCENT_GRAY,
  TEXT_WHITE,
} from "@/constants/colors";
import breakpoints from "@/styles/breakpoint";

export const pulseGlow = keyframes({
  "0%": { boxShadow: `0 0 15px ${ACCENT_CYAN}40, 0 0 30px ${ACCENT_CYAN}20` },
  "50%": { boxShadow: `0 0 25px ${ACCENT_CYAN}80, 0 0 50px ${ACCENT_CYAN}40` },
  "100%": { boxShadow: `0 0 15px ${ACCENT_CYAN}40, 0 0 30px ${ACCENT_CYAN}20` },
});

export const homeContainer = style({
  display: "flex",
  justifyContent: "center",
  paddingTop: 130,
  paddingBottom: 80,
});

export const headlineText = style({
  fontSize: "clamp(2.5rem, 5vw, 3.8rem)",
  fontWeight: 800,
  lineHeight: 1.2,
  letterSpacing: "-1px",
  "@media": {
    [breakpoints.screenLg]: {
      lineHeight: 1.1,
    },
  },
});

export const cyanAccent = style({
  color: ACCENT_CYAN,
});

export const whiteText = style({
  color: TEXT_WHITE,
});

export const subText = style({
  color: ACCENT_GRAY,
  fontSize: "18px",
  marginTop: 16,
  maxWidth: 600,
});

export const badgeRow = style({
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
  marginTop: 20,
});

export const heroBadge = style({
  backgroundColor: CARD_BG,
  border: `1px solid ${ACCENT_GRAY}44`,
  borderRadius: 8,
  padding: "6px 14px",
  fontSize: "13px",
  fontWeight: 500,
  color: TEXT_WHITE,
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  transition: "all 0.2s ease",
  selectors: {
    "&:hover": {
      borderColor: ACCENT_CYAN,
      color: ACCENT_CYAN,
      boxShadow: `0 0 10px ${ACCENT_CYAN}33`,
    },
  },
});

export const badgeIcon = style({
  width: 20,
  height: 20,
  objectFit: "contain",
});

export const buttonRow = style({
  display: "flex",
  gap: 16,
  marginTop: 28,
  flexWrap: "wrap",
});

export const btnCyan = style({
  backgroundColor: ACCENT_CYAN,
  color: BG_DARK,
  fontWeight: 700,
  fontSize: "14px",
  letterSpacing: "0.5px",
  borderRadius: 8,
  padding: "12px 24px",
  border: "none",
  cursor: "pointer",
  transition: "all 0.25s ease",
  boxShadow: `0 0 12px ${ACCENT_CYAN}66`,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  selectors: {
    "&:hover": {
      backgroundColor: "#33e2f7",
      boxShadow: `0 0 22px ${ACCENT_CYAN}aa`,
      transform: "translateY(-1px)",
    },
  },
});

export const btnOutline = style({
  backgroundColor: "transparent",
  color: TEXT_WHITE,
  fontWeight: 600,
  fontSize: "14px",
  letterSpacing: "0.5px",
  borderRadius: 8,
  padding: "12px 24px",
  border: `1px solid ${ACCENT_GRAY}`,
  cursor: "pointer",
  transition: "all 0.25s ease",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
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

export const avatarContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
});

export const avatarImage = style({
  width: 280,
  height: 280,
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
