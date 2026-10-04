import { style } from "@vanilla-extract/css";
import {
  BG_DARK,
  ACCENT_CYAN,
  ACCENT_GRAY,
  TEXT_WHITE,
} from "@/constants/colors";

export const btnBase = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  borderRadius: 8,
  padding: "10px 22px",
  fontSize: "14px",
  fontWeight: 600,
  letterSpacing: "0.4px",
  cursor: "pointer",
  border: "none",
  outline: "none",
  fontFamily: "inherit",
  textDecoration: "none",
  transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
  whiteSpace: "nowrap",
  userSelect: "none",
});

export const primaryVariant = style({
  backgroundColor: ACCENT_CYAN,
  color: BG_DARK,
  fontWeight: 700,
  boxShadow: `0 0 14px ${ACCENT_CYAN}55`,
  selectors: {
    "&:hover": {
      backgroundColor: "#33e2f7",
      color: BG_DARK,
      boxShadow: `0 0 24px ${ACCENT_CYAN}99`,
      transform: "translateY(-2px)",
    },
    "&:active": {
      transform: "translateY(0px)",
      boxShadow: `0 0 10px ${ACCENT_CYAN}44`,
    },
  },
});

export const secondaryVariant = style({
  backgroundColor: "transparent",
  color: TEXT_WHITE,
  border: `1px solid ${ACCENT_GRAY}66`,
  selectors: {
    "&:hover": {
      borderColor: ACCENT_CYAN,
      color: ACCENT_CYAN,
      boxShadow: `0 0 14px ${ACCENT_CYAN}33`,
      backgroundColor: `rgba(0, 216, 245)`,
      transform: "translateY(-2px)",
    },
    "&:active": {
      transform: "translateY(0px)",
    },
  },
});

export const fullWidthStyle = style({
  width: "100%",
});

export const iconSlot = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  width: 18,
  height: 18,
  overflow: "hidden",
});
