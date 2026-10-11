import { style } from "@vanilla-extract/css";
import {
  BG_DARK,
  CARD_BG,
  ACCENT_CYAN,
  ACCENT_GRAY,
  TEXT_WHITE,
} from "@/constants/colors";

export const sectionWrapper = style({
  paddingTop: 60,
  paddingBottom: 80,
});

export const contentContainer = style({
  maxWidth: 1440,
  margin: "0 auto",
  padding: "0 20px",
});

export const certCard = style({
  backgroundColor: CARD_BG,
  border: `1px solid ${ACCENT_GRAY}33`,
  borderRadius: "14px",
  padding: "12px",
  height: 240,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.3s ease",
  selectors: {
    "&:hover": {
      borderColor: `${ACCENT_CYAN}88`,
      boxShadow: `0 8px 30px ${BG_DARK}bb, 0 0 15px ${ACCENT_CYAN}22`,
      transform: "translateY(-2px)",
    },
  },
});

export const certImage = style({
  width: "100%",
  height: 180,
  objectFit: "contain",
  borderRadius: 8,
});

export const certTitleText = style({
  fontSize: "12px",
  fontWeight: 600,
  color: ACCENT_GRAY,
  textAlign: "center",
  marginTop: 8,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  width: "100%",
});

export const buttonFlex = style({
  display: "flex",
  justifyContent: "center",
  marginTop: 20,
});

export const toggleBtn = style({
  backgroundColor: "transparent",
  color: TEXT_WHITE,
  fontWeight: 600,
  fontSize: "14px",
  letterSpacing: "0.5px",
  borderRadius: 8,
  padding: "10px 24px",
  border: `1px solid ${ACCENT_GRAY}`,
  cursor: "pointer",
  transition: "all 0.25s ease",
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
